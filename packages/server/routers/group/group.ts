import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, router } from "../../trpc";
import { checkIsOwnerOf, getMembership } from "../../utils/permissions";
import { inviteRouter } from "./invite";
import { createGroupSchema, updateGroupSchema } from "shared/schema/group";
import { membersRouter } from "./members";
import { publish } from "../../ably";
import { getLastReads } from "../../redis/last-read";
import { createId } from "@paralleldrive/cuid2";
import { ChannelType, Group, Prisma } from "db";
import { prisma } from "db/client";

export interface GroupWithNotifications extends Group {
    last_message: { content: string } | null;
    channel_id: string;
    member: {
        admin: boolean;
    };
    unread_messages: number;
    last_read?: number;
}

export const groupRouter = router({
    create: protectedProcedure.input(createGroupSchema).mutation<Group>(async ({ ctx, input }) => {
        const group_id = createId();
        const channel_id = createId();

        const groupData: Prisma.GroupCreateInput = {
            id: group_id,
            name: input.name,
            owner: {
                connect: { id: ctx.session.user.id },
            },
            unique_name: group_id,
            channel: {
                create: {
                    id: channel_id,
                    type: ChannelType.GROUP,
                },
            },
            members: {
                create: {
                    user_id: ctx.session.user.id,
                },
            },
        };

        const group = await prisma.$transaction(async (prisma) => {
            const createdGroup = await prisma.group.create({
                data: groupData,
                include: {
                    channel: true,
                    members: true,
                },
            });

            await publish("private", [ctx.session.user.id], {
                type: "group_created",
                data: {
                    ...createdGroup,
                    last_message: null,
                    member: { admin: false },
                    unread_messages: 0,
                },
            });

            return createdGroup;
        });

        return group;
    }),
    all: protectedProcedure.query<GroupWithNotifications[]>(async ({ ctx }) => {
        try {
            return await getGroupsWithNotifications(ctx.session.user.id);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }),
    info: protectedProcedure.input(z.object({ groupId: z.string() })).query(async ({ input, ctx }) => {
        const member = await prisma.member.findFirst({
            where: {
                group_id: input.groupId,
                user_id: ctx.session.user.id,
            },
            include: {
                group: true,
            },
        });

        if (!member) {
            throw new TRPCError({
                code: "NOT_FOUND",
                message: "You aren't the member of this group yet",
            });
        }

        return member.group;
    }),
    join: protectedProcedure.input(z.object({ code: z.string() })).mutation<Group>(async ({ ctx, input }) => {
        const invite = await prisma.groupInvite.findUnique({
            where: { code: input.code },
            include: { group: true },
        });

        if (!invite) {
            throw new TRPCError({
                code: "NOT_FOUND",
                message: "Invite not found",
            });
        }

        await joinMember(invite.group, ctx.session.user.id);

        return invite.group;
    }),
    joinByUniqueName: protectedProcedure
        .input(z.object({ uniqueName: z.string() }))
        .mutation<Group>(async ({ ctx, input }) => {
            const group = await prisma.group.findUnique({
                where: { unique_name: input.uniqueName },
            });

            if (!group) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Group not found",
                });
            }

            if (!group.public) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "The group isn't a public group",
                });
            }

            await joinMember(group, ctx.session.user.id);

            return group;
        }),
    update: protectedProcedure.input(updateGroupSchema).mutation(async ({ ctx, input: { groupId, ...input } }) => {
        const member = await getMembership(groupId, ctx.session.user.id);
        if (!member.admin && !member.owner) {
            throw new TRPCError({
                message: "Admin only",
                code: "UNAUTHORIZED",
            });
        }

        await Promise.all([
            prisma.group.update({
                where: { id: groupId },
                data: input,
            }),
            publish("group", [groupId], {
                type: "group_updated",
                data: {
                    groupId,
                    group: input,
                },
            }),
        ]);
    }),
    delete: protectedProcedure.input(z.object({ groupId: z.string() })).mutation(async ({ ctx, input }) => {
        const res = await checkIsOwnerOf(input.groupId, ctx.session);

        await prisma.$transaction(async (prisma) => {
            await prisma.group.delete({
                where: { id: input.groupId },
            });

            await prisma.message.deleteMany({
                where: { channel_id: res.channel_id },
            });

            await prisma.member.deleteMany({
                where: { group_id: input.groupId },
            });

            await prisma.groupInvite.deleteMany({
                where: { group_id: input.groupId },
            });
        });

        await publish("group", [input.groupId], {
            type: "group_deleted",
            data: {
                id: input.groupId,
            },
        });
    }),
    leave: protectedProcedure.input(z.object({ groupId: z.string() })).mutation(async ({ ctx, input }) => {
        const group = await prisma.group.findUnique({
            where: { id: input.groupId },
            select: { owner_id: true },
        });

        if (!group) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "Group doesn't exist",
            });
        }
        if (group.owner_id === ctx.session.user.id) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "The group owner cannot leave the group, please transfer your permissions before leaving it",
            });
        }

        await prisma.member.delete({
            where: {
                group_id_user_id: {
                    group_id: input.groupId,
                    user_id: ctx.session.user.id,
                },
            },
        });

        await publish("private", [ctx.session.user.id], {
            type: "group_removed",
            data: {
                id: input.groupId,
            },
        });
    }),
    invite: inviteRouter,
    member: membersRouter,
});

async function joinMember(group: Group, userId: string) {
    console.log("🚀 HHHHER", group, userId);
    const result = await prisma.member.upsert({
        where: {
            group_id_user_id: {
                group_id: group.id,
                user_id: userId,
            },
        },
        create: {
            group_id: group.id,
            user_id: userId,
        },
        update: {},
    });

    if (result) {
        await publish("private", [userId], {
            type: "group_created",
            data: {
                ...group,
                last_message: null,
                member: { admin: false },
                unread_messages: 0,
            },
        });
    }
}

async function getGroupsWithNotifications(userId: string): Promise<GroupWithNotifications[]> {
    const result = await prisma.member.findMany({
        where: { user_id: userId },
        include: {
            group: {
                include: {
                    channel: {
                        include: {
                            messages: {
                                orderBy: { timestamp: "desc" },
                                take: 1,
                                select: { content: true },
                            },
                        },
                    },
                },
            },
        },
        orderBy: { group_id: "desc" },
    });

    if (result.length === 0) return [];

    const last_reads = await getLastReads(result.map((row) => [row.group.channel_id, userId]));

    return await prisma.$transaction(async (prisma) => {
        const groups = result.map(async ({ group, admin }, i) => {
            const last_read = last_reads[i];
            const unread_messages = await prisma.message.count({
                where: {
                    channel_id: group.channel_id,
                    timestamp: last_read ? { gt: last_read } : undefined,
                },
            });

            return {
                ...group,
                member: { admin },
                last_message: group.channel.messages[0] || null,
                last_read: last_read?.getTime(),
                unread_messages,
            };
        });

        return await Promise.all(groups);
    });
}

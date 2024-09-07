import { TRPCError } from "@trpc/server";
import ably, { publish } from "../ably";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";
import { contentSchema } from "shared/schema/chat";
import { getLastRead, setLastRead } from "../redis/last-read";
import { generateText } from "../eden";
import { onReceiveMessage } from "../inworld";
import { checkChannelPermissions, getMembership } from "../utils/permissions";
import { ComplexMessage, createMessage, fetchMessages, getEmbeds, messageSchema } from "../utils/messages";
import { schema } from "../ably/schema";
import { PrismaClient, User } from "db";
import { prisma } from "db/client";

const userProfileKeys = ["id", "name", "image"] as const;

export type UserProfile = Pick<User, (typeof userProfileKeys)[number]>;

export const chatRouter = router({
    send: protectedProcedure.input(messageSchema).mutation(async ({ input, ctx }) => {
        const { type, data } = await checkChannelPermissions(input.channelId, ctx.session.user.id);

        const [message, isDMOpened] = await Promise.all([
            createMessage(input, ctx.session.user.id),
            (async () => {
                if (type !== "dm") return false;

                const updatedDM = await prisma.directMessageInfo.updateMany({
                    where: {
                        channel_id: input.channelId,
                        open: false,
                    },
                    data: {
                        open: true,
                    },
                });

                return updatedDM.count !== 0;
            })(),
        ]);

        await Promise.all([
            type === "dm" &&
                isDMOpened &&
                publish("private", [data.to_user_id], {
                    type: "open_dm",
                    data: {
                        id: data.channel_id,
                        user: message.author!,
                        unread_messages: 0,
                        last_message: { content: message.content },
                    },
                }),
            publish("chat", [input.channelId], {
                type: "message_sent",
                data: {
                    ...message,
                    nonce: input.nonce,
                },
            }),

            setLastRead(input.channelId, ctx.session.user.id, message.timestamp),
            input.content.startsWith("@Shark") &&
                onReceiveMessage({
                    content: input.content,
                    channel_id: input.channelId,
                    user_name: message.author!.name,
                }),
        ]);

        return message;
    }),
    messages: protectedProcedure
        .input(
            z.object({
                channelId: z.string(),
                count: z.number().min(0).max(50).default(50),
                after: z.number().optional(),
                before: z.number().optional(),
            })
        )
        .query<any[]>(async ({ input, ctx }) => {
            await checkChannelPermissions(input.channelId, ctx.session.user.id);

            return fetchMessages(
                input.channelId,
                input.count,
                input.after ? new Date(input.after) : undefined,
                input.before ? new Date(input.before) : undefined
            );
        }),
    update: protectedProcedure
        .input(
            z.object({
                messageId: z.number(),
                channelId: z.string(),
                content: contentSchema.min(1),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const embeds = await getEmbeds(input.content);

            const updatedMessage = await prisma.message.updateMany({
                where: {
                    id: input.messageId,
                    author_id: ctx.session.user.id,
                    channel_id: input.channelId,
                },
                data: {
                    content: input.content,
                    embeds: embeds as any, // Prisma might need a more specific type here
                },
            });

            if (updatedMessage.count === 0)
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "No permission or message doesn't exist",
                });

            await publish("chat", [input.channelId], {
                type: "message_updated",
                data: {
                    id: input.messageId,
                    content: input.content,
                    embeds,
                    channel_id: input.channelId,
                },
            });
        }),
    delete: protectedProcedure
        .input(
            z.object({
                messageId: z.number(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const message = await prisma.message.findUnique({
                where: { id: input.messageId },
                include: {
                    channel: {
                        include: {
                            group: true,
                        },
                    },
                },
            });

            if (!message)
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Message not found",
                });

            const member = message.channel.group
                ? await getMembership(message.channel.group.id, ctx.session.user.id)
                : undefined;

            if (message.author_id !== ctx.session.user.id && (!member || (!member.admin && !member.owner))) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Missing required permission",
                });
            }

            await prisma.message.delete({ where: { id: input.messageId } });
            await publish("chat", [message.channel_id], {
                type: "message_deleted",
                data: {
                    id: input.messageId,
                    channel_id: message.channel_id,
                },
            });
        }),
    read: protectedProcedure.input(z.object({ channelId: z.string() })).mutation(async ({ ctx, input }) => {
        await setLastRead(input.channelId, ctx.session.user.id, new Date(Date.now()));
    }),
    checkout: protectedProcedure
        .input(
            z.object({
                channelId: z.string(),
            })
        )
        .query(async ({ ctx, input }) => {
            const old = await getLastRead(input.channelId, ctx.session.user.id);

            await setLastRead(input.channelId, ctx.session.user.id, new Date(Date.now()));

            return { last_read: old };
        }),
    type: protectedProcedure
        .input(
            z.object({
                channelId: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const user = await prisma.user.findUnique({
                where: { id: ctx.session.user.id },
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            });

            if (!user)
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "User not found",
                });

            await publish("chat", [input.channelId], {
                type: "typing",
                data: { user, channelId: input.channelId },
            });
        }),
    generateText: protectedProcedure.input(z.object({ text: z.string().trim().min(0) })).mutation(async ({ input }) => {
        return {
            text: await generateText(input.text),
        };
    }),
    status: protectedProcedure
        .input(
            z.object({
                userId: z.string(),
            })
        )
        .query<"online" | "offline">(async ({ input }) => {
            const info = await ably.channels.get(schema.private.name(input.userId)).presence.get({
                limit: 1,
                clientId: input.userId,
            });
            const item = info.items[0];

            if (item && ["present", "enter"].includes(item.action)) return "online";

            return "offline";
        }),
});

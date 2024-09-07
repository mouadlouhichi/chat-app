import { protectedProcedure, router } from "../../trpc";
import { publish } from "../../ably";
import {
  checkIsMemberOf,
  checkIsOwnerOf,
  getMembership,
} from "../../utils/permissions";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "db/client";


export type UserProfile = {
  name: string | null;
  id: string;
  image: string | null;
};

export type MemberWithUser = {
  group_id: string;
  user_id: string;
  admin: boolean;
  user: UserProfile;
};

export const membersRouter = router({
  get: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
      }),
    )
    .query<MemberWithUser[]>(async ({ ctx, input }) => {
      await checkIsMemberOf(input.groupId, ctx.session);

      return prisma.member.findMany({
        where: {
          group_id: input.groupId,
        },
        include: {
          user: {
            select: {
              name: true,
              id: true,
              image: true,
            },
          },
        },
      });
    }),
  kick: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const member = await getMembership(input.groupId, ctx.session.user.id);
      if (!member.admin && !member.owner)
        throw new TRPCError({
          message: "Admin only",
          code: "UNAUTHORIZED",
        });

      const target = await getMembership(input.groupId, input.userId);

      const allowed =
        // Owner
        (member.owner && ctx.session.user.id !== input.userId) ||
        // Admin
        (member.admin && !target.owner && !target.admin);

      if (!allowed)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You can't kick the owner or admin of group",
        });

      await prisma.member.delete({
        where: {
          group_id_user_id: {
            group_id: input.groupId,
            user_id: input.userId,
          },
        },
      });

      await publish("private", [input.userId], {
        type: "group_removed",
        data: {
          id: input.groupId,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
        userId: z.string(),
        admin: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await checkIsOwnerOf(input.groupId, ctx.session);

      if (input.admin === undefined) return;

      await prisma.member.update({
        where: {
          group_id_user_id: {
            group_id: input.groupId,
            user_id: input.userId,
          },
        },
        data: {
          admin: input.admin,
        },
      });
    }),
});
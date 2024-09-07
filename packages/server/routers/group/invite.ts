import { protectedProcedure, router } from "../../trpc";
import { z } from "zod";
import { getMembership } from "../../utils/permissions";
import { v4 as uuid } from "uuid";
import { TRPCError } from "@trpc/server";
import { prisma } from "db/client";


export const inviteRouter = router({
  get: protectedProcedure
    .input(
      z.object({
        groupId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const member = await getMembership(input.groupId, ctx.session.user.id);
      if (!member.owner && !member.admin)
        throw new TRPCError({
          message: "Admin only",
          code: "UNAUTHORIZED",
        });

      return prisma.groupInvite.findMany({
        where: {
          group_id: input.groupId,
        },
      });
    }),
  create: protectedProcedure
    .input(z.object({ groupId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const member = await getMembership(input.groupId, ctx.session.user.id);
      if (!member.owner && !member.admin)
        throw new TRPCError({
          message: "Admin only",
          code: "UNAUTHORIZED",
        });

      const code = uuid();
      return prisma.groupInvite.create({
        data: {
          group_id: input.groupId,
          code,
        },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ groupId: z.string(), code: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const member = await getMembership(input.groupId, ctx.session.user.id);
      if (!member.owner && !member.admin)
        throw new TRPCError({
          message: "Admin only",
          code: "UNAUTHORIZED",
        });

      await prisma.groupInvite.deleteMany({
        where: {
          AND: [
            { code: input.code },
            { group_id: input.groupId },
          ],
        },
      });
    }),
});
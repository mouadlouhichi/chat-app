import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";
import { PrismaClient } from 'db';
import { pick } from "shared/common";
import { authAdapter } from "../auth/nextauth-adapter";
import { updateProfileSchema } from "shared/schema/user";
import { prisma } from "db/client";


export const accountRouter = router({
  get: protectedProcedure.query(async ({ ctx }) => {
    const profile = await prisma.user.findUnique({
      where: { id: ctx.session.user.id },
    });

    if (profile == null) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User not found",
      });
    }

    return profile;
  }),

  profile: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const res = await prisma.user.findUnique({
        where: { id: input.userId },
        select: {
          name: true,
          image: true,
          id: true,
          banner_hash: true,
        },
      });

      if (res == null)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User doesn't exist",
        });

      return res;
    }),

  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;

      try {
        const updated = await prisma.user.update({
          where: { id: userId },
          data: {
            name: input.name,
            image: input.avatar_url,
            banner_hash: input.banner_hash,
          },
        });

        return updated;
      } catch (error) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Failed to update user profile",
        });
      }
    }),

  delete: protectedProcedure.mutation(async ({ ctx }) => {
    await authAdapter.deleteUser!(ctx.session.user.id);
  }),
});
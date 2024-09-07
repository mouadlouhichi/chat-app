import { protectedProcedure, router } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { sign } from "./upload";
import { emotes } from "shared/media/format";
import { pick } from "next/dist/lib/pick";
import { prisma } from "db/client";


export const emotesRouter = router({
  get: protectedProcedure
    .input(
      z.strictObject({
        cursor: z.number().optional(),
        limit: z.number().max(50).default(50),
      }),
    )
    .query(async ({ input }) => {
      const emotes = await prisma.emote.findMany({
        orderBy: {
          timestamp: "desc",
        },
        skip: input.cursor ?? 0,
        take: input.limit,
        include: {
          creator: {
            select: {
              id: true,
              image: true,
              name: true,
            },
          },
        },
      });

      return emotes.map((item) => ({
        ...item,
        creator: pick(item.creator, ["id", "image", "name"]),
      }));
    }),

  delete: protectedProcedure
    .input(
      z.strictObject({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const result = await prisma.emote.deleteMany({
        where: {
          id: input.id,
          creatorId: ctx.session.user.id,
        },
      });

      if (result.count === 0) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You cannot delete this emote",
        });
      }
    }),

  create: protectedProcedure
    .input(
      z.strictObject({
        id: z.string().regex(/^\w+$/),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await prisma.emote.create({
          data: {
            id: input.id,
            name: input.name,
            creatorId: ctx.session.user.id,
          },
        });

        return sign({
          public_id: emotes.id(input.id),
          transformation: "w_50,h_50",
        });
      } catch (e) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Duplicated Id",
        });
      }
    }),

  search: protectedProcedure
    .input(
      z.strictObject({
        text: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.emote.findMany({
        where: {
          id: {
            startsWith: input.text,
          },
        },
        select: {
          id: true,
          name: true,
          hash: true,
        },
      });
    }),
});

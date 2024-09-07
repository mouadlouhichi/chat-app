import { protectedProcedure, router } from "../trpc";
import { getLastReads } from "../redis/last-read";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createId } from "@paralleldrive/cuid2";
import { publish } from "../ably";
import { UserProfile } from "./chat";
import { prisma } from "db/client";


export interface DMChannel {
  id: string;
  user: UserProfile;
  last_message: { content: string } | null;
  last_read?: number;
  unread_messages: number;
}

export const dmRouter = router({
  info: protectedProcedure
    .input(z.object({ channelId: z.string() }))
    .query(async ({ input, ctx }) => {
      const res = await prisma.directMessageInfo.findFirst({
        where: {
          channel_id: input.channelId,
          user_id: ctx.session.user.id,
          open: true,
        },
        select: {
          channel_id: true,
          to_user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      });

      if (!res) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Channel not found",
        });
      }
      return { id: res.channel_id, user: res.to_user };
    }),
  channels: protectedProcedure.query<DMChannel[]>(async ({ ctx }) => {
    const channels = await prisma.directMessageInfo.findMany({
      where: {
        user_id: ctx.session.user.id,
        open: true,
      },
      select: {
        channel_id: true,
        to_user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        channel: {
          select: {
            messages: {
              orderBy: {
                timestamp: 'desc',
              },
              take: 1,
              select: {
                content: true,
              },
            },
          },
        },
      },
    });

    if (channels.length === 0) return [];
    const lastReads = await getLastReads(
      channels.map((c) => [c.channel_id, ctx.session.user.id]),
    );

    const result = channels.map(async (channel, i) => {
      const last_read = lastReads[i];

      const unread_messages = await prisma.message.count({
        where: {
          channel_id: channel.channel_id,
          timestamp: last_read ? { gt: last_read } : undefined,
        },
      });

      return {
        id: channel.channel_id,
        user: channel.to_user,
        last_message: channel.channel.messages[0] || null,
        last_read: last_read?.getTime(),
        unread_messages,
      };
    });

    return Promise.all(result);
  }),
  open: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const updated = await prisma.directMessageInfo.updateMany({
        where: {
          user_id: ctx.session.user.id,
          to_user_id: input.userId,
        },
        data: { open: true },
      });

      let channelId: string;
      if (updated.count === 0) {
        const id = createId();
        channelId = id;

        await prisma.$transaction([
          prisma.messageChannel.create({
            data: {
              id,
              type: "DM",
            },
          }),
          prisma.directMessageInfo.createMany({
            data: [
              {
                channel_id: id,
                user_id: ctx.session.user.id,
                to_user_id: input.userId,
              },
              {
                channel_id: id,
                user_id: input.userId,
                to_user_id: ctx.session.user.id,
              },
            ],
            skipDuplicates: true,
          }),
        ]);
      } else {
        const existingChannel = await prisma.directMessageInfo.findFirst({
          where: {
            user_id: ctx.session.user.id,
            to_user_id: input.userId,
          },
          select: { channel_id: true },
        });
        channelId = existingChannel!.channel_id;
      }

      const user = await prisma.user.findUnique({
        where: { id: input.userId },
        select: { id: true, name: true, image: true },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      const channel: DMChannel = {
        id: channelId,
        user,
        last_message: null,
        unread_messages: 0,
      };

      await publish("private", [ctx.session.user.id], {
        type: "open_dm",
        data: channel,
      });

      return channel;
    }),
  close: protectedProcedure
    .input(z.object({ channelId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await prisma.directMessageInfo.updateMany({
        where: {
          user_id: ctx.session.user.id,
          channel_id: input.channelId,
        },
        data: { open: false },
      });

      await publish("private", [ctx.session.user.id], {
        type: "close_dm",
        data: {
          channel_id: input.channelId,
        },
      });
    }),
});
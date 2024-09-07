import { TRPCError } from "@trpc/server";
import { Group } from "db";
import { prisma } from "db/client";
import { Session } from "next-auth";


type Result =
  | {
      type: "dm";
      data: {
        channel_id: string;
        user_id: string;
        to_user_id: string;
        open: boolean;
      };
    }
  | {
      type: "group";
      data: {
        group_id: string;
        user_id: string;
        admin: boolean;
      };
    };

export async function checkChannelPermissions(
  channelId: string,
  userId: string,
): Promise<Result> {
  const channel = await prisma.messageChannel.findUnique({
    where: { id: channelId },
    include: {
      group: {
        include: {
          members: {
            where: { user_id: userId },
          },
        },
      },
      directMessages: {
        where: { user_id: userId },
      },
    },
  });

  if (!channel) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }

  if (channel.group && channel.group.members.length > 0) {
    return { type: "group", data: channel.group.members[0] };
  }

  if (channel.directMessages.length > 0) {
    return { type: "dm", data: channel.directMessages[0] };
  }

  throw new TRPCError({ code: "NOT_FOUND" });
}

export async function getMembership(
  groupId: string,
  userId: string,
): Promise<{ group_id: string; user_id: string; admin: boolean; owner: boolean; ownerId: string }> {
  const result = await prisma.member.findUnique({
    where: {
      group_id_user_id: {
        group_id: groupId,
        user_id: userId,
      },
    },
    include: {
      group: true,
    },
  });

  if (!result) {
    throw new TRPCError({
      message: "Not a member of group",
      code: "UNAUTHORIZED",
    });
  }

  return {
    ...result,
    owner: result.group.owner_id === userId,
    ownerId: result.group.owner_id,
  };
}

export async function checkIsMemberOf(groupId: string, user: Session) {
  const member = await prisma.member.findUnique({
    where: {
      group_id_user_id: {
        group_id: groupId,
        user_id: user.user.id,
      },
    },
  });

  if (!member) {
    throw new TRPCError({
      message: "You must join the group in order to receive messages",
      code: "BAD_REQUEST",
    });
  }
}

export async function checkIsOwnerOf(groupId: string, user: Session) : Promise<Group> {
  const group = await prisma.group.findFirst({
    where: {
      AND: [
        { owner_id: user.user.id },
        { id: groupId },
      ],
    },
  });

  if (!group) {
    throw new TRPCError({
      message: "You must be the owner of the group to do this action",
      code: "BAD_REQUEST",
    });
  }

  return group;
}
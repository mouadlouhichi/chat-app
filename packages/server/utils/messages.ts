import { AttachmentType, contentSchema, uploadAttachmentSchema, UserInfo } from "shared/schema/chat";
import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";
import { pick } from "shared/common";
import { requireOne } from "db/utils";
import { info } from "./og-meta";
import { Message, Prisma } from "db";
import { prisma } from "db/client";
import { Embed } from "shared/types";

const userProfileKeys = ["id", "name", "image"] as const;

export interface ComplexMessage
    extends Pick<Message, "id" | "content"  | "channel_id" | "timestamp" | "reply_id"> {
    author: UserInfo | null;
    embeds?: any;
    attachment: AttachmentType | null;
    reply_user: UserInfo | null;
    reply_message: {
        content: string;
    } | null;
}

export async function fetchMessages(channel: string, count: number, after?: Date, before?: Date) {
    console.log(channel, count, after, before, "HEREE 🎉 ");

    const messages = await prisma.message.findMany({
        where: {
            channel_id: channel,
            timestamp: {
                gt: after,
                lt: before,
            },
        },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            },
            attachment: true,
            reply_to: {
                select: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            timestamp: "desc",
        },
        take: count,
    });

    return messages.reverse().map((message) => ({
        ...message,
        author: message.author ? pick(message.author, ...(userProfileKeys as any)) : null,
        reply_user: message.reply_to?.author ? pick(message.reply_to.author, ...(userProfileKeys as any)) : null,
    }));
}

export const messageSchema = z
    .object({
        channelId: z.string(),
        content: contentSchema,
        attachment: uploadAttachmentSchema.optional(),
        reply: z.number().optional(),
        nonce: z.number().optional(),
    })
    .refine(({ content, attachment }) => content.length !== 0 || attachment != null, "Message is empty");

export async function createMessage(input: z.infer<typeof messageSchema>, author_id: string): Promise<ComplexMessage> {
    const embeds = await getEmbeds(input.content);

    let attachmentData: Prisma.AttachmentCreateNestedOneWithoutMessagesInput | undefined;
    if (input.attachment) {
        attachmentData = {
            create: {
                id: createId(),
                type: input.attachment.type,
                url: input.attachment.url,
                name: input.attachment.name,
                width: input.attachment.type === "raw" ? null : input.attachment.width,
                height: input.attachment.type === "raw" ? null : input.attachment.height,
                bytes: input.attachment.bytes,
            },
        };
    }

    const messageData: Prisma.MessageCreateInput = {
        author: { connect: { id: author_id } },
        content: input.content,
        channel: { connect: { id: input.channelId } },
        attachment: attachmentData,
        reply_to: input.reply ? { connect: { id: input.reply } } : undefined,
        embeds: embeds.length > 0 ? embeds : undefined,
    };

    const createdMessage = await prisma.message.create({
        data: messageData,
        include: {
            attachment: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            },
            reply_to: {
                select: {
                    content: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        },
                    },
                },
            },
        },
    });

    await prisma.messageChannel.update({
        where: { id: input.channelId },
        data: { last_message_id: createdMessage.id },
    });

    return {
        id: createdMessage.id,
        content: createdMessage.content,
        embeds: createdMessage.embeds as Embed[] | null,
        channel_id: createdMessage.channel_id,
        timestamp: createdMessage.timestamp,
        author: createdMessage.author as UserInfo | null,
        reply_id: createdMessage.reply_id,
        reply_message: createdMessage.reply_to ? { content: createdMessage.reply_to.content } : null,
        reply_user: createdMessage.reply_to?.author as UserInfo | null,
        attachment: createdMessage.attachment,
    };
}

export async function getEmbeds(content: string): Promise<any[]> {
    const embeds: Embed[] = [];
    const url_regex = /(https?:\/\/\S+)/g;
    const url_result = content.match(url_regex);

    if (url_result != null) {
        await Promise.all(
            Array.from(new Set(url_result))
                .slice(0, 3)
                .map((url) =>
                    info(url)
                        .then((res) => {
                            if (res != null) embeds.push(res);
                        })
                        .catch(() => {})
                )
        );
    }

    return embeds;
}

import { MessageType } from "@/utils/types";
import { trpc } from "@/utils/trpc";
import { useSession } from "@/utils/auth";

import * as Item from "./atom";
import * as ContextMenu from "ui/components/context-menu";
import { AttachmentItem } from "../AttachmentItem";
import { useMessageStore } from "@/utils/stores/chat";
import { CopyIcon, EditIcon, ReplyIcon, TrashIcon } from "lucide-react";
import Edit from "./edit";
import { Reference } from "./reference";
import { Embed } from "./embed";
import { DropdownMenuContent, DropdownMenuItem } from "ui/components/dropdown";
import { cn } from "ui/utils/cn";
import { useViewContext } from "@/components/chat/ChatView";
import { Key } from "react";
import type { Embed as EM } from "shared/types";

export function ChatMessageItem({
    chainStart,
    chainEnd,
    message,
}: {
    message: MessageType;
    chainStart: boolean;
    chainEnd: boolean;
}) {
    const [editing, reply] = useMessageStore((s) => [
        s.editing[message.channel_id]?.messageId === message.id,
        s.reply.get(message.channel_id)?.id === message.id,
    ]);
    const embedOnly =
        message.embeds != null &&
        message.embeds.length === 1 &&
        !message.embeds[0].title &&
        !message.embeds[0].description &&
        message.embeds[0].url === message.content;

    return (
        <Item.Root>
            <ContextMenu.Trigger disabled={editing} asChild>
                <Item.Content
                    id={`message_${message.id}`}
                    user={message.author}
                    timestamp={message.timestamp}
                    chainStart={chainStart}
                    chainEnd={chainEnd}
                    className={cn(editing && "hover:bg-transparent", reply && "!bg-brand/10")}
                >
                    {editing ? (
                        <Edit message={message} />
                    ) : (
                        <>
                            {message.reply_id != null && (
                                <Reference
                                    id={message.reply_id}
                                    user={message.reply_user}
                                    content={message.reply_message?.content}
                                />
                            )}
                            {!embedOnly && <Item.Text>{message.content}</Item.Text>}
                            {message.attachment != null && <AttachmentItem attachment={message.attachment} />}
                            {message.embeds?.map((v: EM, i: Key | null | undefined) => <Embed key={i} embed={v} />)}
                            <Item.Menu />
                            <Menu message={message} />
                        </>
                    )}
                </Item.Content>
            </ContextMenu.Trigger>
        </Item.Root>
    );
}
interface Item {
    id: string;
    icon: React.ReactNode;
    onSelect: () => void;
    color?: "danger";
    text: string;
}

function Menu({ message }: { message: MessageType }) {
    const { data: session } = useSession();
    const deleteMutation = trpc.chat.delete.useMutation();
    const ctx = useViewContext();

    const isAuthor = session && message.author?.id === session.user.id;

    const onClose = (e: Event) => {
        if (useMessageStore.getState().editing[message.channel_id]?.messageId !== message.id) {
            document.getElementById("text")?.focus();
            e.preventDefault();
        }
    };

    const items: Item[] = [
        {
            id: "reply",
            icon: <ReplyIcon className="size-4" />,
            onSelect: () => useMessageStore.getState().updateReply(message.channel_id, message),
            text: "Reply",
        },
        {
            id: "copy",
            icon: <CopyIcon className="size-4" />,
            onSelect: () => navigator.clipboard.writeText(message.content),
            text: "Copy",
        },
    ];

    if (isAuthor) {
        items.push({
            id: "edit",
            icon: <EditIcon className="size-4" />,
            onSelect: () => useMessageStore.getState().setEditing(message.channel_id, message.id),
            text: "Edit",
        });
    }
    if (ctx.deleteMessage || isAuthor) {
        items.push({
            id: "delete",
            color: "danger",
            icon: <TrashIcon className="size-4" />,
            onSelect: () => {
                deleteMutation.mutate({
                    messageId: message.id,
                });
            },
            text: "Delete",
        });
    }

    return (
        <>
            <DropdownMenuContent onCloseAutoFocus={onClose}>
                {items.map(({ id, ...item }) => (
                    <DropdownMenuItem key={id} {...item}>
                        {item.icon}
                        {item.text}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
            <ContextMenu.Content onCloseAutoFocus={onClose}>
                {items.map(({ id, ...item }) => (
                    <ContextMenu.Item key={id} {...item}>
                        {item.text}
                    </ContextMenu.Item>
                ))}
            </ContextMenu.Content>
        </>
    );
}

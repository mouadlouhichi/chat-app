import { Avatar } from "ui/components/avatar";
import { Group } from "db";

import { groupIcon } from "shared/media/format";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { BannerImage, InviteButton, LoginButton } from "./page.client";
import { prisma } from "db/client";

type Data = {
    group: Group;
    type: "code" | "name";
    query: string;
};


export default async function InvitePage({ params }: { params: { invite: string } }) {
    const info = await getGroupInfo(params.invite);

    if (info == null) {
        notFound();
    }

    const session = await getServerSession();
    const { group, query, type } = info;

    return (
        <main className="relative flex flex-col items-center justify-center bg-gradient-to-b from-light-50 to-light-400 dark:from-dark-600 dark:to-dark-950 min-h-screen p-4">
            <BannerImage group={group} />
            <div className="flex flex-col gap-4 items-center text-center p-6 w-full max-w-sm border rounded-xl bg-card shadow-lg shadow-black/40 z-[2]">
                <Avatar src={groupIcon.url([group.id], group.icon_hash)} size="medium" fallback={group.name} />
                <div className="text-center">
                    <h2 className="text-sm text-muted-foreground">
                        You are invited to{" "}
                        <span className="text-brand-500 dark:text-brand-300">@{group.unique_name}</span>
                    </h2>
                    <h1 className="text-foreground text-xl font-bold">{group.name}</h1>
                </div>
                {session == null ? <LoginButton /> : <InviteButton type={type} query={query} />}
            </div>
        </main>
    );
}

export async function generateMetadata({ params }: { params: { invite: string } }): Promise<Metadata | undefined> {
    const info = await getGroupInfo(params.invite);

    if (info != null) {
        const title = `Invite to ${info.group.name}`;
        const description = `Join ${info.group.name} (@${info.group.unique_name}) on Shark Chat`;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
            },
            twitter: {
                title,
                description,
            },
        };
    }
}


async function getGroupInfo(query: string): Promise<Data | null> {
    const code = decodeURIComponent(query);

    if (code.startsWith("@")) {
        const name = code.slice(1);
        const group = await prisma.group.findUnique({
            where: {
                unique_name: name,
            },
        });

        if (group != null && group.public) {
            return {
                group,
                query: name,
                type: "name",
            };
        }
    } else {
        const invite = await prisma.groupInvite.findUnique({
            where: {
                code: code,
            },
            include: {
                group: true,
            },
        });

        if (invite != null) {
            return {
                group: invite.group,
                query: code,
                type: "code",
            };
        }
    }

    return null;
}

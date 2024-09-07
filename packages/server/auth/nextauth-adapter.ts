import { Adapter, AdapterAccount, AdapterUser, AdapterSession, VerificationToken } from "next-auth/adapters";
import { createId } from "@paralleldrive/cuid2";
import redis from "../redis/client";
import { Serialize } from "shared/types";
import { prisma } from "db/client";


const options = {
  verificationTokenKeyPrefix: "user:token:",
};

export const authAdapter: Adapter = {
  async createUser(user) {
    console.log(" ✨ HOOOL");
    
    const id = createId();
    return await prisma.user.create({
      data: {
        id,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        name: user.name ?? undefined,
      },
    }) as AdapterUser;
  },

  async getUser(id) {
    return await prisma.user.findUnique({ where: { id } }) as AdapterUser | null;
  },

  async getUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } }) as AdapterUser | null;
  },

  async getUserByAccount({ providerAccountId, provider }) {
    console.log('🔥 @@@@@@@@@@@')
    const account = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
      include: { user: true },
    });
    return account?.user as AdapterUser | null;
  },

  async updateUser(user) {
    if (!user.id) throw new Error("User id is required");
    return await prisma.user.update({
      where: { id: user.id },
      data: {
        name: user.name ?? "",
        email: user.email,
        image: user.image,
        emailVerified: user.emailVerified,
      },
    }) as AdapterUser;
  },

  async deleteUser(userId) {
    await prisma.$transaction([
      prisma.account.deleteMany({ where: { userId } }),
      prisma.session.deleteMany({ where: { userId } }),
      prisma.user.delete({ where: { id: userId } }),
    ]);
  },

  async linkAccount(account) {
    const id = createId();
    await prisma.account.create({
      data: {
        id,
        userId: account.userId,
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
        session_state: account.session_state,
      },
    });
  },

  async unlinkAccount({ providerAccountId, provider }) {
    await prisma.account.delete({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
    });
  },

  async createSession(session) {
    const id = createId();
    return await prisma.session.create({
      data: {
        id,
        userId: session.userId,
        expires: session.expires,
        sessionToken: session.sessionToken,
      },
    }) as AdapterSession;
  },

  async getSessionAndUser(sessionToken) {
    const userAndSession = await prisma.session.findUnique({
      where: { sessionToken },
      include: { user: true },
    });
    if (!userAndSession) return null;
    const { user, ...session } = userAndSession;
    return {
      user: user as AdapterUser,
      session: session as AdapterSession,
    };
  },

  async updateSession({ sessionToken, ...data }) {
    return await prisma.session.update({
      where: { sessionToken },
      data,
    }) as AdapterSession;
  },

  async deleteSession(sessionToken) {
    await prisma.session.delete({ where: { sessionToken } });
  },

  async createVerificationToken(verificationToken) {
    await redis.set(
      options.verificationTokenKeyPrefix +
        verificationToken.identifier +
        ":" +
        verificationToken.token,
      verificationToken,
    );
    return verificationToken;
  },

  async useVerificationToken(verificationToken) {
    const tokenKey =
      options.verificationTokenKeyPrefix +
      verificationToken.identifier +
      ":" +
      verificationToken.token;

    const token = await redis.get<Serialize<VerificationToken>>(tokenKey);
    if (!token) return null;

    await redis.del(tokenKey);
    return {
      ...token,
      expires: new Date(token.expires),
    };
  },
};
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import type { SendVerificationRequestParams } from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { createTransport } from "nodemailer";
import type { TransportOptions } from "nodemailer";
import { prisma } from "@/lib/prisma";
import { brand } from "@/lib/brand";
import { logAuditEvent } from "@/lib/audit";
import { getDomainFromEmail, getOrCreateOrg } from "@/lib/org";
import { getDevLoginEmails } from "@/lib/auth-helpers";

const devLoginEmails = getDevLoginEmails();

if (process.env.NODE_ENV === "development") {
  if (!process.env.NEXTAUTH_URL) {
    process.env.NEXTAUTH_URL = "http://localhost:3000";
  }
  if (!process.env.NEXTAUTH_SECRET) {
    process.env.NEXTAUTH_SECRET = "dev-secret-change-me";
  }
}

async function sendMagicLink(params: SendVerificationRequestParams) {
  const { identifier, url, provider } = params;

  if (!provider.server) {
    if (process.env.NODE_ENV === "development") {
      console.info("DevMagicLink", { email: identifier, url });
      return;
    }
    throw new Error("EMAIL_SERVER is not configured.");
  }

  const transport = createTransport(provider.server as TransportOptions | string);
  const fromAddress = provider.from ?? brand.email;

  await transport.sendMail({
    to: identifier,
    from: fromAddress,
    subject: `Sign in to ${brand.wordmark}`,
    text: `Use this link to sign in: ${url}`,
    html: `<p>Use this link to sign in:</p><p><a href="${url}">${url}</a></p>`,
  });
}

const adapter = PrismaAdapter(prisma);
adapter.createUser = async (data) => {
  const email = data.email.toLowerCase();
  const domain = getDomainFromEmail(email);
  const isLucien = email.includes("lucien");
  const orgName = isLucien ? "Lucien Internal" : domain ?? "Client Workspace";
  const org = await getOrCreateOrg({ name: orgName, domain });
  const role =
    isLucien && (email.startsWith("ops@") || email.startsWith("operator@"))
      ? "lucien_operator"
      : isLucien
        ? "lucien_admin"
        : "org_user";

  return prisma.user.create({
    data: {
      email,
      name: data.name,
      emailVerified: data.emailVerified,
      role,
      orgId: org.id,
    },
  });
};

export const authOptions: NextAuthOptions = {
  adapter,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM ?? brand.email,
      sendVerificationRequest: sendMagicLink,
    }),
    ...(process.env.NODE_ENV === "development" && devLoginEmails.length > 0
      ? [
          CredentialsProvider({
            id: "dev-login",
            name: "Dev Login",
            credentials: {
              email: { label: "Email", type: "text" },
            },
            async authorize(credentials) {
              const email = credentials?.email?.toLowerCase();
              if (!email || !devLoginEmails.includes(email)) {
                return null;
              }

              const domain = getDomainFromEmail(email);
              const isLucien = email.includes("lucien");
              const orgName = isLucien
                ? "Lucien Internal"
                : "Client Workspace";
              const org = await getOrCreateOrg({ name: orgName, domain });

              const role = isLucien
                ? email.startsWith("ops@") || email.startsWith("operator@")
                  ? "lucien_operator"
                  : "lucien_admin"
                : email.startsWith("admin@")
                  ? "org_admin"
                  : "org_user";

              const user = await prisma.user.upsert({
                where: { email },
                update: {
                  role,
                  orgId: org.id,
                  lastLoginAt: new Date(),
                },
                create: {
                  email,
                  role,
                  orgId: org.id,
                  name: email.split("@")[0],
                  lastLoginAt: new Date(),
                },
              });

              await logAuditEvent({
                orgId: org.id,
                userId: user.id,
                action: "login",
                resourceType: "user",
                resourceId: user.id,
                meta: { source: "dev-login" },
              });

              return user;
            },
          }),
        ]
      : []),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = user?.id ?? (token.sub as string | undefined);
        session.user.role = (user?.role ?? token.role) as string | undefined;
        session.user.orgId = (user?.orgId ?? token.orgId) as string | undefined;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.orgId = user.orgId;
      }
      return token;
    },
  },
  events: {
    async signIn({ user }) {
      if (!user?.id || !user.orgId) {
        return;
      }
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
      await logAuditEvent({
        orgId: user.orgId,
        userId: user.id,
        action: "login",
        resourceType: "user",
        resourceId: user.id,
        meta: { source: "email" },
      });
    },
    async signOut({ session }) {
      const userId = session?.user?.id;
      const orgId = session?.user?.orgId;
      if (!userId || !orgId) {
        return;
      }
      await logAuditEvent({
        orgId,
        userId,
        action: "logout",
        resourceType: "user",
        resourceId: userId,
      });
    },
  },
};

export function getServerAuthSession() {
  return getServerSession(authOptions);
}

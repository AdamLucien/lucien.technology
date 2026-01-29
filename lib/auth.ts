import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import type { SendVerificationRequestParams } from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { createTransport } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";
import { brand } from "@/lib/brand";
import { logAuditEvent } from "@/lib/audit";
import { getDomainFromEmail, getOrCreateOrg } from "@/lib/org";
import { rateLimit } from "@/lib/rateLimit";
import { buildMagicLinkEmail } from "@/lib/auth/email-template";

const magicLinkMaxAgeSeconds = 15 * 60;
const emailRateLimit = {
  windowMs: 10 * 60 * 1000,
  max: 5,
};

const getEmailServerConfig = (): SMTPTransport.Options | string | null => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    return {
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };
  }

  if (process.env.EMAIL_SERVER) {
    return process.env.EMAIL_SERVER;
  }

  return null;
};

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
  const normalizedEmail = identifier.toLowerCase();

  // Rate-limit per email to reduce abuse without revealing account existence.
  const limit = rateLimit(`auth-email:${normalizedEmail}`, emailRateLimit);
  if (!limit.allowed) {
    return;
  }

  const captureDir = process.env.MAGIC_LINK_CAPTURE_DIR;
  if (captureDir) {
    // Test-only capture for Playwright; never used in production.
    await fs.mkdir(captureDir, { recursive: true });
    const hash = createHash("sha256").update(normalizedEmail).digest("hex").slice(0, 12);
    const payload = {
      identifier: normalizedEmail,
      url,
      createdAt: new Date().toISOString(),
    };
    await fs.writeFile(
      path.join(captureDir, `${hash}.json`),
      JSON.stringify(payload, null, 2),
      "utf8",
    );
  }

  const server = provider.server ?? getEmailServerConfig();
  if (!server) {
    if (captureDir) {
      return;
    }
    throw new Error("SMTP server is not configured.");
  }

  const transport = createTransport(server as SMTPTransport.Options | string);
  const fromAddress = provider.from ?? brand.email;
  const emailTemplate = buildMagicLinkEmail({
    url,
    brandName: "Lucien Portal",
    expiresInMinutes: magicLinkMaxAgeSeconds / 60,
  });

  await transport.sendMail({
    to: normalizedEmail,
    from: fromAddress,
    subject: emailTemplate.subject,
    text: emailTemplate.text,
    html: emailTemplate.html,
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
      // Test helper: skip onboarding when magic-link capture is enabled.
      onboardedAt: process.env.MAGIC_LINK_CAPTURE_DIR ? new Date() : undefined,
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
    maxAge: 7 * 24 * 60 * 60,
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-next-auth.session-token"
          : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-next-auth.callback-url"
          : "next-auth.callback-url",
      options: {
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Host-next-auth.csrf-token"
          : "next-auth.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  providers: [
    EmailProvider({
      server: getEmailServerConfig() ?? undefined,
      from: process.env.EMAIL_FROM ?? brand.email,
      maxAge: magicLinkMaxAgeSeconds,
      sendVerificationRequest: sendMagicLink,
    }),
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

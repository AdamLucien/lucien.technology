import { NextResponse } from "next/server";
import { z } from "zod";
import { createHash, randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import { services } from "@/content/services";
import { getClientIp, rateLimit } from "@/lib/rateLimit";
import { getDomainFromEmail, getOrCreateOrg } from "@/lib/org";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";
import { createStaffingIntentForInquiry } from "@/lib/talent/staffing";

const inquirySchema = z.object({
  organization: z.string().min(2),
  role: z.string().min(2),
  serviceSlug: z.string().min(1),
  timeframe: z.enum(["Immediate", "1-3 months", "Strategic"]),
  email: z.string().email(),
  note: z.string().max(140).optional().or(z.literal("")),
  mode: z.enum(["remote", "hybrid", "on-site"]).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
  consent: z.literal(true),
});

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = inquirySchema.safeParse(payload);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const requestId = randomUUID();
    const responseBody = {
      ok: true,
      id: requestId,
      received: true,
    };

    if (result.data.website) {
      return NextResponse.json(responseBody, { status: 202 });
    }

    if (process.env.NODE_ENV === "production") {
      const clientKey = getClientIp(request);
      const limited = rateLimit(`inquiry:${clientKey}`, {
        windowMs: rateLimitWindowMs,
        max: rateLimitMax,
      });
      if (!limited.allowed) {
        return NextResponse.json({ ok: false }, { status: 429 });
      }
    }

    const serviceSlug = result.data.serviceSlug;
    const matchedService = services.find((service) => service.slug === serviceSlug);
    if (!matchedService) {
      return NextResponse.json(
        { ok: false, errors: { serviceSlug: ["Select a valid service."] } },
        { status: 400 },
      );
    }

    const email = result.data.email.toLowerCase();
    const emailHash = createHash("sha256").update(email).digest("hex");
    const domain = getDomainFromEmail(email);
    const org = await getOrCreateOrg({
      name: result.data.organization,
      domain,
    });

    const inquiry = await prisma.inquiry.create({
      data: {
        orgId: org.id,
        organization: result.data.organization,
        role: result.data.role,
        contactEmail: email,
        emailHash,
        serviceSlug,
        timeframe: result.data.timeframe,
        note: result.data.note || null,
        mode: result.data.mode || null,
        status: "new",
        consent: true,
      },
    });

    await createStaffingIntentForInquiry({
      orgId: org.id,
      inquiryId: inquiry.id,
      serviceSlug,
    });

    await logAuditEvent({
      orgId: org.id,
      action: "inquiry_created",
      resourceType: "inquiry",
      resourceId: inquiry.id,
      meta: { serviceSlug, requestId },
      ip: getClientIp(request),
      userAgent: request.headers.get("user-agent"),
    });

    await createNotifications({
      orgId: org.id,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "inquiry_new",
      title: "New scope request",
      body: `${inquiry.organization} submitted a scope request.`,
      entityType: "inquiry",
      entityId: inquiry.id,
    });

    return NextResponse.json(responseBody, { status: 202 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

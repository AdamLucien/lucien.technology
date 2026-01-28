import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { getOrgScope } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const createSchema = z.object({
  engagementId: z.string().min(1),
  title: z.string().min(3),
  description: z.string().min(10),
  impact: z.enum(["scope", "schedule", "cost", "risk"]),
  severity: z.enum(["low", "med", "high"]),
});

export async function GET() {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const scope = getOrgScope(session.user.role, session.user.orgId);

  const changeRequests = await prisma.changeRequest.findMany({
    where: scope,
    orderBy: { createdAt: "desc" },
    include: {
      engagement: { select: { id: true, title: true } },
      createdBy: { select: { id: true, email: true, name: true } },
    },
  });

  return NextResponse.json({ ok: true, items: changeRequests });
}

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = createSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const engagement = await prisma.engagement.findUnique({
    where: { id: parsed.data.engagementId },
  });

  if (!engagement) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  if (!isStaff && engagement.orgId !== session.user.orgId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const changeRequest = await prisma.changeRequest.create({
    data: {
      orgId: engagement.orgId,
      engagementId: engagement.id,
      createdByUserId: session.user.id,
      title: parsed.data.title,
      description: parsed.data.description,
      impact: parsed.data.impact,
      severity: parsed.data.severity,
      status: "proposed",
      requestedAt: new Date(),
    },
  });

  await logAuditEvent({
    orgId: engagement.orgId,
    userId: session.user.id,
    action: "change_request_created",
    resourceType: "change_request",
    resourceId: changeRequest.id,
  });

  if (isStaff) {
    await createNotifications({
      orgId: engagement.orgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: engagement.orgId,
      type: "change_request_created",
      title: "Change request created",
      body: `Change request submitted: ${changeRequest.title}`,
      entityType: "change_request",
      entityId: changeRequest.id,
    });
  } else {
    await createNotifications({
      orgId: engagement.orgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "change_request_created",
      title: "New change request",
      body: `Client submitted: ${changeRequest.title}`,
      entityType: "change_request",
      entityId: changeRequest.id,
    });
  }

  return NextResponse.json({ ok: true, item: changeRequest }, { status: 201 });
}

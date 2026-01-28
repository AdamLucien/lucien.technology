import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const updateSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  impact: z.enum(["scope", "schedule", "cost", "risk"]).optional(),
  severity: z.enum(["low", "med", "high"]).optional(),
  status: z
    .enum(["proposed", "needs_info", "approved", "rejected", "implemented", "cancelled"])
    .optional(),
  assignedToUserId: z.string().optional().nullable(),
  costDeltaEUR: z.number().int().optional().nullable(),
  scheduleDeltaDays: z.number().int().optional().nullable(),
});

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const changeRequest = await prisma.changeRequest.findUnique({
    where: { id },
  });

  if (!changeRequest) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  if (!isStaff && changeRequest.orgId !== session.user.orgId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const payload = await request.json();
  const parsed = updateSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const isEditableStatus = ["proposed", "needs_info"].includes(
    changeRequest.status,
  );
  if (!isEditableStatus && (parsed.data.title || parsed.data.description)) {
    return NextResponse.json({ error: "Change request locked" }, { status: 400 });
  }

  if (!isStaff) {
    const forbiddenStatuses = ["approved", "rejected", "implemented"];
    if (parsed.data.status && forbiddenStatuses.includes(parsed.data.status)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (parsed.data.costDeltaEUR || parsed.data.scheduleDeltaDays) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const nextStatus = parsed.data.status;
  const decidedAt =
    nextStatus && ["approved", "rejected"].includes(nextStatus)
      ? new Date()
      : undefined;
  const implementedAt = nextStatus === "implemented" ? new Date() : undefined;

  const updated = await prisma.changeRequest.update({
    where: { id },
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      impact: parsed.data.impact,
      severity: parsed.data.severity,
      status: parsed.data.status,
      assignedToUserId: isStaff ? parsed.data.assignedToUserId ?? undefined : undefined,
      costDeltaEUR: isStaff ? parsed.data.costDeltaEUR ?? undefined : undefined,
      scheduleDeltaDays: isStaff ? parsed.data.scheduleDeltaDays ?? undefined : undefined,
      decidedAt,
      implementedAt,
    },
  });

  await logAuditEvent({
    orgId: changeRequest.orgId,
    userId: session.user.id,
    action: "change_request_updated",
    resourceType: "change_request",
    resourceId: changeRequest.id,
  });

  if (isStaff) {
    await createNotifications({
      orgId: changeRequest.orgId,
      recipientRoles: ["org_admin", "org_user"],
      recipientOrgId: changeRequest.orgId,
      type: "change_request_updated",
      title: "Change request updated",
      body: `Update: ${updated.title}`,
      entityType: "change_request",
      entityId: changeRequest.id,
    });
  } else {
    await createNotifications({
      orgId: changeRequest.orgId,
      recipientRoles: ["lucien_admin", "lucien_operator"],
      type: "change_request_updated",
      title: "Change request updated",
      body: `Client update: ${updated.title}`,
      entityType: "change_request",
      entityId: changeRequest.id,
    });
  }

  return NextResponse.json({ ok: true, item: updated });
}

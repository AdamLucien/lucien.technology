import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const bodySchema = z.object({
  reason: z.string().min(5),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "lucien_admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { id } = await params;
  const document = await prisma.document.findUnique({ where: { id } });
  if (!document) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const updated = await prisma.document.update({
    where: { id },
    data: {
      archivedAt: new Date(),
      archivedByUserId: session.user.id,
      archiveReason: parsed.data.reason,
    },
  });

  const editEvent = await prisma.editEvent.create({
    data: {
      orgId: updated.orgId,
      entityType: "document",
      entityId: updated.id,
      createdByUserId: session.user.id,
      kind: "archive",
      status: "applied",
      reason: parsed.data.reason,
      diffJson: [
        { field: "archivedAt", from: null, to: updated.archivedAt },
        { field: "archiveReason", from: null, to: parsed.data.reason },
      ],
    },
  });

  await logAuditEvent({
    orgId: updated.orgId,
    userId: session.user.id,
    action: "document_archived",
    resourceType: "document",
    resourceId: updated.id,
    meta: { editEventId: editEvent.id },
  });

  await createNotifications({
    orgId: updated.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: updated.orgId,
    type: "document_archived",
    title: "Document archived",
    body: `${updated.name} was archived.`,
    entityType: "document",
    entityId: updated.id,
  });

  return NextResponse.json({ ok: true });
}

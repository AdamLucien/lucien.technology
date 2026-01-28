import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (![
      "lucien_admin",
      "lucien_operator",
    ].includes(session.user.role ?? "")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await context.params;
  const changeRequest = await prisma.changeRequest.findUnique({
    where: { id },
  });

  if (!changeRequest) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const updated = await prisma.changeRequest.update({
    where: { id },
    data: {
      status: "implemented",
      implementedAt: new Date(),
    },
  });

  await logAuditEvent({
    orgId: changeRequest.orgId,
    userId: session.user.id,
    action: "change_request_implemented",
    resourceType: "change_request",
    resourceId: changeRequest.id,
  });

  await createNotifications({
    orgId: changeRequest.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: changeRequest.orgId,
    type: "change_request_implemented",
    title: "Change request implemented",
    body: `Implemented: ${updated.title}`,
    entityType: "change_request",
    entityId: changeRequest.id,
  });

  return NextResponse.json({ ok: true, item: updated });
}

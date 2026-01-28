import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const decideSchema = z.object({
  status: z.enum(["approved", "rejected", "needs_info"]),
  decisionNote: z.string().min(3),
  costDeltaEUR: z.number().int().optional().nullable(),
  scheduleDeltaDays: z.number().int().optional().nullable(),
});

export async function POST(
  request: Request,
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

  const payload = await request.json();
  const parsed = decideSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
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
      status: parsed.data.status,
      decisionNote: parsed.data.decisionNote,
      costDeltaEUR: parsed.data.costDeltaEUR ?? null,
      scheduleDeltaDays: parsed.data.scheduleDeltaDays ?? null,
      decidedAt: new Date(),
    },
  });

  await logAuditEvent({
    orgId: changeRequest.orgId,
    userId: session.user.id,
    action: "change_request_decided",
    resourceType: "change_request",
    resourceId: changeRequest.id,
    meta: { status: parsed.data.status },
  });

  await createNotifications({
    orgId: changeRequest.orgId,
    recipientRoles: ["org_admin", "org_user"],
    recipientOrgId: changeRequest.orgId,
    type: "change_request_decision",
    title: `Change request ${parsed.data.status}`,
    body: `Decision recorded: ${updated.title}`,
    entityType: "change_request",
    entityId: changeRequest.id,
  });

  return NextResponse.json({ ok: true, item: updated });
}

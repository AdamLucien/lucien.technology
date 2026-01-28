import { prisma } from "@/lib/prisma";

export type AuditInput = {
  orgId: string;
  action: string;
  resourceType: string;
  resourceId?: string | null;
  userId?: string | null;
  meta?: Record<string, unknown> | null;
  ip?: string | null;
  userAgent?: string | null;
};

export async function logAuditEvent({
  orgId,
  action,
  resourceType,
  resourceId,
  userId,
  meta,
  ip,
  userAgent,
}: AuditInput) {
  try {
    await prisma.auditEvent.create({
      data: {
        orgId,
        action,
        resourceType,
        resourceId: resourceId ?? null,
        userId: userId ?? null,
        metaJson: meta ? JSON.stringify(meta) : null,
        ip: ip ?? null,
        userAgent: userAgent ?? null,
      },
    });
  } catch (error) {
    console.error("AuditEventFailed", error);
  }
}

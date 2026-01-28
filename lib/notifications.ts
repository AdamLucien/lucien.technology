import type { UserRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type NotificationPayload = {
  orgId: string;
  recipientUserId?: string;
  recipientRoles?: UserRole[];
  recipientOrgId?: string;
  type: string;
  title: string;
  body: string;
  entityType?: string;
  entityId?: string;
};

export async function createNotifications({
  orgId,
  recipientUserId,
  recipientRoles,
  recipientOrgId,
  type,
  title,
  body,
  entityType,
  entityId,
}: NotificationPayload) {
  if (recipientUserId) {
    await prisma.notification.create({
      data: {
        orgId,
        recipientUserId,
        type,
        title,
        body,
        entityType,
        entityId,
      },
    });
    return;
  }

  if (!recipientRoles || recipientRoles.length === 0) {
    return;
  }

  const users = await prisma.user.findMany({
    where: {
      role: { in: recipientRoles },
      ...(recipientOrgId ? { orgId: recipientOrgId } : {}),
    },
    select: { id: true },
  });

  if (users.length === 0) {
    return;
  }

  await prisma.notification.createMany({
    data: users.map((user) => ({
      orgId,
      recipientUserId: user.id,
      type,
      title,
      body,
      entityType,
      entityId,
    })),
  });
}

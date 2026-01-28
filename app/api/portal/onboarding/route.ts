import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerAuthSession } from "@/lib/auth";
import { logAuditEvent } from "@/lib/audit";
import { createNotifications } from "@/lib/notifications";

const onboardingSchema = z.object({
  preferredChannel: z.string().min(2),
  primaryEngagementId: z.string().optional().nullable(),
  ndaStatus: z.string().min(2),
  accessPreference: z.string().min(2),
  dataConstraints: z.string().optional().nullable(),
  acceptedTerms: z.literal(true),
});

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!session.user.role?.startsWith("org_")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const payload = await request.json();
  const parsed = onboardingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { org: true },
  });

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const onboardingData = {
    preferredChannel: parsed.data.preferredChannel,
    primaryEngagementId: parsed.data.primaryEngagementId ?? null,
    ndaStatus: parsed.data.ndaStatus,
    accessPreference: parsed.data.accessPreference,
    dataConstraints: parsed.data.dataConstraints ?? "",
    completedAt: new Date().toISOString(),
  };

  await prisma.user.update({
    where: { id: user.id },
    data: {
      onboardedAt: new Date(),
      onboardingData,
    },
  });

  await logAuditEvent({
    orgId: user.orgId,
    userId: user.id,
    action: "onboarding_completed",
    resourceType: "user",
    resourceId: user.id,
    meta: onboardingData,
  });

  await createNotifications({
    orgId: user.orgId,
    recipientUserId: user.id,
    type: "onboarding_complete",
    title: "Onboarding completed",
    body: "Client onboarding is complete. The portal is ready for use.",
    entityType: "user",
    entityId: user.id,
  });

  return NextResponse.json({ ok: true });
}

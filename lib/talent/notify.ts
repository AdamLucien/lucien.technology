import { prisma } from "@/lib/prisma";
import { logAuditEvent } from "@/lib/audit";

const getInternalOrgId = async () => {
  const org = await prisma.org.findFirst({
    where: { domain: "lucien.technology" },
    select: { id: true },
  });
  return org?.id ?? null;
};

export async function queueTalentContact(
  profileId: string,
  templateKey: string,
) {
  console.info("TalentContactQueued", { profileId, templateKey });

  try {
    const orgId = await getInternalOrgId();
    if (!orgId) return;

    await logAuditEvent({
      orgId,
      action: "talent_contact_queued",
      resourceType: "TalentProfile",
      resourceId: profileId,
      meta: { templateKey },
    });
  } catch (error) {
    console.error("TalentContactAuditFailed", error);
  }
}

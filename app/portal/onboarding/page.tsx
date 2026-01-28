import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requirePortalSession } from "@/lib/portal";
import { OnboardingFlow } from "@/components/portal/OnboardingFlow";

export const metadata = {
  title: "Client Onboarding | Lucien",
  description: "Complete the Lucien client portal onboarding steps.",
  robots: { index: false, follow: false, nocache: true },
};

export default async function PortalOnboardingPage() {
  const session = await requirePortalSession();
  if (!session.user.role?.startsWith("org_")) {
    redirect("/portal");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { org: true },
  });

  if (!user) {
    redirect("/login?callbackUrl=/portal");
  }

  if (user.onboardedAt) {
    redirect("/portal");
  }

  const engagements = await prisma.engagement.findMany({
    where: { orgId: user.orgId },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true },
  });

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <OnboardingFlow
        orgName={user.org.name}
        userName={user.name}
        userEmail={user.email}
        isOrgAdmin={user.role === "org_admin"}
        engagements={engagements}
      />
    </div>
  );
}

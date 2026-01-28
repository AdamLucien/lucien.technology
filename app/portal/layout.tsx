import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PortalShell, type PortalNavItem } from "@/components/portal/PortalShell";
import { requirePortalSession } from "@/lib/portal";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Client Portal | Lucien",
  description: "Secure Lucien client portal for engagements and documents.",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requirePortalSession();
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { org: true },
  });

  if (!user) {
    redirect("/login?callbackUrl=/portal");
  }

  const [unreadNotifications, recentNotifications] = await Promise.all([
    prisma.notification.count({
      where: { recipientUserId: user.id, readAt: null },
    }),
    prisma.notification.findMany({
      where: { recipientUserId: user.id },
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
  ]);

  const navItems: PortalNavItem[] = [
    { href: "/portal", label: "Dashboard", icon: "dashboard" },
    {
      href: "/portal/engagements",
      label: "Engagements",
      icon: "engagements",
    },
    {
      href: "/portal/hr",
      label: "HR",
      icon: "users",
    },
    {
      href: "/portal/change-requests",
      label: "Change Requests",
      icon: "changeRequests",
    },
    { href: "/portal/scopes", label: "Scopes", icon: "scopes" },
    {
      href: "/portal/documents",
      label: "Documents",
      icon: "documents",
    },
  ];

  if (user.role.startsWith("org_")) {
    navItems.push({
      href: "/portal/billing",
      label: "Billing",
      icon: "billing",
    });
  } else {
    navItems.push({
      href: "/portal/finance",
      label: "Finance",
      icon: "finance",
    });
  }

  navItems.push({
    href: "/portal/notifications",
    label: "Notifications",
    icon: "notifications",
  });

  if (user.role === "lucien_admin") {
    navItems.splice(1, 0, {
      href: "/portal/inquiries",
      label: "Inquiries",
      icon: "inquiries",
    });
    navItems.push({
      href: "/portal/admin/orgs",
      label: "Admin: Orgs",
      icon: "orgs",
    });
    navItems.push({
      href: "/portal/admin/users",
      label: "Admin: Users",
      icon: "users",
    });
    navItems.push({
      href: "/portal/admin/danger-zone",
      label: "Admin: Danger",
      icon: "danger",
    });
  }

  return (
    <PortalShell
      navItems={navItems}
      orgName={user.org.name}
      userEmail={user.email}
      userRole={user.role}
      unreadNotifications={unreadNotifications}
      recentNotifications={recentNotifications.map((item) => ({
        id: item.id,
        type: item.type,
        title: item.title,
        body: item.body,
        createdAt: item.createdAt.toISOString(),
        readAt: item.readAt ? item.readAt.toISOString() : null,
      }))}
      requiresOnboarding={user.role.startsWith("org_") && !user.onboardedAt}
    >
      {children}
    </PortalShell>
  );
}

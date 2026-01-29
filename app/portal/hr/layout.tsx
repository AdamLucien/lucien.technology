import { requirePortalSession } from "@/lib/portal";
import { HrSubnav } from "@/components/portal/HrSubnav";

const navItems = [
  { href: "/portal/hr", label: "Overview" },
  { href: "/portal/hr/talent", label: "Talent" },
  { href: "/portal/hr/staffing", label: "Staffing" },
  { href: "/portal/hr/outreach", label: "Outreach" },
  { href: "/portal/hr/radar", label: "Radar" },
];

export default async function HrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePortalSession();

  return (
    <div className="space-y-6">
      <HrSubnav items={navItems} />
      {children}
    </div>
  );
}

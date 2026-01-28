import Link from "next/link";
import { requirePortalSession } from "@/lib/portal";

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
      <div className="flex flex-wrap gap-2 rounded-2xl border border-line/80 bg-soft p-3 text-xs uppercase tracking-[0.2em] text-slate">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-line/80 px-4 py-2 text-[0.6rem] text-ash transition hover:border-slate"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}

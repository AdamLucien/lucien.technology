"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type HrNavItem = { href: string; label: string };

const isActive = (pathname: string, href: string) =>
  href === "/portal/hr" ? pathname === href : pathname.startsWith(href);

export function HrSubnav({
  items,
  label = "HR Sections",
}: {
  items: HrNavItem[];
  label?: string;
}) {
  const pathname = usePathname() ?? "";

  return (
    <div className="space-y-2">
      <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate">
        {label}
      </div>
      <div className="flex flex-wrap gap-2 rounded-2xl border border-line/80 bg-soft p-3 text-xs uppercase tracking-[0.2em] text-slate">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "rounded-full border px-4 py-2 text-[0.6rem] transition",
                active
                  ? "border-ash text-ash"
                  : "border-line/80 text-slate hover:border-slate",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

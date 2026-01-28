"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand } from "@/lib/brand";
import { t } from "@/lib/i18n";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/iconMap";

const footerGroups = [
  {
    id: "explore",
    titleKey: "footer.group.explore",
    links: [
      { href: "/marketplace", labelKey: "footer.link.marketplace", icon: "marketplace" },
      { href: "/how-we-work", labelKey: "footer.link.how", icon: "how" },
      { href: "/procurement", labelKey: "footer.link.procurement", icon: "governance" },
      { href: "/security", labelKey: "footer.link.security", icon: "security" },
      { href: "/insights", labelKey: "footer.link.insights", icon: "insights" },
      { href: "/about", labelKey: "footer.link.about", icon: "about" },
      { href: "/legal", labelKey: "footer.link.legal", icon: "legal" },
      { href: "/contact", labelKey: "footer.link.contact", icon: "contact" },
    ],
  },
  {
    id: "partners",
    titleKey: "footer.partners.title",
    links: [
      { href: "/partners", labelKey: "footer.partners.join", icon: "users" },
      { href: "/partners#how", labelKey: "footer.partners.how", icon: "process" },
      { href: "/partners#roles", labelKey: "footer.partners.roles", icon: "fit" },
      { href: "/partners#companies", labelKey: "footer.partners.companies", icon: "orgs" },
    ],
  },
] satisfies {
  id: string;
  titleKey: string;
  links: { href: string; labelKey: string; icon: IconName }[];
}[];

export function Footer() {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    explore: true,
    partners: false,
  });

  if (pathname?.startsWith("/portal") || pathname === "/login") {
    return null;
  }

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate">
              <Image
                src="/app/Lucien_Symbol.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              {brand.wordmark}
            </div>
            <p className="max-w-sm text-sm text-muted">
              {t("footer.brand.tagline")}
            </p>
            <p className="text-sm text-slate">{brand.email}</p>
          </div>
          <div className="grid gap-6 text-sm text-slate md:grid-cols-2">
            {footerGroups.map((group) => {
              const isOpen = Boolean(openGroups[group.id]);
              const panelId = `footer-group-${group.id}`;
              return (
                <div key={group.id} className="space-y-3">
                  <div className="md:hidden">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-xs uppercase tracking-[0.2em] text-slate"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenGroups((current) => ({
                          ...current,
                          [group.id]: !isOpen,
                        }))
                      }
                    >
                      <span>{t(group.titleKey)}</span>
                      <Icon
                        name="chevronDown"
                        size={16}
                        strokeWidth={1.4}
                        className={`text-slate transition ${isOpen ? "rotate-180" : ""}`}
                        entrance={false}
                      />
                    </button>
                  </div>
                  <div className="hidden text-xs uppercase tracking-[0.2em] text-slate md:block">
                    {t(group.titleKey)}
                  </div>
                  <div id={panelId} className={`${isOpen ? "block" : "hidden"} md:block`}>
                    <ul className="space-y-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="transition hover:text-ash"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Icon
                                name={link.icon}
                                size={16}
                                strokeWidth={1.25}
                                className="text-slate"
                                entrance={false}
                              />
                              {t(link.labelKey)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line/70 pt-6 text-xs text-muted md:flex-row">
          <div className="space-y-2">
            <span>
              {t("footer.legal.copyright", {
                year: new Date().getFullYear(),
                name: brand.name,
              })}
            </span>
            <span className="block">
              {t("footer.legal.engagements")}
            </span>
          </div>
          <span>{t("footer.legal.domain", { domain: brand.domain })}</span>
        </div>
      </div>
    </footer>
  );
}

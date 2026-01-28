import Link from "next/link";
import type { Service } from "@/content/services";
import { MotionIn } from "@/components/MotionIn";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/iconMap";
import {
  formatDurationRange,
  formatHourlyRange,
  formatIncludesLine,
  formatProjectRange,
} from "@/lib/commerce";

type ServiceCardProps = {
  service: Service;
};

const domainIconMap: Record<string, IconName> = {
  AI: "ai",
  Industrial: "industrial",
  Security: "security",
  "IT-OT": "itot",
};

const engagementIconMap: Record<string, IconName> = {
  Audit: "audit",
  Architecture: "design",
  Build: "build",
  Operate: "operate",
};

const deliveryIconMap: Record<string, IconName> = {
  remote: "remote",
  hybrid: "hybrid",
  "on-site": "onsite",
};

export function ServiceCard({ service }: ServiceCardProps) {
  const primaryDomain = service.domains[0] ?? "Security";
  const primaryEngagement = service.engagementTypes[0] ?? "Architecture";
  const domainIcon = domainIconMap[primaryDomain] ?? "security";
  const engagementIcon = engagementIconMap[primaryEngagement] ?? "design";
  const deliveryIcon = deliveryIconMap[service.defaultMode] ?? "remote";

  return (
    <MotionIn hover className="h-full">
      <Link
        href={`/marketplace/${service.slug}`}
        data-service-link={service.slug}
        className="card-animate flex h-full flex-col justify-between rounded-2xl border border-line/80 bg-soft p-6 transition hover:border-slate"
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-slate">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
              <Icon
                name={domainIcon}
                size={14}
                strokeWidth={1.25}
                className="text-slate"
                entrance={false}
              />
              {primaryDomain}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
              <Icon
                name={engagementIcon}
                size={14}
                strokeWidth={1.25}
                className="text-slate"
                entrance={false}
              />
              {primaryEngagement}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
              <Icon
                name={deliveryIcon}
                size={14}
                strokeWidth={1.25}
                className="text-slate"
                entrance={false}
              />
              {service.defaultMode}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-ash">{service.title}</h3>
          <p className="text-sm text-muted">{service.oneLine}</p>
          <ul className="space-y-2 text-sm text-muted">
            {service.deliverables.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 space-y-3 text-sm text-muted">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate">
            <span className="rounded-full border border-line px-3 py-1">
              {formatDurationRange(service)}
            </span>
            <span className="rounded-full border border-line px-3 py-1">
              {service.defaultMode}
            </span>
          </div>
          <div className="text-sm font-semibold text-ash">
            {formatProjectRange(service)}
          </div>
          <div className="text-xs text-muted">{formatHourlyRange(service)}</div>
          <div className="text-xs text-muted">{formatIncludesLine(service)}</div>
          <div className="text-xs text-muted">{service.onsitePolicy.text}</div>
          <div className="pt-2 text-xs uppercase tracking-[0.2em] text-ash">
            <span className="inline-flex items-center gap-2">
              {service.ctaLabel}
              <Icon
                name="chevronRight"
                size={14}
                strokeWidth={1.25}
                className="text-slate"
                entrance={false}
              />
            </span>
          </div>
        </div>
      </Link>
    </MotionIn>
  );
}

import Link from "next/link";
import { TalentContactStatus, TalentStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getTalentContactStatusBadge, getTalentStatusBadge } from "@/lib/status-badges";
import { domainOptions } from "@/lib/talent/taxonomy";
import { t } from "@/lib/i18n";
import { hrCopy } from "@/lib/hr/copy-data";

export default async function TalentListPage({
  searchParams,
}: {
  searchParams?: {
    status?: string | string[];
    contactStatus?: string | string[];
    domain?: string | string[];
  };
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  await requirePortalSession();

  const statusParam = Array.isArray(resolvedSearchParams?.status)
    ? resolvedSearchParams?.status[0]
    : resolvedSearchParams?.status;
  const contactStatusParam = Array.isArray(resolvedSearchParams?.contactStatus)
    ? resolvedSearchParams?.contactStatus[0]
    : resolvedSearchParams?.contactStatus;
  const domainParam = Array.isArray(resolvedSearchParams?.domain)
    ? resolvedSearchParams?.domain[0]
    : resolvedSearchParams?.domain;

  const isTalentStatus = (value: string): value is TalentStatus =>
    Object.values(TalentStatus).includes(value as TalentStatus);
  const isTalentContactStatus = (value: string): value is TalentContactStatus =>
    Object.values(TalentContactStatus).includes(value as TalentContactStatus);

  const domainFilter = domainOptions.some((option) => option.id === domainParam)
    ? (domainParam as string)
    : null;

  const [profiles, profileCounts] = await Promise.all([
    prisma.talentProfile.findMany({
      where: {
        ...(statusParam && isTalentStatus(statusParam) ? { status: statusParam } : {}),
        ...(contactStatusParam && isTalentContactStatus(contactStatusParam)
          ? { contactStatus: contactStatusParam }
          : {}),
        ...(domainFilter ? { domains: { has: domainFilter } } : {}),
      },
      include: { _count: { select: { matches: true } } },
      orderBy: { updatedAt: "desc" },
    }),
    prisma.talentProfile.findMany({
      select: { status: true, contactStatus: true, domains: true },
    }),
  ]);

  const statusCounts = profileCounts.reduce<Record<string, number>>((acc, item) => {
    acc[item.status] = (acc[item.status] ?? 0) + 1;
    return acc;
  }, {});

  const contactCounts = profileCounts.reduce<Record<string, number>>((acc, item) => {
    acc[item.contactStatus] = (acc[item.contactStatus] ?? 0) + 1;
    return acc;
  }, {});

  const domainCounts = profileCounts.reduce<Record<string, number>>((acc, item) => {
    for (const domain of item.domains ?? []) {
      acc[domain] = (acc[domain] ?? 0) + 1;
    }
    return acc;
  }, {});

  const buildUrl = (overrides: {
    status?: string | null;
    contactStatus?: string | null;
    domain?: string | null;
  }) => {
    const params = new URLSearchParams();
    const nextStatus = overrides.status ?? (statusParam ?? null);
    const nextContact = overrides.contactStatus ?? (contactStatusParam ?? null);
    const nextDomain = overrides.domain ?? (domainParam ?? null);

    if (nextStatus) params.set("status", nextStatus);
    if (nextContact) params.set("contactStatus", nextContact);
    if (nextDomain) params.set("domain", nextDomain);

    const query = params.toString();
    return query ? `/portal/hr/talent?${query}` : "/portal/hr/talent";
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Talent</p>
        <h1 className="text-2xl font-semibold text-ash">{hrCopy.talent.title}</h1>
        <p className="text-sm text-muted">{hrCopy.talent.subtitle}</p>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted">
        <div className="text-xs uppercase tracking-[0.2em] text-slate">
          {hrCopy.whatNextLabel}
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-4">
          {hrCopy.talent.whatNext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 rounded-2xl border border-line/80 bg-soft p-6 text-xs uppercase tracking-[0.2em] text-slate md:grid-cols-3">
        <div className="space-y-2">
          <div>Status</div>
          <div className="flex flex-wrap gap-2 text-[0.6rem]">
            <Link
              href={buildUrl({ status: null })}
              className="rounded-full border border-line/80 px-3 py-1 text-ash"
            >
              All ({profileCounts.length})
            </Link>
            {Object.values(TalentStatus).map((status) => (
              <Link
                key={status}
                href={buildUrl({ status })}
                className="rounded-full border border-line/80 px-3 py-1 text-ash"
              >
                {status} ({statusCounts[status] ?? 0})
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div>Contact</div>
          <div className="flex flex-wrap gap-2 text-[0.6rem]">
            <Link
              href={buildUrl({ contactStatus: null })}
              className="rounded-full border border-line/80 px-3 py-1 text-ash"
            >
              All ({profileCounts.length})
            </Link>
            {Object.values(TalentContactStatus).map((status) => (
              <Link
                key={status}
                href={buildUrl({ contactStatus: status })}
                className="rounded-full border border-line/80 px-3 py-1 text-ash"
              >
                {status} ({contactCounts[status] ?? 0})
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div>Domain</div>
          <div className="flex flex-wrap gap-2 text-[0.6rem]">
            <Link
              href={buildUrl({ domain: null })}
              className="rounded-full border border-line/80 px-3 py-1 text-ash"
            >
              All ({profileCounts.length})
            </Link>
            {domainOptions.map((domain) => (
              <Link
                key={domain.id}
                href={buildUrl({ domain: domain.id })}
                className="rounded-full border border-line/80 px-3 py-1 text-ash"
              >
                {t(domain.labelKey)} ({domainCounts[domain.id] ?? 0})
              </Link>
            ))}
          </div>
        </div>
      </div>

      {profiles.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3 text-sm text-muted">
          <div className="text-ash">{hrCopy.talent.empty.title}</div>
          <p>{hrCopy.talent.empty.body}</p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
            {hrCopy.talent.empty.ctas.map((cta) => (
              <Link
                key={`${cta.href}-${cta.label}`}
                href={cta.href}
                className={
                  cta.tone === "primary"
                    ? "btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem]"
                    : "rounded-full border border-line/80 px-4 py-2 text-[0.6rem] text-ash"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line/80 bg-soft p-5"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {profile.fullName}
                </div>
                <div className="text-xs text-slate">{profile.email}</div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
                <StatusBadge {...getTalentStatusBadge(profile.status)} />
                <StatusBadge {...getTalentContactStatusBadge(profile.contactStatus)} />
                <StatusBadge
                  label={`${profile._count.matches} matches`}
                  tone="neutral"
                  variant="outline"
                />
                <Link
                  href={`/portal/hr?talent=${profile.id}`}
                  className="rounded-full border border-line/80 px-3 py-1 text-[0.6rem] text-ash"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

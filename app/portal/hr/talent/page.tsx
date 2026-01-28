import Link from "next/link";
import { TalentStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getTalentContactStatusBadge, getTalentStatusBadge } from "@/lib/status-badges";

export default async function TalentListPage({
  searchParams,
}: {
  searchParams?: { status?: string | string[] };
}) {
  await requirePortalSession();

  const statusParam = Array.isArray(searchParams?.status)
    ? searchParams?.status[0]
    : searchParams?.status;

  const isTalentStatus = (value: string): value is TalentStatus =>
    Object.values(TalentStatus).includes(value as TalentStatus);

  const profiles = await prisma.talentProfile.findMany({
    where: statusParam && isTalentStatus(statusParam) ? { status: statusParam } : {},
    include: { _count: { select: { matches: true } } },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Talent</p>
        <h1 className="text-2xl font-semibold text-ash">Talent profiles</h1>
        <p className="text-sm text-muted">
          Profiles captured from partners, scouting, and internal sources.
        </p>
      </div>

      {profiles.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No talent profiles yet.
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

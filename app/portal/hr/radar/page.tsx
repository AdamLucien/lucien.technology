import { createHash } from "crypto";
import { prisma } from "@/lib/prisma";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { runScoutJob } from "@/lib/scout/job";
import { roleIds, domainIds } from "@/lib/talent/taxonomy";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getMetaBadge } from "@/lib/status-badges";

const parseCsv = (text: string) => {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length === 0) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    return headers.reduce<Record<string, string>>((acc, key, index) => {
      acc[key] = values[index] ?? "";
      return acc;
    }, {});
  });
};

const hash = (value: string) => createHash("sha256").update(value).digest("hex");

async function importCsv(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const file = formData.get("file");
  if (!(file instanceof File)) return;

  const text = await file.text();
  const rows = parseCsv(text);

  for (const row of rows) {
    const fullName = row.fullName || row.name || "Unknown";
    const email = row.email || `scout+${hash(fullName)}@scout.local`;
    const primaryRole = roleIds.includes(row.primaryRole) ? row.primaryRole : "systems_architect";
    const secondaryRoles = row.secondaryRoles
      ? row.secondaryRoles.split("|").filter((item) => roleIds.includes(item))
      : [];
    const domains = row.domains
      ? row.domains.split("|").filter((item) => domainIds.includes(item))
      : [];

    const profile = await prisma.talentProfile.upsert({
      where: { email },
      update: {
        fullName,
        primaryRole,
        secondaryRoles,
        domains,
        seniority: row.seniority || "ic_senior",
        availabilityWindow: row.availabilityWindow || "two_four_weeks",
        engagementModes: row.engagementModes ? row.engagementModes.split("|") : ["remote"],
        rateBand: row.rateBand || null,
        languages: row.languages ? row.languages.split("|") : ["en"],
        linkedInUrl: row.linkedInUrl || null,
        xingUrl: row.xingUrl || null,
        locationTimezone: row.locationTimezone || null,
      },
      create: {
        fullName,
        email,
        primaryRole,
        secondaryRoles,
        domains,
        seniority: row.seniority || "ic_senior",
        availabilityWindow: row.availabilityWindow || "two_four_weeks",
        engagementModes: row.engagementModes ? row.engagementModes.split("|") : ["remote"],
        rateBand: row.rateBand || null,
        languages: row.languages ? row.languages.split("|") : ["en"],
        linkedInUrl: row.linkedInUrl || null,
        xingUrl: row.xingUrl || null,
        locationTimezone: row.locationTimezone || null,
      },
    });

    await prisma.talentSignal.create({
      data: {
        profileId: profile.id,
        source: "IMPORT_CSV",
        version: 1,
        payloadJson: row,
        externalProfileUrl: row.linkedInUrl || row.xingUrl || null,
        externalId: row.externalId || null,
        dedupeKey: row.dedupeKey || hash(email),
        sourceQuery: "CSV_IMPORT",
        capturedAt: new Date(),
      },
    });
  }
}

async function createSearchIntent(formData: FormData) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const roleId = String(formData.get("roleId") || "");
  const keyword = String(formData.get("keyword") || "");
  const sourcesRaw = String(formData.get("sources") || "WEB");

  if (!session.user.orgId) return;

  await prisma.searchIntent.create({
    data: {
      orgId: session.user.orgId,
      enabled: true,
      priority: 0,
      targetSources: sourcesRaw.split(",").map((item) => item.trim()).filter(Boolean),
      quotasJson: { maxPerRun: 10, maxPerDay: 50 },
      roleIds: roleId ? [roleId] : [],
      domainIds: [],
      geo: null,
      seniorityId: null,
      modeIds: [],
      availabilityWindowId: null,
      keywords: keyword ? [keyword] : [],
    },
  });
}

async function triggerScout() {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);
  await runScoutJob({ orgId: session.user.orgId ?? undefined });
}

export default async function RadarPage() {
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);

  const [searchIntents, scoutRuns, signals] = await Promise.all([
    prisma.searchIntent.findMany({
      where: { orgId: session.user.orgId ?? "" },
      orderBy: { updatedAt: "desc" },
    }),
    prisma.scoutJobRun.findMany({
      where: { orgId: session.user.orgId ?? "" },
      orderBy: { startedAt: "desc" },
      take: 10,
    }),
    prisma.talentSignal.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      include: { profile: true },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Radar</p>
        <h1 className="text-2xl font-semibold text-ash">Supply radar</h1>
        <p className="text-sm text-muted">
          Capture signals, run scout jobs, and manage search intents.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge {...getMetaBadge(`${searchIntents.length} search intents`)} />
        <StatusBadge {...getMetaBadge(`${scoutRuns.length} recent runs`)} />
        <form action={triggerScout}>
          <button
            type="submit"
            className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
          >
            Run scout job
          </button>
        </form>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Search intents
          </h2>
          {searchIntents.length === 0 ? (
            <p className="text-sm text-muted">No search intents configured.</p>
          ) : (
            searchIntents.map((intent) => (
              <div
                key={intent.id}
                className="rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted"
              >
                <div className="text-ash">
                  Roles: {(intent.roleIds as string[]).join(", ") || "—"}
                </div>
                <div className="text-xs text-slate">
                  Sources: {(intent.targetSources as string[]).join(", ") || "WEB"}
                </div>
              </div>
            ))
          )}

          <form action={createSearchIntent} className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Add intent
            </div>
            <div className="grid gap-3 text-sm text-slate">
              <input
                name="roleId"
                placeholder="roleId (e.g. systems_architect)"
                className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
              />
              <input
                name="keyword"
                placeholder="keyword (optional)"
                className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
              />
              <input
                name="sources"
                placeholder="sources (comma, e.g. WEB)"
                className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
              />
            </div>
            <button
              type="submit"
              className="btn-animate btn-primary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Create intent
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            CSV import
          </h2>
          <form action={importCsv} className="space-y-3">
            <input
              type="file"
              name="file"
              accept=".csv"
              className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-xs text-ash"
            />
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Import CSV
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Talent signal stream
        </h2>
        {signals.length === 0 ? (
          <p className="text-sm text-muted">No signals captured yet.</p>
        ) : (
          signals.map((signal) => (
            <div
              key={signal.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted"
            >
              <div>
                <div className="text-ash">{signal.profile.fullName}</div>
                <div className="text-xs text-slate">{signal.source}</div>
              </div>
              <div className="text-xs text-slate">
                {signal.externalProfileUrl ?? "—"}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

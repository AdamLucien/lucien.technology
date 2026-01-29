import { prisma } from "@/lib/prisma";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { runScoutJob } from "@/lib/scout/job";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getMetaBadge } from "@/lib/status-badges";
import { hrCopy } from "@/lib/hr/copy";
import { HrImportToolkit } from "@/components/portal/HrImportToolkit";
import {
  commitTalentImport,
  previewTalentImport,
  type ImportMapping,
  type ImportRow,
} from "@/lib/hr/import";

async function previewImport({
  rows,
  mapping,
  source,
}: {
  rows: ImportRow[];
  mapping: ImportMapping;
  source: string;
}) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);
  void source;
  return previewTalentImport({ rows, mapping });
}

async function commitImport({
  rows,
  mapping,
  source,
}: {
  rows: ImportRow[];
  mapping: ImportMapping;
  source: string;
}) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);
  return commitTalentImport({ rows, mapping, source });
}

async function manualAdd({
  fullName,
  email,
  linkedInUrl,
  xingUrl,
  primaryRole,
  domains,
}: {
  fullName: string;
  email?: string;
  linkedInUrl?: string;
  xingUrl?: string;
  primaryRole?: string;
  domains?: string;
}) {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);
  const rows: ImportRow[] = [
    {
      fullName,
      email: email ?? "",
      linkedInUrl: linkedInUrl ?? "",
      xingUrl: xingUrl ?? "",
      primaryRole: primaryRole ?? "",
      domains: domains ?? "",
    },
  ];
  const mapping: ImportMapping = {
    fullName: "fullName",
    email: "email",
    linkedInUrl: "linkedInUrl",
    xingUrl: "xingUrl",
    primaryRole: "primaryRole",
    domains: "domains",
  };
  return commitTalentImport({ rows, mapping, source: "IMPORT_MANUAL" });
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

  const webProvider = process.env.WEB_SEARCH_PROVIDER;
  const webWarnings: string[] = [];
  if (!webProvider) {
    webWarnings.push("Set WEB_SEARCH_PROVIDER to enable web scouting.");
  } else if (webProvider === "serpapi" && !process.env.SERPAPI_KEY) {
    webWarnings.push("SERPAPI_KEY is missing for serpapi provider.");
  } else if (
    webProvider === "google_cse" &&
    (!process.env.GOOGLE_CSE_KEY || !process.env.GOOGLE_CSE_CX)
  ) {
    webWarnings.push("GOOGLE_CSE_KEY and GOOGLE_CSE_CX are required for google_cse.");
  } else if (webProvider === "custom" && !process.env.WEB_SEARCH_ENDPOINT) {
    webWarnings.push("WEB_SEARCH_ENDPOINT is required for custom provider.");
  }

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
        <h1 className="text-2xl font-semibold text-ash">{hrCopy.radar.title}</h1>
        <p className="text-sm text-muted">{hrCopy.radar.subtitle}</p>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted">
        <div className="text-xs uppercase tracking-[0.2em] text-slate">
          {hrCopy.whatNextLabel}
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-4">
          {hrCopy.radar.whatNext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3 text-sm text-muted">
        <div className="text-xs uppercase tracking-[0.2em] text-slate">
          {hrCopy.radar.howItWorksTitle}
        </div>
        <p>{hrCopy.radar.howItWorksBody}</p>
        {webWarnings.length > 0 && (
          <div className="rounded-xl border border-warning/40 bg-warning/10 px-4 py-3 text-xs text-ash">
            <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate">
              Web provider not configured
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {webWarnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
        )}
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
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3 min-w-0">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            {hrCopy.radar.searchIntentTitle}
          </h2>
          <p className="text-sm text-muted">{hrCopy.radar.searchIntentBody}</p>
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

        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3 min-w-0">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            {hrCopy.radar.csvTitle}
          </h2>
          <p className="text-sm text-muted">{hrCopy.radar.csvBody}</p>
          <p className="text-xs text-slate">{hrCopy.tooltips.import}</p>
          <div className="rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-slate min-w-0 max-w-full overflow-x-auto whitespace-pre-wrap break-words">
            {hrCopy.radar.csvExample}
          </div>
          <HrImportToolkit
            previewImport={previewImport}
            commitImport={commitImport}
            manualAdd={manualAdd}
            copy={{
              importFields: hrCopy.importFields,
              importExtraFields: hrCopy.importExtraFields,
              importPresets: hrCopy.importPresets,
              importTemplates: hrCopy.importTemplates,
            }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Recent scout runs
        </h2>
        {scoutRuns.length === 0 ? (
          <p className="text-sm text-muted">No scout runs yet.</p>
        ) : (
          scoutRuns.map((run) => (
            <div
              key={run.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted"
            >
              <div>
                <div className="text-ash">{run.source}</div>
                <div className="text-xs text-slate">
                  Found {run.foundCount} · Created {run.createdCount} · Updated{" "}
                  {run.updatedCount} · Deduped {run.dedupedCount}
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {run.status}
              </div>
            </div>
          ))
        )}
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

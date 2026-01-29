import { prisma } from "@/lib/prisma";
import { requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getOutreachBadge, getMetaBadge } from "@/lib/status-badges";
import { runOutreachJob } from "@/lib/outreach/jobs";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const readPayloadText = (value: unknown) => {
  if (!isRecord(value)) return null;
  if (typeof value.text === "string") return value.text;
  if (typeof value.message === "string") return value.message;
  return null;
};

const readPayloadDeepLink = (value: unknown) => {
  if (!isRecord(value)) return null;
  if (typeof value.deepLink === "string") return value.deepLink;
  if (typeof value.link === "string") return value.link;
  if (typeof value.url === "string") return value.url;
  return null;
};

async function triggerOutreach() {
  "use server";
  const session = await requirePortalSession();
  requireLucienStaff(session.user.role);
  await runOutreachJob({
    orgId: session.user.orgId ?? undefined,
    triggeredByUserId: session.user.id,
  });
}

export default async function OutreachPage() {
  const session = await requirePortalSession();
  const scope =
    session.user.role === "lucien_admin" || session.user.role === "lucien_operator"
      ? {}
      : { orgId: session.user.orgId ?? "" };

  const [outreachLogs, emailJobs] = await Promise.all([
    prisma.outreachLog.findMany({
      where: scope,
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { talentProfile: true, staffingIntent: { include: { engagement: true } } },
    }),
    prisma.emailJob.findMany({
      where: scope,
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);

  const outreachStats = outreachLogs.reduce(
    (acc, item) => {
      if (item.status === "QUEUED") acc.queued += 1;
      if (item.status === "SENT") acc.sent += 1;
      if (item.status === "FAILED") acc.failed += 1;
      if (item.status === "REPLIED") acc.replied += 1;
      return acc;
    },
    { queued: 0, sent: 0, failed: 0, replied: 0 },
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Outreach</p>
        <h1 className="text-2xl font-semibold text-ash">Outreach queue</h1>
        <p className="text-sm text-muted">
          Email jobs and manual outreach tasks tied to staffing intents.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge {...getOutreachBadge(outreachStats)} />
        <StatusBadge
          {...getMetaBadge(`${emailJobs.filter((job) => job.status === "QUEUED").length} email jobs queued`)}
        />
        {(session.user.role === "lucien_admin" ||
          session.user.role === "lucien_operator") && (
          <form action={triggerOutreach}>
            <button
              type="submit"
              className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
            >
              Run outreach
            </button>
          </form>
        )}
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Outreach log
        </h2>
        {outreachLogs.length === 0 ? (
          <p className="text-sm text-muted">No outreach activity yet.</p>
        ) : (
          outreachLogs.map((log) => (
            <div
              key={log.id}
              className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted"
            >
              <div className="space-y-2">
                <div className="text-ash">{log.talentProfile.fullName}</div>
                <div className="text-xs text-slate">
                  {log.staffingIntent.engagement?.title ?? "Staffing intent"} ·{" "}
                  {log.channel}
                </div>
                {(log.channel === "LINKEDIN" || log.channel === "XING") && (
                  <div className="space-y-2 text-xs text-slate">
                    {readPayloadText(log.payloadJson) && (
                      <div className="whitespace-pre-line rounded-lg border border-line/80 bg-soft px-3 py-2">
                        {readPayloadText(log.payloadJson)}
                      </div>
                    )}
                    {(() => {
                      const deepLink =
                        readPayloadDeepLink(log.payloadJson) ??
                        (log.channel === "LINKEDIN"
                          ? log.talentProfile.linkedInUrl
                          : log.talentProfile.xingUrl);
                      if (!deepLink) return null;
                      return (
                        <a
                          href={deepLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-ash"
                        >
                          Open {log.channel}
                        </a>
                      );
                    })()}
                  </div>
                )}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {log.status}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Email jobs
        </h2>
        {emailJobs.length === 0 ? (
          <p className="text-sm text-muted">No email jobs recorded.</p>
        ) : (
          emailJobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line/80 bg-ink px-4 py-3 text-sm text-muted"
            >
              <div>
                <div className="text-ash">{job.toEmail}</div>
                <div className="text-xs text-slate">{job.templateKey}</div>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {job.status}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

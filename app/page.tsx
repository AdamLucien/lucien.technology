import Link from "next/link";
import { MotionIn } from "@/components/MotionIn";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  organizationSchema,
  websiteSchema,
  webPageSchema,
} from "@/lib/seo";
import { SystemMapClient } from "@/components/SystemMapClient";
import { IconStatic } from "@/components/icons/IconStatic";
import type { IconName } from "@/components/icons/iconMap";

export const metadata = buildPageMetadata({
  title: "Systems Thinking for Mission-Critical Technology",
  description:
    "Lucien architects mission-critical systems with analytical rigor, secure delivery, and operational resilience.",
  path: "/",
  keywords: [
    "systems thinking",
    "mission-critical technology",
    "enterprise architecture",
    "security-first delivery",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd id="org-schema" data={organizationSchema()} />
      <JsonLd id="website-schema" data={websiteSchema()} />
      <JsonLd id="home-webpage" data={webPageSchema({ name: "Home", path: "/" })} />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Calm authority for complex systems
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ash md:text-5xl">
              Systems Thinking for Mission-Critical Technology
            </h1>
            <p className="text-lg text-muted">
              We are not consultants. We architect systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/marketplace"
                className="btn-animate btn-primary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Explore Solutions
              </Link>
              <Link
                href="/request-scope"
                className="btn-animate btn-secondary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Request scope
              </Link>
            </div>
          </div>
          <div className="surface-card min-h-[260px] rounded-2xl border border-line/80 bg-soft p-4">
            <SystemMapClient />
          </div>
        </MotionIn>
      </section>

      <section className="border-t border-line/70 bg-ink">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-8">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate">
                  Operating contexts
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ash">
                  Built for high-consequence environments
                </h2>
              </div>
              <Link
                href="/how-we-work"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                How we work
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: "Enterprise", icon: "architecture" },
                { label: "Defense & Security", icon: "security" },
                { label: "Public Sector", icon: "governance" },
                { label: "Technology Partners", icon: "integration" },
              ].map((item) => (
                <MotionIn
                  key={item.label}
                  className="surface-card flex min-h-[52px] items-center rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate"
                >
                  <div className="flex items-center gap-2">
                    <IconStatic
                      name={item.icon as IconName}
                      size={16}
                      className="text-slate"
                    />
                    {item.label}
                  </div>
                </MotionIn>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="border-t border-line/70 bg-ink">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                Case snapshots
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ash">
                Quiet outcomes, measurable impact
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Resilience uplift",
                  detail:
                    "Reduced mission downtime exposure by 42% across a multi-site network.",
                  icon: "resilience",
                },
                {
                  title: "Secure integration",
                  detail:
                    "Unified six data sources into a controlled fusion layer in 10 weeks.",
                  icon: "integration",
                },
                {
                  title: "Operational speed",
                  detail:
                    "Cut decision latency by 31% for logistics command workflows.",
                  icon: "performance",
                },
              ].map((item) => (
                <MotionIn
                  key={item.title}
                  className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
                >
                  <div className="flex items-center gap-2 text-slate">
                    <IconStatic name={item.icon as IconName} size={18} />
                    <h3 className="text-lg font-semibold text-ash">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted">{item.detail}</p>
                </MotionIn>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="border-t border-line/70 bg-ink">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                Projects & engagements
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ash">
                Evidence of delivery in complex environments
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                A sample of completed and ongoing mission-critical engagements,
                presented without client identifiers.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Operational control recovery",
                  context:
                    "Program drift and missed delivery gates across a multi-site system.",
                  scope: "Takeover, architecture stabilization, and governance pack.",
                  status: "Completed",
                },
                {
                  title: "Secure data integration",
                  context:
                    "Fragmented data flows with inconsistent access controls.",
                  scope: "Data architecture, integration plan, and secure delivery model.",
                  status: "Active",
                },
                {
                  title: "Industrial visibility uplift",
                  context:
                    "Limited real-time insight into plant throughput and risk.",
                  scope: "Instrumentation plan, reporting pipeline, and handoff runbooks.",
                  status: "Completed",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate">
                    <span>{item.status}</span>
                    <span>Project</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ash">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.context}</p>
                  <p className="mt-3 text-sm text-muted">{item.scope}</p>
                </div>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="border-t border-line/70 bg-ink">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                What we can do
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ash">
                Systems delivery beyond advisory work
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                Lucien teams design and deliver operational systems. We stay
                accountable through build, integration, and handoff — not just
                slide decks.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Custom software built to mission needs",
                  detail:
                    "We engineer platforms, workflows, and control layers that align to mission constraints and security posture.",
                },
                {
                  title: "On-site or remote takeover",
                  detail:
                    "Embedded delivery teams stabilize critical systems fast, either on-site or through secure remote operations.",
                },
                {
                  title: "Operational integration and delivery",
                  detail:
                    "We integrate across IT, OT, and data environments with clear ownership, sequencing, and continuity plans.",
                },
                {
                  title: "Assurance through handoff",
                  detail:
                    "Every engagement ends with validated runbooks, governance, and an operational readiness review.",
                },
              ].map((item) => (
                <MotionIn
                  key={item.title}
                  className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
                >
                  <h3 className="text-lg font-semibold text-ash">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.detail}</p>
                </MotionIn>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                Marketplace
              </p>
              <h2 className="text-2xl font-semibold text-ash">
                Engage on your terms
              </h2>
              <p className="text-sm text-muted">
                Browse scoped services, filter by operational context, and open a
                secure inquiry when ready.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="btn-animate btn-primary rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
            >
              View Marketplace
            </Link>
          </MotionIn>
        </div>
      </section>
    </>
  );
}

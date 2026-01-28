import Link from "next/link";
import { insights } from "@/content/insights";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { IconStatic } from "@/components/icons/IconStatic";

export const metadata = buildPageMetadata({
  title: "Insights",
  description:
    "Analytical notes on mission-critical systems, security-first delivery, and operational resilience.",
  path: "/insights",
  keywords: ["insights", "systems architecture", "security"],
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        id="insights-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ])
        }
      />
      <JsonLd
        id="insights-webpage"
        data={webPageSchema({ name: "Insights", path: "/insights" })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/insights", label: "Insights" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Insights
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Focused analysis for complex systems
            </h1>
            <p className="text-sm text-muted">
              Short perspectives on architecture, security, and delivery for
              mission-critical environments.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Mission alignment",
              detail:
                "We analyze how architecture choices reinforce mission outcomes and operational control.",
            },
            {
              title: "Security by design",
              detail:
                "Each insight frames security as a structural element, not a post-delivery check.",
            },
            {
              title: "Delivery discipline",
              detail:
                "We focus on sequencing, governance, and measurable outcomes for high-consequence delivery.",
            },
            {
              title: "Operational resilience",
              detail:
                "Resilience is treated as a system capability with clear owners and metrics.",
            },
          ].map((item) => (
            <MotionIn
              key={item.title}
              className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </MotionIn>
          ))}
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
              Latest insights
            </h2>
            <Link
              href="/marketplace"
              className="text-xs uppercase tracking-[0.2em] text-muted"
            >
              Explore services
            </Link>
          </div>
          <div className="grid gap-4">
            {insights.map((item) => (
              <MotionIn key={item.slug} hover>
                <Link
                  href={`/insights/${item.slug}`}
                  className="card-animate block rounded-2xl border border-line/80 bg-soft p-6 transition hover:border-slate"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate">
                    <IconStatic name="insights" size={16} className="text-slate" />
                    <span>{item.date}</span>
                    <span className="text-muted">{item.readingTime}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-ash">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted">
                    {item.description}
                  </p>
                </Link>
              </MotionIn>
            ))}
          </div>
        </MotionIn>
        <MotionIn className="surface-card mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ash">
              Stay ahead of operational risk
            </h2>
            <p className="text-sm text-muted">
              Insights are written to support mission owners and technical
              leaders planning critical delivery.
            </p>
          </div>
          <Link
            href="/request-scope"
            className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Request scope
          </Link>
        </MotionIn>
      </section>
    </>
  );
}

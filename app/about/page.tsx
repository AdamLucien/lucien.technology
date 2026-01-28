import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Lucien is a systems architecture practice focused on mission-critical technology and resilient delivery.",
  path: "/about",
  keywords: ["Lucien", "systems architecture", "mission-critical"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="about-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])
        }
      />
      <JsonLd
        id="about-webpage"
        data={webPageSchema({ name: "About", path: "/about" })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              About
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              A quiet discipline for high-stakes systems
            </h1>
            <p className="text-sm text-muted">
              Lucien partners with mission owners to architect, deliver, and
              sustain technology systems that must perform under pressure.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Analytical by design",
              detail:
                "We focus on system dependencies, measurable outcomes, and risk-managed delivery paths.",
            },
            {
              title: "Enterprise-grade restraint",
              detail:
                "Our work is built for operational continuity, not presentation theatre.",
            },
            {
              title: "Aligned to mission",
              detail:
                "We prioritize mission objectives, security constraints, and operational realities.",
            },
            {
              title: "Partnered execution",
              detail:
                "We integrate with internal teams to accelerate and de-risk delivery.",
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
        <MotionIn className="surface-card mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-xl font-semibold text-ash">
            How we engage with teams
          </h2>
          <p className="mt-3 text-sm text-muted">
            We embed with mission owners, architects, and operators to ensure the
            delivery model matches operational expectations.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[
              "Joint discovery and constraint mapping",
              "Shared governance and escalation paths",
              "Operational readiness validation before handoff",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MotionIn>
        <MotionIn className="surface-card mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ash">
              Ready for a scoped engagement
            </h2>
            <p className="text-sm text-muted">
              Explore the marketplace to find the right starting point for your
              mission context.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            View marketplace
          </Link>
        </MotionIn>
      </section>
    </>
  );
}

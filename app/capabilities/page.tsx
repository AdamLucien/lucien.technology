import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export const metadata = buildPageMetadata({
  title: "Capabilities",
  description:
    "Lucien capabilities span mission architecture, secure delivery, and operational assurance for high-stakes systems.",
  path: "/capabilities",
  keywords: ["capabilities", "systems architecture", "security"],
});

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd
        id="capabilities-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capabilities" },
          ])
        }
      />
      <JsonLd
        id="capabilities-webpage"
        data={webPageSchema({ name: "Capabilities", path: "/capabilities" })}
      />
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/capabilities", label: "Capabilities" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Capabilities
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Systems architecture with operational assurance
            </h1>
            <p className="text-sm text-muted">
              Lucien delivers structured system design, secure execution, and
              mission-aligned operating models for complex environments.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Mission architecture",
              detail:
                "Define mission boundaries, control paths, and resilience requirements to guide every delivery decision.",
            },
            {
              title: "Secure delivery",
              detail:
                "Embed security and governance into delivery sequencing with clear ownership and auditability.",
            },
            {
              title: "Operational readiness",
              detail:
                "Translate architecture into runbooks, escalation paths, and continuity plans for live operations.",
            },
            {
              title: "Systems integration",
              detail:
                "Integrate legacy and modern platforms with measured migration plans and risk-managed change windows.",
            },
          ].map((item) => (
            <MotionIn
              key={item.title}
              hover
              className="card-animate rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </MotionIn>
          ))}
        </MotionIn>
        <MotionIn className="card-animate mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-xl font-semibold text-ash">Engage with clarity</h2>
          <p className="mt-3 text-sm text-muted">
            Our capabilities align to the marketplace catalog for faster scoping
            and procurement.
          </p>
          <Link
            href="/marketplace"
            className="btn-animate btn-secondary mt-6 inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Explore services
          </Link>
        </MotionIn>
      </section>
    </>
  );
}

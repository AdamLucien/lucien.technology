import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";

export const metadata = buildPageMetadata({
  title: "How We Work",
  description:
    "Lucien engagements align mission objectives, risk constraints, and delivery sequencing for complex systems.",
  path: "/how-we-work",
  keywords: ["delivery model", "systems architecture", "mission alignment"],
});

const steps = [
  {
    title: "Align on mission reality",
    detail:
      "We translate mission requirements into system constraints, dependencies, and measurable outcomes.",
  },
  {
    title: "Define risk and control boundaries",
    detail:
      "Security, safety, and compliance expectations are mapped before any delivery begins.",
  },
  {
    title: "Architect the operating system",
    detail:
      "We design the integration, governance, and delivery model needed to sustain operations.",
  },
  {
    title: "Execute with precision",
    detail:
      "Engagements are staged, traceable, and measured against mission-critical metrics.",
  },
  {
    title: "Transfer and assure",
    detail:
      "We provide runbooks, continuity plans, and ongoing assurance guidance.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        id="how-we-work-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "How We Work", path: "/how-we-work" },
          ])
        }
      />
      <JsonLd
        id="how-we-work-webpage"
        data={webPageSchema({ name: "How We Work", path: "/how-we-work" })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/how-we-work", label: "How We Work" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              How we work
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Structured engagements with measurable outcomes
            </h1>
            <p className="text-sm text-muted">
              Every engagement is tailored to the mission context, with an
              emphasis on risk management, delivery assurance, and operational
              continuity.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4">
          {steps.map((step, index) => (
            <MotionIn
              key={step.title}
              className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                Step 0{index + 1}
              </div>
              <h2 className="mt-2 text-lg font-semibold text-ash">
                {step.title}
              </h2>
              <p className="mt-3 text-sm text-muted">{step.detail}</p>
            </MotionIn>
          ))}
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Engagement structure",
              detail:
                "We combine executive alignment, technical architecture, and operational delivery into a single integrated plan.",
            },
            {
              title: "Delivery governance",
              detail:
                "Mission owners receive clear escalation paths, decision rights, and reporting for ongoing assurance.",
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
          <h2 className="text-xl font-semibold text-ash">What you receive</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[
              "A mission-aligned architecture and delivery plan",
              "Risk-managed sequencing and control design",
              "Operational readiness artifacts and runbooks",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/marketplace"
            className="btn-animate btn-secondary mt-6 inline-flex rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Explore the marketplace
          </Link>
        </MotionIn>
      </section>
    </>
  );
}

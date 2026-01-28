import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";

export const metadata = buildPageMetadata({
  title: "Responsible Use",
  description:
    "Responsible use principles for Lucien engagements and technical guidance.",
  path: "/legal/responsible-use",
  keywords: ["responsible use", "lawful", "compliance"],
});

export default function ResponsibleUsePage() {
  return (
    <>
      <JsonLd
        id="responsible-use-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: "Responsible Use", path: "/legal/responsible-use" },
          ])
        }
      />
      <JsonLd
        id="responsible-use-webpage"
        data={webPageSchema({ name: "Responsible Use", path: "/legal/responsible-use" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/responsible-use", label: "Responsible Use" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Responsible use
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              High-assurance engagement principles
            </h1>
            <p className="text-sm text-muted">
              Lucien operates with strict responsible use standards. We do not
              provide operational tradecraft, targeting guidance, or
              circumvention assistance.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "No support for wrongdoing",
              body:
                "We decline requests that facilitate unlawful activity, misuse, or unapproved operations.",
            },
            {
              title: "No operational tradecraft",
              body:
                "We do not provide instructions for surveillance, evasion, or targeting.",
            },
            {
              title: "Compliance-first delivery",
              body:
                "Engagements are scoped with governance, authorization checks, and auditability.",
            },
            {
              title: "Client qualification",
              body:
                "We validate mission alignment and legal authority before executing sensitive work.",
            },
            {
              title: "Human-in-the-loop",
              body:
                "Critical decisions require accountable human oversight and documented approval paths.",
            },
            {
              title: "Auditability",
              body:
                "Systems are designed to provide traceable logs and defensible control paths.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">{section.title}</h2>
              <p className="mt-3 text-sm text-muted">{section.body}</p>
            </div>
          ))}
        </MotionIn>
        <LegalCta />
      </section>
    </>
  );
}

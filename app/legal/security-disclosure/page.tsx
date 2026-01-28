import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";
import { brand } from "@/lib/brand";

export const metadata = buildPageMetadata({
  title: "Security Disclosure",
  description:
    "Security posture and responsible disclosure guidance for Lucien systems.",
  path: "/legal/security-disclosure",
  keywords: ["security", "disclosure", "responsible"],
});

export default function SecurityDisclosurePage() {
  return (
    <>
      <JsonLd
        id="security-disclosure-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            {
              name: "Security Disclosure",
              path: "/legal/security-disclosure",
            },
          ])
        }
      />
      <JsonLd
        id="security-disclosure-webpage"
        data={webPageSchema({ name: "Security Disclosure", path: "/legal/security-disclosure" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/security-disclosure", label: "Security" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Security disclosure
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Responsible security communication
            </h1>
            <p className="text-sm text-muted">
              We welcome responsible disclosure of security issues. Please avoid
              operational details or sensitive exploitation guidance.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "Report responsibly",
              body:
                `Submit high-level findings to ${brand.email}. Do not include exploit payloads or operational tradecraft.`,
            },
            {
              title: "No classified handling claims",
              body:
                "Lucien does not claim certification for classified handling and will scope work to appropriate data sensitivity.",
            },
            {
              title: "Incident response",
              body:
                "We coordinate remediation based on severity and mission impact, with clear timelines and documented outcomes.",
            },
            {
              title: "Secure communications",
              body:
                "We provide secure communication guidance once engagement context is established.",
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

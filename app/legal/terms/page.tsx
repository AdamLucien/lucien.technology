import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";
import { brand } from "@/lib/brand";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use governing lawful, authorized access to Lucien services and materials.",
  path: "/legal/terms",
  keywords: ["terms", "acceptable use", "lawful access"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        id="terms-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: "Terms of Use", path: "/legal/terms" },
          ])
        }
      />
      <JsonLd
        id="terms-webpage"
        data={webPageSchema({ name: "Terms of Use", path: "/legal/terms" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/terms", label: "Terms" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Terms of use
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Acceptable use and engagement terms
            </h1>
            <p className="text-sm text-muted">
              These terms govern access to Lucien materials and services. Use of
              this site and any engagement must be lawful, authorized, and
              aligned to responsible use principles.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "Acceptable use",
              body:
                "You may not use Lucien materials or services to request or enable unlawful activity, evasion, targeting guidance, or operational tradecraft.",
            },
            {
              title: "No implied license",
              body:
                "All rights are reserved. No license to intellectual property is granted except by explicit written agreement.",
            },
            {
              title: "Confidentiality disclaimer",
              body:
                "Sharing information through this site does not create a client relationship until a formal agreement is executed.",
            },
            {
              title: "Limitation of liability",
              body:
                "Lucien provides materials as-is without warranties. Liability is limited to the maximum extent permitted by law.",
            },
            {
              title: "Governing law",
              body: `These terms are governed by ${brand.governingLaw}.`,
            },
            {
              title: "Dispute resolution",
              body:
                "Dispute resolution terms will be provided in written agreements or statements of work.",
            },
            {
              title: "Export controls",
              body:
                "You are responsible for compliance with applicable export controls, sanctions, and dual-use restrictions.",
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

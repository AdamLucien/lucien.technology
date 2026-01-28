import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";
import { brand } from "@/lib/brand";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy describing Lucien data collection and usage.",
  path: "/legal/privacy",
  keywords: ["privacy", "data", "policy"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        id="privacy-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
            { name: "Privacy", path: "/legal/privacy" },
          ])
        }
      />
      <JsonLd
        id="privacy-webpage"
        data={webPageSchema({ name: "Privacy Policy", path: "/legal/privacy" })}
      />
      <section className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
              { href: "/legal/privacy", label: "Privacy" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Privacy policy
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Data handling and privacy
            </h1>
            <p className="text-sm text-muted">
              This policy describes the data we collect, how it is used, and the
              safeguards in place for Lucien inquiries and engagements.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 space-y-6">
          {[
            {
              title: "Data collected",
              body:
                "We collect inquiry form data such as name, work email, organization, role, service interest, message content, and consent confirmation. We also capture basic analytics for site performance.",
            },
            {
              title: "Purpose of use",
              body:
                "Data is used to respond to inquiries, scope engagements, and improve operational performance. We do not sell personal data.",
            },
            {
              title: "Retention",
              body:
                "Inquiry records are retained only as long as needed to fulfill business and legal obligations, then securely deleted or archived.",
            },
            {
              title: "Security measures",
              body:
                "We apply a risk-managed approach including access controls, secure storage, and audit-ready handling procedures.",
            },
            {
              title: "Processors",
              body:
                "We may use vetted infrastructure providers for hosting, analytics, and transactional processing. Subprocessors are subject to confidentiality and security requirements.",
            },
            {
              title: "Your rights",
              body:
                `You may request access, correction, or deletion of personal data by contacting ${brand.email}.`,
            },
            {
              title: "Policy changes",
              body:
                "We may update this policy periodically and will post revisions on this page.",
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

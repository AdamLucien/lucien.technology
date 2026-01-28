import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { LegalCta } from "@/components/LegalCta";
import { IconStatic } from "@/components/icons/IconStatic";

export const metadata = buildPageMetadata({
  title: "Legal",
  description: "Legal and compliance documents for Lucien engagements.",
  path: "/legal",
  keywords: ["legal", "terms", "privacy", "responsible use"],
});

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/cookies", label: "Cookie Notice" },
  { href: "/legal/responsible-use", label: "Responsible Use" },
  { href: "/legal/security-disclosure", label: "Security Disclosure" },
  { href: "/legal/export-controls", label: "Export Controls" },
  { href: "/procurement", label: "Procurement Guidance" },
];

const legalIcons: Record<string, Parameters<typeof IconStatic>[0]["name"]> = {
  "Terms of Use": "legal",
  "Privacy Policy": "compliance",
  "Cookie Notice": "controls",
  "Responsible Use": "governance",
  "Security Disclosure": "security",
  "Export Controls": "controls",
  "Procurement Guidance": "governance",
};

export default function LegalPage() {
  return (
    <>
      <JsonLd
        id="legal-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal", path: "/legal" },
          ])
        }
      />
      <JsonLd
        id="legal-webpage"
        data={webPageSchema({ name: "Legal", path: "/legal" })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal", label: "Legal" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Legal
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Legal and compliance resources
            </h1>
            <p className="text-sm text-muted">
              These documents outline acceptable use, privacy, security
              disclosure, and export control considerations for Lucien
              engagements.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4">
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-animate rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate transition hover:border-slate"
            >
              <span className="inline-flex items-center gap-2">
                <IconStatic
                  name={legalIcons[item.label] ?? "legal"}
                  size={16}
                  className="text-slate"
                />
                {item.label}
              </span>
            </Link>
          ))}
        </MotionIn>
        <LegalCta />
      </section>
    </>
  );
}

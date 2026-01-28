import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { brand } from "@/lib/brand";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Submit a scoped engagement request with Lucien for mission-critical systems.",
  path: "/contact",
  keywords: ["request scope", "contact", "Lucien"],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams:
    | {
        service?: string | string[];
        mode?: string | string[];
      }
    | Promise<{
        service?: string | string[];
        mode?: string | string[];
      }>;
}) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const allowedModes = new Set(["remote", "hybrid", "on-site"]);
  const serviceParam = Array.isArray(resolvedSearchParams.service)
    ? resolvedSearchParams.service[0]
    : resolvedSearchParams.service;
  const modeParam = Array.isArray(resolvedSearchParams.mode)
    ? resolvedSearchParams.mode[0]
    : resolvedSearchParams.mode;
  const modeValue = modeParam && allowedModes.has(modeParam) ? modeParam : "remote";

  return (
    <>
      <JsonLd
        id="contact-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])
        }
      />
      <JsonLd
        id="contact-webpage"
        data={webPageSchema({ name: "Contact", path: "/contact" })}
      />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Request scope
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Start a scoped engagement request
            </h1>
            <p className="text-sm text-muted">
              Share the operational problem and timeframe. We review for fit
              and respond through secure channels.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-lg font-semibold text-ash">
              Confidentiality-first
            </h2>
            <p className="mt-3 text-sm text-muted">
              We treat inquiry information as sensitive and align engagement
              setup to secure communication practices.
            </p>
            <Link
              href="/security"
              className="btn-animate btn-secondary mt-4 inline-flex rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]"
            >
              Review security posture
            </Link>
          </div>
          <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6">
            <h2 className="text-lg font-semibold text-ash">
              Preferred contact
            </h2>
            <p className="mt-3 text-sm text-muted">
              For sensitive topics, begin with a high-level summary. We will
              guide next steps and secure channels as needed.
            </p>
            <p className="mt-4 text-sm text-slate">{brand.email}</p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10">
          <InquiryForm
            initialService={serviceParam ?? ""}
            initialMode={modeValue}
            redirectTo="/request-scope/confirm"
          />
        </MotionIn>
      </section>
    </>
  );
}

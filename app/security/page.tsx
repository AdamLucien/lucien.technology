import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo";
import { MotionIn } from "@/components/MotionIn";
import { IconStatic } from "@/components/icons/IconStatic";

export const metadata = buildPageMetadata({
  title: "Security & Responsible Use",
  description:
    "Lucien operates with a confidentiality-first posture and a risk-managed, responsible use framework.",
  path: "/security",
  keywords: ["security posture", "responsible use", "confidentiality"],
});

const securityFaq = [
  {
    question: "Do you provide NDAs?",
    answer:
      "Yes. Mutual and client-provided NDAs are available to protect sensitive discussions.",
  },
  {
    question: "Do you claim specific certifications?",
    answer:
      "We align with industry best practices and maintain a risk-managed approach without claiming certifications.",
  },
];

const securityTitleIcons: Record<string, Parameters<typeof IconStatic>[0]["name"]> =
  {
    "Confidentiality-first": "security",
    "NDA availability": "compliance",
    "Responsible use principles": "governance",
    "Secure communication guidance": "controls",
  };

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        id="security-breadcrumb"
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Security", path: "/security" },
          ])
        }
      />
      <JsonLd
        id="security-webpage"
        data={webPageSchema({ name: "Security", path: "/security" })}
      />
      <JsonLd id="security-faq" data={faqSchema(securityFaq)} />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <MotionIn className="space-y-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/security", label: "Security" },
            ]}
          />
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              Security & responsible use
            </p>
            <h1 className="text-3xl font-semibold text-ash">
              Confidentiality-first engagement
            </h1>
            <p className="text-sm text-muted">
              We operate with a strict confidentiality posture, aligned to
              industry best practices, and a risk-managed approach to system
              design and delivery.
            </p>
          </div>
        </MotionIn>
        <MotionIn className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Confidentiality-first",
              detail:
                "We treat sensitive information as mission critical, limiting access and exposure by design.",
            },
            {
              title: "NDA availability",
              detail:
                "Mutual NDAs are available to ensure clarity and trust before detailed exchanges.",
            },
            {
              title: "Responsible use principles",
              detail:
                "Engagements prioritize safety, governance, and risk containment over rapid experimentation.",
            },
            {
              title: "Secure communication guidance",
              detail:
                "We provide general guidance on secure channels and avoid operational or sensitive instructions.",
            },
          ].map((item) => (
            <MotionIn
              key={item.title}
              className="surface-card rounded-2xl border border-line/80 bg-soft p-6"
            >
              <h2 className="text-lg font-semibold text-ash">
                {securityTitleIcons[item.title] ? (
                  <span className="inline-flex items-center gap-2">
                    <IconStatic
                      name={securityTitleIcons[item.title]}
                      size={16}
                      className="text-slate"
                    />
                    {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </h2>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </MotionIn>
          ))}
        </MotionIn>
        <MotionIn className="surface-card mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-xl font-semibold text-ash">
            Responsible use focus
          </h2>
          <p className="mt-3 text-sm text-muted">
            We avoid operational tradecraft and any guidance that could be
            misused. Engagements are scoped to support safe, lawful, and
            mission-aligned outcomes.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[
              "No surveillance or evasion tactics are provided",
              "Control paths and governance are always explicit",
              "Risk management is prioritized over speed",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </MotionIn>
        <MotionIn className="surface-card mt-10 rounded-2xl border border-line/80 bg-soft p-6">
          <h2 className="text-lg font-semibold text-ash">FAQ</h2>
          <div className="mt-4 space-y-4 text-sm text-muted">
            {securityFaq.map((item) => (
              <div key={item.question}>
                <p className="text-ash">{item.question}</p>
                <p className="mt-2 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </MotionIn>
        <MotionIn className="surface-card mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line/80 bg-soft p-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ash">
              Start a secure inquiry
            </h2>
            <p className="text-sm text-muted">
              Share your high-level context and we will guide next steps through
              secure channels.
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

import Link from "next/link";
import { MotionIn } from "@/components/MotionIn";
import { IconStatic } from "@/components/icons/IconStatic";
import { PartnersForm } from "@/components/partners/PartnersForm";
import { getLocaleFromRequest, normalizeLocale, t } from "@/lib/i18n";
import { roleGroups } from "@/lib/talent/taxonomy";

const signalCards = [
  {
    icon: "industrial",
    titleKey: "partners.signals.i4.title",
    bodyKey: "partners.signals.i4.body",
  },
  {
    icon: "delivery",
    titleKey: "partners.signals.sc.title",
    bodyKey: "partners.signals.sc.body",
  },
  {
    icon: "resilience",
    titleKey: "partners.signals.mc.title",
    bodyKey: "partners.signals.mc.body",
  },
] as const;

const howSteps = [
  {
    icon: "inputs",
    titleKey: "partners.how.step1.title",
    bodyKey: "partners.how.step1.body",
  },
  {
    icon: "process",
    titleKey: "partners.how.step2.title",
    bodyKey: "partners.how.step2.body",
  },
  {
    icon: "deliverables",
    titleKey: "partners.how.step3.title",
    bodyKey: "partners.how.step3.body",
  },
] as const;

type PartnersPageProps = {
  searchParams?: { lang?: string };
};

export default async function PartnersPage({ searchParams }: PartnersPageProps) {
  const localeFromParam = normalizeLocale(searchParams?.lang);
  const locale = localeFromParam ?? (await getLocaleFromRequest());

  return (
    <>
      <section className="relative overflow-hidden border-b border-line/70">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(250,250,250,0.16),_transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(90,110,140,0.22),_transparent_70%)] blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
          <MotionIn className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                {t("partners.hero.eyebrow", locale)}
              </p>
              <h1 className="text-3xl font-semibold text-ash md:text-4xl">
                {t("partners.hero.title", locale)}
              </h1>
              <p className="max-w-2xl text-sm text-muted">
                {t("partners.hero.subtitle", locale)}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#join"
                  className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  {t("partners.hero.cta.primary", locale)}
                </Link>
                <Link
                  href="#how"
                  className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  {t("partners.hero.cta.secondary", locale)}
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {signalCards.map((card) => (
                <div
                  key={card.titleKey}
                  className="surface-card rounded-2xl border border-line/80 bg-soft p-5"
                >
                  <div className="flex items-center gap-3 text-sm text-ash">
                    <IconStatic name={card.icon} size={18} className="text-slate" />
                    <span className="text-xs uppercase tracking-[0.2em] text-slate">
                      {t(card.titleKey, locale)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{t(card.bodyKey, locale)}</p>
                </div>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section id="how" className="mx-auto w-full max-w-6xl px-6 py-16">
        <MotionIn className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              {t("partners.how.title", locale)}
            </p>
            <h2 className="text-2xl font-semibold text-ash">
              {t("partners.how.subtitle", locale)}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {howSteps.map((step) => (
              <div
                key={step.titleKey}
                className="surface-card rounded-2xl border border-line/80 bg-soft p-5"
              >
                <div className="flex items-center gap-3 text-sm text-ash">
                  <IconStatic name={step.icon} size={18} className="text-slate" />
                  <span className="text-xs uppercase tracking-[0.2em] text-slate">
                    {t(step.titleKey, locale)}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">{t(step.bodyKey, locale)}</p>
              </div>
            ))}
          </div>
        </MotionIn>
      </section>

      <section id="roles" className="border-t border-line/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                {t("partners.roles.title", locale)}
              </p>
              <p className="max-w-2xl text-sm text-muted">
                {t("partners.roles.subtitle", locale)}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {roleGroups.map((group) => (
                <div
                  key={group.id}
                  className="surface-card rounded-2xl border border-line/80 bg-soft p-5"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] text-slate">
                    {t(group.labelKey, locale)}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.roles.map((role) => (
                      <span
                        key={role.id}
                        className="rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate"
                      >
                        {t(role.labelKey, locale)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionIn>
        </div>
      </section>

      <section id="companies" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <MotionIn className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate">
              {t("partners.companies.title", locale)}
            </p>
            <p className="text-sm text-muted">{t("partners.companies.body", locale)}</p>
          </div>
          <div className="surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
            {t("partners.companies.highlight", locale)}
          </div>
        </MotionIn>
      </section>

      <section id="join" className="border-t border-line/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <MotionIn className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">
                {t("partners.join.title", locale)}
              </p>
              <p className="text-sm text-muted">{t("partners.join.subtitle", locale)}</p>
            </div>
            <PartnersForm locale={locale} />
          </MotionIn>
        </div>
      </section>
    </>
  );
}

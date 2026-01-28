"use client";

import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { t, type SupportedLocale } from "@/lib/i18n";
import {
  availabilityOptions,
  domainOptions,
  engagementModeOptions,
  languageOptions,
  rateBandOptions,
  roleGroups,
  seniorityOptions,
  type TaxonomyOption,
} from "@/lib/talent/taxonomy";

const formId = "partners-signal-form";

type PartnersFormProps = {
  locale?: SupportedLocale;
};

type FormState = {
  fullName: string;
  email: string;
  locationTimezone: string;
  linkedInUrl: string;
  primaryRole: string;
  secondaryRoles: string[];
  domains: string[];
  seniority: string;
  availabilityWindow: string;
  engagementModes: string[];
  rateBand: string;
  languages: string[];
  consent: boolean;
  honeypot: string;
};

const emptyState: FormState = {
  fullName: "",
  email: "",
  locationTimezone: "",
  linkedInUrl: "",
  primaryRole: "",
  secondaryRoles: [],
  domains: [],
  seniority: "",
  availabilityWindow: "",
  engagementModes: [],
  rateBand: "",
  languages: [],
  consent: false,
  honeypot: "",
};

const toggleValue = (list: string[], value: string) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

const normalizeList = (list: string[]) => Array.from(new Set(list.filter(Boolean)));

const buildLabelMap = (options: TaxonomyOption[], locale?: SupportedLocale) => {
  return new Map(options.map((option) => [option.id, t(option.labelKey, locale)]));
};

export function PartnersForm({ locale }: PartnersFormProps) {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState<FormState>(emptyState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const roleOptions = useMemo(
    () => roleGroups.flatMap((group) => group.roles),
    [],
  );
  const roleLabelMap = useMemo(
    () => buildLabelMap(roleOptions, locale),
    [roleOptions, locale],
  );
  const domainLabelMap = useMemo(
    () => buildLabelMap(domainOptions, locale),
    [locale],
  );
  const seniorityLabelMap = useMemo(
    () => buildLabelMap(seniorityOptions, locale),
    [locale],
  );
  const availabilityLabelMap = useMemo(
    () => buildLabelMap(availabilityOptions, locale),
    [locale],
  );
  const engagementModeLabelMap = useMemo(
    () => buildLabelMap(engagementModeOptions, locale),
    [locale],
  );
  const rateBandLabelMap = useMemo(
    () => buildLabelMap(rateBandOptions, locale),
    [locale],
  );
  const languageLabelMap = useMemo(
    () => buildLabelMap(languageOptions, locale),
    [locale],
  );

  const resolveLabels = (list: string[], map: Map<string, string>) => {
    if (list.length === 0) return t("partners.summary.none", locale);
    return list.map((item) => map.get(item) ?? item).join(", ");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorKey(null);

    if (!formState.domains.length || !formState.consent) {
      setErrorKey("partners.form.error.invalid");
      return;
    }

    setStatus("submitting");

    try {
      const payload = {
        ...formState,
        email: formState.email.trim().toLowerCase(),
        secondaryRoles: normalizeList(formState.secondaryRoles),
        domains: normalizeList(formState.domains),
        engagementModes: normalizeList(formState.engagementModes),
        languages: normalizeList(formState.languages),
        locale,
      };

      const response = await fetch("/api/partners/signal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data?.ok) {
        setStatus("success");
        setSubmittedData(payload);
        setFormState(emptyState);
      } else {
        setStatus("error");
        setErrorKey(
          typeof data?.messageKey === "string"
            ? data.messageKey
            : "partners.form.error.generic",
        );
      }
    } catch {
      setStatus("error");
      setErrorKey("partners.form.error.generic");
    }
  };

  if (status === "success" && submittedData) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">
            {t("partners.success.title", locale)}
          </p>
          <h2 className="text-2xl font-semibold text-ash">
            {t("partners.success.subtitle", locale)}
          </h2>
          <p className="text-sm text-muted">{t("partners.success.next", locale)}</p>
        </div>
        <div className="surface-card relative overflow-hidden rounded-2xl border border-line/80 bg-soft p-6">
          <div
            className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,250,250,0.12),_transparent_60%)] ${
              prefersReducedMotion ? "" : "animate-pulse"
            }`}
          />
          <div className="relative space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate">
              {t("partners.success.summary.title", locale)}
            </h3>
            <dl className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.fullName", locale)}
                </dt>
                <dd className="text-ash">{submittedData.fullName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.email", locale)}
                </dt>
                <dd className="text-ash">{submittedData.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.locationTimezone", locale)}
                </dt>
                <dd className="text-ash">
                  {submittedData.locationTimezone || t("partners.summary.none", locale)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.linkedIn", locale)}
                </dt>
                <dd className="text-ash">
                  {submittedData.linkedInUrl || t("partners.summary.none", locale)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.primaryRole", locale)}
                </dt>
                <dd className="text-ash">
                  {roleLabelMap.get(submittedData.primaryRole) ?? submittedData.primaryRole}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.secondaryRoles", locale)}
                </dt>
                <dd className="text-ash">
                  {resolveLabels(submittedData.secondaryRoles, roleLabelMap)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.domains", locale)}
                </dt>
                <dd className="text-ash">
                  {resolveLabels(submittedData.domains, domainLabelMap)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.seniority", locale)}
                </dt>
                <dd className="text-ash">
                  {seniorityLabelMap.get(submittedData.seniority) ?? submittedData.seniority}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.availability", locale)}
                </dt>
                <dd className="text-ash">
                  {availabilityLabelMap.get(submittedData.availabilityWindow) ??
                    submittedData.availabilityWindow}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.engagementModes", locale)}
                </dt>
                <dd className="text-ash">
                  {resolveLabels(submittedData.engagementModes, engagementModeLabelMap)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.rateBand", locale)}
                </dt>
                <dd className="text-ash">
                  {submittedData.rateBand
                    ? rateBandLabelMap.get(submittedData.rateBand) ?? submittedData.rateBand
                    : t("partners.summary.none", locale)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t("partners.summary.languages", locale)}
                </dt>
                <dd className="text-ash">
                  {resolveLabels(submittedData.languages, languageLabelMap)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form
        id={formId}
        onSubmit={onSubmit}
        className="surface-card space-y-6 rounded-2xl border border-line/80 bg-soft p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.fullName.label", locale)}
            <input
              name="fullName"
              required
              value={formState.fullName}
              onChange={(event) =>
                setFormState((current) => ({ ...current, fullName: event.target.value }))
              }
              placeholder={t("partners.form.fullName.placeholder", locale)}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.email.label", locale)}
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={(event) =>
                setFormState((current) => ({ ...current, email: event.target.value }))
              }
              placeholder={t("partners.form.email.placeholder", locale)}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.locationTimezone.label", locale)}
            <input
              name="locationTimezone"
              value={formState.locationTimezone}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  locationTimezone: event.target.value,
                }))
              }
              placeholder={t("partners.form.locationTimezone.placeholder", locale)}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.linkedIn.label", locale)}
            <input
              name="linkedInUrl"
              value={formState.linkedInUrl}
              onChange={(event) =>
                setFormState((current) => ({ ...current, linkedInUrl: event.target.value }))
              }
              placeholder={t("partners.form.linkedIn.placeholder", locale)}
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            />
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.primaryRole.label", locale)}
            <select
              name="primaryRole"
              required
              value={formState.primaryRole}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  primaryRole: event.target.value,
                  secondaryRoles: current.secondaryRoles.filter(
                    (item) => item !== event.target.value,
                  ),
                }))
              }
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">
                {t("partners.form.primaryRole.placeholder", locale)}
              </option>
              {roleGroups.map((group) => (
                <optgroup key={group.id} label={t(group.labelKey, locale)}>
                  {group.roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {t(role.labelKey, locale)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.seniority.label", locale)}
            <select
              name="seniority"
              required
              value={formState.seniority}
              onChange={(event) =>
                setFormState((current) => ({ ...current, seniority: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">{t("partners.form.seniority.placeholder", locale)}</option>
              {seniorityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {t(option.labelKey, locale)}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.availability.label", locale)}
            <select
              name="availabilityWindow"
              required
              value={formState.availabilityWindow}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  availabilityWindow: event.target.value,
                }))
              }
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">
                {t("partners.form.availability.placeholder", locale)}
              </option>
              {availabilityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {t(option.labelKey, locale)}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-slate">
            {t("partners.form.rateBand.label", locale)}
            <select
              name="rateBand"
              value={formState.rateBand}
              onChange={(event) =>
                setFormState((current) => ({ ...current, rateBand: event.target.value }))
              }
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            >
              <option value="">{t("partners.form.rateBand.placeholder", locale)}</option>
              {rateBandOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {t(option.labelKey, locale)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm text-slate">
              {t("partners.form.secondaryRoles.label", locale)}
            </div>
            <div className="text-xs text-muted">
              {t("partners.form.secondaryRoles.helper", locale)}
            </div>
          </div>
          <div className="space-y-4">
            {roleGroups.map((group) => (
              <div key={group.id} className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t(group.labelKey, locale)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.roles.map((role) => {
                    const isSelected = formState.secondaryRoles.includes(role.id);
                    return (
                      <button
                        key={role.id}
                        type="button"
                        aria-pressed={isSelected}
                        className={`btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${
                          isSelected
                            ? "border-ash bg-ink/70 text-ash"
                            : "border-line text-slate hover:text-ash"
                        }`}
                        onClick={() =>
                          setFormState((current) => ({
                            ...current,
                            secondaryRoles: toggleValue(current.secondaryRoles, role.id),
                          }))
                        }
                      >
                        {t(role.labelKey, locale)}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm text-slate">
              {t("partners.form.domains.label", locale)}
            </div>
            <div className="text-xs text-muted">
              {t("partners.form.domains.helper", locale)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {domainOptions.map((option) => {
              const isSelected = formState.domains.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  className={`btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${
                    isSelected
                      ? "border-ash bg-ink/70 text-ash"
                      : "border-line text-slate hover:text-ash"
                  }`}
                  onClick={() =>
                    setFormState((current) => ({
                      ...current,
                      domains: toggleValue(current.domains, option.id),
                    }))
                  }
                >
                  {t(option.labelKey, locale)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm text-slate">
              {t("partners.form.engagementModes.label", locale)}
            </div>
            <div className="text-xs text-muted">
              {t("partners.form.engagementModes.helper", locale)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {engagementModeOptions.map((option) => {
              const isSelected = formState.engagementModes.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  className={`btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${
                    isSelected
                      ? "border-ash bg-ink/70 text-ash"
                      : "border-line text-slate hover:text-ash"
                  }`}
                  onClick={() =>
                    setFormState((current) => ({
                      ...current,
                      engagementModes: toggleValue(current.engagementModes, option.id),
                    }))
                  }
                >
                  {t(option.labelKey, locale)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm text-slate">
              {t("partners.form.languages.label", locale)}
            </div>
            <div className="text-xs text-muted">
              {t("partners.form.languages.helper", locale)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {languageOptions.map((option) => {
              const isSelected = formState.languages.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  className={`btn-animate rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] ${
                    isSelected
                      ? "border-ash bg-ink/70 text-ash"
                      : "border-line text-slate hover:text-ash"
                  }`}
                  onClick={() =>
                    setFormState((current) => ({
                      ...current,
                      languages: toggleValue(current.languages, option.id),
                    }))
                  }
                >
                  {t(option.labelKey, locale)}
                </button>
              );
            })}
          </div>
        </div>

        <label className="hidden" aria-hidden="true">
          {t("partners.form.honeypot.label", locale)}
          <input
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
            value={formState.honeypot}
            onChange={(event) =>
              setFormState((current) => ({ ...current, honeypot: event.target.value }))
            }
          />
        </label>

        <label className="flex items-start gap-3 text-sm text-slate">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formState.consent}
            onChange={(event) =>
              setFormState((current) => ({ ...current, consent: event.target.checked }))
            }
            className="mt-1 h-4 w-4 accent-ash"
          />
          <span>{t("partners.form.consent.label", locale)}</span>
        </label>

        {errorKey && (
          <div aria-live="polite" className="text-xs text-[#E5A4A4]">
            {t(errorKey, locale)}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            {t("partners.join.subtitle", locale)}
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-animate btn-primary hidden rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em] sm:inline-flex"
          >
            {status === "submitting"
              ? t("partners.form.submitting", locale)
              : t("partners.form.submit", locale)}
          </button>
        </div>
      </form>
      {status !== "success" && (
        <div className="fixed bottom-4 left-0 right-0 z-20 flex justify-center px-6 sm:hidden">
          <button
            type="submit"
            form={formId}
            disabled={status === "submitting"}
            className="btn-animate btn-primary w-full max-w-sm rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em]"
          >
            {status === "submitting"
              ? t("partners.form.submitting", locale)
              : t("partners.form.submitSticky", locale)}
          </button>
        </div>
      )}
    </div>
  );
}

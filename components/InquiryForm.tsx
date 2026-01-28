"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { services } from "@/content/services";

const timeframeOptions = [
  "Immediate",
  "1-3 months",
  "Strategic",
];

type InquiryFormProps = {
  initialService?: string;
  initialMode?: string;
  initialNote?: string;
  initialTimeframe?: string;
  redirectTo?: string;
};

export function InquiryForm({
  initialService = "",
  initialMode = "remote",
  initialNote = "",
  initialTimeframe = "",
  redirectTo = "/request-scope/confirm",
}: InquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [service, setService] = useState(initialService);
  const [mode] = useState(initialMode);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [note, setNote] = useState(initialNote);
  const [timeframe, setTimeframe] = useState(initialTimeframe);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const consent = formData.get("consent") === "on";
    const payload = Object.fromEntries(formData.entries());
    const formService =
      typeof payload.serviceSlug === "string" ? payload.serviceSlug : "";
    const selectedService = service || formService;

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          serviceSlug: selectedService,
          consent,
          mode,
        }),
      });
      const data = await response.json();

      if (response.status === 202 && data?.ok) {
        setStatus("success");
        if (redirectTo) {
          const url = new URL(redirectTo, window.location.origin);
          if (data?.id) {
            url.searchParams.set("id", data.id);
          }
          router.push(`${url.pathname}${url.search}`);
        }
        event.currentTarget.reset();
        setService("");
        setNote("");
        setTimeframe("");
      } else if (response.status === 400 && data?.errors) {
        setStatus("error");
        setErrors(data.errors);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-2xl border border-line/80 bg-soft p-6"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-slate">
        Delivery mode: <span className="text-ash">{mode}</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate">
          Organization name
          <input
            name="organization"
            required
            aria-invalid={Boolean(errors.organization?.length)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
          {errors.organization?.[0] && (
            <p className="text-xs text-[#E5A4A4]">{errors.organization[0]}</p>
          )}
        </label>
        <label className="space-y-2 text-sm text-slate">
          Your role
          <input
            name="role"
            required
            aria-invalid={Boolean(errors.role?.length)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
          {errors.role?.[0] && (
            <p className="text-xs text-[#E5A4A4]">{errors.role[0]}</p>
          )}
        </label>
        <label className="space-y-2 text-sm text-slate">
          Problem area
          <select
            name="serviceSlug"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
            aria-invalid={Boolean(errors.serviceSlug?.length)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
          {errors.serviceSlug?.[0] && (
            <p className="text-xs text-[#E5A4A4]">{errors.serviceSlug[0]}</p>
          )}
        </label>
        <label className="space-y-2 text-sm text-slate">
          Timeframe
          <select
            name="timeframe"
            required
            value={timeframe}
            onChange={(event) => setTimeframe(event.target.value)}
            aria-invalid={Boolean(errors.timeframe?.length)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          >
            <option value="">Select a timeframe</option>
            {timeframeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeframe?.[0] && (
            <p className="text-xs text-[#E5A4A4]">{errors.timeframe[0]}</p>
          )}
        </label>
        <label className="space-y-2 text-sm text-slate">
          Work email
          <input
            type="email"
            name="email"
            required
            aria-invalid={Boolean(errors.email?.length)}
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
          {errors.email?.[0] && (
            <p className="text-xs text-[#E5A4A4]">{errors.email[0]}</p>
          )}
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate">
        Short critical note (optional, 140 chars)
        <input
          name="note"
          maxLength={140}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          aria-invalid={Boolean(errors.note?.length)}
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          placeholder="Key constraint or urgency, if any."
        />
        {errors.note?.[0] && (
          <p className="text-xs text-[#E5A4A4]">{errors.note[0]}</p>
        )}
      </label>
      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="flex items-start gap-3 text-sm text-slate">
        <input
          type="checkbox"
          name="consent"
          required
          aria-invalid={Boolean(errors.consent?.length)}
          className="mt-1 h-4 w-4 accent-ash"
        />
        <span>
          I confirm this inquiry is lawful and does not request restricted
          instructions.
        </span>
      </label>
      {errors.consent?.[0] && (
        <p className="text-xs text-[#E5A4A4]">{errors.consent[0]}</p>
      )}
      <p className="text-xs text-muted">
        You will receive a fixed-price scoping proposal before any work starts.
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted">
          This scoping step is required before any engagement. We respond within
          2 business days.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
        >
          {status === "submitting" ? "Submitting" : "Request scope"}
        </button>
      </div>
      {status === "error" && (
        <div aria-live="polite" className="text-xs text-[#E5A4A4]">
          We could not submit the request. Please review the form and try again.
        </div>
      )}
    </form>
  );
}

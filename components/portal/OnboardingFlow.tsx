"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type EngagementOption = {
  id: string;
  title: string;
};

type OnboardingFlowProps = {
  orgName: string;
  userName: string | null;
  userEmail: string;
  isOrgAdmin: boolean;
  engagements: EngagementOption[];
};

type OnboardingState = {
  preferredChannel: string;
  primaryEngagementId: string;
  ndaStatus: string;
  accessPreference: string;
  dataConstraints: string;
  acceptedTerms: boolean;
};

const stepTitles = [
  "Confirm profile",
  "Engagement context",
  "Security & access readiness",
];

export function OnboardingFlow({
  orgName,
  userName,
  userEmail,
  isOrgAdmin,
  engagements,
}: OnboardingFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<OnboardingState>({
    preferredChannel: "Secure email",
    primaryEngagementId: engagements[0]?.id ?? "",
    ndaStatus: "NDA in place",
    accessPreference: "Secure portal",
    dataConstraints: "",
    acceptedTerms: false,
  });

  const updateField = <K extends keyof OnboardingState>(
    key: K,
    value: OnboardingState[K],
  ) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const submitOnboarding = async () => {
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/portal/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error || "We could not complete onboarding.");
        setStatus("error");
        return;
      }
      router.push("/portal");
    } catch {
      setStatus("error");
      setError("We could not complete onboarding.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Client onboarding
        </p>
        <h1 className="text-2xl font-semibold text-ash">
          {stepTitles[step]}
        </h1>
        <p className="text-sm text-muted">
          A short setup to align access, scope context, and delivery constraints.
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate">
        {stepTitles.map((title, index) => (
          <span
            key={title}
            className={`rounded-full border px-3 py-1 ${
              index === step
                ? "border-ash text-ash"
                : "border-line text-slate"
            }`}
          >
            {`Step ${index + 1}`}
          </span>
        ))}
      </div>

      {step === 0 && (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
          <div className="text-sm text-muted">
            <div className="text-xs uppercase tracking-[0.2em] text-slate">
              Organization
            </div>
            <div className="mt-2 text-ash">{orgName}</div>
            {!isOrgAdmin && (
              <p className="mt-2 text-xs text-muted">
                Org name is managed by your admin contact.
              </p>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate">
              Primary contact
              <input
                value={userName ? `${userName} (${userEmail})` : userEmail}
                readOnly
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              />
            </label>
            <label className="space-y-2 text-sm text-slate">
              Preferred contact channel
              <select
                value={formState.preferredChannel}
                onChange={(event) =>
                  updateField("preferredChannel", event.target.value)
                }
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                <option>Secure email</option>
                <option>Portal updates</option>
                <option>Phone (coordinated)</option>
              </select>
            </label>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
          <p className="text-sm text-muted">
            Select the primary engagement to anchor portal updates. You can
            change this later.
          </p>
          {engagements.length > 0 ? (
            <label className="space-y-2 text-sm text-slate">
              Primary engagement
              <select
                value={formState.primaryEngagementId}
                onChange={(event) =>
                  updateField("primaryEngagementId", event.target.value)
                }
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                {engagements.map((engagement) => (
                  <option key={engagement.id} value={engagement.id}>
                    {engagement.title}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <div className="rounded-xl border border-line/70 bg-ink/70 p-4 text-sm text-muted">
              No active engagement yet. Submit a scope request to start the
              intake process.
              <Link
                href="/request-scope"
                className="mt-3 inline-flex text-xs uppercase tracking-[0.2em] text-slate"
              >
                Request scope
              </Link>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate">
              NDA status
              <select
                value={formState.ndaStatus}
                onChange={(event) => updateField("ndaStatus", event.target.value)}
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                <option>NDA in place</option>
                <option>Need NDA</option>
                <option>Not sure</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate">
              Access method preference
              <select
                value={formState.accessPreference}
                onChange={(event) =>
                  updateField("accessPreference", event.target.value)
                }
                className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              >
                <option>Secure portal</option>
                <option>Secure email</option>
                <option>On-site handoff</option>
              </select>
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate">
            Data handling constraints
            <textarea
              value={formState.dataConstraints}
              onChange={(event) =>
                updateField("dataConstraints", event.target.value)
              }
              className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
              rows={3}
              placeholder="Classifications, retention limits, or tooling restrictions."
            />
          </label>
          <label className="flex items-start gap-3 text-sm text-slate">
            <input
              type="checkbox"
              checked={formState.acceptedTerms}
              onChange={(event) =>
                updateField("acceptedTerms", event.target.checked)
              }
              className="mt-1 h-4 w-4 accent-ash"
            />
            <span>
              I understand this portal contains confidential project data.
            </span>
          </label>
        </div>
      )}

      {error && (
        <p className="text-xs text-[#E5A4A4]" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            className="btn-animate btn-secondary rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Back
          </button>
        )}
        {step < 2 && (
          <button
            type="button"
            onClick={goNext}
            className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Continue
          </button>
        )}
        {step === 2 && (
          <button
            type="button"
            onClick={submitOnboarding}
            disabled={!formState.acceptedTerms || status === "submitting"}
            className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            {status === "submitting" ? "Submitting" : "Complete onboarding"}
          </button>
        )}
      </div>
    </div>
  );
}

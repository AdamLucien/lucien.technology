"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

const entityOptions = [
  { value: "engagement", label: "Engagement" },
  { value: "scope", label: "Scope proposal" },
  { value: "change_request", label: "Change request" },
  { value: "invoice", label: "Invoice" },
  { value: "document", label: "Document" },
  { value: "deliverable", label: "Deliverable" },
  { value: "milestone", label: "Milestone" },
  { value: "edit_event", label: "Edit event" },
  { value: "notification", label: "Notification" },
  { value: "audit_event", label: "Audit event" },
  { value: "inquiry", label: "Inquiry" },
];

export function DangerZoneForm() {
  const [entityType, setEntityType] = useState(entityOptions[0].value);
  const [entityId, setEntityId] = useState("");
  const [reason, setReason] = useState("");
  const [confirmPhrase, setConfirmPhrase] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    const response = await fetch("/api/portal/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entityType,
        entityId: entityId.trim(),
        reason: reason.trim(),
        confirm: confirmPhrase.trim(),
      }),
    }).catch(() => null);

    if (!response?.ok) {
      const data = await response?.json().catch(() => null);
      setStatus("error");
      setMessage(data?.error ?? "Delete failed.");
      return;
    }

    setStatus("success");
    setMessage("Delete completed.");
    setEntityId("");
    setReason("");
    setConfirmPhrase("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-line/80 bg-soft p-6"
      data-danger-zone-form
    >
      <div>
        <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate">
          <Icon name="danger" size={16} strokeWidth={1.25} entrance={false} />
          Hard delete
        </h2>
        <p className="mt-2 text-sm text-muted">
          This action permanently deletes records and related metadata. Use
          only for verified cleanup requests.
        </p>
      </div>
      <label className="space-y-2 text-sm text-slate">
        Entity type
        <select
          value={entityType}
          onChange={(event) => setEntityType(event.target.value)}
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
        >
          {entityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2 text-sm text-slate">
        Entity ID
        <input
          value={entityId}
          onChange={(event) => setEntityId(event.target.value)}
          placeholder="cuid_..."
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          required
        />
      </label>
      <label className="space-y-2 text-sm text-slate">
        Reason
        <textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          placeholder="Why is this deletion required?"
          className="min-h-[96px] w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          required
        />
      </label>
      <label className="space-y-2 text-sm text-slate">
        Confirmation phrase
        <input
          value={confirmPhrase}
          onChange={(event) => setConfirmPhrase(event.target.value)}
          placeholder="DELETE FOREVER"
          className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          required
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-animate btn-primary rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em]"
      >
        {status === "loading" ? "Deleting" : "Confirm hard delete"}
      </button>
      {message && (
        <p
          className={`text-xs ${
            status === "success" ? "text-ash" : "text-[#E5A4A4]"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type EditEventActionsProps = {
  editEventId: string;
  status: string;
  isStaff: boolean;
};

export function EditEventActions({
  editEventId,
  status,
  isStaff,
}: EditEventActionsProps) {
  const router = useRouter();
  const [rejectionNote, setRejectionNote] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isStaff || status !== "pending_approval") {
    return null;
  }

  const applyEdit = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/portal/edits/${editEventId}/apply`, {
        method: "POST",
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setMessage(data?.error ?? "Apply failed.");
        return;
      }
      router.refresh();
    } catch {
      setMessage("Apply failed.");
    } finally {
      setLoading(false);
    }
  };

  const rejectEdit = async () => {
    if (rejectionNote.trim().length < 5) {
      setMessage("Provide a rejection note.");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/portal/edits/${editEventId}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rejectionNote: rejectionNote.trim() }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setMessage(data?.error ?? "Reject failed.");
        return;
      }
      router.refresh();
    } catch {
      setMessage("Reject failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-line/80 bg-soft p-6 space-y-3">
      <div className="text-xs uppercase tracking-[0.2em] text-slate">
        Decision
      </div>
      <textarea
        value={rejectionNote}
        onChange={(event) => setRejectionNote(event.target.value)}
        rows={3}
        className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
        placeholder="Rejection note (required for reject)."
      />
      {message && <p className="text-xs text-[#E5A4A4]">{message}</p>}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={applyEdit}
          disabled={loading}
          className="btn-animate btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Apply edit
        </button>
        <button
          type="button"
          onClick={rejectEdit}
          disabled={loading}
          className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Reject edit
        </button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icons/Icon";

type OwnerOption = { id: string; label: string };

type EngagementEditPanelProps = {
  engagementId: string;
  initialTitle: string;
  initialOwnerId?: string | null;
  initialStartDate?: string | null;
  initialTargetDate?: string | null;
  initialProcurementRef?: string | null;
  initialPurchaseOrderRef?: string | null;
  initialCostCenter?: string | null;
  ownerOptions: OwnerOption[];
  isStaff: boolean;
};

type DiffEntry = { field: string; from: unknown; to: unknown };

const criticalFields = new Set(["procurementRef", "purchaseOrderRef", "costCenter"]);

export function EngagementEditPanel({
  engagementId,
  initialTitle,
  initialOwnerId,
  initialStartDate,
  initialTargetDate,
  initialProcurementRef,
  initialPurchaseOrderRef,
  initialCostCenter,
  ownerOptions,
  isStaff,
}: EngagementEditPanelProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [ownerId, setOwnerId] = useState(initialOwnerId ?? "");
  const [startDate, setStartDate] = useState(initialStartDate ?? "");
  const [targetDate, setTargetDate] = useState(initialTargetDate ?? "");
  const [procurementRef, setProcurementRef] = useState(
    initialProcurementRef ?? "",
  );
  const [purchaseOrderRef, setPurchaseOrderRef] = useState(
    initialPurchaseOrderRef ?? "",
  );
  const [costCenter, setCostCenter] = useState(initialCostCenter ?? "");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);
  const [editEventId, setEditEventId] = useState<string | null>(null);
  const [requiresCr, setRequiresCr] = useState(false);

  const diff = useMemo(() => {
    const entries: DiffEntry[] = [];
    if (title.trim() !== initialTitle) {
      entries.push({ field: "title", from: initialTitle, to: title.trim() });
    }
    if (ownerId !== (initialOwnerId ?? "")) {
      entries.push({
        field: "ownerId",
        from: initialOwnerId ?? null,
        to: ownerId || null,
      });
    }
    if (startDate !== (initialStartDate ?? "")) {
      entries.push({
        field: "startDate",
        from: initialStartDate ?? null,
        to: startDate || null,
      });
    }
    if (targetDate !== (initialTargetDate ?? "")) {
      entries.push({
        field: "targetDate",
        from: initialTargetDate ?? null,
        to: targetDate || null,
      });
    }
    if (procurementRef !== (initialProcurementRef ?? "")) {
      entries.push({
        field: "procurementRef",
        from: initialProcurementRef ?? null,
        to: procurementRef || null,
      });
    }
    if (purchaseOrderRef !== (initialPurchaseOrderRef ?? "")) {
      entries.push({
        field: "purchaseOrderRef",
        from: initialPurchaseOrderRef ?? null,
        to: purchaseOrderRef || null,
      });
    }
    if (costCenter !== (initialCostCenter ?? "")) {
      entries.push({
        field: "costCenter",
        from: initialCostCenter ?? null,
        to: costCenter || null,
      });
    }
    return entries;
  }, [
    title,
    ownerId,
    startDate,
    targetDate,
    procurementRef,
    purchaseOrderRef,
    costCenter,
    initialTitle,
    initialOwnerId,
    initialStartDate,
    initialTargetDate,
    initialProcurementRef,
    initialPurchaseOrderRef,
    initialCostCenter,
  ]);

  const changeRequestLink = useMemo(() => {
    if (!editEventId) return "/portal/change-requests";
    const summary = diff
      .map((entry) => `${entry.field}: ${entry.from ?? "—"} → ${entry.to ?? "—"}`)
      .join("; ");
    const params = new URLSearchParams({
      title: `Change request for ${initialTitle}`,
      description: `Requested edit: ${summary}`,
      editEventId,
    });
    return `/portal/change-requests?${params.toString()}`;
  }, [diff, editEventId, initialTitle]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isStaff && diff.length === 0) {
      setMessage("No changes detected.");
      setStatus("error");
      return;
    }
    if (diff.length === 0) {
      setMessage("No changes detected.");
      setStatus("error");
      return;
    }
    if (reason.trim().length < 5) {
      setMessage("Provide a short reason for the change.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage(null);
    setRequiresCr(diff.some((entry) => criticalFields.has(entry.field)));

    try {
      const response = await fetch("/api/portal/edits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entityType: "engagement",
          entityId: engagementId,
          reason: reason.trim(),
          diff,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Update failed.");
        return;
      }
      setStatus("success");
      setEditEventId(data?.editEventId ?? null);
      if (data?.status === "pending_approval") {
        setRequiresCr(true);
        setMessage(
          "This change requires approval via a Change Request before it can be applied.",
        );
      } else {
        setMessage("Update applied.");
      }
    } catch {
      setStatus("error");
      setMessage("Update failed.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
      >
        <Icon name="edit" size={16} strokeWidth={1.25} entrance={false} />
        Edit details
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur"
            onClick={() => setOpen(false)}
          />
          <div className="relative h-full w-full max-w-md border-l border-line/80 bg-ink p-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate">
                <Icon name="edit" size={16} strokeWidth={1.25} entrance={false} />
                Edit engagement
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-slate"
              >
                Close
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4 text-sm text-slate">
              <label className="space-y-2">
                Title
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
              </label>
              {isStaff && (
                <>
                  <label className="space-y-2">
                    Owner
                    <select
                      value={ownerId}
                      onChange={(event) => setOwnerId(event.target.value)}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                    >
                      <option value="">Unassigned</option>
                      {ownerOptions.map((owner) => (
                        <option key={owner.id} value={owner.id}>
                          {owner.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-2">
                    Start date
                    <input
                      type="date"
                      value={startDate}
                      onChange={(event) => setStartDate(event.target.value)}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                    />
                  </label>
                  <label className="space-y-2">
                    Target date
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(event) => setTargetDate(event.target.value)}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                    />
                  </label>
                </>
              )}
              <label className="space-y-2">
                Procurement reference
                <input
                  value={procurementRef}
                  onChange={(event) => setProcurementRef(event.target.value)}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                PO reference
                <input
                  value={purchaseOrderRef}
                  onChange={(event) => setPurchaseOrderRef(event.target.value)}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Cost center
                <input
                  value={costCenter}
                  onChange={(event) => setCostCenter(event.target.value)}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                />
              </label>
              <label className="space-y-2">
                Reason for change
                <textarea
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
                  placeholder="Why is this correction needed?"
                />
              </label>

              {requiresCr && (
                <div className="rounded-xl border border-line/80 bg-soft px-4 py-3 text-xs text-muted">
                  This change requires a Change Request before it can be applied.
                </div>
              )}

              {message && (
                <p
                  className={`text-xs ${
                    status === "error" ? "text-[#E5A4A4]" : "text-ash"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-animate btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  {status === "loading" ? "Saving" : "Submit edit"}
                </button>
                {requiresCr && editEventId && (
                  <Link
                    href={changeRequestLink}
                    className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                  >
                    Create Change Request
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

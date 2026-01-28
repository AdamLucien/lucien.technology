import { StatusBadge } from "@/components/portal/StatusBadge";

const legend = [
  { label: "Approved / Paid", tone: "success", variant: "soft", icon: "approve" },
  { label: "Needs attention", tone: "warning", variant: "soft", icon: "risk" },
  { label: "Blocked / Overdue", tone: "danger", variant: "soft", icon: "reject" },
  { label: "Locked / Internal", tone: "access", variant: "outline", icon: "locked" },
] as const;

export function StatusLegend() {
  return (
    <div className="rounded-2xl border border-line/80 bg-soft p-4">
      <div className="text-[0.65rem] uppercase tracking-[0.24em] text-slate">
        Status legend
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {legend.map((item) => (
          <StatusBadge
            key={item.label}
            label={item.label}
            tone={item.tone}
            variant={item.variant}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

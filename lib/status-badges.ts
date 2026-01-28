import type { IconName } from "@/components/icons/iconMap";

export type BadgeTone = "success" | "info" | "warning" | "danger" | "neutral" | "access";
export type BadgeVariant = "solid" | "soft" | "outline";

export type BadgeSpec = {
  label: string;
  tone: BadgeTone;
  variant: BadgeVariant;
  icon?: IconName;
};

const titleize = (value: string) =>
  value
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

const neutralBadge = (label: string, variant: BadgeVariant = "outline"): BadgeSpec => ({
  label,
  tone: "neutral",
  variant,
});

export const getInquiryStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    new: { label: "New", tone: "info", variant: "solid", icon: "inquiries" },
    triaged: { label: "Triaged", tone: "info", variant: "solid", icon: "process" },
    converted: { label: "Converted", tone: "success", variant: "solid", icon: "approve" },
    closed: { label: "Closed", tone: "neutral", variant: "solid", icon: "archive" },
  };
  return map[status] ?? neutralBadge(titleize(status));
};

export const getEngagementStageBadge = (stage: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    triage: { label: "Triage", tone: "neutral", variant: "solid", icon: "route" },
    scope_pack: { label: "Scope pack", tone: "info", variant: "solid", icon: "scopes" },
    sow: { label: "SOW", tone: "info", variant: "solid", icon: "scopes" },
    delivery: { label: "Delivery", tone: "info", variant: "solid", icon: "delivery" },
    handover: { label: "Handover", tone: "info", variant: "solid", icon: "download" },
    ongoing: { label: "Ongoing", tone: "info", variant: "solid", icon: "timeline" },
    closed: { label: "Closed", tone: "neutral", variant: "solid", icon: "archive" },
  };
  return map[stage] ?? neutralBadge(titleize(stage), "solid");
};

export const getEngagementStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    on_track: { label: "On track", tone: "success", variant: "solid", icon: "approve" },
    at_risk: { label: "At risk", tone: "warning", variant: "solid", icon: "risk" },
    blocked: { label: "Blocked", tone: "danger", variant: "solid", icon: "reject" },
    completed: { label: "Completed", tone: "success", variant: "solid", icon: "definitionDone" },
  };
  return map[status] ?? neutralBadge(titleize(status), "solid");
};

export const getScopeStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    draft: { label: "Draft", tone: "neutral", variant: "solid", icon: "edit" },
    sent: { label: "Sent", tone: "info", variant: "solid", icon: "mail" },
    approved: { label: "Approved", tone: "success", variant: "solid", icon: "approve" },
    rejected: { label: "Rejected", tone: "danger", variant: "solid", icon: "reject" },
  };
  return map[status] ?? neutralBadge(titleize(status), "solid");
};

export const getChangeStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    proposed: { label: "Proposed", tone: "info", variant: "solid", icon: "changeRequests" },
    needs_info: { label: "Needs info", tone: "warning", variant: "solid", icon: "faq" },
    approved: { label: "Approved", tone: "success", variant: "solid", icon: "approve" },
    rejected: { label: "Rejected", tone: "danger", variant: "solid", icon: "reject" },
    implemented: { label: "Implemented", tone: "success", variant: "solid", icon: "definitionDone" },
    cancelled: { label: "Cancelled", tone: "neutral", variant: "solid", icon: "archive" },
  };
  return map[status] ?? neutralBadge(titleize(status), "solid");
};

export const getMilestoneStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    planned: { label: "Planned", tone: "neutral", variant: "soft" },
    in_progress: { label: "In progress", tone: "info", variant: "soft" },
    complete: { label: "Complete", tone: "success", variant: "soft" },
  };
  return map[status] ?? neutralBadge(titleize(status), "soft");
};

export const getDeliverableStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    draft: { label: "Draft", tone: "neutral", variant: "soft" },
    review: { label: "Review", tone: "warning", variant: "soft" },
    approved: { label: "Approved", tone: "success", variant: "soft" },
  };
  return map[status] ?? neutralBadge(titleize(status), "soft");
};

export const getDeliveryTaskStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    todo: { label: "To do", tone: "neutral", variant: "soft" },
    in_progress: { label: "In progress", tone: "info", variant: "soft" },
    blocked: { label: "Blocked", tone: "danger", variant: "soft" },
    done: { label: "Done", tone: "success", variant: "soft" },
  };
  return map[status] ?? neutralBadge(titleize(status), "soft");
};

export const getEngagementTermStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    draft: { label: "Draft", tone: "neutral", variant: "soft" },
    active: { label: "Active", tone: "success", variant: "soft" },
    superseded: { label: "Superseded", tone: "neutral", variant: "soft" },
  };
  return map[status] ?? neutralBadge(titleize(status), "soft");
};

export const getTalentStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    NEW: { label: "New", tone: "info", variant: "soft" },
    REVIEWED: { label: "Reviewed", tone: "info", variant: "soft" },
    APPROVED: { label: "Approved", tone: "success", variant: "soft" },
    ARCHIVED: { label: "Archived", tone: "neutral", variant: "soft" },
  };
  return map[status] ?? neutralBadge(titleize(status), "soft");
};

export const getTalentContactStatusBadge = (status: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    NOT_CONTACTED: { label: "Not contacted", tone: "neutral", variant: "outline" },
    CONTACTED: { label: "Contacted", tone: "info", variant: "outline" },
    RESPONDED: { label: "Responded", tone: "info", variant: "outline" },
    ONBOARDED: { label: "Onboarded", tone: "success", variant: "outline" },
  };
  return map[status] ?? neutralBadge(titleize(status), "outline");
};

export const getSeverityBadge = (severity: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    low: { label: "Low", tone: "neutral", variant: "soft" },
    med: { label: "Medium", tone: "warning", variant: "soft" },
    high: { label: "High", tone: "danger", variant: "soft" },
  };
  return map[severity] ?? neutralBadge(titleize(severity), "soft");
};

export const getImpactBadge = (impact: string): BadgeSpec => {
  const map: Record<string, BadgeSpec> = {
    scope: { label: "Scope", tone: "info", variant: "outline" },
    schedule: { label: "Schedule", tone: "info", variant: "outline" },
    cost: { label: "Cost", tone: "info", variant: "outline" },
    risk: { label: "Risk", tone: "warning", variant: "outline" },
  };
  return map[impact] ?? neutralBadge(titleize(impact), "outline");
};

export const getAccessBadge = (label: string, icon: IconName = "locked"): BadgeSpec => ({
  label,
  tone: "access",
  variant: "outline",
  icon,
});

export const getMetaBadge = (label: string): BadgeSpec => ({
  label,
  tone: "neutral",
  variant: "outline",
});

export const getInvoiceStatusBadge = (paidAt: Date | null): BadgeSpec =>
  paidAt
    ? { label: "Paid", tone: "success", variant: "solid", icon: "approve" }
    : { label: "Unpaid", tone: "warning", variant: "solid", icon: "realtime" };

export const getStaffingBadge = (
  intent: { state: string } | null,
  options: { hasRolesDefined: boolean; fulfilled: boolean; hasSkillsDefined?: boolean },
): BadgeSpec => {
  if (!intent) {
    return { label: "No staffing", tone: "danger", variant: "soft", icon: "risk" };
  }
  if (intent.state === "DRAFT") {
    return { label: "Staffing draft", tone: "info", variant: "soft", icon: "process" };
  }
  if (intent.state === "CANCELLED") {
    return { label: "Staffing cancelled", tone: "neutral", variant: "soft", icon: "archive" };
  }
  if (intent.state === "FULFILLED") {
    return { label: "Staffing ok", tone: "success", variant: "solid", icon: "approve" };
  }
  if (!options.hasRolesDefined) {
    return { label: "Roles missing", tone: "warning", variant: "solid", icon: "risk" };
  }
  if (!options.fulfilled) {
    return { label: "Unfilled roles", tone: "warning", variant: "solid", icon: "risk" };
  }
  return { label: "Staffing active", tone: "info", variant: "solid", icon: "users" };
};

export const getOutreachBadge = (stats: {
  queued: number;
  sent: number;
  failed: number;
  replied: number;
}): BadgeSpec => {
  if (stats.failed > 0) {
    return { label: "Outreach failed", tone: "danger", variant: "soft", icon: "reject" };
  }
  if (stats.replied > 0) {
    return { label: "Replies", tone: "success", variant: "soft", icon: "mail" };
  }
  if (stats.sent > 0) {
    return { label: "Outreach sent", tone: "info", variant: "soft", icon: "mail" };
  }
  if (stats.queued > 0) {
    return { label: "Outreach queued", tone: "warning", variant: "soft", icon: "realtime" };
  }
  return { label: "No outreach", tone: "neutral", variant: "outline", icon: "mail" };
};

export const getSkillsGapBadge = (missingMustSkills: string[]) => {
  if (missingMustSkills.length === 0) {
    return { label: "Skills ok", tone: "success", variant: "soft", icon: "approve" };
  }
  return {
    label: "Missing must skills",
    tone: "danger",
    variant: "soft",
    icon: "risk",
  };
};

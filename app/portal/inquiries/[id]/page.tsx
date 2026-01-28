import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { requireLucienAdmin, requireLucienStaff, requirePortalSession } from "@/lib/portal";
import { logAuditEvent } from "@/lib/audit";
import { services } from "@/content/services";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getStaffingBadge } from "@/lib/status-badges";
import {
  activateStaffingIntentForEngagement,
  createStaffingIntentForInquiry,
  updateStaffingIntentFromScope,
} from "@/lib/talent/staffing";
import { roleGroups } from "@/lib/talent/taxonomy";
import type { StaffingRoleRequirement } from "@/lib/talent/staffing";

export default async function InquiryDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ scope?: string | string[] }>;
}) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const scopeParam = Array.isArray(resolvedSearchParams?.scope)
    ? resolvedSearchParams?.scope[0]
    : resolvedSearchParams?.scope;
  const session = await requirePortalSession();
  requireLucienAdmin(session.user.role);
  const isStaff =
    session.user.role === "lucien_admin" ||
    session.user.role === "lucien_operator";

  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
  });

  if (!inquiry) {
    notFound();
  }

  const scopeProposals = await prisma.scopeProposal.findMany({
    where: { inquiryId: id },
    orderBy: { createdAt: "desc" },
  });

  const staffingIntent = await prisma.staffingIntent.findFirst({
    where: { inquiryId: id },
    orderBy: { createdAt: "desc" },
  });

  const staffingRoles = Array.isArray(staffingIntent?.rolesJson)
    ? (staffingIntent.rolesJson as StaffingRoleRequirement[])
    : [];
  const staffingBadge = getStaffingBadge(
    staffingIntent ? { state: staffingIntent.state } : null,
    {
      hasRolesDefined: staffingRoles.length > 0,
      fulfilled: false,
    },
  );

  async function convertInquiry() {
    "use server";

    const session = await requirePortalSession();
    requireLucienAdmin(session.user.role);

    const currentInquiry = await prisma.inquiry.findUnique({ where: { id } });
    if (!currentInquiry) {
      notFound();
    }

    if (process.env.REQUIRE_SCOPE_APPROVAL === "true") {
      const approvedScope = await prisma.scopeProposal.findFirst({
        where: { inquiryId: currentInquiry.id, status: "approved" },
      });
      if (!approvedScope) {
        redirect(`/portal/inquiries/${id}?scope=required`);
      }
    }

    const existing = await prisma.engagement.findFirst({
      where: { inquiryId: id },
    });

    if (existing) {
      redirect(`/portal/engagements/${existing.id}`);
    }

    const service = services.find(
      (item) => item.slug === currentInquiry.serviceSlug,
    );
    const title =
      service?.title ?? `Engagement for ${currentInquiry.organization}`;

    const engagement = await prisma.engagement.create({
      data: {
        orgId: currentInquiry.orgId,
        title,
        serviceSlug: currentInquiry.serviceSlug,
        stage: "triage",
        status: "on_track",
        inquiryId: currentInquiry.id,
      },
    });

    await activateStaffingIntentForEngagement({
      orgId: currentInquiry.orgId,
      inquiryId: currentInquiry.id,
      engagementId: engagement.id,
    });

    await prisma.inquiry.update({
      where: { id: currentInquiry.id },
      data: { status: "converted" },
    });

    await logAuditEvent({
      orgId: currentInquiry.orgId,
      userId: session.user.id,
      action: "inquiry_converted",
      resourceType: "inquiry",
      resourceId: currentInquiry.id,
      meta: { engagementId: engagement.id },
    });

    await logAuditEvent({
      orgId: currentInquiry.orgId,
      userId: session.user.id,
      action: "engagement_created",
      resourceType: "engagement",
      resourceId: engagement.id,
      meta: { inquiryId: currentInquiry.id },
    });

    redirect(`/portal/engagements/${engagement.id}`);
  }

  async function createScopeProposal() {
    "use server";

    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    const currentInquiry = await prisma.inquiry.findUnique({ where: { id } });
    if (!currentInquiry) {
      notFound();
    }

    const service = services.find(
      (item) => item.slug === currentInquiry.serviceSlug,
    );

    const proposal = await prisma.scopeProposal.create({
      data: {
        orgId: currentInquiry.orgId,
        inquiryId: currentInquiry.id,
        title: service ? `${service.title} scope` : "Scope proposal",
        fixedPriceEUR: 15000,
        scopeSummary:
          "Scope definition with constraints, acceptance criteria, and delivery options.",
        deliverablesJson: service?.deliverables.slice(0, 4) ?? [
          "Scope narrative and acceptance criteria",
          "Risk and dependency register",
          "Delivery options with assumptions",
        ],
        status: "draft",
        createdById: session.user.id,
      },
    });

    await updateStaffingIntentFromScope({
      orgId: currentInquiry.orgId,
      inquiryId: currentInquiry.id,
      scopeProposalId: proposal.id,
      serviceSlug: currentInquiry.serviceSlug,
      deliverables: Array.isArray(proposal.deliverablesJson)
        ? proposal.deliverablesJson.filter((item): item is string => typeof item === "string")
        : [],
    });

    await logAuditEvent({
      orgId: currentInquiry.orgId,
      userId: session.user.id,
      action: "scope_created",
      resourceType: "scope",
      resourceId: proposal.id,
      meta: { inquiryId: currentInquiry.id },
    });

    redirect(`/portal/scopes/${proposal.id}`);
  }

  async function addRoleRequirement(formData: FormData) {
    "use server";
    const session = await requirePortalSession();
    requireLucienStaff(session.user.role);

    if (!inquiry) {
      notFound();
    }

    const roleId = String(formData.get("roleId") || "");
    const countRaw = Number(formData.get("count") || 1);
    const count = Number.isFinite(countRaw) && countRaw > 0 ? countRaw : 1;

    if (!roleId) return;

    let intent = await prisma.staffingIntent.findFirst({
      where: { inquiryId: id },
      orderBy: { createdAt: "desc" },
    });

    if (!intent) {
      intent = await createStaffingIntentForInquiry({
        orgId: inquiry.orgId,
        inquiryId: inquiry.id,
        serviceSlug: inquiry.serviceSlug,
      });
    }

    const roles = Array.isArray(intent.rolesJson)
      ? (intent.rolesJson as StaffingRoleRequirement[])
      : [];
    const existing = roles.find((role) => role.roleId === roleId);
    if (existing) {
      existing.count = count;
    } else {
      roles.push({ roleId, count });
    }

    await prisma.staffingIntent.update({
      where: { id: intent.id },
      data: { rolesJson: roles },
    });

    redirect(`/portal/inquiries/${id}`);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Inquiry details
        </p>
        <h1 className="text-2xl font-semibold text-ash">
          {inquiry.organization}
        </h1>
        <p className="text-sm text-muted">
          Submitted {formatDateShort(inquiry.createdAt)} · {inquiry.status}
        </p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
          <StatusBadge {...staffingBadge} />
        </div>
        {inquiry.status === "converted" && (
          <span className="inline-flex rounded-full border border-slate px-3 py-1 text-xs uppercase tracking-[0.2em] text-ash">
            Converted
          </span>
        )}
        {scopeParam === "required" && (
          <p className="text-xs text-[#E5A4A4]">
            Approved scope proposal required before conversion.
          </p>
        )}
      </div>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
          Request details
        </h2>
        <div className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-2">
          <div>
            <div className="text-xs text-slate">Service</div>
            <div className="text-ash">{inquiry.serviceSlug}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Timeframe</div>
            <div className="text-ash">{inquiry.timeframe}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Contact</div>
            <div className="text-ash">{inquiry.contactEmail}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Role</div>
            <div className="text-ash">{inquiry.role}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Mode</div>
            <div className="text-ash">{inquiry.mode ?? "remote"}</div>
          </div>
          <div>
            <div className="text-xs text-slate">Note</div>
            <div className="text-ash">{inquiry.note ?? "—"}</div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6">
        <h2 className="text-lg font-semibold text-ash">Scope proposals</h2>
        {scopeProposals.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            No scope proposal yet. Create a proposal before conversion if
            needed.
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm text-muted">
            {scopeProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="flex flex-col gap-2 rounded-xl border border-line/80 bg-ink px-4 py-3 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-ash">{proposal.title}</div>
                  <div className="text-xs text-slate">{proposal.status}</div>
                </div>
                <Link
                  href={`/portal/scopes/${proposal.id}`}
                  className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  View proposal
                </Link>
              </div>
            ))}
          </div>
        )}
        <form action={createScopeProposal} className="mt-4">
          <button
            type="submit"
            className="btn-animate btn-secondary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Create scope proposal
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-line/80 bg-soft p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate">
            Staffing (draft)
          </h2>
          <StatusBadge {...staffingBadge} />
        </div>
        {staffingIntent ? (
          <div className="space-y-3 text-sm text-muted">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                Roles
              </div>
              {staffingRoles.length === 0 ? (
                <p className="mt-2 text-xs text-muted">No roles defined yet.</p>
              ) : (
                <div className="mt-2 space-y-1">
                  {staffingRoles.map((role, index) => (
                    <div key={role.roleId ?? `${index}`}>
                      {role.roleId} · {role.count ?? 1}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {isStaff && (
              <form action={addRoleRequirement} className="mt-3 grid gap-3 md:grid-cols-3">
                <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-slate">
                  Role
                  <select
                    name="roleId"
                    className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-sm text-ash"
                    defaultValue=""
                  >
                    <option value="">Select role</option>
                    {roleGroups.flatMap((group) =>
                      group.roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.id}
                        </option>
                      )),
                    )}
                  </select>
                </label>
                <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-slate">
                  Count
                  <input
                    name="count"
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-full rounded-xl border border-line bg-ink px-3 py-2 text-sm text-ash"
                  />
                </label>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="btn-animate btn-secondary rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.2em]"
                  >
                    Add role
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted">Staffing intent not initialized yet.</p>
        )}
      </section>

      {inquiry.status !== "converted" && (
        <form action={convertInquiry} className="rounded-2xl border border-line/80 bg-soft p-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-ash">
              Convert to engagement
            </h2>
            <p className="text-sm text-muted">
              This will create a new engagement workspace and update the inquiry
              status.
            </p>
          </div>
          <button
            type="submit"
            className="btn-animate btn-primary mt-4 rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Convert inquiry
          </button>
        </form>
      )}
    </div>
  );
}

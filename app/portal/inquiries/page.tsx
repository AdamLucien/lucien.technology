import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { requireLucienAdmin, requirePortalSession } from "@/lib/portal";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { getInquiryStatusBadge, getMetaBadge } from "@/lib/status-badges";

export default async function InquiryListPage() {
  const session = await requirePortalSession();
  requireLucienAdmin(session.user.role);

  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Inquiries
        </p>
        <h1 className="text-2xl font-semibold text-ash">Scope requests</h1>
        <p className="text-sm text-muted">
          Review inbound inquiries and convert qualified requests into
          engagements.
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No inquiries yet. New scope requests will appear here.
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <Link
              key={inquiry.id}
              href={`/portal/inquiries/${inquiry.id}`}
              className="card-animate flex flex-col gap-3 rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {inquiry.organization}
                </div>
                <div className="text-xs text-slate">
                  {inquiry.serviceSlug}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <StatusBadge {...getInquiryStatusBadge(inquiry.status)} />
                <StatusBadge {...getMetaBadge(formatDateShort(inquiry.createdAt))} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

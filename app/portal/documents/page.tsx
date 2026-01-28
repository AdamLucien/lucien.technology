import Link from "next/link";
import type { DocumentCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { formatBytes, formatDateShort } from "@/lib/format";
import { getOrgScope, requirePortalSession } from "@/lib/portal";
import { ArchiveDocumentButton } from "@/components/portal/ArchiveDocumentButton";
import { IconStatic } from "@/components/icons/IconStatic";

const categories = [
  "all",
  "nda",
  "sow",
  "contract",
  "deliverable",
  "report",
  "invoice",
  "client_input",
  "evidence",
  "other",
];

export default async function DocumentListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[]; archived?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const session = await requirePortalSession();
  const scope = getOrgScope(session.user.role, session.user.orgId);
  const showArchived = resolvedSearchParams.archived === "1";
  const categoryParam = Array.isArray(resolvedSearchParams.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams.category;
  const category = categories.includes(categoryParam ?? "")
    ? categoryParam
    : "all";

  const categoryFilter =
    category && category !== "all"
      ? { category: category as DocumentCategory }
      : {};

  const documents = await prisma.document.findMany({
    where: {
      ...scope,
      ...categoryFilter,
      ...(showArchived ? {} : { archivedAt: null }),
    },
    orderBy: { createdAt: "desc" },
    include: { engagement: true },
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Documents
        </p>
        <h1 className="text-2xl font-semibold text-ash">Document workspace</h1>
        <p className="text-sm text-muted">
          Review engagement files, reports, and contracts in one secure list.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate">
        {categories.map((item) => (
          <Link
            key={item}
            href={
              item === "all"
                ? "/portal/documents"
                : `/portal/documents?category=${item}`
            }
            className={`rounded-full border px-3 py-1 transition ${
              category === item
                ? "border-slate text-ash"
                : "border-line text-slate"
            }`}
          >
            {item}
          </Link>
        ))}
        <Link
          href={
            showArchived
              ? `/portal/documents${category !== "all" ? `?category=${category}` : ""}`
              : `/portal/documents?${new URLSearchParams({
                  ...(category !== "all" ? { category } : {}),
                  archived: "1",
                }).toString()}`
          }
          className={`rounded-full border px-3 py-1 transition ${
            showArchived ? "border-slate text-ash" : "border-line text-slate"
          }`}
        >
          {showArchived ? "Hide archived" : "Show archived"}
        </Link>
      </div>

      {documents.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No documents found for this category yet.
        </div>
      ) : (
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="card-animate flex flex-col gap-3 rounded-2xl border border-line/80 bg-soft p-5 transition hover:border-slate md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-lg font-semibold text-ash">
                  {doc.label ?? doc.name}
                </div>
                <div className="text-xs text-slate">
                  {doc.engagement?.title ?? "Document"} · {doc.category}
                </div>
                {doc.archivedAt && (
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate">
                    Archived
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate">
                <span className="rounded-full border border-line px-3 py-1">
                  {formatBytes(doc.size)}
                </span>
                <span className="rounded-full border border-line px-3 py-1">
                  {formatDateShort(doc.createdAt)}
                </span>
                <Link
                  href={`/api/portal/documents/${doc.id}/download`}
                  className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
                >
                  <IconStatic name="download" size={16} className="text-ash" />
                  Download
                </Link>
                {session.user.role === "lucien_admin" && !doc.archivedAt && (
                  <ArchiveDocumentButton documentId={doc.id} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

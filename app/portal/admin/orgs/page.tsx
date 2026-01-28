import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireLucienAdmin, requirePortalSession } from "@/lib/portal";

export default async function AdminOrgsPage() {
  const session = await requirePortalSession();
  requireLucienAdmin(session.user.role);

  const orgs = await prisma.org.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { users: true, engagements: true } } },
  });

  async function createOrg(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienAdmin(session.user.role);

    const schema = z.object({
      name: z.string().min(2),
      domain: z.string().optional().nullable(),
    });

    const parsed = schema.parse({
      name: formData.get("name"),
      domain: formData.get("domain"),
    });

    await prisma.org.create({
      data: {
        name: parsed.name,
        domain: parsed.domain || null,
      },
    });

    redirect("/portal/admin/orgs");
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Admin
        </p>
        <h1 className="text-2xl font-semibold text-ash">Organizations</h1>
        <p className="text-sm text-muted">
          Create and manage client organizations.
        </p>
      </div>

      <form action={createOrg} className="grid gap-4 rounded-2xl border border-line/80 bg-soft p-6 md:grid-cols-[2fr_1fr_auto]">
        <input
          name="name"
          placeholder="Organization name"
          className="rounded-xl border border-line bg-ink px-4 py-2 text-ash"
        />
        <input
          name="domain"
          placeholder="Domain (optional)"
          className="rounded-xl border border-line bg-ink px-4 py-2 text-ash"
        />
        <button
          type="submit"
          className="btn-animate btn-primary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Create
        </button>
      </form>

      <div className="space-y-3">
        {orgs.map((org) => (
          <div
            key={org.id}
            className="rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted"
          >
            <div className="text-lg font-semibold text-ash">{org.name}</div>
            <div className="text-xs text-slate">{org.domain ?? "—"}</div>
            <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate">
              <span className="rounded-full border border-line px-3 py-1">
                {org._count.users} users
              </span>
              <span className="rounded-full border border-line px-3 py-1">
                {org._count.engagements} engagements
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

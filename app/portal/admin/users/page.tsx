import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireLucienAdmin, requirePortalSession } from "@/lib/portal";

const roles = ["lucien_admin", "lucien_operator", "org_admin", "org_user"];

export default async function AdminUsersPage() {
  const session = await requirePortalSession();
  requireLucienAdmin(session.user.role);

  const [users, orgs] = await Promise.all([
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      include: { org: true },
    }),
    prisma.org.findMany({ orderBy: { name: "asc" } }),
  ]);

  async function createUser(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    requireLucienAdmin(session.user.role);

    const schema = z.object({
      email: z.string().email(),
      name: z.string().optional().nullable(),
      role: z.enum(["lucien_admin", "lucien_operator", "org_admin", "org_user"]),
      orgId: z.string().min(1),
    });

    const parsed = schema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      role: formData.get("role"),
      orgId: formData.get("orgId"),
    });

    await prisma.user.create({
      data: {
        email: parsed.email.toLowerCase(),
        name: parsed.name || null,
        role: parsed.role,
        orgId: parsed.orgId,
      },
    });

    redirect("/portal/admin/users");
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Admin
        </p>
        <h1 className="text-2xl font-semibold text-ash">Users</h1>
        <p className="text-sm text-muted">
          Create users and assign roles for portal access.
        </p>
      </div>

      <form action={createUser} className="grid gap-4 rounded-2xl border border-line/80 bg-soft p-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate">
          Email
          <input
            name="email"
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
        </label>
        <label className="space-y-2 text-sm text-slate">
          Name (optional)
          <input
            name="name"
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          />
        </label>
        <label className="space-y-2 text-sm text-slate">
          Role
          <select
            name="role"
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
            defaultValue={"org_user"}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate">
          Organization
          <select
            name="orgId"
            className="w-full rounded-xl border border-line bg-ink px-4 py-2 text-ash"
          >
            {orgs.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <button
            type="submit"
            className="btn-animate btn-primary rounded-full px-6 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Create user
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted"
          >
            <div className="text-lg font-semibold text-ash">{user.email}</div>
            <div className="text-xs text-slate">
              {user.role} · {user.org.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

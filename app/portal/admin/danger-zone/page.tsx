import { requireLucienAdmin, requirePortalSession } from "@/lib/portal";
import { DangerZoneForm } from "@/components/portal/DangerZoneForm";

export default async function DangerZonePage() {
  const session = await requirePortalSession();
  requireLucienAdmin(session.user.role);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Admin
        </p>
        <h1 className="text-2xl font-semibold text-ash">Danger zone</h1>
        <p className="text-sm text-muted">
          Permanent deletion is restricted to Lucien administrators and should
          be used only for verified remediation or compliance requests.
        </p>
      </div>
      <DangerZoneForm />
    </div>
  );
}

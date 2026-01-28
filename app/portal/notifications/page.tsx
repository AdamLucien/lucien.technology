import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatDateShort } from "@/lib/format";
import { requirePortalSession } from "@/lib/portal";

export default async function NotificationsPage({
  searchParams,
}: {
  searchParams:
    | { filter?: string }
    | Promise<{ filter?: string }>;
}) {
  const session = await requirePortalSession();
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const filter = resolvedSearchParams.filter === "unread" ? "unread" : "all";

  const notifications = await prisma.notification.findMany({
    where: {
      recipientUserId: session.user.id,
      ...(filter === "unread" ? { readAt: null } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  async function markAllRead() {
    "use server";

    const session = await requirePortalSession();
    await prisma.notification.updateMany({
      where: { recipientUserId: session.user.id, readAt: null },
      data: { readAt: new Date() },
    });
    redirect(`/portal/notifications?filter=${filter}`);
  }

  async function markRead(formData: FormData) {
    "use server";

    const session = await requirePortalSession();
    const id = formData.get("id");
    if (typeof id !== "string") {
      redirect(`/portal/notifications?filter=${filter}`);
    }
    await prisma.notification.updateMany({
      where: { recipientUserId: session.user.id, id },
      data: { readAt: new Date() },
    });
    redirect(`/portal/notifications?filter=${filter}`);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">
          Notifications
        </p>
        <h1 className="text-2xl font-semibold text-ash">Updates</h1>
        <p className="text-sm text-muted">
          Activity across inquiries, scopes, deliverables, and documents.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/portal/notifications?filter=all"
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
            filter === "all"
              ? "border-slate text-ash"
              : "border-line text-slate hover:border-slate"
          }`}
        >
          All
        </Link>
        <Link
          href="/portal/notifications?filter=unread"
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${
            filter === "unread"
              ? "border-slate text-ash"
              : "border-line text-slate hover:border-slate"
          }`}
        >
          Unread
        </Link>
        <form action={markAllRead}>
          <button
            type="submit"
            className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
          >
            Mark all read
          </button>
        </form>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted">
          No notifications yet.
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted ${
                notification.readAt ? "opacity-70" : ""
              }`}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-slate">
                {notification.type}
              </div>
              <div className="mt-2 text-lg font-semibold text-ash">
                {notification.title}
              </div>
              <p className="mt-2 text-sm text-muted">{notification.body}</p>
              <div className="mt-3 text-xs text-slate">
                {formatDateShort(notification.createdAt)}
              </div>
              {!notification.readAt && (
                <form action={markRead} className="mt-3">
                  <input type="hidden" name="id" value={notification.id} />
                  <button
                    type="submit"
                    className="text-xs uppercase tracking-[0.2em] text-slate hover:text-ash"
                  >
                    Mark read
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

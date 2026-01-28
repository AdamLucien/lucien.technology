"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/iconMap";

export type PortalNavItem = {
  href: string;
  label: string;
  adminOnly?: boolean;
  icon?: IconName;
};

type PortalShellProps = {
  navItems: PortalNavItem[];
  orgName: string;
  userEmail: string;
  userRole: string;
  unreadNotifications: number;
  recentNotifications: {
    id: string;
    type: string;
    title: string;
    body: string;
    createdAt: string;
    readAt: string | null;
  }[];
  requiresOnboarding: boolean;
  children: React.ReactNode;
};

export function PortalShell({
  navItems,
  orgName,
  userEmail,
  userRole,
  unreadNotifications,
  recentNotifications,
  requiresOnboarding,
  children,
}: PortalShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsOverride, setNotificationsOverride] = useState<
    PortalShellProps["recentNotifications"] | null
  >(null);
  const [unreadOverride, setUnreadOverride] = useState<number | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const notifications = notificationsOverride ?? recentNotifications;
  const unreadCount = unreadOverride ?? unreadNotifications;

  useEffect(() => {
    if (!requiresOnboarding) return;
    if (pathname === "/portal/onboarding") return;
    router.replace("/portal/onboarding");
  }, [requiresOnboarding, pathname, router]);

  useEffect(() => {
    if (!menuOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname, menuOpen]);

  const closeNotifications = () => {
    setNotificationsOpen(false);
    setNotificationsOverride(null);
    setUnreadOverride(null);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeNotifications();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!notificationsOpen) return;
      if (!notificationsRef.current) return;
      if (!notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [notificationsOpen]);

  useEffect(() => {
    if (!notificationsOpen) return;
    const controller = new AbortController();
    const load = async () => {
      const response = await fetch("/api/portal/notifications?limit=8", {
        signal: controller.signal,
      }).catch(() => null);
      if (!response?.ok) return;
      const data = await response.json();
      if (Array.isArray(data.items)) {
        setNotificationsOverride(data.items);
      }
      if (typeof data.unreadCount === "number") {
        setUnreadOverride(data.unreadCount);
      }
    };
    void load();
    return () => controller.abort();
  }, [notificationsOpen]);

  const handleMarkAllRead = async () => {
    const response = await fetch("/api/portal/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markAll: true }),
    }).catch(() => null);
    if (!response?.ok) return;
    const data = await response.json();
    setNotificationsOverride((current) => {
      const base = current ?? notifications;
      return base.map((item) => ({
        ...item,
        readAt: item.readAt ?? new Date().toISOString(),
      }));
    });
    if (typeof data.unreadCount === "number") {
      setUnreadOverride(data.unreadCount);
    }
  };

  return (
    <div className="min-h-screen bg-ink text-ash">
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="hidden min-h-screen w-64 flex-col border-r border-line/70 bg-ink/95 px-6 py-8 md:flex">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-slate"
          >
            LUCIEN
          </Link>
          <div className="mt-6 space-y-1 text-sm text-slate">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-w-0 items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-soft hover:text-ash"
              >
                {item.icon && (
                  <Icon
                    name={item.icon}
                    size={16}
                    strokeWidth={1.25}
                    className="text-slate"
                    entrance={false}
                  />
                )}
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-8 text-xs text-muted">
            <div className="text-ash">{orgName}</div>
            <div>{userEmail}</div>
            <div className="mt-1 uppercase tracking-[0.2em] text-slate">
              {userRole.replace("_", " ")}
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line/70 bg-ink/95 px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="portal-mobile-menu"
                onClick={() => setMenuOpen(true)}
                className="btn-animate btn-secondary rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] md:hidden"
              >
                Menu
              </button>
              <div className="text-xs uppercase tracking-[0.3em] text-slate">
                Client Portal
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate">
              <span className="hidden md:inline">{orgName}</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">{userEmail}</span>
              <div className="relative" ref={notificationsRef}>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-full border border-line px-3 py-2 transition hover:border-slate"
                  aria-label="Notifications"
                  aria-expanded={notificationsOpen}
                  aria-haspopup="dialog"
                  onClick={() => setNotificationsOpen((open) => !open)}
                >
                  <Icon
                    name="notifications"
                    size={16}
                    strokeWidth={1.5}
                    className="text-ash"
                    entrance={false}
                  />
                  {unreadCount > 0 && (
                    <span className="absolute -right-1 -top-1 rounded-full bg-ash px-1.5 py-0.5 text-[0.55rem] uppercase text-ink">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div
                    role="dialog"
                    aria-label="Notifications"
                    className="absolute right-0 mt-3 w-80 rounded-2xl border border-line/80 bg-ink p-4 shadow-xl"
                    data-notifications-popover
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate">
                        Notifications
                      </p>
                      <button
                        type="button"
                        onClick={handleMarkAllRead}
                        className="text-xs uppercase tracking-[0.2em] text-slate hover:text-ash"
                      >
                        Mark all read
                      </button>
                    </div>
                    {notifications.length === 0 ? (
                      <div className="mt-4 rounded-xl border border-line/80 bg-soft p-3 text-xs text-muted">
                        No notifications yet.
                      </div>
                    ) : (
                      <div className="mt-4 space-y-3">
                        {notifications.map((item) => (
                          <div
                            key={item.id}
                            className={`rounded-xl border border-line/80 bg-soft p-3 text-xs text-muted ${
                              item.readAt ? "opacity-70" : ""
                            }`}
                          >
                            <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate">
                              {item.type}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-ash">
                              {item.title}
                            </div>
                            <p className="mt-1 text-xs text-muted">
                              {item.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4">
                      <Link
                        href="/portal/notifications"
                        className="text-xs uppercase tracking-[0.2em] text-slate hover:text-ash"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                <Icon
                  name="logout"
                  size={16}
                  strokeWidth={1.5}
                  className="text-ash"
                  entrance={false}
                />
                Logout
              </button>
            </div>
          </header>
          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>

      {menuOpen && (
        <div
          id="portal-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Portal navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          <div
            className="absolute inset-0 bg-ink/95 backdrop-blur"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 border-r border-line/70 bg-ink px-6 py-8 shadow-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-slate">
              LUCIEN
            </div>
            <div className="mt-6 space-y-1 text-sm text-slate">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={index === 0 ? firstLinkRef : null}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-w-0 items-center gap-2 rounded-lg px-3 py-3 transition hover:bg-soft hover:text-ash"
                >
                  {item.icon && (
                    <Icon
                      name={item.icon}
                      size={16}
                      strokeWidth={1.25}
                      className="text-slate"
                      entrance={false}
                    />
                  )}
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-xs text-muted">
              <div className="text-ash">{orgName}</div>
              <div>{userEmail}</div>
              <div className="mt-1 uppercase tracking-[0.2em] text-slate">
                {userRole.replace("_", " ")}
              </div>
            </div>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn-animate btn-primary mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              <Icon
                name="logout"
                size={16}
                strokeWidth={1.5}
                className="text-ash"
                entrance={false}
              />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brand } from "@/lib/brand";
import { LoginForm } from "@/components/LoginForm";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons/iconMap";

const navItems = [
  { href: "/marketplace", label: "Marketplace", icon: "marketplace" },
  { href: "/how-we-work", label: "How We Work", icon: "how" },
  { href: "/procurement", label: "Procurement", icon: "governance" },
  { href: "/security", label: "Security", icon: "security" },
  { href: "/insights", label: "Insights", icon: "insights" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/legal", label: "Legal", icon: "legal" },
  { href: "/contact", label: "Contact", icon: "contact" },
] satisfies { href: string; label: string; icon: IconName }[];

type HeaderProps = {
  devLoginEmails?: string[];
};

export function Header({ devLoginEmails = [] }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal") || pathname === "/login";
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const loginRef = useRef<HTMLDivElement | null>(null);
  const lastPathRef = useRef(pathname);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => {
    if (!menuOpen && !isClosing) return;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setIsClosing(true);
    setMenuOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setIsClosing(false);
    }, 250);
  }, [isClosing, menuOpen]);

  const openMenu = useCallback(() => {
    if (menuOpen) return;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsClosing(false);
    setMenuOpen(true);
    setLoginOpen(false);
  }, [menuOpen]);

  const closeLogin = useCallback(() => {
    setLoginOpen(false);
  }, []);

  const openLogin = useCallback(() => {
    closeMenu();
    setHidden(false);
    setLoginOpen(true);
  }, [closeMenu]);

  const showMenu = menuOpen || isClosing;

  useEffect(() => {
    if (isPortal) return;
    if (prefersReducedMotion) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        if (window.innerWidth >= 768) {
          if (hidden) setHidden(false);
          lastScrollY.current = window.scrollY;
          ticking.current = false;
          return;
        }
        const current = window.scrollY;
        const shouldHide = current > lastScrollY.current && current > 32;
        if (shouldHide !== hidden) {
          setHidden(shouldHide);
        }
        lastScrollY.current = current;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden, prefersReducedMotion, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (menuOpen || loginOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, loginOpen, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (!menuOpen) return;

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key === "Tab" && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (!loginOpen) return;

    const focusable = loginRef.current?.querySelectorAll<HTMLElement>(
      "a, button, input, textarea, [tabindex]:not([tabindex='-1'])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLogin();
        return;
      }
      if (event.key === "Tab" && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [loginOpen, closeLogin, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (process.env.NODE_ENV !== "production") {
      console.info("NavState", {
        pathname,
        menuOpen,
        isClosing,
        loginOpen,
        bodyOverflow: document.body.style.overflow || "auto",
      });
    }
  }, [pathname, menuOpen, isClosing, loginOpen, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
    setLoginOpen(false);
    setHidden(false);
  }, [pathname, closeMenu, isPortal]);

  useEffect(() => {
    if (isPortal) return;
    if (process.env.NODE_ENV !== "production") {
      console.info("MenuOverlay", { mounted: showMenu });
    }
  }, [showMenu, isPortal]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleNavClick = () => {
    closeMenu();
    setLoginOpen(false);
    setHidden(false);
  };

  if (isPortal) {
    return null;
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b border-line/70 bg-ink/95 backdrop-blur ${
        prefersReducedMotion ? "" : "transition-transform duration-200"
      } ${hidden && !menuOpen ? "-translate-y-full" : ""}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.4em] text-ash"
            aria-label={`${brand.name} home`}
            onClick={handleNavClick}
          >
            <Image
              src="/app/Lucien_Symbol.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
              priority
            />
            {brand.wordmark}
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-slate transition hover:text-ash"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={openLogin}
            aria-label="Open portal login"
            className="btn-animate btn-secondary inline-flex items-center justify-center rounded-full p-2"
          >
            <Icon name="login" size={16} className="text-ash" />
          </button>
          <Link
            href="/request-scope"
            className="btn-animate btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]"
            onClick={handleNavClick}
          >
            <Icon name="requestScope" size={16} className="text-ash" />
            Request scope
          </Link>
        </div>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
          className="btn-animate btn-secondary flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] md:hidden"
        >
          Menu
          <span className="flex flex-col gap-1">
            <span className="h-px w-4 bg-ash" />
            <span className="h-px w-4 bg-ash" />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            data-overlay="mobile-menu-backdrop"
            className={`fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm md:hidden ${
              menuOpen && !isClosing ? "pointer-events-auto" : "pointer-events-none"
            }`}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          >
            <motion.div
              id="mobile-menu"
              data-menu-panel="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={`ml-auto flex h-full w-[80%] max-w-xs flex-col gap-6 border-l border-line bg-ink px-6 py-8 ${
                menuOpen && !isClosing ? "pointer-events-auto" : "pointer-events-none"
              }`}
              initial={
                prefersReducedMotion ? { x: 0 } : { x: "100%", opacity: 0.8 }
              }
              animate={{ x: menuOpen ? 0 : "100%", opacity: menuOpen ? 1 : 0.8 }}
              exit={prefersReducedMotion ? { x: 0 } : { x: "100%", opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              ref={menuRef}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate">
                  Navigation
                </span>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.2em] text-slate"
                  onClick={closeMenu}
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-3 py-3 text-sm uppercase tracking-[0.2em] text-ash whitespace-nowrap"
                    onClick={handleNavClick}
                  >
                    <Icon name={item.icon} size={16} className="text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-4">
                <button
                  type="button"
                  onClick={openLogin}
                  className="btn-animate btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs uppercase tracking-[0.2em]"
                >
                  <Icon name="login" size={16} className="text-ash" />
                  Portal login
                </button>
                <Link
                  href="/request-scope"
                  className="btn-animate btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-xs uppercase tracking-[0.2em]"
                  onClick={handleNavClick}
                >
                  <Icon name="requestScope" size={16} className="text-ash" />
                  Request scope
                </Link>
                <p className="text-xs text-muted">
                  Confidentiality-first engagement, structured for enterprise
                  delivery.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {loginOpen && (
          <motion.div
            className={`fixed inset-0 z-[60] flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-ink/90 px-4 py-12 backdrop-blur-sm ${
              loginOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: loginOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLogin}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Portal login"
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-ink p-6"
              initial={
                prefersReducedMotion
                  ? { y: 0, opacity: 1 }
                  : { y: 12, opacity: 0.9 }
              }
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              ref={loginRef}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate">
                  Portal login
                </span>
                <button
                  type="button"
                  className="text-xs uppercase tracking-[0.2em] text-slate"
                  onClick={closeLogin}
                >
                  Close
                </button>
              </div>
              <div className="mt-4">
                <LoginForm
                  callbackUrl="/portal"
                  devLoginEmails={devLoginEmails}
                  headingTag="h2"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

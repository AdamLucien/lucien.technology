"use client";

import { usePathname } from "next/navigation";

type MainContentProps = {
  children: React.ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal") || pathname === "/login";

  return (
    <main
      id="content"
      className={isPortal ? "min-h-[70vh]" : "min-h-[70vh] pt-24"}
    >
      {children}
    </main>
  );
}

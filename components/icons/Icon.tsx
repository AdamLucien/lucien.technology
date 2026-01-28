"use client";

import { useSyncExternalStore } from "react";
import type { IconName } from "@/components/icons/iconMap";
import { iconMap } from "@/components/icons/iconMap";
import { IconMotion } from "@/components/motion/IconMotion";

export type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  title?: string;
  decorative?: boolean;
  animated?: boolean;
  entrance?: boolean;
};

type StoreListener = () => void;

// Use an external store to flip `mounted` after hydration without setState in effects.
const mountedStore = {
  mounted: false,
  scheduled: false,
  listeners: new Set<StoreListener>(),
};

const scheduleMounted = () => {
  if (mountedStore.mounted || mountedStore.scheduled) return;
  mountedStore.scheduled = true;
  if (typeof window === "undefined") return;
  const markMounted = () => {
    if (mountedStore.mounted) return;
    mountedStore.mounted = true;
    mountedStore.listeners.forEach((listener) => listener());
  };
  if ("requestAnimationFrame" in window) {
    window.requestAnimationFrame(markMounted);
  } else {
    setTimeout(markMounted, 0);
  }
};

const subscribe = (listener: StoreListener) => {
  mountedStore.listeners.add(listener);
  scheduleMounted();
  return () => mountedStore.listeners.delete(listener);
};

const getSnapshot = () => mountedStore.mounted;
const getServerSnapshot = () => false;

export function IconStatic({
  name,
  size = 16,
  strokeWidth = 1.5,
  className,
  title,
  decorative = true,
}: Omit<IconProps, "animated" | "entrance">) {
  const IconComponent = iconMap[name];
  const ariaLabel = title ?? name;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <IconComponent
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        color="currentColor"
        aria-hidden={decorative}
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : ariaLabel}
        focusable="false"
        className="block"
        vectorEffect="non-scaling-stroke"
      >
        {title ? <title>{title}</title> : null}
      </IconComponent>
    </span>
  );
}

export function Icon({
  animated = true,
  entrance = true,
  ...rest
}: IconProps) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!animated || !mounted) {
    return <IconStatic {...rest} />;
  }

  return (
    <IconMotion
      className={`inline-flex shrink-0 items-center justify-center ${rest.className ?? ""}`}
      entrance={entrance}
    >
      <IconStatic {...rest} className="" />
    </IconMotion>
  );
}

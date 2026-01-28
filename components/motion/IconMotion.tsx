"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type IconMotionProps = {
  children: ReactNode;
  className?: string;
  entrance?: boolean;
};

export function IconMotion({
  children,
  className,
  entrance = true,
}: IconMotionProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: entrance ? 0 : 1 }
    : entrance
      ? { opacity: 0, y: 2 }
      : { opacity: 1, y: 0 };

  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 };

  const hover = prefersReducedMotion
    ? { opacity: 0.9 }
    : { opacity: 1, y: -1, scale: 1.03 };

  const tap = prefersReducedMotion
    ? { opacity: 0.85 }
    : { opacity: 1, y: 0, scale: 0.98 };

  return (
    <motion.span
      className={className}
      initial={initial}
      animate={animate}
      whileHover={hover}
      whileFocus={hover}
      whileTap={tap}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  hoverScale?: number;
};

export function MotionIn({
  children,
  className,
  delay = 0,
  hover = false,
  hoverScale = 1.01,
}: MotionInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={hover ? { scale: hoverScale } : undefined}
      transition={{ duration: 0.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

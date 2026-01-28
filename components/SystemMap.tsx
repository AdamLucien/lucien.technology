"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "core", label: "Core", x: 160, y: 110 },
  { id: "ops", label: "Operations", x: 60, y: 40 },
  { id: "risk", label: "Risk", x: 260, y: 40 },
  { id: "data", label: "Data", x: 40, y: 180 },
  { id: "security", label: "Security", x: 280, y: 180 },
  { id: "delivery", label: "Delivery", x: 160, y: 220 },
];

const links = [
  { from: "core", to: "ops" },
  { from: "core", to: "risk" },
  { from: "core", to: "data" },
  { from: "core", to: "security" },
  { from: "core", to: "delivery" },
  { from: "ops", to: "risk" },
  { from: "data", to: "security" },
];

export function SystemMap() {
  const [active, setActive] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isLinked = (nodeId: string) => {
    if (!active) return false;
    if (active === nodeId) return true;
    return links.some(
      (link) =>
        (link.from === active && link.to === nodeId) ||
        (link.to === active && link.from === nodeId),
    );
  };

  return (
    <div className="rounded-2xl border border-line/80 bg-soft p-6">
      <motion.svg
        width="320"
        height="260"
        viewBox="0 0 320 260"
        role="img"
        aria-label="System map connecting operations, risk, data, security, and delivery"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 6 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? undefined : { duration: 0.2 }}
        className="mx-auto"
      >
        {links.map((link) => {
          const from = nodes.find((node) => node.id === link.from);
          const to = nodes.find((node) => node.id === link.to);
          if (!from || !to) return null;
          const highlight = active === from.id || active === to.id;
          return (
            <line
              key={`${link.from}-${link.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={highlight ? "#FAFAFA" : "#2B2C30"}
              strokeWidth={1}
              opacity={highlight ? 0.8 : 0.45}
            />
          );
        })}
        {nodes.map((node) => {
          const isActive = active === node.id;
          const connected = isLinked(node.id);
          return (
            <g
              key={node.id}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(node.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${node.label} node`}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 7 : connected ? 6 : 5}
                fill={connected ? "#FAFAFA" : "#8B8B8F"}
              />
              <text
                x={node.x}
                y={node.y + 18}
                textAnchor="middle"
                fontSize="10"
                fill={connected ? "#FAFAFA" : "#8B8B8F"}
                fontFamily="var(--font-sans)"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </motion.svg>
      <p className="mt-4 text-xs text-muted">
        Each engagement maps mission needs to system dependencies, risk controls,
        and delivery pathways.
      </p>
    </div>
  );
}

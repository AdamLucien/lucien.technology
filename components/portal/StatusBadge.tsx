import type { IconName } from "@/components/icons/iconMap";
import { IconStatic } from "@/components/icons/IconStatic";

type StatusBadgeProps = {
  label: string;
  icon?: IconName;
  tone?: "success" | "info" | "warning" | "danger" | "neutral" | "access";
  variant?: "solid" | "soft" | "outline";
  className?: string;
};

export function StatusBadge({
  label,
  icon,
  tone = "neutral",
  variant = "outline",
  className,
}: StatusBadgeProps) {
  const classes = ["badge", `badge--${tone}`, `badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {icon && (
        <IconStatic
          name={icon}
          size={12}
          strokeWidth={1.25}
          className="text-current"
        />
      )}
      {label}
    </span>
  );
}

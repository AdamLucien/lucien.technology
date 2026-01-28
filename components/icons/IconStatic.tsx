import type { IconName } from "@/components/icons/iconMap";
import { iconMap } from "@/components/icons/iconMap";

export type IconBaseProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  title?: string;
  decorative?: boolean;
};

export function IconStatic({
  name,
  size = 16,
  strokeWidth = 1.5,
  className,
  title,
  decorative = true,
}: IconBaseProps) {
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

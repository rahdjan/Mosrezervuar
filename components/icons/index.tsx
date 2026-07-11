import type { SVGProps } from "react";
import type { IconKey } from "@/lib/data/categories";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTankVertical(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="24" cy="9" rx="13" ry="3" />
      <path d="M11 9v28a13 3 0 0 0 26 0V9" />
      <path d="M11 18a13 3 0 0 0 26 0" />
      <path d="M11 27a13 3 0 0 0 26 0" />
      <rect x="20" y="3" width="8" height="4" rx="0.5" />
    </svg>
  );
}

export function IconTankHorizontal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="14" width="38" height="16" rx="8" />
      <path d="M5 22h38" />
      <circle cx="24" cy="14" r="2" />
      <path d="M14 30v8M34 30v8" />
      <path d="M10 38h28" />
    </svg>
  );
}

export function IconPipe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 4h12l4 38H14L18 4Z" />
      <path d="M15.5 16h17M14.7 28h18.6" />
      <path d="M16 4h16" />
    </svg>
  );
}

export function IconSilo(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="5" width="6" height="4" rx="0.5" />
      <path d="M9 11h30v22H9z" />
      <path d="M9 19h30M9 27h30" />
      <path d="M9 33 24 45 39 33" />
    </svg>
  );
}

export function IconEquipment(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 24h11M31 24h11" />
      <rect x="17" y="20" width="14" height="8" rx="1" />
      <circle cx="24" cy="11" r="6" />
      <path d="M24 5v2M24 15v2M18 11h2M28 11h2M19.8 6.8l1.4 1.4M26.8 15.2l1.4 1.4M19.8 15.2l1.4-1.4M26.8 6.8l1.4-1.4" />
    </svg>
  );
}

export function IconFrame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 10h36M6 38h36M6 10v28M42 10v28" />
      <path d="M6 38 24 10l18 28" />
    </svg>
  );
}

export function IconSteel(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="20" width="28" height="8" rx="1" />
      <rect x="12" y="13" width="28" height="8" rx="1" />
      <rect x="8" y="27" width="28" height="8" rx="1" opacity="0.6" />
    </svg>
  );
}

export function IconCertificate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="6" width="26" height="32" rx="1" />
      <path d="M12 14h16M12 19h16M12 24h10" />
      <circle cx="34" cy="33" r="7" />
      <path d="M31.5 33l1.8 1.8 3.2-3.6" />
    </svg>
  );
}

export function IconKeyTurn(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="7" />
      <path d="M21 21 40 40M33 33l4-4M37 37l4-4" />
    </svg>
  );
}

export function IconGauge(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 30a16 16 0 1 1 32 0" />
      <path d="M24 30 32 19" />
      <path d="M8 30h32" />
      <circle cx="24" cy="30" r="2" />
    </svg>
  );
}

export const icons: Record<IconKey, (props: IconProps) => React.ReactElement> = {
  "tank-vertical": IconTankVertical,
  "tank-horizontal": IconTankHorizontal,
  pipe: IconPipe,
  silo: IconSilo,
  equipment: IconEquipment,
  frame: IconFrame,
  steel: IconSteel,
  certificate: IconCertificate,
  key: IconKeyTurn,
  gauge: IconGauge,
};

export function CategoryIcon({ icon, ...props }: { icon: IconKey } & IconProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}

/* ---- Interface / chrome icons ---- */

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconLogoMark(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 32 32" {...props}>
      <ellipse cx="16" cy="7" rx="11" ry="2.5" />
      <path d="M5 7v17a11 2.5 0 0 0 22 0V7" />
      <path d="M5 14.5a11 2.5 0 0 0 22 0" />
      <path d="M5 22a11 2.5 0 0 0 22 0" />
    </svg>
  );
}

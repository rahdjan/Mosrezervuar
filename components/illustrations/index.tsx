import { icons } from "@/components/icons";
import type { IconKey } from "@/lib/data/categories";

interface ProductIllustrationProps {
  icon: IconKey;
  label?: string;
  className?: string;
  dark?: boolean;
}

/**
 * Blueprint-style placeholder illustration used wherever the design spec
 * calls for a product/project "photo". Renders a grid background, an
 * enlarged version of the category icon, and a rust dimension line.
 */
export function ProductIllustration({ icon, label, className, dark }: ProductIllustrationProps) {
  const Icon = icons[icon];
  const gridId = `grid-${icon}-${dark ? "d" : "l"}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern id={gridId} width="25" height="25" patternUnits="userSpaceOnUse">
          <path
            d="M0 0H25V25"
            fill="none"
            stroke={dark ? "rgba(255,255,255,0.07)" : "#D4D9DF"}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={dark ? "#1C2B3A" : "#F0F2F4"} />
      <rect width="400" height="300" fill={`url(#${gridId})`} />
      <Icon
        x={130}
        y={55}
        width={140}
        height={140}
        className={dark ? "text-white" : "text-steel-dark"}
        strokeWidth={1.25}
      />
      <line x1="60" y1="245" x2="340" y2="245" stroke="#C0392B" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="60" y1="239" x2="60" y2="251" stroke="#C0392B" strokeWidth="1" />
      <line x1="340" y1="239" x2="340" y2="251" stroke="#C0392B" strokeWidth="1" />
      {label ? (
        <text
          x="200"
          y="270"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="13"
          fill="#C0392B"
          letterSpacing="2"
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}

/**
 * Larger industrial scene used in the hero section: a vertical tank,
 * a horizontal tank and a stack rendered as a steel blueprint silhouette.
 */
export function FactoryIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 0H30V30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5068" />
          <stop offset="100%" stopColor="#253444" />
        </linearGradient>
      </defs>

      <rect width="600" height="600" fill="#1C2B3A" />
      <rect width="600" height="600" fill="url(#hero-grid)" />

      {/* ground line */}
      <line x1="0" y1="500" x2="600" y2="500" stroke="#3a5068" strokeWidth="2" />

      {/* smokestack */}
      <path
        d="M455 90 L495 90 L505 500 L445 500 Z"
        fill="url(#hero-fill)"
        stroke="#0f1822"
        strokeWidth="2"
      />
      <path d="M448 200H502M446 320H504" stroke="#1C2B3A" strokeWidth="2" />

      {/* big vertical tank */}
      <rect x="140" y="150" width="220" height="320" fill="url(#hero-fill)" stroke="#0f1822" strokeWidth="2" />
      <ellipse cx="250" cy="150" rx="110" ry="22" fill="#3a5068" stroke="#0f1822" strokeWidth="2" />
      <path d="M140 250H360M140 350H360M140 440H360" stroke="#1C2B3A" strokeWidth="2" />
      <rect x="225" y="100" width="50" height="28" fill="#3a5068" stroke="#0f1822" strokeWidth="2" />

      {/* small horizontal tank */}
      <rect x="40" y="430" width="170" height="70" rx="35" fill="url(#hero-fill)" stroke="#0f1822" strokeWidth="2" />
      <line x1="40" y1="465" x2="210" y2="465" stroke="#1C2B3A" strokeWidth="2" />
      <line x1="85" y1="500" x2="85" y2="520" stroke="#3a5068" strokeWidth="3" />
      <line x1="170" y1="500" x2="170" y2="520" stroke="#3a5068" strokeWidth="3" />

      {/* rust accent: dimension marker on the main tank */}
      <line x1="380" y1="150" x2="380" y2="470" stroke="#C0392B" strokeWidth="1.5" strokeDasharray="6 5" />
      <line x1="372" y1="150" x2="388" y2="150" stroke="#C0392B" strokeWidth="1.5" />
      <line x1="372" y1="470" x2="388" y2="470" stroke="#C0392B" strokeWidth="1.5" />
      <text
        x="395"
        y="315"
        fontFamily="var(--font-mono)"
        fontSize="16"
        fill="#E74C3C"
        letterSpacing="1"
        transform="rotate(90 395 315)"
      >
        H = РАСЧЁТНАЯ
      </text>
    </svg>
  );
}

import React from "react";

interface LivsmartLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtext?: boolean;
}

/**
 * Faithful vector reconstruction of the Livsmart Engineers & Contractors logo
 * from the supplied visiting card reference (two pitched roofs, 2x2 window grids,
 * tall 'L' structural column, orange 'V' check-stroke, underline rule, and descriptor).
 * Note: Replace with official master vector file once supplied/approved by the business owner.
 */
export function LivsmartLogo({
  variant = "dark",
  className = "",
  showSubtext = true,
}: LivsmartLogoProps) {
  const mainColor = variant === "dark" ? "#191919" : "#FFFFFF";
  const accentColor = "#E8792E";

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <svg
        viewBox="0 0 280 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-11 w-auto sm:h-12"
        role="img"
        aria-label="Livsmart Engineers And Contractors Logo"
      >
        {/* Left smaller roof (Charcoal / White) */}
        <path
          d="M24 31L63 11L102 31L98 33L63 15.5L28 33L24 31Z"
          fill={mainColor}
        />
        {/* Left roof 2x2 window grid */}
        <rect x="57" y="21" width="5" height="5" fill={accentColor} />
        <rect x="64" y="21" width="5" height="5" fill={mainColor} />
        <rect x="57" y="28" width="5" height="5" fill={mainColor} />
        <rect x="64" y="28" width="5" height="5" fill={accentColor} />

        {/* Right larger roof (Livsmart Orange) */}
        <path
          d="M78 36L162 4L252 36L248 38.5L162 9.5L82 38.5L78 36Z"
          fill={accentColor}
        />
        {/* Right roof 2x2 window grid */}
        <rect x="153" y="18" width="7.5" height="7.5" fill={mainColor} />
        <rect x="163" y="18" width="7.5" height="7.5" fill={accentColor} />
        <rect x="153" y="28" width="7.5" height="7.5" fill={accentColor} />
        <rect x="163" y="28" width="7.5" height="7.5" fill={mainColor} />

        {/* Tall 'L' stem extending from left roof eave down to baseline */}
        <path
          d="M32 18H37.5V65.5H56V70H32V18Z"
          fill={mainColor}
        />

        {/* 'i' */}
        <rect x="61" y="40" width="4.5" height="4.5" fill={mainColor} />
        <rect x="61" y="48" width="4.5" height="22" fill={mainColor} />

        {/* Stylized bold orange 'V' */}
        <path
          d="M71 45H78.5L86 62.5L97.5 39H105.5L88.5 70.5H83L71 45Z"
          fill={accentColor}
        />

        {/* 'smart' typography */}
        <text
          x="105"
          y="70"
          fill={mainColor}
          fontFamily="var(--font-manrope), sans-serif"
          fontSize="36"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          smart
        </text>

        {/* Horizontal underline beneath Livsmart */}
        <line
          x1="28"
          y1="75.5"
          x2="252"
          y2="75.5"
          stroke={mainColor}
          strokeWidth="1.75"
        />

        {/* Sub-descriptor: Engineers And Contractors */}
        {showSubtext && (
          <text
            x="140"
            y="91"
            textAnchor="middle"
            fill={mainColor}
            fontFamily="var(--font-manrope), sans-serif"
            fontSize="13.5"
            fontWeight="500"
            letterSpacing="0.04em"
          >
            Engineers And Contractors
          </text>
        )}
      </svg>
    </div>
  );
}

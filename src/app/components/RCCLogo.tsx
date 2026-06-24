interface RCCLogoProps {
  /** Color for the primary elements (circle, house, text). Default: currentColor */
  color?: string;
  /** Optional accent color for inner details */
  accentColor?: string;
  /** Size in px for the circular badge. Default: 48 */
  size?: number;
  /** Show only the circular mark without text below */
  markOnly?: boolean;
  className?: string;
}

/**
 * SVG recreation of the RCC – Renukai Consultants & Constructions logo.
 * Pure SVG, fully scalable, works on any background.
 */
export function RCCLogo({
  color = "currentColor",
  accentColor,
  size = 48,
  markOnly = false,
  className = "",
}: RCCLogoProps) {
  const fill = color;
  const accent = accentColor ?? color;

  if (markOnly) {
    // Just the circular badge mark
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RCC Renukai Consultants & Constructions logo mark"
      >
        {/* Outer circle */}
        <circle cx="60" cy="60" r="57" stroke={fill} strokeWidth="2.5" fill="none" />
        {/* Inner circle */}
        <circle cx="60" cy="60" r="51" stroke={fill} strokeWidth="1.2" fill="none" />

        {/* ── Three house / roof peaks ── */}
        {/* Left house */}
        <polygon points="18,58 34,30 50,58" fill={fill} />
        <polygon points="21,58 34,33 47,58" fill="white" />
        <polygon points="24,58 34,37 44,58" fill={fill} />
        {/* Small left window */}
        <rect x="27" y="50" width="5" height="5" fill="white" />

        {/* Centre house (tallest) */}
        <polygon points="35,58 60,18 85,58" fill={fill} />
        <polygon points="39,58 60,22 81,58" fill="white" />
        <polygon points="43,58 60,26 77,58" fill={fill} />
        {/* Centre window */}
        <rect x="53" y="43" width="8" height="8" fill="white" />
        <line x1="57" y1="43" x2="57" y2="51" stroke={fill} strokeWidth="1" />
        <line x1="53" y1="47" x2="61" y2="47" stroke={fill} strokeWidth="1" />

        {/* Right house */}
        <polygon points="70,58 86,30 102,58" fill={fill} />
        <polygon points="73,58 86,33 99,58" fill="white" />
        <polygon points="76,58 86,37 96,58" fill={fill} />
        {/* Small right window */}
        <rect x="88" y="50" width="5" height="5" fill="white" />

        {/* ── Rebar lines ── */}
        <line x1="10" y1="62" x2="110" y2="62" stroke={fill} strokeWidth="3" strokeLinecap="round" />
        {/* Rebar cross-hatch */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={12 + i * 5}
            y1="59"
            x2={10 + i * 5}
            y2="65"
            stroke={fill}
            strokeWidth="1"
          />
        ))}
        <line x1="10" y1="67" x2="110" y2="67" stroke={fill} strokeWidth="3" strokeLinecap="round" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={12 + i * 5}
            y1="64"
            x2={10 + i * 5}
            y2="70"
            stroke={fill}
            strokeWidth="1"
          />
        ))}

        {/* ── RCC text ── */}
        <text
          x="60"
          y="88"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="20"
          fill={fill}
          letterSpacing="3"
        >
          RCC
        </text>

        {/* ── Subtext ── */}
        <text
          x="60"
          y="101"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="400"
          fontSize="5.5"
          fill={fill}
          letterSpacing="0.5"
        >
          Renukai Consultants &amp; Constructions
        </text>
      </svg>
    );
  }

  // Full horizontal logo: mark + text side-by-side
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Renukai Consultants & Constructions">
      {/* Circular mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        flexShrink={0}
      >
        <circle cx="60" cy="60" r="57" stroke={fill} strokeWidth="2.5" fill="none" />
        <circle cx="60" cy="60" r="51" stroke={fill} strokeWidth="1.2" fill="none" />

        <polygon points="18,58 34,30 50,58" fill={fill} />
        <polygon points="21,58 34,33 47,58" fill="white" />
        <polygon points="24,58 34,37 44,58" fill={fill} />
        <rect x="27" y="50" width="5" height="5" fill="white" />

        <polygon points="35,58 60,18 85,58" fill={fill} />
        <polygon points="39,58 60,22 81,58" fill="white" />
        <polygon points="43,58 60,26 77,58" fill={fill} />
        <rect x="53" y="43" width="8" height="8" fill="white" />
        <line x1="57" y1="43" x2="57" y2="51" stroke={fill} strokeWidth="1" />
        <line x1="53" y1="47" x2="61" y2="47" stroke={fill} strokeWidth="1" />

        <polygon points="70,58 86,30 102,58" fill={fill} />
        <polygon points="73,58 86,33 99,58" fill="white" />
        <polygon points="76,58 86,37 96,58" fill={fill} />
        <rect x="88" y="50" width="5" height="5" fill="white" />

        <line x1="10" y1="62" x2="110" y2="62" stroke={fill} strokeWidth="3" strokeLinecap="round" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1={12 + i * 5} y1="59" x2={10 + i * 5} y2="65" stroke={fill} strokeWidth="1" />
        ))}
        <line x1="10" y1="67" x2="110" y2="67" stroke={fill} strokeWidth="3" strokeLinecap="round" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1={12 + i * 5} y1="64" x2={10 + i * 5} y2="70" stroke={fill} strokeWidth="1" />
        ))}

        <text x="60" y="88" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="20" fill={fill} letterSpacing="3">RCC</text>
        <text x="60" y="101" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="5.5" fill={fill} letterSpacing="0.5">Renukai Consultants &amp; Constructions</text>
      </svg>

      {/* Text block */}
      <div>
        <div
          className="font-bold text-sm leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif", color: fill }}
        >
          Renukai
        </div>
        <div
          className="text-xs leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif", color: accent }}
        >
          Consultants &amp; Constructions
        </div>
      </div>
    </div>
  );
}

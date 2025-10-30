import React, { forwardRef } from 'react'

// Color tokens
const COLORS = {
  deepBlue: '#0B3A75',
  deepBlueDark: '#082B58',
  brightOrange: '#FF7A1A',
  gray: '#98A2B3',
  navyBg: '#0B1220'
}

// Responsive, downloadable SVG logo
const Logo = forwardRef(function Logo({ background = 'navy' }, ref) {
  // background: 'navy' | 'transparent'
  const hasBg = background === 'navy'

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 980 300"
      role="img"
      aria-label="MindForge logo"
      className="h-auto w-full max-w-3xl"
    >
      <defs>
        <linearGradient id="mf-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={COLORS.deepBlue} />
          <stop offset="100%" stopColor={COLORS.deepBlueDark} />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="1" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {hasBg && (
        <rect x="0" y="0" width="100%" height="100%" rx="24" fill={COLORS.navyBg} />
      )}

      {/* Left emblem: stylized M/F in a rounded hex tile */}
      <g transform="translate(40,40)">
        {/* Tile */}
        <rect width="220" height="220" rx="28" fill="url(#mf-blue)" filter="url(#soft)" />

        {/* M shape (gray) */}
        <path
          d="M46 170 V64 h24 l34 46 34-46 h24 V170 h-24 V108 l-34 44 -34-44 V170 z"
          fill={COLORS.gray}
          opacity="0.95"
        />

        {/* Slash (bright orange) */}
        <rect x="148" y="62" width="18" height="120" transform="rotate(28 157 122)" rx="9" fill={COLORS.brightOrange} />

        {/* F accent built from bars (orange) */}
        <rect x="134" y="82" width="64" height="16" rx="8" fill={COLORS.brightOrange} />
        <rect x="134" y="120" width="44" height="16" rx="8" fill={COLORS.brightOrange} />
      </g>

      {/* Wordmark and tagline */}
      <g transform="translate(300,85)">
        <text x="0" y="0" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Noto Sans', 'Liberation Sans', sans-serif" fontSize="72" fontWeight="800" letterSpacing="0.5">
          <tspan fill={COLORS.deepBlueDark}>Mind</tspan>
          <tspan fill={COLORS.brightOrange}>Forge</tspan>
        </text>
        <text x="2" y="58" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Noto Sans', 'Liberation Sans', sans-serif" fontSize="22" fontWeight="600" fill={COLORS.gray}>
          Knowledge That Pays
        </text>
      </g>
    </svg>
  )
})

export default Logo

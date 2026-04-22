export default function AcademyViz() {
  const events: Array<[number, number, string]> = [
    [0, 0, '#6366f1'],
    [2, 0, '#a855f7'],
    [4, 0, '#6366f1'],
    [1, 1, '#a855f7'],
    [3, 1, '#6366f1'],
    [5, 1, '#a855f7'],
    [0, 2, '#a855f7'],
    [2, 2, '#6366f1'],
    [4, 2, '#a855f7'],
    [1, 3, '#6366f1'],
    [3, 3, '#a855f7'],
  ];

  return (
    <svg
      className="product-viz-svg"
      viewBox="0 0 500 220"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <clipPath id="ac-clip">
          <rect x="0" y="0" width="500" height="220" rx="14" />
        </clipPath>
        <linearGradient id="ac-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="0.5" stopColor="#a855f7" />
          <stop offset="1" stopColor="#fcd34d" />
        </linearGradient>
      </defs>
      <g clipPath="url(#ac-clip)">
        <rect x="24" y="20" width="80" height="8" rx="2" fill="#f3f1ee" opacity="0.85" />
        <rect x="24" y="34" width="44" height="5" rx="1.5" fill="#9a94a8" opacity="0.6" />
        <rect x="420" y="20" width="56" height="22" rx="11" fill="url(#ac-grad)" />
        <text
          x="448"
          y="35"
          textAnchor="middle"
          fontSize="9"
          fill="#0a0618"
          fontFamily="General Sans, sans-serif"
          fontWeight="600"
        >
          + Clase
        </text>
        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => (
          <text
            key={i}
            x={34 + i * 62}
            y={68}
            fontSize="8"
            fill="#9a94a8"
            fontFamily="JetBrains Mono, monospace"
          >
            {d}
          </text>
        ))}
        {Array.from({ length: 5 }).map((_, row) => (
          <g key={row} className={`cal-row cal-row-${row}`}>
            {Array.from({ length: 7 }).map((_, col) => (
              <rect
                key={col}
                x={24 + col * 62}
                y={76 + row * 28}
                width="54"
                height="24"
                rx="3"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="0.8"
              />
            ))}
            {events
              .filter(([, r]) => r === row)
              .map(([c, r, color], i) => (
                <g key={i}>
                  <rect
                    x={27 + c * 62}
                    y={80 + r * 28}
                    width="48"
                    height="10"
                    rx="2"
                    fill={color}
                    opacity="0.8"
                  />
                  <rect
                    x={30 + c * 62}
                    y={83.5}
                    width="24"
                    height="2"
                    rx="1"
                    fill="#fff"
                    opacity="0.55"
                    transform={`translate(0, ${r * 28})`}
                  />
                </g>
              ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function SyntiaViz() {
  const slots = [
    { h: '09:00', name: 'Ana R.', type: 'Control', color: '#6366f1' },
    { h: '10:30', name: 'Carlos M.', type: 'Primera vez', color: '#a855f7' },
    { h: '12:00', name: 'María L.', type: 'Control', color: '#6366f1' },
    { h: '14:00', name: 'Diego P.', type: 'Seguimiento', color: '#6366f1' },
    { h: '15:30', name: 'Laura S.', type: 'Primera vez', color: '#a855f7' },
  ];

  return (
    <svg
      className="product-viz-svg"
      viewBox="0 0 500 220"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <clipPath id="sy-clip">
          <rect x="0" y="0" width="500" height="220" rx="14" />
        </clipPath>
        <linearGradient id="sy-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="0.5" stopColor="#a855f7" />
          <stop offset="1" stopColor="#fcd34d" />
        </linearGradient>
      </defs>
      <g clipPath="url(#sy-clip)">
        <rect x="0" y="0" width="110" height="220" fill="rgba(255,255,255,0.03)" />
        <rect x="14" y="20" width="60" height="8" rx="2" fill="#f3f1ee" opacity="0.85" />
        {['Agenda', 'Pacientes', 'Historias', 'Facturación'].map((label, i) => (
          <g key={i}>
            {i === 0 && (
              <rect
                x="6"
                y={44 + i * 22}
                width="98"
                height="18"
                rx="3"
                fill="rgba(168,85,247,0.15)"
                stroke="rgba(168,85,247,0.35)"
                strokeWidth="0.6"
              />
            )}
            <circle cx="16" cy={53 + i * 22} r="2.2" fill={i === 0 ? '#a855f7' : '#9a94a8'} />
            <text
              x="24"
              y={56 + i * 22}
              fontSize="8"
              fill={i === 0 ? '#f3f1ee' : '#9a94a8'}
              fontFamily="General Sans, sans-serif"
              fontWeight={i === 0 ? 600 : 400}
            >
              {label}
            </text>
          </g>
        ))}
        <text
          x="128"
          y="30"
          fontSize="10"
          fill="#f3f1ee"
          fontFamily="General Sans, sans-serif"
          fontWeight="500"
        >
          Agenda · Miércoles 24
        </text>
        <rect x="128" y="40" width="36" height="5" rx="1.5" fill="#9a94a8" opacity="0.5" />
        {slots.map((slot, i) => (
          <g key={i} className={`agenda-row agenda-row-${i}`}>
            <text
              x="128"
              y={72 + i * 28}
              fontSize="9"
              fill="#9a94a8"
              fontFamily="JetBrains Mono, monospace"
            >
              {slot.h}
            </text>
            <rect
              x="166"
              y={62 + i * 28}
              width="316"
              height="22"
              rx="3"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.6"
            />
            <circle cx="178" cy={73 + i * 28} r="3.5" fill={slot.color} opacity="0.85" />
            <text
              x="188"
              y={76 + i * 28}
              fontSize="9"
              fill="#f3f1ee"
              fontFamily="General Sans, sans-serif"
              fontWeight="500"
            >
              {slot.name}
            </text>
            <text
              x="240"
              y={76 + i * 28}
              fontSize="8"
              fill="#9a94a8"
              fontFamily="General Sans, sans-serif"
            >
              · {slot.type}
            </text>
            <rect
              x="450"
              y={68 + i * 28}
              width="22"
              height="10"
              rx="2"
              fill={slot.color}
              fillOpacity="0.2"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

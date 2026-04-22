'use client';

import { useState } from 'react';

type FAQItemProps = {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
};

function FAQItem({ q, a, open, onToggle }: FAQItemProps) {
  return (
    <div className="faq-item" data-open={open}>
      <button className="faq-btn" onClick={onToggle} aria-expanded={open} type="button">
        <span>{q}</span>
        <svg
          className="faq-chev"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-panel">
        <div className="faq-panel-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    q: '¿Qué es exactamente OpenGlitch?',
    a: 'Una fábrica de producto: un equipo pequeño y distribuido entre Colombia y Canadá que construye y opera SaaS verticales para sectores específicos del mercado colombiano. No somos una agencia que hace proyectos por encargo ni una consultora que entrega recomendaciones — construimos productos propios y los mantenemos vivos.',
  },
  {
    q: '¿Cuándo estarán disponibles Academy Engine y SyntiaHealth?',
    a: 'Ambos están en desarrollo activo. Abrimos acceso temprano por lista de espera, con onboarding acompañado por el equipo que los construye. Si nos escribes contándonos tu caso, podemos darte fechas concretas y evaluar si eres candidato para las primeras cohortes.',
  },
  {
    q: '¿Cómo escogen los sectores en los que entran?',
    a: 'Buscamos sectores importantes para la economía colombiana, operativamente complejos, y mal servidos por el software existente. Entramos solo cuando tenemos convicción sobre cómo construir algo genuinamente mejor — y un equipo con el contexto para construirlo. Esto toma tiempo, y es por diseño.',
  },
  {
    q: '¿Hacen desarrollos a la medida?',
    a: 'No. Nuestro foco son los productos verticales propios. Sabemos que la tentación de tomar proyectos a la medida existe — son ingresos inmediatos — pero diluyen el estándar de la fábrica. Si tienes un problema que crees que no resuelve ningún producto existente, escríbenos de todos modos: puede ser una señal de un producto futuro.',
  },
  {
    q: '¿Cómo manejan los datos de mis usuarios?',
    a: 'Cumplimos con la Ley 1581 de protección de datos personales y construimos cada producto con privacidad como punto de partida, no como capa posterior. Los datos se alojan en infraestructura cifrada, nunca se comparten con terceros, y nunca se usan para entrenar modelos externos de IA.',
  },
  {
    q: '¿Cómo es el soporte después de lanzar?',
    a: 'Atención directa del equipo que construye el producto, en español, en horario colombiano. No delegamos soporte a buzones globales ni a centros tercerizados. Si algo se rompe a las 2 de la tarde en Bogotá, te responde alguien que entiende por qué se rompió.',
  },
];

export default function SectionFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="light section-pad" id="faq">
      <div className="amb purple" style={{ width: 480, height: 480, top: '10%', right: '-12%' }} />
      <div className="wrap">
        <div className="reveal sh-cluster" style={{ textAlign: 'left' }}>
          <div className="eyebrow section-label-dot">Preguntas frecuentes</div>
          <h2 className="display-l">Lo que nos preguntan antes de escribirnos.</h2>
        </div>
        <div className="faq-list reveal">
          {items.map((it, i) => (
            <FAQItem
              key={i}
              q={it.q}
              a={it.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ReactNode } from 'react';
import AcademyViz from './AcademyViz';
import SyntiaViz from './SyntiaViz';

type ProductCardProps = {
  eyebrow: string;
  name: string;
  tagline: string;
  bullets: string[];
  status: string;
  cta: string;
  children: ReactNode;
};

function ProductCard({ eyebrow, name, tagline, bullets, status, cta, children }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-viz">{children}</div>
      <div className="product-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="mono product-eyebrow">{eyebrow}</div>
        <h3>{name}</h3>
        <p className="product-tagline">{tagline}</p>
        <ul className="product-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="product-status">
          <span className="pulse" />
          {status}
        </div>
        <div className="product-foot">
          <a href="#" className="link-inline">
            {cta} <span aria-hidden="true">→</span>
          </a>
          <span className="mono-s" style={{ fontSize: 11 }}>
            v0.9 · Q2 2026
          </span>
        </div>
      </div>
    </article>
  );
}

export default function SectionProductos() {
  return (
    <section className="light section-pad" id="productos">
      <div className="amb amber" style={{ width: 520, height: 520, top: '10%', right: '-15%' }} />
      <div
        className="amb indigo"
        style={{ width: 560, height: 560, bottom: '-15%', left: '-15%' }}
      />
      <div className="wrap">
        <div className="reveal sh-cluster">
          <div className="eyebrow section-label-dot">Lo que estamos construyendo</div>
          <h2 className="display-l">Dos productos verticales. El mismo método.</h2>
          <p className="body-m">
            Cada uno nace de leer los glitches de un sector y construir algo que encaje desde
            adentro.
          </p>
        </div>

        <div className="product-grid reveal">
          <ProductCard
            eyebrow="// para academias deportivas"
            name="Academy Engine"
            tagline="La plataforma operativa para academias que quieren crecer sin ahogarse en operación."
            bullets={[
              'Inscripciones y pagos conciliados automáticamente',
              'Asistencia, evaluaciones y comunicación con padres en un solo lugar',
              'Facturación electrónica DIAN integrada',
              'Multi-sede, multi-disciplina, multi-entrenador',
            ]}
            status="En desarrollo · Lista de espera abierta"
            cta="Conocer Academy Engine"
          >
            <AcademyViz />
          </ProductCard>

          <ProductCard
            eyebrow="// para consultorios y clínicas"
            name="SyntiaHealth"
            tagline="Historia clínica, agendamiento y facturación diseñados para la realidad del consultorio colombiano."
            bullets={[
              'Historia clínica electrónica que cumple con la regulación',
              'Agendamiento con recordatorios automáticos (menos no-shows)',
              'Facturación EPS, seguros y particular en un mismo flujo',
              'Protección de datos conforme a Ley 1581',
            ]}
            status="En desarrollo · Lista de espera abierta"
            cta="Conocer SyntiaHealth"
          >
            <SyntiaViz />
          </ProductCard>
        </div>

        <p
          className="products-closing reveal display-m"
          style={{ fontWeight: 300, color: 'var(--og-ink-3)', fontStyle: 'italic' }}
        >
          Los próximos productos nacerán del mismo criterio.
        </p>
      </div>
    </section>
  );
}

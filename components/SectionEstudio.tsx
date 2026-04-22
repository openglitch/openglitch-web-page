export default function SectionEstudio() {
  return (
    <section className="light section-pad" id="estudio">
      <div className="amb indigo" style={{ width: 500, height: 500, top: '5%', left: '-15%' }} />
      <div className="amb amber" style={{ width: 460, height: 460, bottom: '0%', right: '-12%' }} />
      <div className="wrap">
        <div className="reveal sh-cluster" style={{ maxWidth: 720, marginBottom: 40 }}>
          <div className="eyebrow section-label-dot">El estudio</div>
          <h2 className="display-l">La fábrica son las personas.</h2>
        </div>
        <div className="reveal" style={{ maxWidth: 640 }}>
          <p className="editorial">
            OpenGlitch es un estudio pequeño por diseño. Creemos que los productos buenos salen de
            equipos que se conocen, discuten y comparten el mismo estándar — no de organigramas
            grandes con procesos de aprobación. Cada persona acá construye con su nombre puesto.
          </p>
        </div>

        <div className="estudio-closing reveal">
          <p
            className="display-m"
            style={{
              fontStyle: 'italic',
              color: 'var(--og-ink-3)',
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            Construimos entre Colombia y Canadá, con una sola obsesión: productos que encajen.
          </p>
        </div>
      </div>
    </section>
  );
}

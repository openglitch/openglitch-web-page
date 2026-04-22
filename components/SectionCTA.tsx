import MagneticBtn from './MagneticBtn';

export default function SectionCTA() {
  return (
    <section className="navy section-pad final-cta" id="contacto">
      <div
        className="amb indigo"
        style={{
          width: 700,
          height: 700,
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        className="amb purple"
        style={{
          width: 520,
          height: 520,
          bottom: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow section-label-dot" style={{ marginBottom: 28 }}>
            Hablemos
          </div>
          <h2 className="display-l">
            ¿Estás construyendo algo? <span className="grad-text">Hablemos.</span>
          </h2>
          <p className="body-m">
            Nos interesa conocer a operadores de academias y consultorios, inversionistas que
            comparten la tesis, y talento que quiere construir desde Colombia y Canadá.
          </p>
          <div className="cta-row">
            <MagneticBtn className="btn final-cta-btn">
              Iniciar conversación{' '}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </MagneticBtn>
            <a href="mailto:contacto@openglitch.ai" className="email-link">
              contacto@openglitch.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

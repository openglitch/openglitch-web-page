export default function SectionTesis() {
  return (
    <section className="light section-pad tesis" id="tesis">
      <div
        className="amb indigo"
        style={{ width: 520, height: 520, top: '-10%', left: '-15%' }}
      />
      <div
        className="amb purple"
        style={{ width: 480, height: 480, bottom: '-15%', right: '-10%' }}
      />
      <div className="wrap-ed">
        <div className="reveal">
          <div className="eyebrow section-label-dot" style={{ marginBottom: 28 }}>
            Nuestra tesis
          </div>
          <h2
            className="display-l"
            style={{ margin: '0 0 48px', color: 'var(--og-ink)', textWrap: 'balance' }}
          >
            Cada glitch es una grieta entre el software{' '}
            <span className="grad-text">y la realidad</span> que debería servir.
          </h2>
          <div className="tesis-rule" />
          <div className="editorial">
            <p>
              La mayoría del software que opera los negocios colombianos fue construido en otro
              idioma, para otro mercado, para otra escala. Se traduce, se adapta, se parcha — pero
              nunca encaja del todo.
            </p>
            <p>
              Lo que queda entre el software genérico y la operación real son los glitches: una
              regulación que no contempla, un flujo de pago que no existe, un canal que nadie usa
              aquí, una realidad invisible para quien lo diseñó. La mayoría los ignora. Nosotros
              los leemos como lo que son —{' '}
              <span className="grad-text" style={{ fontWeight: 400 }}>
                la señal
              </span>{' '}
              de que hace falta un producto distinto.
            </p>
            <p>
              OpenGlitch existe para construir esos productos. Una fábrica pequeña, distribuida
              entre Colombia y Canadá, que construye software vertical desde adentro del contexto
              colombiano con los estándares técnicos de cualquier mercado desarrollado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const blocks = [
  {
    t: 'Equipo unido, no tercerizado',
    b: 'Diseño, producto e ingeniería en el mismo equipo, no en cadenas de proveedores. Las decisiones se toman cerca del código y los usuarios — y los productos lo reflejan en los detalles.',
  },
  {
    t: 'Cada producto es un compromiso, no un proyecto',
    b: 'No construimos software con fecha de entrega y luego seguimos con el siguiente cliente. Cada producto que sale de la fábrica es un compromiso largo: un equipo asignado, un roadmap público, y la gente que lo construyó todavía respondiendo el lunes.',
  },
  {
    t: 'El estándar antes que la velocidad',
    b: 'Preferimos lanzar una funcionalidad menos y que funcione bien, que lanzar cinco a medias. Nuestra velocidad se mide en cuántos problemas reales resolvemos, no en cuántas features publicamos por mes.',
  },
  {
    t: 'Distribuidos por diseño, no por accidente',
    b: 'Operamos entre Colombia y Canadá de forma deliberada: proximidad al mercado que servimos, y acceso al estándar técnico que exigimos. Es una ventaja, no una concesión.',
  },
];

export default function SectionConstruimos() {
  return (
    <section className="navy section-pad" id="construimos">
      <div className="amb indigo" style={{ width: 600, height: 600, top: '-15%', left: '-10%' }} />
      <div
        className="amb purple"
        style={{ width: 520, height: 520, bottom: '-10%', right: '-15%' }}
      />
      <div className="wrap">
        <div className="reveal sh-cluster">
          <div className="eyebrow section-label-dot">Cómo construimos</div>
          <h2 className="display-l">Fábrica pequeña, estándar alto.</h2>
          <p className="body-m">El método detrás de cada producto que sale por esta puerta.</p>
        </div>
        <div className="method-grid reveal">
          {blocks.map((q, i) => (
            <div className="method-cell" key={i}>
              <div className="marker">{String(i + 1).padStart(2, '0')} / 04</div>
              <h3>{q.t}</h3>
              <p>{q.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

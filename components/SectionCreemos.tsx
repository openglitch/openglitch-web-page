const principles = [
  {
    n: '01',
    t: 'Profundidad sobre amplitud',
    b: 'El software genérico te obliga a adaptarte a él. Nosotros hacemos lo contrario: elegimos un sector, lo estudiamos hasta entender sus flujos reales, y construimos algo que encaja desde el primer día. No vas a configurar un ERP durante seis meses para que haga la mitad de lo que necesitas — vas a usar un producto que ya sabe cómo funciona tu operación.',
    m: '// para quienes ya configuraron un ERP que no funcionó',
  },
  {
    n: '02',
    t: 'Colombia no es un mercado secundario',
    b: 'DIAN, EPS, Nequi, Ley 1581, facturación electrónica, pagos en efectivo, WhatsApp como canal principal. Nada de esto es un detalle que resolvemos al final — es el punto de partida. Construimos software que reconoce la realidad operativa colombiana, porque la vivimos todos los días.',
    m: '// para quienes operan en la realidad colombiana, no en la traducida',
  },
  {
    n: '03',
    t: 'Un producto que sigue vivo después de la venta',
    b: 'La mayoría de los problemas con software no están en comprarlo, están en usarlo seis meses después. Por eso no vendemos y desaparecemos. Mantenemos equipos de producto dedicados a cada vertical, soporte en horario colombiano, y un compromiso claro: mientras el producto exista, lo seguimos mejorando con la gente que lo usa.',
    m: '// para quienes necesitan saber que estaremos mañana',
  },
];

export default function SectionCreemos() {
  return (
    <section className="navy section-pad" id="creemos">
      <div
        className="amb purple"
        style={{ width: 640, height: 640, top: '-20%', right: '-15%' }}
      />
      <div
        className="amb indigo"
        style={{ width: 520, height: 520, bottom: '-20%', left: '-10%' }}
      />
      <div className="wrap">
        <div className="reveal sh-cluster">
          <div className="eyebrow section-label-dot">Principios</div>
          <h2 className="display-l">Tres creencias que definen cómo construimos.</h2>
          <p className="body-m">Y por qué deberían importarte.</p>
        </div>
        <div className="principles-grid reveal">
          {principles.map((p, i) => (
            <div className="principle" key={i}>
              <div className="principle-num">{p.n}</div>
              <h3>{p.t}</h3>
              <p>{p.b}</p>
              <div className="mono-s">{p.m}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

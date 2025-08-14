export function WhyKua() {
  const items = [
    {
      k: 'Hasta 40% menos en costos anuales',
      d: 'Interoperabilidad y portabilidad evitan lock‑in y reducen gastos recurrentes.'
    },
    {
      k: 'Puesta en marcha en semanas, no meses',
      d: 'Plantillas y componentes listos, sin dependencia de suites pesadas.'
    },
    {
      k: 'Datos bajo tu control',
      d: 'Privacidad por defecto, estándares abiertos y exportación sencilla.'
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">¿Por qué existimos?</h2>
      <p className="mt-2 text-soft/80 max-w-2xl">Para que la tecnología sea un habilitador y no un peaje. Ahorro, autonomía y futuro abierto.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.k} className="rounded-lg border border-white/10 p-6 bg-white/5">
            <div className="text-lime font-pixel text-xl">{it.k}</div>
            <p className="mt-2 text-sm text-soft/80">{it.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="mailto:hello@kua.cl?subject=Quiero%20conversar%20con%20Kua&body=Cu%C3%A9ntanos%20tu%20problema%20t%C3%A9cnico%20o%20de%20negocio%3A" className="glow-hover rounded bg-royal/30 px-4 py-2">Cuéntanos tu problema</a>
      </div>
    </section>
  );
}



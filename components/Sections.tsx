// Server Component by default
import RoadmapClient from '@/components/RoadmapClient';
import VisualToggle from '@/components/VisualToggle';

export function Hero() {
  return (
    <section id="inicio" className="relative pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            <span className="block font-pixel text-lime">Kua</span>
            Sistemas digitales para las personas,
            <br />
            no para las plataformas.
          </h1>
          <p className="mt-6 text-lg text-soft/80 max-w-xl">
            Privacidad por defecto. Estándares abiertos. Interoperabilidad y ahorro.
            Construimos herramientas que combaten la monopolización de datos y empoderan a
            pequeñas empresas y comunidades.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="glow-hover rounded bg-royal/30 px-4 py-2">Más novedades pronto</a>
            <a href="#principios" className="rounded border border-white/10 px-4 py-2 hover:bg-white/5">Nuestros principios</a>
          </div>
        </div>
        <VisualToggle />
      </div>
    </section>
  );
}

export function WhatWeDo() {
  const cards = [
    {
      t: 'Datos e infraestructura independientes',
      d: 'Portabilidad, control y soberanía de datos. Sin lock‑in.'
    },
    { t: 'Software para pequeñas empresas', d: 'Soluciones justas y accesibles que ahorran dinero.' },
    { t: 'Internet comunitario y plataformas locales', d: 'Tecnología para redes de base y cooperativas.' },
    { t: 'Interoperabilidad', d: 'Conecta sistemas y evita dependencias de proveedores únicos.' },
  ];
  return (
    <section id="que-hacemos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Qué hacemos</h2>
      <p className="mt-3 text-soft/80 max-w-2xl">Construimos productos y servicios que mejoran el mundo y fortalecen a quienes quedan fuera de los grandes targets. Visuales sutiles, rendimiento primero.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.t} className="rounded-lg border border-white/10 p-5 bg-white/5 hover:bg-white/7 transition-colors">
            <h3 className="font-medium text-lime">{c.t}</h3>
            <p className="mt-2 text-sm text-soft/80">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  const items = [
    ['Privacidad por defecto', 'Tus datos son tuyos.'],
    ['Estándares abiertos y portabilidad', 'Sin ataduras: muévete cuando quieras.'],
    ['Interoperabilidad > lock‑in', 'Conectar es mejor que encerrar.'],
    ['Eficiencia energética y de costos', 'Menos recursos, más impacto.'],
    ['Economía centrada en personas', 'No extraemos, habilitamos.'],
    ['IA ética', 'Úsala con propósito público y transparencia.'],
  ];
  return (
    <section id="principios" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Principios</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-white/10 p-5 bg-white/5">
            <div className="font-pixel text-lime">★</div>
            <h3 className="mt-2 font-medium">{t}</h3>
            <p className="mt-1 text-sm text-soft/80">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhoWeServe() {
  const cards = [
    ['Pequeñas empresas', 'Negocios que suelen quedar fuera del objetivo de las grandes plataformas.'],
    ['Redes y comunidades de base', 'Comunidades locales, cooperativas y organizaciones territoriales.'],
    ['Interés público y ONG', 'Tecnología para bien común con costos previsibles y control de datos.'],
  ];
  return (
    <section id="servimos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">A quién servimos</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {cards.map(([t, d]) => (
          <article key={t} className="rounded-lg border border-white/10 p-5 bg-white/5">
            <h3 className="font-medium">{t}</h3>
            <p className="mt-2 text-sm text-soft/80">{d}</p>
            <p className="mt-3 text-xs text-mint">Por qué importa: autonomía, ahorro y futuro abierto.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RoadmapTeaser() {
  const items = Array.from({ length: 60 }).map((_, i) => `Hito ${i + 1}: mejora incremental hacia un ecosistema abierto.`);
  return (
    <section id="hoja-de-ruta" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Hoja de ruta</h2>
      <RoadmapClient items={items} />
      <p className="mt-4 text-soft/70 text-sm">Más novedades pronto.</p>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/5 mt-20 py-10">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
        <div>
          <div className="font-pixel text-lime">Kua</div>
          <p className="mt-2 text-soft/80">Hecho en Chile para todas y todos. Sin tracking, sin anuncios.</p>
        </div>
        <div className="md:text-right">
          <a href="mailto:hello@kua.cl" className="glow-hover inline-block rounded bg-royal/30 px-4 py-2">hello@kua.cl</a>
          <p className="mt-3 text-xs text-soft/60">© {new Date().getFullYear()} Kua.</p>
        </div>
      </div>
    </footer>
  );
}



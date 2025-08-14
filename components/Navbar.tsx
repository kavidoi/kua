import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-ink/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#inicio" className="font-pixel text-lime text-2xl">Kua</Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-soft/80">
          <li><a href="#que-hacemos" className="hover:text-soft">Qué hacemos</a></li>
          <li><a href="#principios" className="hover:text-soft">Principios</a></li>
          <li><a href="#servimos" className="hover:text-soft">A quién servimos</a></li>
          <li><a href="#hoja-de-ruta" className="hover:text-soft">Hoja de ruta</a></li>
          <li><a href="#contacto" className="glow-hover rounded px-3 py-1 bg-royal/20 text-soft">Más novedades pronto</a></li>
        </ul>
      </nav>
    </header>
  );
}



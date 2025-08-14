export const metadata = { title: 'Kua — Offline' };

export default function Offline() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold">Estás sin conexión</h1>
        <p className="mt-3 text-soft/80">
          No pudimos cargar el contenido. Te mostraremos esta vista mínima hasta que vuelva la conexión.
        </p>
        <p className="mt-6 text-soft/60 text-sm">Kua — Sistemas digitales para las personas.</p>
      </div>
    </main>
  );
}



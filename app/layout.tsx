import './globals.css';
import type { Metadata } from 'next';
import { Inter, VT323 } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const vt = VT323({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-vt' });

export const metadata: Metadata = {
  title: 'Kua — Sistemas digitales para las personas',
  description: 'Kua crea software e infraestructura justos y con privacidad que combaten la monopolización de datos y empoderan a pequeñas empresas y comunidades.',
  metadataBase: new URL('https://kua.cl'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kua',
    description: 'Sistemas digitales para las personas, no para las plataformas.',
    url: 'https://kua.cl',
    siteName: 'Kua',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kua',
    description: 'Sistemas digitales para las personas, no para las plataformas.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${vt.variable}`}>
      <body className="min-h-screen bg-ink text-soft antialiased font-sans">
        <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-ink text-soft px-3 py-2 rounded">Saltar al contenido</a>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kua',
              url: 'https://kua.cl',
              email: 'hello@kua.cl',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}



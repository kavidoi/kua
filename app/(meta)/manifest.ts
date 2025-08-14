import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kua',
    short_name: 'Kua',
    description: 'Sistemas digitales para las personas, no para las plataformas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B12',
    theme_color: '#0B28FF',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
}



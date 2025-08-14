const CACHE = 'kua-static-v1';
const OFFLINE_URL = '/offline';
const PRECACHE = [
  '/',
  OFFLINE_URL,
  '/manifest.webmanifest',
  '/_next/static/css/app/globals.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request, { cache: 'no-store' })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached || caches.match(OFFLINE_URL));
      return cached || fetchPromise;
    })
  );
});



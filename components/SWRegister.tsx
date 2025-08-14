"use client";
import { useEffect } from 'react';

export default function SWRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && 'serviceWorker' in navigator) {
      // Limpieza en desarrollo: desregistrar SW y limpiar cachés
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
      if ('caches' in window) caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
    }
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const url = '/sw.js';
      navigator.serviceWorker
        .register(url)
        .catch(() => void 0);
    }
  }, []);
  return null;
}



"use client";
import { useEffect, useState } from 'react';

export default function StickyRibbon() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener('focus', handler);
    return () => window.removeEventListener('focus', handler);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
      <div className="mx-auto max-w-md rounded-lg bg-royal/40 backdrop-blur border border-white/10 shadow-glow">
        <button
          className="w-full text-center py-2 text-soft glow-hover"
          onClick={() => (window.location.href = 'mailto:hello@kua.cl?subject=Kua%20—%20Más%20novedades%20pronto')}
        >
          Más novedades pronto
        </button>
      </div>
    </div>
  );
}



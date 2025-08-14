"use client";
import { useEffect, useRef } from 'react';

// Simple decorative nodes/edges using compositor-only motion
export default function Graph() {
  const dots = Array.from({ length: 12 });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.015;
      el.style.transform = `translateY(${Math.sin(t) * 4}px)`; // translate only
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} aria-hidden className="relative w-full h-72 md:h-96">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
        {/* dotted edges */}
        <g stroke="#2F2F4A" strokeDasharray="4 6">
          <path d="M80 320 C 180 280, 260 220, 360 180" fill="none" />
          <path d="M160 120 C 260 160, 300 200, 420 240" fill="none" />
          <path d="M420 300 C 360 260, 320 220, 260 180" fill="none" />
        </g>
        {/* nodes */}
        {dots.map((_, i) => (
          <circle key={i} cx={60 + i * 45} cy={200 + (i % 2 === 0 ? 20 : -20)} r={5} fill="#C7FF3F" opacity={0.8} />
        ))}
      </svg>
    </div>
  );
}



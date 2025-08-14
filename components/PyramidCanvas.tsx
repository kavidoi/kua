"use client";
import { useEffect, useRef } from 'react';

/**
 * Ligero render 2D que simula un objeto 3D (pirámide) con un fondo degradado
 * y retícula. Sin dependencias pesadas. Usa requestAnimationFrame y escala a
 * devicePixelRatio. La animación es sutil (oscilación) para mantener FPS alto.
 */
export default function PyramidCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    let raf = 0;

    const draw = () => {
      if (!canvas) return;
      const { width: W, height: H } = canvas;
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = W / dpr;
      const h = H / dpr;

      // Fondo más sutil, alineado a la marca (royal, violet, mint, lime) en tonos pastel
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0.0, '#0B0B12'); // ink base
      g.addColorStop(0.25, '#2236B8'); // royal suavizado
      g.addColorStop(0.5, '#2F8F6F'); // mint apagado
      g.addColorStop(0.75, '#5B39B6'); // violet pastel
      g.addColorStop(1.0, '#1E2238'); // vuelta a oscuro
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Retícula sutil
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      const step = Math.max(40, Math.min(120, Math.floor(w / 8)));
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
        ctx.stroke();
      }

      // Pirámide: apilamos triángulos con leve oscilación
      const cx = w * 0.5;
      const baseW = Math.min(w * 0.58, 520);
      const baseH = Math.min(h * 0.45, 280);
      // Invertido: el ápice abajo, la base arriba
      const baseY = h * 0.3 + Math.sin(t) * 4; // línea de base más alta
      const apexY = baseY + baseH; // ápice hacia abajo
      // Triángulo principal (relleno)
      ctx.beginPath();
      ctx.moveTo(cx, apexY);
      ctx.lineTo(cx - baseW * 0.5, baseY);
      ctx.lineTo(cx + baseW * 0.5, baseY);
      ctx.closePath();
      const triGrad = ctx.createLinearGradient(cx, baseY, cx, apexY);
      triGrad.addColorStop(0, 'rgba(0,0,0,0.65)');
      triGrad.addColorStop(1, 'rgba(0,0,0,0.95)');
      ctx.fillStyle = triGrad;
      ctx.fill();

      // Clip interno para dibujar líneas horizontales (capas) sin contorno exterior
      ctx.save();
      ctx.clip();
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 1;
      const lines = 22;
      for (let i = 1; i < lines - 1; i++) {
        const p = i / (lines - 1);
        const y = baseY + (apexY - baseY) * p;
        const half = (baseW * (1 - p)) * 0.5 - 2; // dejar margen para que no toque borde
        ctx.beginPath();
        ctx.moveTo(cx - half, y);
        ctx.lineTo(cx + half, y);
        ctx.stroke();
      }
      ctx.restore();

      t += 0.02;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="w-full h-72 md:h-96 rounded-md" aria-hidden />;
}



"use client";
import { useState } from 'react';
import PyramidCanvas from '@/components/PyramidCanvas';
import Graph from '@/components/Graph';

export default function VisualToggle() {
  const [mode, setMode] = useState<'piramide' | 'grafo'>('piramide');
  return (
    <div>
      <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
        <button
          className={`px-3 py-1 rounded-md text-sm ${mode === 'piramide' ? 'bg-royal/40 text-soft glow-hover' : 'text-soft/80'}`}
          onClick={() => setMode('piramide')}
        >
          Pirámide
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm ${mode === 'grafo' ? 'bg-royal/40 text-soft glow-hover' : 'text-soft/80'}`}
          onClick={() => setMode('grafo')}
        >
          Grafo
        </button>
      </div>
      <div className="rounded-md overflow-hidden shadow-glow">
        {mode === 'piramide' ? <PyramidCanvas /> : <Graph />}
      </div>
    </div>
  );
}



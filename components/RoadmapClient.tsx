"use client";
import { Virtuoso } from 'react-virtuoso';
import { clsx } from 'clsx';

export default function RoadmapClient({ items }: { items: string[] }) {
  return (
    <div className="mt-6 h-64 rounded-lg border border-white/10 bg-white/5">
      <Virtuoso
        data={items}
        itemContent={(index, item) => (
          <div className={clsx('px-4 py-3 border-b border-white/5', index % 2 === 0 && 'bg-white/[0.03]')}>
            <span className="text-soft/80 text-sm">{item}</span>
          </div>
        )}
      />
    </div>
  );
}



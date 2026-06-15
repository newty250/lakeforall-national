'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import type { Chapter } from '@/types';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

interface USMapProps {
  chapters: Chapter[];
  onChapterClick?: (chapter: Chapter) => void;
}

export default function USMap({ chapters, onChapterClick }: USMapProps) {
  const [tooltip, setTooltip] = useState<{ chapter: Chapter; x: number; y: number } | null>(null);

  return (
    <div className="relative bg-blue-50 rounded-2xl overflow-hidden border border-blue-100">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: '100%', height: 'auto' }}
        viewBox="0 0 960 600"
      >
        <ZoomableGroup>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Record<string, unknown>[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey as string}
                  geography={geo}
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#bfdbfe', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {chapters.map((chapter) => (
            <Marker
              key={chapter.id}
              coordinates={[chapter.coordinates.lng, chapter.coordinates.lat]}
              onClick={() => onChapterClick?.(chapter)}
              onMouseEnter={(e: React.MouseEvent<SVGGElement>) => {
                const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                if (rect) {
                  setTooltip({ chapter, x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
              }}
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Pulse ring */}
              <circle r={14} fill="#4A9FD4" fillOpacity={0.2} className="animate-ping" style={{ animationDuration: '2s' }} />
              {/* Pin circle */}
              <circle r={8} fill="#1B3A6B" stroke="#4A9FD4" strokeWidth={2.5} />
              {/* Wave dot */}
              <circle r={3} fill="#4A9FD4" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none bg-navy text-white text-xs rounded-lg px-3 py-2 shadow-lg max-w-[180px]"
          style={{ left: tooltip.x + 12, top: tooltip.y - 40, zIndex: 10 }}
        >
          <p className="font-bold">{tooltip.chapter.name}</p>
          <p className="text-gray-300">{tooltip.chapter.lake}</p>
          <p className="text-gray-300">{tooltip.chapter.location}, {tooltip.chapter.state}</p>
        </div>
      )}

      <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 rounded-lg px-3 py-1.5 text-xs text-gray-600 font-medium backdrop-blur-sm">
        {chapters.length} chapter{chapters.length !== 1 ? 's' : ''} nationwide
      </div>
    </div>
  );
}

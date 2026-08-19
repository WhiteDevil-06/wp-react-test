'use client';

import React from 'react';

interface OrbitalCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const OrbitalCanvas: React.FC<OrbitalCanvasProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden pointer-events-none ${className}`}>
      {/* Orbital Outer Ring */}
      <div className="absolute w-[440px] h-[440px] rounded-full border border-hylos-cyan/20 animate-orbit-slow" />
      
      {/* Secondary Influence Ring */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-hylos-outline-variant/40" />

      {/* Core Node Radii */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-hylos-cyan/5 border border-hylos-cyan/30 flex items-center justify-center">
        <div className="w-[100px] h-[100px] rounded-full bg-hylos-orange/5 border border-hylos-orange/30 animate-pulse-subtle flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-hylos-orange shadow-orange-glow" />
        </div>
      </div>

      {/* Network Nodes */}
      <div className="absolute top-[18%] left-[25%] flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-hylos-cyan" />
        <span className="text-technical text-[10px] text-hylos-on-surface-variant bg-hylos-surface-lowest/90 px-2 py-0.5 rounded-subtle border border-hylos-outline-variant">Authority Node</span>
      </div>

      <div className="absolute bottom-[22%] right-[22%] flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-hylos-orange" />
        <span className="text-technical text-[10px] text-hylos-on-surface-variant bg-hylos-surface-lowest/90 px-2 py-0.5 rounded-subtle border border-hylos-outline-variant">Demand Capture</span>
      </div>

      {/* Fine-line arcs connecting nodes */}
      <svg className="absolute inset-0 w-full h-full text-hylos-cyan/30" xmlns="http://www.w3.org/2000/svg">
        <path d="M 120 100 Q 250 180 380 300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        <path d="M 80 280 Q 220 140 400 120" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
};

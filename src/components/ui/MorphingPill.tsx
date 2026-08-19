'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingPillProps {
  items: string[];
  duration?: number;
  className?: string;
}

export const MorphingPill: React.FC<MorphingPillProps> = ({
  items,
  duration = 3200,
  className = '',
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, duration);
    return () => clearInterval(timer);
  }, [items, duration]);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-technical glass-panel border border-hylos-cyan/40 text-hylos-cyan-dark shadow-sm overflow-hidden h-8 ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="whitespace-nowrap flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-hylos-cyan animate-ping" />
          <span>{items[index]}</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

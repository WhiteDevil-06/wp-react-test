'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaqItem } from '@/lib/data/faq';
import { CheckCircle2, XCircle } from 'lucide-react';

interface FaqFlipCardProps {
  item: FaqItem;
}

export const FaqFlipCard: React.FC<FaqFlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[280px] w-full perspective-1000 group cursor-pointer">
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full h-full text-left focus:outline-none rounded-subtle focus-visible:ring-2 focus-visible:ring-hylos-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-hylos-surface"
        aria-expanded={isFlipped}
        aria-label={`Question: ${item.statement}. Click to reveal answer.`}
      >
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500 ease-out shadow-sm rounded-subtle hover:shadow-md"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of Card */}
          <div 
            className="absolute inset-0 backface-hidden w-full h-full bg-hylos-container-low border border-hylos-outline-variant/50 rounded-subtle p-8 flex flex-col justify-center items-center text-center"
            style={{ backfaceVisibility: 'hidden' }}
            aria-hidden={isFlipped}
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-hylos-on-surface">
              "{item.statement}"
            </h3>
            <span className="mt-8 text-technical text-hylos-cyan-dark flex items-center gap-2 group-hover:underline">
              Tap to reveal
            </span>
          </div>

          {/* Back of Card */}
          <div 
            className={`absolute inset-0 backface-hidden w-full h-full border rounded-subtle p-8 flex flex-col justify-center text-center ${
              item.isFact 
                ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800' 
                : 'bg-red-50/80 border-red-200 dark:bg-red-950/20 dark:border-red-800'
            }`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            aria-hidden={!isFlipped}
          >
            <div className="flex justify-center mb-4">
              {item.isFact ? (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={24} />
                  <span className="font-mono font-bold tracking-widest uppercase">Fact</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <XCircle size={24} />
                  <span className="font-mono font-bold tracking-widest uppercase">Myth</span>
                </div>
              )}
            </div>
            <p className="font-sans text-hylos-on-surface-variant leading-relaxed">
              {item.explanation}
            </p>
          </div>
        </motion.div>
      </button>

      {/* Screen reader only announcement for state change */}
      <div aria-live="polite" className="sr-only">
        {isFlipped ? `Answer revealed: This is a ${item.isFact ? 'Fact' : 'Myth'}. ${item.explanation}` : ''}
      </div>
    </div>
  );
};

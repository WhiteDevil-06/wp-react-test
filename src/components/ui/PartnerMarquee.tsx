'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { partners } from '@/lib/data/partners';

// If cn doesn't exist, we'll inline a simple clsx/tailwind-merge equivalent.
// I will just use standard template literals for safety if cn is missing.

export const PartnerMarquee: React.FC = () => {
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (containerRef.current) {
      // Calculate width of one set of items
      const width = containerRef.current.scrollWidth / 2;
      setContentWidth(width);
    }
  }, []);

  return (
    <section 
      className="w-full overflow-hidden py-16 bg-hylos-surface border-y border-hylos-outline-variant/30"
      aria-labelledby="marquee-heading"
    >
      <div className="max-w-site mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <h2 id="marquee-heading" className="text-center text-technical text-hylos-on-surface-variant">
          Companies We've Partnered With
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="relative flex w-full flex-row overflow-hidden group"
      >
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center px-6 md:px-12"
          animate={{
            x: contentWidth ? [-contentWidth, 0] : 0, // Negative to zero for seamless looping if we duplicate
          }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed
            repeat: Infinity,
          }}
          style={{
            // Pause on hover is supported easily by Framer motion using variants, but we can also use CSS.
            // A simple CSS trick:
          }}
        >
          {/* First set of partners */}
          <div className="flex gap-12 md:gap-24 items-center">
            {partners.map((partner) => (
              <div 
                key={`p1-${partner.id}`} 
                className="font-display font-bold text-2xl md:text-3xl text-hylos-on-surface-variant/40 transition-colors duration-300 hover:text-hylos-on-surface select-none"
              >
                {partner.logoUrl ? (
                  <img src={partner.logoUrl} alt={`${partner.name} logo`} className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
                ) : (
                  partner.name
                )}
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless loop (hidden from screen readers) */}
          <div className="flex gap-12 md:gap-24 items-center" aria-hidden="true">
            {partners.map((partner) => (
              <div 
                key={`p2-${partner.id}`} 
                className="font-display font-bold text-2xl md:text-3xl text-hylos-on-surface-variant/40 transition-colors duration-300 hover:text-hylos-on-surface select-none"
              >
                {partner.logoUrl ? (
                  <img src={partner.logoUrl} alt="" className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
                ) : (
                  partner.name
                )}
              </div>
            ))}
          </div>
          
          {/* Third set just to be completely safe on ultra-wide monitors */}
          <div className="flex gap-12 md:gap-24 items-center" aria-hidden="true">
            {partners.map((partner) => (
              <div 
                key={`p3-${partner.id}`} 
                className="font-display font-bold text-2xl md:text-3xl text-hylos-on-surface-variant/40 transition-colors duration-300 hover:text-hylos-on-surface select-none"
              >
                {partner.logoUrl ? (
                  <img src={partner.logoUrl} alt="" className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
                ) : (
                  partner.name
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

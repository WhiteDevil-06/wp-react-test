'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@/lib/data/services';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './Button';

interface ServicesCarouselProps {
  services: Service[];
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full max-w-site mx-auto px-4 md:px-8">
      {/* Sidebar Selector */}
      <div className="w-full lg:w-1/3 flex flex-col gap-2">
        <h2 className="text-technical text-hylos-on-surface-variant mb-4">Select Service Capability</h2>
        {services.map((service, idx) => (
          <button
            key={service.id}
            onClick={() => setActiveIndex(idx)}
            className={`text-left px-6 py-5 border-l-4 transition-all duration-300 font-sans focus:outline-none ${
              idx === activeIndex
                ? 'border-hylos-cyan bg-hylos-container-low text-hylos-on-surface font-semibold shadow-sm'
                : 'border-transparent text-hylos-on-surface-variant hover:bg-hylos-surface-dim/50'
            }`}
            aria-selected={idx === activeIndex}
            role="tab"
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-2/3 relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-hylos-surface glass-card rounded-subtle p-8 md:p-12 shadow-sm border border-hylos-outline-variant/40 h-full flex flex-col"
            role="tabpanel"
          >
            <h3 className="font-display font-bold text-3xl md:text-4xl text-hylos-on-surface mb-6">
              {activeService.title}
            </h3>
            
            <div className="flex-grow flex flex-col gap-8">
              <div>
                <h4 className="text-technical text-hylos-cyan-dark mb-2">The Approach</h4>
                <p className="text-hylos-on-surface-variant font-sans text-lg leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              <div>
                <h4 className="text-technical text-hylos-orange mb-2">Value & Outcome</h4>
                <p className="text-hylos-on-surface font-sans font-medium">
                  {activeService.valueOutcome}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-hylos-outline-variant/30 flex items-center justify-between">
              <Link href={`/contact?service=${activeService.slug}`} tabIndex={-1}>
                <Button variant="action" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Book This Service
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

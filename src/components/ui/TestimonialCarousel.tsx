'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-24 bg-hylos-surface overflow-hidden"
      aria-label="Client Feedback"
      aria-roledescription="carousel"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        {/* Decorative Quote Icon */}
        <div className="absolute top-0 left-4 md:left-8 opacity-5" aria-hidden="true">
          <Quote size={120} />
        </div>

        <div className="relative h-[300px] md:h-[250px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full px-12 md:px-20 text-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
            >
              <p className="text-xl md:text-3xl font-display font-bold text-hylos-on-surface mb-8 leading-tight">
                "{currentTestimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-hylos-on-surface font-sans">{currentTestimonial.person}</p>
                <p className="text-technical text-hylos-on-surface-variant mt-1">
                  {currentTestimonial.designation}, {currentTestimonial.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full border border-hylos-outline-variant/50 text-hylos-on-surface hover:bg-hylos-cyan hover:text-white hover:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-hylos-cyan"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-hylos-cyan w-6' : 'bg-hylos-outline-variant/50'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === currentIndex ? "true" : "false"}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full border border-hylos-outline-variant/50 text-hylos-on-surface hover:bg-hylos-cyan hover:text-white hover:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-hylos-cyan"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

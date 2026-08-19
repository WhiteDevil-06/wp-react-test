'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LeadCtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-hylos-surface-low/50 border-t border-hylos-outline-variant/40">
      {/* Background Ambient Glowing Halos */}
      <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
      <div className="ambient-glow-orange w-96 h-96 -bottom-20 -right-20" />

      <Container className="relative z-10">
        <ScrollReveal direction="scale" delay={0.1}>
          <div className="glass-panel p-8 md:p-14 rounded-subtle flex flex-col lg:flex-row items-center justify-between gap-8 border border-hylos-outline-variant/60">
            <div className="max-w-2xl">
              <span className="text-technical text-hylos-cyan-dark font-semibold block mb-3">
                Ready to Engineer Authority?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface mb-4">
                Schedule Your Strategic Growth Consultation.
              </h2>
              <p className="text-hylos-on-surface-variant text-base font-sans font-light leading-relaxed">
                Let's evaluate your founder branding, corporate LinkedIn visibility, and AI search presence to build a repeatable revenue pipeline.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button variant="action" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

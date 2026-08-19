'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { OrbitalCanvas } from '../ui/OrbitalCanvas';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { MorphingPill } from '../ui/MorphingPill';
import { HYLOS_METRICS } from '@/lib/content/servicesData';

export const HomeHero: React.FC = () => {
  const focusAreas = [
    'LinkedIn Founder Personal Branding',
    'Generative AI Search SEO & Intent',
    'Enterprise Account ABM Strategy',
    'Inbound B2B Revenue Pipeline',
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background Ambient Glow Halos */}
      <div className="ambient-glow-cyan w-[500px] h-[500px] -top-35 -left-35" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy with Scroll Entrance */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <MorphingPill items={focusAreas} />
                <span className="inline-flex items-center px-3 py-1.5 h-8 rounded-full text-technical bg-hylos-orange/10 text-hylos-orange border border-hylos-orange/30 font-mono text-[11px] uppercase tracking-wider">
                  Executive Partner
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-hylos-on-surface leading-[1.1] tracking-tight">
                Turn Domain Expertise Into Category Authority & Buyer Demand.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-hylos-on-surface-variant text-base sm:text-lg font-sans leading-relaxed max-w-2xl font-light">
                Hylos is the B2B marketing partner for technology leaders. We transform complex executive domain knowledge into category authority, executive trust, and consistent inbound revenue pipeline.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="action" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Book Strategy Session
                  </Button>
                </Link>
                <Link href="/services/linkedin-founder-branding">
                  <Button variant="secondary" size="lg">
                    Explore Founder Branding
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Verified Metrics Bar with Live Animated Counters */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-8 mt-4 border-t border-hylos-outline-variant/50 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-hylos-on-surface-variant">
                {HYLOS_METRICS.map((metric, idx) => (
                  <div key={idx}>
                    <span className="block text-2xl font-bold text-hylos-on-surface font-display">
                      <AnimatedCounter value={metric.value} />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-hylos-on-surface-variant/80">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Orbital Canvas Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="scale" delay={0.3}>
              <Card variant="bordered" className="relative z-10 bg-hylos-surface-lowest">
                <div className="flex items-center justify-between pb-4 border-b border-hylos-outline-variant">
                  <span className="text-technical text-hylos-cyan-dark">Human Influence Network</span>
                  <Sparkles className="w-4 h-4 text-hylos-cyan" />
                </div>
                <div className="py-4 flex flex-col gap-4">
                  <OrbitalCanvas className="h-[240px]" />
                  <div className="pt-4 border-t border-hylos-outline-variant/40 space-y-2.5 font-sans text-xs text-hylos-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <span>Executive Insight → Category Authority</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <span>Intent-Driven Content → Qualified Demand</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

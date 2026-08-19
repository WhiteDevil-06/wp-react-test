'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { HYLOS_FOUNDER_INFO } from '@/lib/content/servicesData';

export const FounderAuthoritySection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="left" delay={0.1}>
              <Badge variant="orange">Founder & Executive Positioning</Badge>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface">
                Enterprise Growth Led By Domain Experts, Not Agency Junior Staff.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-hylos-on-surface-variant text-base font-sans leading-relaxed font-light">
                {HYLOS_FOUNDER_INFO.bio}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <blockquote className="p-6 bg-hylos-surface-low rounded-subtle border-l-4 border-hylos-orange italic font-display text-lg text-hylos-on-surface">
                "{HYLOS_FOUNDER_INFO.quote}"
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <div className="pt-2">
                <Link href="/about">
                  <Button variant="secondary" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Read Founder Narrative
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.3}>
              <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-hylos-outline-variant">
                  <span className="text-technical text-hylos-cyan-dark">Leadership Standard</span>
                  <ShieldCheck className="w-5 h-5 text-hylos-cyan" />
                </div>
                <div className="space-y-4 font-sans text-xs text-hylos-on-surface-variant">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                    <span>Direct founder strategic supervision on every key account</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                    <span>Enterprise marketing experience across FinTech, Aviation & AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                    <span>Strict confidentiality & B2B compliance standards</span>
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

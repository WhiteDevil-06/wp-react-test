'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { HYLOS_SERVICES } from '@/lib/content/servicesData';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-hylos-surface-low border-y border-hylos-outline-variant/60 relative overflow-hidden">
      <Container>
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <Badge variant="cyan" className="mb-3">Capabilities Matrix</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface">
                B2B Growth & Authority Solutions
              </h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
                View All Solutions
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HYLOS_SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} direction="up" delay={0.1 * (idx + 1)}>
              <Card variant="bordered" className="flex flex-col justify-between h-full bg-hylos-surface-lowest">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-technical text-hylos-cyan-dark">{service.id}</span>
                    {service.featured && <Badge variant="orange">Core Solution</Badge>}
                  </div>
                  <h3 className="text-xl font-bold font-display text-hylos-on-surface mb-3">
                    {service.title}
                  </h3>
                  <p className="text-hylos-on-surface-variant text-xs font-sans leading-relaxed mb-6 font-light">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-hylos-outline-variant/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-hylos-on-surface-variant">
                    {service.deliverables.length} Deliverables
                  </span>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                      Explore
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

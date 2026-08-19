import React from 'react';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { HYLOS_SERVICES } from '@/lib/content/servicesData';
import { ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';
import { ROUTE_SEO } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: ROUTE_SEO.services.title,
  description: ROUTE_SEO.services.description,
  alternates: {
    canonical: ROUTE_SEO.services.canonical,
  },
  openGraph: ROUTE_SEO.services.openGraph,
  twitter: ROUTE_SEO.services.twitter,
};

export default function ServicesPage() {
  return (
    <GlobalShell>
      {/* Header Banner */}
      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60 relative overflow-hidden">
        <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
        <Container className="relative z-10">
          <ScrollReveal direction="down" delay={0.1}>
            <Badge variant="cyan" className="mb-4">Capabilities Matrix</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              B2B Growth & Authority Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
              From executive LinkedIn personal branding to generative AI search optimization and performance marketing, every solution is built to turn domain expertise into buyer demand.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HYLOS_SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} direction="up" delay={0.1 * (idx + 1)}>
                <Card variant="bordered" className="flex flex-col justify-between h-full bg-hylos-surface-lowest">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-technical text-hylos-cyan-dark">{service.id}</span>
                      {service.featured && <Badge variant="orange">Core Solution</Badge>}
                    </div>

                    <h2 className="text-xl font-bold font-display text-hylos-on-surface mb-3">
                      {service.title}
                    </h2>

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
                        Explore Solution
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </GlobalShell>
  );
}

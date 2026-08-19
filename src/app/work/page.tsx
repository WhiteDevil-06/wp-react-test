import React from 'react';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HYLOS_CASE_STUDIES } from '@/lib/content/servicesData';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { ROUTE_SEO } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: ROUTE_SEO.work.title,
  description: ROUTE_SEO.work.description,
  alternates: {
    canonical: ROUTE_SEO.work.canonical,
  },
  openGraph: ROUTE_SEO.work.openGraph,
  twitter: ROUTE_SEO.work.twitter,
};

export default function WorkPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://hylos.co' },
    { name: 'Work', url: 'https://hylos.co/work' },
  ]);

  return (
    <GlobalShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60 relative overflow-hidden">
        <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
        <Container className="relative z-10">
          <ScrollReveal direction="down" delay={0.1}>
            <Badge variant="orange" className="mb-4">Case Studies & Impact</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              Proven Results for B2B Tech Leaders
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
              Real enterprise growth case studies detailing executive brand positioning, generative AI SEO rankings, and account-based performance marketing.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HYLOS_CASE_STUDIES.map((study, idx) => (
              <ScrollReveal key={study.id} direction="up" delay={0.1 * (idx + 1)}>
                <Card variant="bordered" className="flex flex-col justify-between h-full bg-hylos-surface-lowest">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="cyan">{study.industry}</Badge>
                      <span className="text-technical text-hylos-cyan-dark dark:text-hylos-cyan flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>

                    <h2 className="text-xl font-bold font-display text-hylos-on-surface mb-3">
                      {study.title}
                    </h2>

                    <p className="text-hylos-on-surface-variant text-xs font-sans leading-relaxed mb-6 font-light">
                      {study.summary}
                    </p>

                    <div className="p-4 rounded-subtle bg-hylos-orange/5 border border-hylos-orange/20 dark:bg-hylos-cyan/10 dark:border-hylos-cyan/30 mb-6 transition-colors">
                      <span className="text-technical text-hylos-orange dark:text-hylos-cyan font-bold block mb-1">Key Outcome</span>
                      <span className="text-sm sm:text-base font-bold font-display text-hylos-on-surface">
                        <AnimatedCounter value={study.metricResult} />
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-hylos-outline-variant/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-hylos-on-surface-variant">
                      {study.timeline} Engagement
                    </span>
                    <Link href={`/work/${study.slug}`}>
                      <Button variant="secondary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                        Read Case Study
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

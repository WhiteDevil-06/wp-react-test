import React from 'react';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { HYLOS_ARTICLES } from '@/lib/content/servicesData';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Metadata } from 'next';
import { ROUTE_SEO } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: ROUTE_SEO.insights.title,
  description: ROUTE_SEO.insights.description,
  alternates: {
    canonical: ROUTE_SEO.insights.canonical,
  },
  openGraph: ROUTE_SEO.insights.openGraph,
  twitter: ROUTE_SEO.insights.twitter,
};

export default function InsightsPage() {
  return (
    <GlobalShell>
      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60 relative overflow-hidden">
        <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
        <Container className="relative z-10">
          <ScrollReveal direction="down" delay={0.1}>
            <Badge variant="cyan" className="mb-4">Thought Leadership & Strategy</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              Executive B2B Insights
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
              High-signal strategy frameworks covering executive personal branding, AI search optimization, and modern account-based pipeline generation.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HYLOS_ARTICLES.map((article, idx) => (
              <ScrollReveal key={article.id} direction="up" delay={0.1 * (idx + 1)}>
                <Card variant="bordered" className="flex flex-col justify-between h-full bg-hylos-surface-lowest">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="cyan">{article.category}</Badge>
                      <span className="text-[11px] font-mono text-hylos-on-surface-variant">{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold font-display text-hylos-on-surface mb-3">
                      {article.title}
                    </h2>

                    <p className="text-hylos-on-surface-variant text-xs font-sans leading-relaxed mb-6 font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hylos-outline-variant/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-hylos-on-surface-variant">By {article.author}</span>
                    <Link href={`/insights/${article.slug}`}>
                      <Button variant="secondary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                        Read Article
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

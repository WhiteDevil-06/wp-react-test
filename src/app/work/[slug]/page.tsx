import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HYLOS_CASE_STUDIES } from '@/lib/content/servicesData';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return HYLOS_CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = HYLOS_CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return {};

  return {
    title: `${study.title} | Hylos Work`,
    description: study.summary,
    alternates: {
      canonical: `https://hylos.co/work/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Hylos Work`,
      description: study.summary,
      url: `https://hylos.co/work/${study.slug}`,
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      type: 'website',
    },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = HYLOS_CASE_STUDIES.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <GlobalShell>
      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60 relative overflow-hidden">
        <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
        <Container className="relative z-10">
          <ScrollReveal direction="down" delay={0.1}>
            <div className="mb-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs text-hylos-on-surface-variant hover:text-hylos-cyan-dark"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Case Studies</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="cyan">{study.industry}</Badge>
              <Badge variant="orange">{study.client}</Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              {study.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
              {study.summary}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col gap-10">
              <ScrollReveal direction="up" delay={0.1}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-8 border-l-4 border-l-hylos-cyan">
                  <span className="text-technical text-hylos-cyan-dark block mb-2">Verified Outcome Metric</span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface block mb-2">
                    <AnimatedCounter value={study.metricResult} />
                  </span>
                  <p className="text-xs font-sans text-hylos-on-surface-variant font-light">
                    Measured impact generated across {study.timeline} of active Hylos execution.
                  </p>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div>
                  <h2 className="text-2xl font-bold font-display text-hylos-on-surface mb-4">The Challenge</h2>
                  <p className="text-hylos-on-surface-variant font-sans text-sm leading-relaxed font-light">
                    {study.challenge}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div>
                  <h2 className="text-2xl font-bold font-display text-hylos-on-surface mb-4">The Hylos Solution</h2>
                  <p className="text-hylos-on-surface-variant font-sans text-sm leading-relaxed font-light mb-6">
                    {study.solution}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <ScrollReveal direction="scale" delay={0.3}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-6 sticky top-28">
                  <div className="flex items-center justify-between pb-4 border-b border-hylos-outline-variant">
                    <span className="text-technical text-hylos-cyan-dark">Engagement Brief</span>
                    <ShieldCheck className="w-5 h-5 text-hylos-cyan" />
                  </div>
                  <div className="space-y-4 font-sans text-xs text-hylos-on-surface-variant">
                    <div>
                      <span className="block font-semibold text-hylos-on-surface">Client Segment</span>
                      <span>{study.client}</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-hylos-on-surface">Industry Vertical</span>
                      <span>{study.industry}</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-hylos-on-surface">Execution Duration</span>
                      <span>{study.timeline}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-hylos-outline-variant/40">
                    <Link href="/contact">
                      <Button variant="action" size="md" className="w-full justify-center" icon={<ArrowUpRight className="w-4 h-4" />}>
                        Book Similar Strategy Session
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </GlobalShell>
  );
}

import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HYLOS_FOUNDER_INFO, HYLOS_METRICS } from '@/lib/content/servicesData';
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/seo/schema';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import { ROUTE_SEO } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: ROUTE_SEO.about.title,
  description: ROUTE_SEO.about.description,
  alternates: {
    canonical: ROUTE_SEO.about.canonical,
  },
  openGraph: ROUTE_SEO.about.openGraph,
  twitter: ROUTE_SEO.about.twitter,
};

export default function AboutPage() {
  const organizationSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://hylos.co' },
    { name: 'About', url: 'https://hylos.co/about' },
  ]);

  const continuumPhases = [
    { phase: 'Phase 01 • People', desc: 'Identifying real human domain experts and executive leaders.' },
    { phase: 'Phase 02 • Ideas', desc: 'Translating complex technical IP into high-signal narratives.' },
    { phase: 'Phase 03 • Content', desc: 'Publishing editorial articles, carousels, and whitepapers.' },
    { phase: 'Phase 04 • Audience', desc: 'Reaching verified enterprise buyers and key accounts.' },
    { phase: 'Phase 05 • Authority', desc: 'Earning strategic trust and category recommendation.' },
    { phase: 'Phase 06 • Demand', desc: 'Capturing inbound enterprise leads and sales conversations.' },
  ];

  return (
    <GlobalShell>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60 relative overflow-hidden">
        <div className="ambient-glow-cyan w-96 h-96 -top-20 -left-20" />
        <Container className="relative z-10">
          <ScrollReveal direction="down" delay={0.1}>
            <Badge variant="cyan" className="mb-4">Our Narrative & Mission</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              We Turn Expertise Into Category Authority.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
              Hylos was founded on a simple realization: in complex enterprise technology sales, buyers don’t trust generic corporate ad copy. They trust domain experts who publish high-signal insight.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Founder Leadership Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal direction="left" delay={0.1}>
                <Badge variant="orange">Founder & Executive Leadership</Badge>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface">
                  {HYLOS_FOUNDER_INFO.name}
                </h2>
                <span className="text-technical text-hylos-cyan-dark block mt-1">{HYLOS_FOUNDER_INFO.title}</span>
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
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="scale" delay={0.3}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-4 border-b border-hylos-outline-variant">
                    <span className="text-technical text-hylos-cyan-dark">Founder Background</span>
                    <ShieldCheck className="w-5 h-5 text-hylos-cyan" />
                  </div>
                  <div className="space-y-3 font-sans text-xs text-hylos-on-surface-variant">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <span>AI-driven digital marketing leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <span>Enterprise marketing experience across Finance, Aviation, Tech</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <span>Pioneer in LinkedIn executive brand positioning</span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Human Influence Philosophy Section */}
      <section className="py-16 bg-hylos-container-low border-y border-hylos-outline-variant/60">
        <Container>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-3xl mb-12">
              <Badge variant="cyan" className="mb-4">Core Philosophy</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface">
                The Human Influence Network
              </h2>
              <p className="text-hylos-on-surface-variant text-base mt-4 font-sans font-light leading-relaxed">
                We connect executive insight directly to buyer demand through a structured 6-phase influence continuum:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {continuumPhases.map((p, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-6 h-full">
                  <span className={`font-bold block mb-2 ${idx === 5 ? 'text-hylos-orange' : 'text-hylos-cyan-dark'}`}>
                    {p.phase}
                  </span>
                  <p className="font-sans text-hylos-on-surface-variant text-xs font-light">{p.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Verified Metrics Section with Live Animated Counters */}
      <section className="py-16">
        <Container>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="orange" className="mb-2">Verified Credibility</Badge>
              <h2 className="text-3xl font-bold font-display text-hylos-on-surface">
                Track Record of Impact
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {HYLOS_METRICS.map((m, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-6">
                  <span className="block text-3xl sm:text-4xl font-bold font-display text-hylos-on-surface mb-2">
                    <AnimatedCounter value={m.value} />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-hylos-on-surface-variant">
                    {m.label}
                  </span>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </GlobalShell>
  );
}

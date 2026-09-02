import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us — Hylos',
  description: 'Learn about Hylos, our mission, and our founder.',
};

export default function AboutPage() {
  return (
    <GlobalShell>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 px-4 max-w-site mx-auto text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-hylos-on-surface mb-6 tracking-tight">
          About <span className="text-hylos-cyan-dark">Hylos</span>
        </h1>
        <p className="text-lg md:text-xl text-hylos-on-surface-variant font-sans max-w-3xl mx-auto leading-relaxed">
          [Placeholder] We are a specialized B2B marketing firm dedicated to elevating technical founders and enterprise companies into undisputed industry authorities.
        </p>
      </section>

      {/* Mission & Approach Grid */}
      <section className="py-24 bg-hylos-surface-low border-y border-hylos-outline-variant/30 px-4">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-technical text-hylos-orange mb-4 block">Our Mission</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-hylos-on-surface mb-6 leading-tight">
              [Placeholder] To eradicate the obscurity of brilliant technical companies.
            </h2>
            <p className="font-sans text-hylos-on-surface-variant leading-relaxed">
              [Placeholder] Too many incredible B2B solutions lose to inferior competitors simply because they lack the authority and visibility necessary to win trust. Our mission is to bridge that gap.
            </p>
          </div>
          <div>
            <span className="text-technical text-hylos-cyan-dark mb-4 block">Our Approach</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-hylos-on-surface mb-6 leading-tight">
              [Placeholder] Engineering influence through precision and intent.
            </h2>
            <p className="font-sans text-hylos-on-surface-variant leading-relaxed">
              [Placeholder] We do not believe in fluff. We believe in data-backed positioning, deeply technical AI-SEO, and creating founder narratives that resonate directly with enterprise decision-makers.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[3/4] bg-hylos-container-high rounded-subtle border border-hylos-outline-variant flex items-center justify-center overflow-hidden">
              <span className="text-hylos-on-surface-variant font-mono text-sm">[Placeholder: Founder Image]</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-technical text-hylos-on-surface-variant mb-4 block">The Founder</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-hylos-on-surface mb-6">
              [Founder Name]
            </h2>
            <div className="space-y-6 font-sans text-hylos-on-surface-variant text-lg leading-relaxed">
              <p>[Placeholder] Founder bio goes here. Detail their background, expertise in B2B marketing, and the vision that led to the creation of Hylos.</p>
              <p>[Placeholder] Additional context about their experience with enterprise sales, organic growth, or personal branding that establishes their authority.</p>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-hylos-cyan-dark hover:text-hylos-orange transition-colors">
                Connect on LinkedIn <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hylos CTA */}
      <section className="py-24 px-4 bg-hylos-surface text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-hylos-on-surface mb-6">
            Ready to build your authority?
          </h2>
          <p className="font-sans text-hylos-on-surface-variant text-lg mb-10">
            [Placeholder] Stop competing on price and start competing on trust. Let us build your influence engine.
          </p>
          <Link href="/contact">
            <Button variant="action" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>
    </GlobalShell>
  );
}

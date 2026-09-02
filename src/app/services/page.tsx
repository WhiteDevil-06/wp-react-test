import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { ServicesCarousel } from '@/components/ui/ServicesCarousel';
import { services } from '@/lib/data/services';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services — Hylos B2B Marketing',
  description: 'Explore our B2B services including Founder Branding, Company Branding, AI-SEO, and Performance Marketing.',
};

export default function ServicesPage() {
  return (
    <GlobalShell>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 px-4 max-w-site mx-auto text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-hylos-on-surface mb-6 tracking-tight">
          Capabilities & <span className="text-hylos-cyan-dark">Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-hylos-on-surface-variant font-sans max-w-2xl mx-auto leading-relaxed">
          [Placeholder] Comprehensive strategies designed to elevate your B2B authority and capture high-intent enterprise demand.
        </p>
      </section>

      {/* Services Carousel Area */}
      <section className="pb-32">
        <ServicesCarousel services={services} />
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-hylos-surface-low border-t border-hylos-outline-variant/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-hylos-on-surface mb-6">
            Not sure which service fits your current stage?
          </h2>
          <p className="font-sans text-hylos-on-surface-variant mb-10">
            [Placeholder] Book a session with our strategists to map out the exact growth levers you need right now.
          </p>
          <Link href="/contact">
            <Button variant="action" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Talk to a Strategist
            </Button>
          </Link>
        </div>
      </section>
    </GlobalShell>
  );
}

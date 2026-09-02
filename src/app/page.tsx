import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { PartnerMarquee } from '@/components/ui/PartnerMarquee';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import { FaqFlipCard } from '@/components/ui/FaqFlipCard';
import { faqItems } from '@/lib/data/faq';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Hylos — Premium B2B Marketing & Founder Positioning',
  description: 'We position B2B technology companies and their founders as absolute industry authorities.',
};

export default function Home() {
  return (
    <GlobalShell>
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-site mx-auto flex flex-col items-center text-center">
        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-hylos-on-surface mb-6 tracking-tight max-w-4xl">
          Positioning B2B Founders as <span className="text-hylos-cyan-dark">Absolute Authorities</span>.
        </h1>
        <p className="text-lg md:text-xl text-hylos-on-surface-variant font-sans max-w-2xl mb-12 leading-relaxed">
          [Placeholder] We transform technical expertise into inbound enterprise demand through strategic LinkedIn positioning and AI-driven search intent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button variant="action" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              [Placeholder] Book Strategy Session
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg">
              Explore Our Approach
            </Button>
          </Link>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-hylos-surface-low border-y border-hylos-outline-variant/30 px-4">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-technical text-hylos-orange mb-4 block">The Problem</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-hylos-on-surface mb-6 leading-tight">
              [Placeholder] Technical excellence is no longer enough to win enterprise deals.
            </h2>
            <p className="font-sans text-hylos-on-surface-variant text-lg leading-relaxed mb-6">
              [Placeholder] B2B buyers are overwhelmed with choices. If your founders aren't visible and your corporate brand feels like a static brochure, your competitors with stronger personal brands will steal your pipeline.
            </p>
          </div>
          <div className="bg-hylos-container-low p-8 rounded-subtle border border-hylos-outline-variant/50 shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-hylos-orange/10 rounded-full blur-3xl"></div>
            <ul className="flex flex-col gap-6 relative z-10">
              <li className="flex items-start gap-3">
                <span className="text-hylos-orange font-bold mt-1">01</span>
                <p className="font-sans text-hylos-on-surface">Long, unpredictable sales cycles driven by lack of pre-established trust.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hylos-orange font-bold mt-1">02</span>
                <p className="font-sans text-hylos-on-surface">High-intent searches lost to competitors with superior AI-SEO structure.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-hylos-orange font-bold mt-1">03</span>
                <p className="font-sans text-hylos-on-surface">Ad spend wasted on generic audiences instead of key decision-makers.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. HOW HYLOS HELPS */}
      <section className="py-24 px-4 bg-hylos-surface">
        <div className="max-w-site mx-auto text-center mb-16">
          <span className="text-technical text-hylos-cyan-dark mb-4 block">The Solution</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-hylos-on-surface mb-6">
            [Placeholder] Building Human Influence Networks.
          </h2>
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-8 rounded-subtle relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-hylos-cyan/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-hylos-cyan/20 transition-all"></div>
              <CheckCircle2 className="w-8 h-8 text-hylos-cyan-dark mb-6" />
              <h3 className="font-display font-bold text-xl mb-4">[Placeholder] Strategic Pillar {i}</h3>
              <p className="font-sans text-hylos-on-surface-variant text-sm leading-relaxed">
                [Placeholder] We implement a specialized framework that systematically builds authority. This is a placeholder for the explanation of how Hylos solves the aforementioned problems.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPANIES WE'VE PARTNERED WITH */}
      <PartnerMarquee />

      {/* 5. TESTIMONIALS */}
      <TestimonialCarousel />

      {/* 6. FAQ - MYTH OR FACT */}
      <section className="py-24 px-4 bg-hylos-surface-low border-t border-hylos-outline-variant/30">
        <div className="max-w-site mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-hylos-on-surface mb-6">
              B2B Marketing: <span className="text-hylos-orange">Myth</span> or <span className="text-emerald-600 dark:text-emerald-400">Fact</span>?
            </h2>
            <p className="font-sans text-hylos-on-surface-variant text-lg">Tap the cards to reveal the truth behind common industry misconceptions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqItems.map((item) => (
              <FaqFlipCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-4 bg-hylos-near-black text-hylos-off-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          {/* Abstract background rings */}
          <div className="w-[800px] h-[800px] rounded-full border border-hylos-cyan animate-orbit-slow absolute"></div>
          <div className="w-[600px] h-[600px] rounded-full border border-hylos-cyan/50 animate-orbit-slow absolute" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
            [Placeholder] Ready to dominate your niche?
          </h2>
          <p className="font-sans text-hylos-on-surface-variant text-lg md:text-xl mb-12 leading-relaxed">
            [Placeholder] Stop losing high-intent enterprise deals to competitors with louder voices. Build your authority today.
          </p>
          <Link href="/contact">
            <Button variant="action" size="lg" className="bg-hylos-orange hover:bg-hylos-orange-warm border-none text-white shadow-orange-glow px-12 py-4 text-lg">
              [Placeholder] Secure Your Strategy Session
            </Button>
          </Link>
        </div>
      </section>
    </GlobalShell>
  );
}

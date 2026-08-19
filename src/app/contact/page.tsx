import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/contact/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CheckCircle2, Mail, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import { ROUTE_SEO } from '@/lib/seo/config';
import { getBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: ROUTE_SEO.contact.title,
  description: ROUTE_SEO.contact.description,
  alternates: {
    canonical: ROUTE_SEO.contact.canonical,
  },
  openGraph: ROUTE_SEO.contact.openGraph,
  twitter: ROUTE_SEO.contact.twitter,
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://hylos.co' },
    { name: 'Contact', url: 'https://hylos.co/contact' },
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
            <Badge variant="orange" className="mb-4">Growth Strategy Session</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
              Let's Engineer Your Category Authority.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-2xl leading-relaxed">
              Schedule a 1-on-1 strategy session to audit your founder branding, corporate LinkedIn visibility, and generative AI search presence.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form Client Component */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.2}>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal direction="right" delay={0.3}>
                <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-6">
                  <span className="text-technical text-hylos-cyan-dark block">Direct Inquiry</span>

                  <div className="space-y-4 font-sans text-xs text-hylos-on-surface-variant">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-hylos-cyan shrink-0" />
                      <div>
                        <span className="block text-hylos-on-surface font-semibold">Email Channel</span>
                        <a href="mailto:growth@hylos.co" className="hover:underline">growth@hylos.co</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <MapPin className="w-4 h-4 text-hylos-cyan shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-hylos-on-surface font-semibold">Executive Headquarters</span>
                        <span>Enterprise B2B Executive Office</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-hylos-outline-variant/40 space-y-2 text-[11px] font-sans text-hylos-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hylos-cyan shrink-0" />
                      <span>Direct founder & executive review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hylos-cyan shrink-0" />
                      <span>Strict NDA & privacy protection</span>
                    </div>
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

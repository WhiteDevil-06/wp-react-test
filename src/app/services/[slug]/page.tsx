import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HYLOS_SERVICES } from '@/lib/content/servicesData';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/seo/schema';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return HYLOS_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = HYLOS_SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | Hylos Solutions`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://hylos.co/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Hylos Solutions`,
      description: service.shortDescription,
      url: `https://hylos.co/services/${service.slug}`,
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = HYLOS_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service.title, service.shortDescription);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://hylos.co' },
    { name: 'Solutions', url: 'https://hylos.co/services' },
    { name: service.title, url: `https://hylos.co/services/${service.slug}` },
  ]);

  return (
    <GlobalShell>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Detail Header Banner */}
      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60">
        <Container>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="cyan">{service.id}</Badge>
            {service.featured && <Badge variant="orange">Core Differentiator</Badge>}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6">
            {service.title}
          </h1>

          <p className="text-hylos-on-surface-variant text-lg font-sans font-light max-w-3xl leading-relaxed">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column — Methodology & Deliverables */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Detailed Breakdown */}
              <div className="prose max-w-none text-hylos-on-surface-variant font-sans leading-relaxed">
                <h2 className="text-2xl font-bold font-display text-hylos-on-surface mb-4">
                  Strategic Methodology & Approach
                </h2>
                <p className="text-sm leading-relaxed mb-6 font-light">
                  {service.fullDescription}
                </p>
              </div>

              {/* Deliverables Matrix */}
              <div>
                <h3 className="text-xl font-bold font-display text-hylos-on-surface mb-6">
                  Core Solution Deliverables
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <Card key={idx} variant="bordered" className="bg-hylos-surface-lowest p-6 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-hylos-cyan shrink-0 mt-0.5" />
                      <span className="text-xs font-sans text-hylos-on-surface font-medium">{item}</span>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Target Audience Profile */}
              <Card variant="bordered" className="bg-hylos-surface-lowest p-8 border-l-4 border-l-hylos-cyan">
                <span className="text-technical text-hylos-cyan-dark block mb-2">Ideal Client Profile</span>
                <h4 className="text-lg font-bold font-display text-hylos-on-surface mb-2">Who This Solution Is Built For</h4>
                <p className="text-xs font-sans text-hylos-on-surface-variant font-light leading-relaxed">
                  {service.targetAudience}
                </p>
              </Card>
            </div>

            {/* Right Sidebar — Conversion Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-6 sticky top-28">
                <div className="flex items-center justify-between pb-4 border-b border-hylos-outline-variant">
                  <span className="text-technical text-hylos-cyan-dark">Strategic Audit</span>
                  <ShieldCheck className="w-5 h-5 text-hylos-cyan" />
                </div>

                <div className="space-y-4">
                  <span className="block text-2xl font-bold font-display text-hylos-on-surface">
                    {service.impactMetric}
                  </span>
                  <p className="text-xs font-sans text-hylos-on-surface-variant font-light">
                    Average outcome measured across active Hylos enterprise client engagements.
                  </p>
                </div>

                <div className="pt-4 border-t border-hylos-outline-variant/40">
                  <Link href="/contact">
                    <Button variant="action" size="lg" className="w-full justify-center" icon={<ArrowUpRight className="w-4 h-4" />}>
                      Request Strategy Consultation
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </GlobalShell>
  );
}

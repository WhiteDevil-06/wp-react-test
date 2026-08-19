import React from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { HomeHero } from '@/components/home/HomeHero';
import { FounderAuthoritySection } from '@/components/home/FounderAuthoritySection';
import { ServicesOverviewSection } from '@/components/home/ServicesOverviewSection';
import { LeadCtaSection } from '@/components/home/LeadCtaSection';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo/schema';

export default function Home() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <GlobalShell>
      {/* Inject Structured JSON-LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Homepage Editorial Sections */}
      <HomeHero />
      <FounderAuthoritySection />
      <ServicesOverviewSection />
      <LeadCtaSection />
    </GlobalShell>
  );
}

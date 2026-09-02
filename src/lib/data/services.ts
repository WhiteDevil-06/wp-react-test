export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  valueOutcome: string;
}

export const services: Service[] = [
  {
    id: 'founder-led-linkedin',
    title: 'Founder-led LinkedIn Personal Branding',
    slug: 'founder-led-linkedin-personal-branding',
    description: 'Establish absolute authority in your niche by positioning your founders as thought leaders. We build influence networks that drive enterprise demand directly through personal channels.',
    valueOutcome: 'Increased trust, shortened sales cycles, and inbound enterprise opportunities.',
  },
  {
    id: 'company-branding',
    title: 'Company Branding on LinkedIn',
    slug: 'company-branding-on-linkedin',
    description: 'Transform your corporate LinkedIn presence from a static bulletin board into an active demand-generation engine. We design content strategies that engage decision-makers.',
    valueOutcome: 'Higher brand visibility, improved talent acquisition, and strategic B2B engagement.',
  },
  {
    id: 'ai-seo',
    title: 'AI-SEO / Search with Intent',
    slug: 'ai-seo-search-with-intent',
    description: 'Capture high-intent traffic by aligning your technical architecture and content strategy with modern search behaviors and AI-driven discovery engines.',
    valueOutcome: 'Sustainable organic growth, dominant share of voice, and qualified inbound leads.',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'Precision-targeted B2B campaigns designed to convert. We focus on account-based marketing principles to ensure every ad dollar reaches the right decision-maker.',
    valueOutcome: 'Lower Customer Acquisition Cost (CAC), higher conversion rates, and measurable ROI.',
  }
];

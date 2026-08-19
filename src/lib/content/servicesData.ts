export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  featured: boolean;
  isPrimaryDifferentiator?: boolean;
  pillars: string[];
  deliverables: string[];
  targetAudience: string;
  impactMetric: string;
  impactMetrics: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  industry: string;
  clientIndustry: string;
  client: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  metricResult: string;
  timeline: string;
  results: {
    primaryMetric: string;
    secondaryMetric: string;
    timeline: string;
  };
  tags: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  publishedDate: string;
  author: string;
  content: string;
  contentParagraphs: string[];
}

export const HYLOS_SERVICES: ServiceDetail[] = [
  {
    id: 'linkedin-founder-branding',
    slug: 'linkedin-founder-branding',
    title: 'Founder & Executive Personal Branding',
    shortDescription:
      'Turn technical domain expertise into executive trust, category authority, and consistent qualified pipeline on LinkedIn.',
    fullDescription:
      'Buyers trust people over corporate brand copy. We work directly with founders and C-suite executives to translate deep industry knowledge into clear, editorial LinkedIn positioning. We engineer your personal authority to attract enterprise decision-makers and convert domain knowledge into inbound sales pipeline.',
    badge: 'Core Differentiator',
    featured: true,
    isPrimaryDifferentiator: true,
    pillars: [
      'Editorial positioning & narrative framework',
      'High-signal executive content production',
      'Strategic network & executive engagement',
      'Inbound demand capture architecture',
    ],
    deliverables: [
      'Comprehensive Executive Brand Bible',
      '12-16 high-signal monthly LinkedIn posts',
      'Custom visual infographics & slide decks',
      'Weekly profile & engagement performance reports',
    ],
    targetAudience: 'B2B Tech Founders, CEOs, CTOs, and Managing Directors',
    impactMetric: '3.4x average increase in inbound executive inquiries within 90 days',
    impactMetrics: '3.4x average increase in inbound executive inquiries within 90 days',
  },
  {
    id: 'linkedin-company-branding',
    slug: 'linkedin-company-branding',
    title: 'LinkedIn Company & Corporate Branding',
    shortDescription:
      'Build an authoritative B2B corporate presence that anchors company positioning, attracts enterprise buyers, and commands talent.',
    fullDescription:
      'Your corporate LinkedIn presence is your digital flagship for prospects, investors, and talent. We turn generic corporate updates into high-impact brand publishing that reinforces your category position and nurtures long sales cycles.',
    badge: 'B2B Corporate Authority',
    featured: false,
    pillars: [
      'Corporate publishing strategy & cadence',
      'Product & solution story framing',
      'Employer brand & culture alignment',
      'Account-based content distribution',
    ],
    deliverables: [
      'Corporate LinkedIn visual overhaul',
      'Bi-weekly product & insight feature carousels',
      'Talent & culture spotlight series',
      'Account engagement metrics tracking',
    ],
    targetAudience: 'B2B Technology Companies & Scale-ups',
    impactMetric: '2.8x higher buyer engagement on corporate solution updates',
    impactMetrics: '2.8x higher buyer engagement on corporate solution updates',
  },
  {
    id: 'ai-seo-intent',
    slug: 'ai-seo-intent',
    title: 'AI Search Optimization & Intent SEO',
    shortDescription:
      'Dominating traditional Google search and next-generation AI engines (ChatGPT, Perplexity, Gemini) with intent-mapped technical content.',
    fullDescription:
      'Search has evolved beyond 10 blue links. Today’s B2B buyers ask LLMs and AI engines for vendor recommendations. We architect your digital footprint to ensure your platform is recommended across ChatGPT, Gemini, Perplexity, and intent search queries.',
    badge: 'Generative Engine SEO',
    featured: true,
    pillars: [
      'LLM entity & citation modeling',
      'Search intent mapping & cluster architecture',
      'Technical schema & structured data',
      'High-authority technical asset creation',
    ],
    deliverables: [
      'AI Engine visibility & citation audit',
      'Comprehensive intent-driven content strategy',
      'Schema JSON-LD technical integration',
      'Monthly search & AI recommendation tracking',
    ],
    targetAudience: 'SaaS, Enterprise Software & Deep-Tech Platforms',
    impactMetric: 'First-page citation dominance across Google & AI answer engines',
    impactMetrics: 'First-page citation dominance across Google & AI answer engines',
  },
  {
    id: 'b2b-performance-marketing',
    slug: 'b2b-performance-marketing',
    title: 'B2B Performance & Demand Generation',
    shortDescription:
      'Precision campaign architecture and content-led demand funnels designed to turn high-intent accounts into sales conversations.',
    fullDescription:
      'Stop burning budget on low-intent form fills. We combine targeted paid distribution (LinkedIn Ads, Google Search) with high-value editorial content to capture active demand and generate pipeline from qualified accounts.',
    badge: 'Pipeline Growth',
    featured: false,
    pillars: [
      'Account-Based Marketing (ABM) targeting',
      'LinkedIn & Google paid distribution',
      'Conversion-rate optimized landing pages',
      'Lead enrichment & pipeline attribution',
    ],
    deliverables: [
      'Paid campaign setup & ad creative production',
      'High-conversion landing page design',
      'Lead capture API & CRM integration',
      'ROI & pipeline attribution dashboards',
    ],
    targetAudience: 'B2B Growth & Revenue Teams',
    impactMetric: '45% reduction in Customer Acquisition Cost (CAC) for B2B tech',
    impactMetrics: '45% reduction in Customer Acquisition Cost (CAC) for B2B tech',
  },
  {
    id: 'content-creative',
    slug: 'content-creative',
    title: 'B2B Content Strategy & Creative Design',
    shortDescription:
      'Editorial whitepapers, high-signal research reports, and custom visual design built to capture buyer interest and build trust.',
    fullDescription:
      'High-growth tech companies require content that balances strategic rigor with striking visual editorial design. We produce long-form B2B whitepapers, industry benchmarks, and brand assets that establish category leadership.',
    badge: 'Editorial Excellence',
    featured: false,
    pillars: [
      'B2B research & whitepaper production',
      'Executive pitch deck & sales design',
      'Brand messaging & positioning bibles',
      'Editorial video & visual asset design',
    ],
    deliverables: [
      'Quarterly industry research report',
      'Custom visual infographic suite',
      'Sales enablement deck redesign',
    ],
    targetAudience: 'Enterprise Marketing Directors & CMOs',
    impactMetric: '5x higher document download & lead qualification rate',
    impactMetrics: '5x higher document download & lead qualification rate',
  },
  {
    id: 'digital-technology',
    slug: 'digital-technology',
    title: 'Digital Technology & Platform Capabilities',
    shortDescription:
      'High-performance marketing platforms, custom React/Next.js web applications, and enterprise CRM/lead infrastructure.',
    fullDescription:
      'Supporting technology infrastructure engineered to support high-velocity growth. We build fast, responsive Next.js platforms optimized for Core Web Vitals, seamless lead capture, and API integrations.',
    badge: 'Engineering Support',
    featured: false,
    pillars: [
      'Next.js & React headless platform build',
      'Core Web Vitals & performance tuning',
      'API & CRM integration architecture',
      'Security & accessibility hardening',
    ],
    deliverables: [
      'Custom web platform implementation',
      'Lead capture API & database routing',
      'Full technical SEO & schema setup',
    ],
    targetAudience: 'Tech Companies needing high-conversion platforms',
    impactMetric: '99+ Lighthouse performance & Core Web Vitals score',
    impactMetrics: '99+ Lighthouse performance & Core Web Vitals score',
  },
];

export const HYLOS_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'fintech-executive-branding',
    slug: 'fintech-executive-branding',
    industry: 'FinTech & Payments',
    clientIndustry: 'B2B FinTech & Payments Platform',
    client: 'Series-B FinTech Platform',
    title: 'How a Series-B FinTech Founder Built ₹14 Cr Pipeline Through LinkedIn Authority',
    summary:
      'By positioning the CEO as a key voice in regulatory compliance and cross-border settlement, Hylos generated organic enterprise inbound leads without paid ad spend.',
    challenge:
      'The company had a strong technical product but lacked brand recognition among chief risk officers and VP-level buyers, resulting in long 9-month sales cycles.',
    solution:
      'Implemented the Hylos Founder Authority framework: 14 monthly high-signal LinkedIn breakdowns analyzing settlement risk data, combined with strategic account engagement.',
    metricResult: '₹14 Cr+ Pipeline Generated',
    timeline: '90 Days',
    results: {
      primaryMetric: '₹14 Cr+ Pipeline Generated',
      secondaryMetric: '420% Organic Impression Growth',
      timeline: '90 Days',
    },
    tags: ['Founder Branding', 'FinTech', 'Pipeline Growth'],
  },
  {
    id: 'deeptech-ai-seo',
    slug: 'deeptech-ai-seo',
    industry: 'Enterprise AI & Search',
    clientIndustry: 'Enterprise AI & Automation',
    client: 'Enterprise AI Platform',
    title: 'Dominating AI Engine Recommendations (ChatGPT & Perplexity) for Enterprise AI Platform',
    summary:
      'Hylos structured technical entity modeling and intent-driven content clusters, securing top recommendation spots across AI engines and Google.',
    challenge:
      'Enterprise buyers were increasingly researching AI automation tools on ChatGPT and Perplexity, where legacy SEO strategies failed to get cited.',
    solution:
      'Engineered structured JSON-LD entity schema and published authoritative benchmarking papers mapped directly to AI search query patterns.',
    metricResult: '#1 Citation Rank on AI Search',
    timeline: '60 Days',
    results: {
      primaryMetric: '#1 Citation Rank on AI Search',
      secondaryMetric: '3.1x Direct Inbound Demos',
      timeline: '60 Days',
    },
    tags: ['AI Search SEO', 'DeepTech', 'Generative Search'],
  },
  {
    id: 'saas-abm-performance',
    slug: 'saas-abm-performance',
    industry: 'B2B SaaS Scale-up',
    clientIndustry: 'B2B SaaS Scale-up',
    client: 'Tier-1 SaaS Scale-up',
    title: 'Reducing CAC by 48% with Intent-Targeted ABM Performance Marketing',
    summary:
      'Replaced broad paid campaigns with hyper-targeted LinkedIn account lists paired with high-converting editorial landing pages.',
    challenge:
      'High customer acquisition costs ($1,200+ per lead) from generic ad networks yielding low-intent form fills.',
    solution:
      'Restructured performance marketing into account-based intent funnels targeting verified decision-makers at tier-1 technology firms.',
    metricResult: '48% CAC Reduction',
    timeline: '120 Days',
    results: {
      primaryMetric: '48% CAC Reduction',
      secondaryMetric: '68% Demo-to-SQL Conversion',
      timeline: '120 Days',
    },
    tags: ['Performance Marketing', 'SaaS', 'Demand Generation'],
  },
];

export const HYLOS_ARTICLES: ArticleItem[] = [
  {
    id: 'why-founders-are-the-new-b2b-homepage',
    slug: 'why-founders-are-the-new-b2b-homepage',
    title: 'Why the Founder’s LinkedIn Profile Is the New B2B Technology Homepage',
    excerpt:
      'Enterprise buyers bypass corporate pitch decks to audit the founder’s personal feed. Here’s how domain authority converts buyers before the first sales call.',
    category: 'Executive Positioning',
    readTime: '5 min read',
    date: 'August 2026',
    publishedDate: 'August 2026',
    author: 'Gokul Raj',
    content:
      'In traditional B2B sales, the corporate website was the primary destination for prospective buyers evaluating vendors. Today, that dynamic has fundamentally shifted.\n\nModern enterprise decision-makers conduct silent audits on LinkedIn. Before requesting a demo, they inspect the CEO and CTO’s personal feeds to answer a fundamental question: Does this leadership team deeply understand our industry’s problem?\n\nWhen tech founders publish high-signal breakdowns, industry benchmarks, and unvarnished domain insights, they eliminate buyer skepticism and build trust at scale.',
    contentParagraphs: [
      'In traditional B2B sales, the corporate website was the primary destination for prospective buyers evaluating vendors. Today, that dynamic has fundamentally shifted.',
      'Modern enterprise decision-makers conduct silent audits on LinkedIn. Before requesting a demo, they inspect the CEO and CTO’s personal feeds to answer a fundamental question: Does this leadership team deeply understand our industry’s problem?',
      'When tech founders publish high-signal breakdowns, industry benchmarks, and unvarnished domain insights, they eliminate buyer skepticism and build trust at scale.',
    ],
  },
  {
    id: 'ai-seo-playbook-2026',
    slug: 'ai-seo-playbook-2026',
    title: 'The AI Search Optimization Playbook: Ranking in ChatGPT, Perplexity & Gemini',
    excerpt:
      'Traditional 10 blue links are losing ground to AI search answer engines. Learn the entity modeling framework required for AI engine citation.',
    category: 'AI SEO & Search',
    readTime: '7 min read',
    date: 'August 2026',
    publishedDate: 'August 2026',
    author: 'Hylos Strategy Team',
    content:
      'Generative search engines do not crawl pages the way legacy web crawlers do. LLMs evaluate semantic authority, entity co-occurrences, and structured JSON-LD data to formulate answer summaries.\n\nTo ensure your technology platform is cited when a buyer asks ChatGPT "What are the top enterprise workflow engines?", your technical content must be structured into authoritative entity nodes.\n\nThis guide breaks down the 4 pillars of AI search optimization: entity schema integration, citation clustering, intent mapping, and authoritative distribution.',
    contentParagraphs: [
      'Generative search engines do not crawl pages the way legacy web crawlers do. LLMs evaluate semantic authority, entity co-occurrences, and structured JSON-LD data to formulate answer summaries.',
      'To ensure your technology platform is cited when a buyer asks ChatGPT "What are the top enterprise workflow engines?", your technical content must be structured into authoritative entity nodes.',
      'This guide breaks down the 4 pillars of AI search optimization: entity schema integration, citation clustering, intent mapping, and authoritative distribution.',
    ],
  },
  {
    id: 'abm-versus-lead-gen-trap',
    slug: 'abm-versus-lead-gen-trap',
    title: 'The B2B Lead Gen Trap: Why High Lead Volume Is Killing Your Sales Velocity',
    excerpt:
      'Generating 500 low-intent eBook downloads burns sales bandwidth. Discover why account-based demand capture delivers higher ROI.',
    category: 'Demand Generation',
    readTime: '6 min read',
    date: 'August 2026',
    publishedDate: 'August 2026',
    author: 'Hylos Growth Team',
    content:
      'Most B2B growth teams celebrate top-of-funnel lead volume without measuring pipeline velocity. When paid ad campaigns incentivize unqualified users to download gated PDFs, sales reps waste hundreds of hours chasing cold contacts.\n\nAccount-Based Marketing (ABM) flips the funnel. By defining your precise Ideal Customer Profile (ICP) and delivering high-value editorial content directly to key stakeholders, you generate fewer leads—but dramatically higher qualified revenue.',
    contentParagraphs: [
      'Most B2B growth teams celebrate top-of-funnel lead volume without measuring pipeline velocity. When paid ad campaigns incentivize unqualified users to download gated PDFs, sales reps waste hundreds of hours chasing cold contacts.',
      'Account-Based Marketing (ABM) flips the funnel. By defining your precise Ideal Customer Profile (ICP) and delivering high-value editorial content directly to key stakeholders, you generate fewer leads—but dramatically higher qualified revenue.',
    ],
  },
];

export const HYLOS_FOUNDER_INFO = {
  name: 'Gokul Raj',
  title: 'Founder & CEO of Hylos',
  bio: 'Leader in AI-driven digital marketing and business transformation with extensive experience partnering with enterprise brands across Finance, Aviation, and B2B Technology sectors.',
  quote: 'Authority isn’t claimed—it’s engineered through relentless high-signal consistency.',
};

export const HYLOS_METRICS = [
  { label: 'Active Clients Served', value: '10+' },
  { label: 'Revenue Generated / Influenced', value: '₹22 Cr+' },
  { label: 'Projects Executed', value: '33+' },
  { label: 'Specialist Professionals Network', value: '22+' },
];

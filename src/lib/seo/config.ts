export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    locale: string;
    type: 'website' | 'article';
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
}

export const SITE_CONFIG = {
  name: 'Hylos',
  legalName: 'Hylos Executive Growth Technologies',
  domain: 'hylos.co',
  url: 'https://hylos.co',
  logoUrl: 'https://hylos.co/hylos-logo.png',
  description:
    'Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder positioning and AI search optimization.',
  ogImage: 'https://hylos.co/hylos-logo.png',
  founder: 'Gokul Raj',
};

export const ROUTE_SEO: Record<string, PageSEO> = {
  home: {
    title: 'Hylos — B2B Marketing, Founder Authority & AI Search Growth',
    description:
      'Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder positioning and AI search optimization.',
    canonical: 'https://hylos.co',
    openGraph: {
      title: 'Hylos — B2B Marketing, Founder Authority & AI Search Growth',
      description:
        'Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder positioning and AI search optimization.',
      url: 'https://hylos.co',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'Hylos Executive B2B Marketing & Founder Authority',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hylos — B2B Marketing, Founder Authority & AI Search Growth',
      description:
        'Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder positioning and AI search optimization.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
  services: {
    title: 'B2B Growth Solutions & Capabilities | Hylos',
    description:
      'Explore Hylos capabilities: LinkedIn Founder Branding, Corporate Company Branding, AI Intent SEO, B2B Performance Marketing, Content, and Technology.',
    canonical: 'https://hylos.co/services',
    openGraph: {
      title: 'B2B Growth Solutions & Capabilities | Hylos',
      description:
        'Explore Hylos capabilities: LinkedIn Founder Branding, Corporate Company Branding, AI Intent SEO, B2B Performance Marketing, Content, and Technology.',
      url: 'https://hylos.co/services',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'Hylos Solutions Overview',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'B2B Growth Solutions & Capabilities | Hylos',
      description:
        'Explore Hylos capabilities: LinkedIn Founder Branding, Corporate Company Branding, AI Intent SEO, B2B Performance Marketing, Content, and Technology.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
  work: {
    title: 'Enterprise Case Studies & Measured Impact | Hylos Work',
    description:
      'Proven growth case studies across FinTech, DeepTech AI, and B2B SaaS driving verified authority, executive pipeline, and revenue.',
    canonical: 'https://hylos.co/work',
    openGraph: {
      title: 'Enterprise Case Studies & Measured Impact | Hylos Work',
      description:
        'Proven growth case studies across FinTech, DeepTech AI, and B2B SaaS driving verified authority, executive pipeline, and revenue.',
      url: 'https://hylos.co/work',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'Hylos Case Studies',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Case Studies & Measured Impact | Hylos Work',
      description:
        'Proven growth case studies across FinTech, DeepTech AI, and B2B SaaS driving verified authority, executive pipeline, and revenue.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
  insights: {
    title: 'B2B Marketing & Founder Authority Insights | Hylos',
    description:
      'Strategic articles and thought leadership on executive personal branding, generative AI search optimization, and modern account-based demand generation.',
    canonical: 'https://hylos.co/insights',
    openGraph: {
      title: 'B2B Marketing & Founder Authority Insights | Hylos',
      description:
        'Strategic articles and thought leadership on executive personal branding, generative AI search optimization, and modern account-based demand generation.',
      url: 'https://hylos.co/insights',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'Hylos Insights & Articles',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'B2B Marketing & Founder Authority Insights | Hylos',
      description:
        'Strategic articles and thought leadership on executive personal branding, generative AI search optimization, and modern account-based demand generation.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
  about: {
    title: 'About Hylos — Story, Leadership & Human Influence Network',
    description:
      'Learn about Hylos, founder Gokul Raj, our executive positioning philosophy, and how we turn domain expertise into category authority.',
    canonical: 'https://hylos.co/about',
    openGraph: {
      title: 'About Hylos — Story, Leadership & Human Influence Network',
      description:
        'Learn about Hylos, founder Gokul Raj, our executive positioning philosophy, and how we turn domain expertise into category authority.',
      url: 'https://hylos.co/about',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'About Hylos & Founder Gokul Raj',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Hylos — Story, Leadership & Human Influence Network',
      description:
        'Learn about Hylos, founder Gokul Raj, our executive positioning philosophy, and how we turn domain expertise into category authority.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
  contact: {
    title: 'Book a Growth Strategy Session | Hylos Contact',
    description:
      'Schedule a 1-on-1 growth strategy consultation to audit your founder branding, LinkedIn visibility, and generative AI search presence.',
    canonical: 'https://hylos.co/contact',
    openGraph: {
      title: 'Book a Growth Strategy Session | Hylos Contact',
      description:
        'Schedule a 1-on-1 growth strategy consultation to audit your founder branding, LinkedIn visibility, and generative AI search presence.',
      url: 'https://hylos.co/contact',
      siteName: 'Hylos Executive Growth',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: 'Contact Hylos Growth Strategists',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Book a Growth Strategy Session | Hylos Contact',
      description:
        'Schedule a 1-on-1 growth strategy consultation to audit your founder branding, LinkedIn visibility, and generative AI search presence.',
      images: ['https://hylos.co/hylos-logo.png'],
    },
  },
};

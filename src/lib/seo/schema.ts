import { SITE_CONFIG } from './config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logoUrl,
    description: SITE_CONFIG.description,
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.founder,
      jobTitle: 'Founder & CEO',
    },
    sameAs: ['https://www.linkedin.com/company/hylos'],
  };
}

export function getServiceSchema(
  serviceOrTitle: { name: string; description: string; url?: string } | string,
  descriptionParam?: string
) {
  const name = typeof serviceOrTitle === 'string' ? serviceOrTitle : serviceOrTitle.name;
  const description =
    typeof serviceOrTitle === 'string' ? descriptionParam || '' : serviceOrTitle.description;
  const url = typeof serviceOrTitle === 'string' ? `${SITE_CONFIG.url}/services` : serviceOrTitle.url || `${SITE_CONFIG.url}/services`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: 'Global',
    url: url,
  };
}

export function getArticleSchema(title: string, description: string, date: string, author: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: SITE_CONFIG.logoUrl,
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: SITE_CONFIG.logoUrl,
    },
  };
}

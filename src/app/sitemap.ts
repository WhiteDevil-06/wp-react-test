import { MetadataRoute } from 'next';
import { HYLOS_SERVICES, HYLOS_CASE_STUDIES, HYLOS_ARTICLES } from '@/lib/content/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hylos.co';
  const lastMod = new Date().toISOString();

  // Core Static Sitemap Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic Service Detail Pages
  const servicePages: MetadataRoute.Sitemap = HYLOS_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Dynamic Case Study Pages
  const caseStudyPages: MetadataRoute.Sitemap = HYLOS_CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/work/${c.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Dynamic Article Pages
  const articlePages: MetadataRoute.Sitemap = HYLOS_ARTICLES.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...caseStudyPages, ...articlePages];
}

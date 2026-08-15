import { wpFetch } from './api';
import { Service, WpServiceRaw } from './types';

export const FALLBACK_SERVICES: Service[] = [
  {
    id: 1,
    title: 'AI Engineering',
    slug: 'ai-engineering',
    shortDescription: 'Build custom neural architectures, LLM pipelines, and production machine learning systems.',
    fullDescription: 'We design, deploy, and scale enterprise-grade AI models. From custom LLM fine-tuning to real-time predictive analytics pipelines.',
    iconName: 'Cpu',
    category: 'Core AI',
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'AI SEO',
    slug: 'ai-seo',
    shortDescription: 'Algorithmic search dominance powered by generative search optimization and programmatic content strategy.',
    fullDescription: 'Scale search presence with automated semantic optimization, structured schema injection, and AI answer-engine optimization (GEO).',
    iconName: 'Search',
    category: 'Growth',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    shortDescription: 'Data-driven growth engine utilizing real-time conversion modeling and multi-touch attribution.',
    fullDescription: 'Engineered acquisition campaigns leveraging high-frequency creative iteration and predictive audience targeting.',
    iconName: 'TrendingUp',
    category: 'Growth',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

function mapWpServiceToDomain(raw: WpServiceRaw, index: number): Service {
  const titleStr = typeof raw.title === 'string' ? raw.title : raw.title?.rendered || `Service #${index + 1}`;
  const contentStr = typeof raw.content === 'string' ? raw.content : raw.content?.rendered || '';
  const excerptStr = typeof raw.excerpt === 'string' ? raw.excerpt : raw.excerpt?.rendered || '';

  const cleanExcerpt = excerptStr.replace(/<[^>]*>?/gm, '').trim();
  const cleanContent = contentStr.replace(/<[^>]*>?/gm, '').trim();

  // Dynamic icon selection based on title keywords
  let icon = raw.icon_name || 'Zap';
  const lowerTitle = titleStr.toLowerCase();
  if (lowerTitle.includes('ai') || lowerTitle.includes('neural') || lowerTitle.includes('model') || lowerTitle.includes('engine')) {
    icon = 'Cpu';
  } else if (lowerTitle.includes('seo') || lowerTitle.includes('search') || lowerTitle.includes('growth')) {
    icon = 'Search';
  } else if (lowerTitle.includes('marketing') || lowerTitle.includes('performance') || lowerTitle.includes('analytics')) {
    icon = 'TrendingUp';
  } else if (lowerTitle.includes('web') || lowerTitle.includes('code') || lowerTitle.includes('app') || lowerTitle.includes('dev')) {
    icon = 'Code';
  }

  return {
    id: raw.id,
    title: titleStr,
    slug: raw.slug || titleStr.toLowerCase().replace(/\s+/g, '-'),
    shortDescription: cleanExcerpt || cleanContent.slice(0, 120) || 'Enterprise technology service powered by Rock Window WordPress.',
    fullDescription: cleanContent || cleanExcerpt || 'Detailed service information.',
    iconName: icon,
    category: raw.category || 'WordPress Backend',
    order: raw.menu_order || index + 1,
    imageUrl: raw.featured_media_url || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  };
}

export async function fetchServices(): Promise<Service[]> {
  // Try custom endpoint /services first
  let rawServices = await wpFetch<WpServiceRaw[]>('/services', { cache: 'no-store' });

  // If not found, fetch standard WP /posts
  if (!rawServices || !Array.isArray(rawServices) || rawServices.length === 0) {
    rawServices = await wpFetch<WpServiceRaw[]>('/posts', { cache: 'no-store' });
  }

  if (!rawServices || !Array.isArray(rawServices) || rawServices.length === 0) {
    console.warn('[WordPress API] Returning fallback services data');
    return FALLBACK_SERVICES;
  }

  return rawServices.map((raw, idx) => mapWpServiceToDomain(raw, idx));
}

export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  const services = await fetchServices();
  return services.find((s) => s.slug === slug) || null;
}

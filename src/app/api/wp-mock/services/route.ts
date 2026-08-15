import { NextResponse } from 'next/server';

// Global state in memory for live local POC testing
let mockServices = [
  {
    id: 1,
    slug: 'ai-engineering',
    title: { rendered: 'AI Engineering' },
    content: { rendered: 'We design, deploy, and scale enterprise-grade AI models. From custom LLM fine-tuning to real-time predictive analytics pipelines.' },
    excerpt: { rendered: 'Build custom neural architectures, LLM pipelines, and production machine learning systems.' },
    short_description: 'Build custom neural architectures, LLM pipelines, and production machine learning systems.',
    icon_name: 'Cpu',
    category: 'Core AI',
    menu_order: 1,
    featured_media_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    slug: 'ai-seo',
    title: { rendered: 'AI SEO' },
    content: { rendered: 'Scale search presence with automated semantic optimization, structured schema injection, and AI answer-engine optimization (GEO).' },
    excerpt: { rendered: 'Algorithmic search dominance powered by generative search optimization and programmatic content strategy.' },
    short_description: 'Algorithmic search dominance powered by generative search optimization and programmatic content strategy.',
    icon_name: 'Search',
    category: 'Growth',
    menu_order: 2,
    featured_media_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    slug: 'performance-marketing',
    title: { rendered: 'Performance Marketing' },
    content: { rendered: 'Engineered acquisition campaigns leveraging high-frequency creative iteration and predictive audience targeting.' },
    excerpt: { rendered: 'Data-driven growth engine utilizing real-time conversion modeling and multi-touch attribution.' },
    short_description: 'Data-driven growth engine utilizing real-time conversion modeling and multi-touch attribution.',
    icon_name: 'TrendingUp',
    category: 'Growth',
    menu_order: 3,
    featured_media_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

export async function GET() {
  return NextResponse.json(mockServices, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Reset command
    if (body.action === 'reset') {
      mockServices = [
        {
          id: 1,
          slug: 'ai-engineering',
          title: { rendered: 'AI Engineering' },
          content: { rendered: 'We design, deploy, and scale enterprise-grade AI models.' },
          excerpt: { rendered: 'Build custom neural architectures, LLM pipelines, and production machine learning systems.' },
          short_description: 'Build custom neural architectures, LLM pipelines, and production machine learning systems.',
          icon_name: 'Cpu',
          category: 'Core AI',
          menu_order: 1,
          featured_media_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 2,
          slug: 'ai-seo',
          title: { rendered: 'AI SEO' },
          content: { rendered: 'Scale search presence with automated semantic optimization.' },
          excerpt: { rendered: 'Algorithmic search dominance powered by generative search optimization.' },
          short_description: 'Algorithmic search dominance powered by generative search optimization.',
          icon_name: 'Search',
          category: 'Growth',
          menu_order: 2,
          featured_media_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 3,
          slug: 'performance-marketing',
          title: { rendered: 'Performance Marketing' },
          content: { rendered: 'Engineered acquisition campaigns leveraging high-frequency creative iteration.' },
          excerpt: { rendered: 'Data-driven growth engine utilizing real-time conversion modeling.' },
          short_description: 'Data-driven growth engine utilizing real-time conversion modeling.',
          icon_name: 'TrendingUp',
          category: 'Growth',
          menu_order: 3,
          featured_media_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        },
      ];
      return NextResponse.json({ success: true, services: mockServices });
    }

    // Modify existing title (e.g. AI Engineering -> AI Engineering & Automation)
    if (body.action === 'modify_title') {
      const target = mockServices.find((s) => s.id === (body.id || 1));
      if (target) {
        target.title = { rendered: body.title || 'AI Engineering & Automation' };
      }
      return NextResponse.json({ success: true, services: mockServices });
    }

    // Add new 4th service (e.g. Web Development)
    if (body.action === 'add' || body.title) {
      const newId = mockServices.length ? Math.max(...mockServices.map((s) => s.id)) + 1 : 1;
      const titleStr = body.title || 'Web Development';
      const newService = {
        id: newId,
        slug: body.slug || titleStr.toLowerCase().replace(/\s+/g, '-'),
        title: { rendered: titleStr },
        content: { rendered: body.content || 'Ultra high-performance headless Next.js web applications.' },
        excerpt: { rendered: body.short_description || 'Ultra high-performance headless Next.js web applications.' },
        short_description: body.short_description || 'Ultra high-performance headless Next.js web applications.',
        icon_name: body.icon_name || 'Code',
        category: body.category || 'Engineering',
        menu_order: newId,
        featured_media_url: body.featured_media_url || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      };
      mockServices.push(newService);
      return NextResponse.json({ success: true, services: mockServices });
    }

    return NextResponse.json({ success: false, message: 'Invalid payload' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

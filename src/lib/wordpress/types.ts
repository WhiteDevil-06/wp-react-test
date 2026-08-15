export interface WpRenderedField {
  rendered: string;
}

export interface WpMediaDetails {
  source_url: string;
  alt_text?: string;
}

export interface WpServiceRaw {
  id: number;
  slug: string;
  title: WpRenderedField | string;
  content: WpRenderedField | string;
  excerpt?: WpRenderedField | string;
  short_description?: string;
  icon_name?: string;
  category?: string;
  menu_order?: number;
  featured_media_url?: string;
}

export interface WpCaseStudyRaw {
  id: number;
  slug: string;
  title: WpRenderedField | string;
  content: WpRenderedField | string;
  excerpt?: WpRenderedField | string;
  client?: string;
  problem?: string;
  solution?: string;
  result?: string;
  hero_image_url?: string;
  tags?: string[];
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: string;
  order: number;
  imageUrl?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client: string;
  shortDescription: string;
  problem: string;
  solution: string;
  result: string;
  heroImage: string;
  tags: string[];
}

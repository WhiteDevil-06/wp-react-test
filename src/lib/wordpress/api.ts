const getWpApiUrl = (): string => {
  const url = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (url) return url;
  return 'http://localhost:3000/api/wp-mock';
};

export async function wpFetch<T>(endpoint: string, init?: RequestInit): Promise<T | null> {
  const baseUrl = getWpApiUrl();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const fullUrl = `${baseUrl}${cleanEndpoint}`;

  try {
    const res = await fetch(fullUrl, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
      next: { revalidate: 10, ...(init?.next || {}) },
    });

    if (!res.ok) {
      console.warn(`[WordPress API Warning] HTTP ${res.status} when fetching ${fullUrl}`);
      return null;
    }

    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    console.error(`[WordPress API Error] Failed to fetch ${fullUrl}:`, error);
    return null;
  }
}

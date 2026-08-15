---
name: api-integration
description: Guidelines for API abstraction, fallback responses, environment URL configuration, and error boundaries.
---

# API Integration Skill

## Rules
1. Encapsulate all calls in `src/lib/wordpress/`.
2. Configure target base URL using `WORDPRESS_API_URL` or `NEXT_PUBLIC_WORDPRESS_API_URL`.
3. Provide robust error handling: return fallback mock data or graceful empty states when WP is unreachable.
4. Support ISR / revalidation parameters for fast page loads.

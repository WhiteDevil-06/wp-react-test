---
name: wordpress
description: Standards for WordPress REST API schema, custom endpoints, and content mapping.
---

# WordPress Skill

## Standards
1. Rely on standard WP REST API endpoints `/wp-json/wp/v2/` (`services`, `case-studies`, `posts`, `media`).
2. Map raw WordPress JSON outputs into clean, strongly typed TypeScript entities (`Service`, `CaseStudy`).
3. Sanitize HTML content rendered from WP strings (e.g. `rendered` fields).

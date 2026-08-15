---
name: architecture
description: Architecture governance guidelines for Next.js and WordPress decoupled headless CMS structure.
---

# Architecture Skill

## Principles
1. **Presentation Ownership:** Next.js strictly owns UI, layout, routing, and client interactions.
2. **Content Ownership:** WordPress strictly owns data models, post management, media, and raw content.
3. **Decoupled API Boundary:** All communication passes through isolated API abstractions (`src/lib/wordpress/`). No direct fetch calls scattered inside React presentation components.
4. **Resilience:** Graceful handling of network timeouts, WP downtime, and missing content fields.

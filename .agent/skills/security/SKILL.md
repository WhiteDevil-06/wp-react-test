---
name: security
description: Security guidelines preventing leak of WP admin credentials, database secrets, or private API keys to frontend bundle.
---

# Security Skill

## Rules
1. Only consume public read-only WordPress REST API endpoints (`/wp-json/wp/v2/`).
2. Never store WordPress admin passwords or database credentials in client bundle (`NEXT_PUBLIC_` prefixed vars).
3. Sanitize HTML strings before dangerously rendering in React DOM.

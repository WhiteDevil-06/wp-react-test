---
name: nextjs
description: Guidelines for Next.js App Router, Server/Client Component splitting, and TypeScript practices.
---

# Next.js Skill

## Standards
1. Use Next.js 14+ App Router standard structure (`src/app`).
2. Server components by default; convert to Client components (`'use client'`) only when interactive state, Framer Motion, or browser hooks are required.
3. Keep data fetching in server utilities or data-access abstractions.

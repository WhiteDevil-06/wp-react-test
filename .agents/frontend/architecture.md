# Frontend Architecture

- **Framework**: Next.js App Router with TypeScript.
- **Directory Structure**:
  - `src/app/`: Page routes, layouts, and API routes.
  - `src/components/`: Reusable, modular UI components.
  - `src/lib/`: Shared utilities, API clients, schema validators.
  - `src/types/`: TypeScript interfaces and type definitions.
- **Rendering Strategy**: Default to Server Components (`RSC`) for text and static markup. Use `"use client"` exclusively for interactive components (forms, animations, toggles).

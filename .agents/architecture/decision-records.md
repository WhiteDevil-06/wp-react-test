# Architecture Decision Records (ADRs)

## ADR-001: Next.js App Router for Public SEO-First Experience
- **Status**: Proposed / Active
- **Context**: Hylos requires high-conversion B2B marketing pages with immediate initial paint, server-side metadata generation, structured data injection, and Core Web Vitals optimization.
- **Decision**: Adopt Next.js App Router (React Server Components where applicable) for optimal SEO performance and static/SSR rendering.

## ADR-002: Standalone Decoupled Backend API for Lead Capture
- **Status**: Proposed / Active
- **Context**: Form handling and enquiry management must be securely handled, validated, and persisted without coupling to legacy WordPress.
- **Decision**: Implement lightweight Next.js API routes or dedicated Node.js/Express service with Zod schema validation and MongoDB storage.

## ADR-003: Pure Tailwind CSS with Orbital Editorial Tokens
- **Status**: Active
- **Context**: Rebuilding design system from scratch following `DESIGN.md`.
- **Decision**: Extend Tailwind configuration with Hylos HSL and HEX tokens, custom typography (`Hanken Grotesk`, `Inter`, `JetBrains Mono`), and structural border utility classes.

# Hylos Production Website Revamp - Phased Implementation Plan

This document outlines the phased implementation plan for the production revamp of the Hylos B2B marketing website. Based on the scope of work (restructuring pages, building complex responsive components, and backend integration), a phased approach is the most efficient and safest way to proceed.

## Goal Description

Transform the existing, content-heavy Hylos website into a clean, modern, and professional B2B marketing platform. The new site will feature strong visual hierarchy, purposeful motion, excellent responsiveness, and clear conversion paths. We will maintain exactly four primary pages (Home, Services, About, Contact Us) and utilize a clean separation of frontend components and backend services. SEO and responsive design will be integrated continuously during component development.

> [!IMPORTANT]
> **Sub-Agent / Specialist Review Workflow**
> The existing `.agents` directory provides guidelines for various specialist roles (SEO, UI/UX, Backend, Accessibility, etc.). I will utilize these guidelines to perform continuous reviews. For every major component or section, the workflow will be:
> `Build -> SEO Review -> Responsive Review -> Accessibility/Performance Review -> Fix -> Continue`.

## Phase-Wise Breakdown & Estimation

This is a comprehensive revamp. Breaking it down into phases allows us to review and verify progress iteratively.

### Phase 1: Cleanup, Core Architecture & Global Layout
**Estimated Time:** ~1-2 hours of focused execution.
- **Cleanup:** Remove extraneous pages (`src/app/insights/`, `src/app/work/`).
- **Data Structure:** Create data placeholder files (`services.ts`, `testimonials.ts`, `faq.ts`, `partners.ts`) in `src/lib/data/` to keep JSX clean.
- **Global Layout:** Update `Header.tsx` (responsive hamburger, active states, 4 links) and `Footer.tsx` (minimal state).
- **Specialist Review:** Ensure global layout is perfectly responsive, accessible (keyboard navigation for menu), and semantically correct.

### Phase 2: Core Reusable UI Components
**Estimated Time:** ~2-3 hours of focused execution.
- **`PartnerMarquee`:** Infinite, seamlessly looping horizontal marquee.
- **`TestimonialCarousel`:** Responsive horizontal carousel with swipe/touch support.
- **`FaqFlipCard`:** 3D flip animation cards (Myth or Fact) with keyboard accessibility.
- **`ServicesCarousel`:** Interactive, data-driven carousel for the Services page.
- **Specialist Review:** Each component will individually undergo SEO (semantic HTML), Responsive, and Accessibility reviews *before* the next component is built.

### Phase 3: Page Assembly
**Estimated Time:** ~2 hours of focused execution.
- **Home Page:** Assemble Hero, Problem, How Hylos Helps, Partner Marquee, Testimonials, FAQ, and Final CTA.
- **Services Page:** Assemble Hero, Service Category Selector, Services Carousel, Service Details, and CTA.
- **About Page:** Assemble Mission, Approach, Founder Section, and Why Hylos.
- **Contact Page (UI only):** Build the lead capture form UI with proper validation states and Turnstile placeholder.
- **Specialist Review:** Full page-level reviews for heading hierarchy, layout stability, Core Web Vitals considerations, and cross-device flow.

### Phase 4: Backend API & Integrations
**Estimated Time:** ~2 hours of focused execution.
- **`/api/contact`:** Implement server-side validation, Cloudflare Turnstile verification (using placeholders), non-sequential ID generation (`HY-XXXXXXXX`), and Google Apps Script integration (using placeholders).
- **Contact Form Connection:** Connect the frontend form to the API and handle success/error states.
- **Tracking System:** Build the `/track` frontend UI and `/api/track` endpoint, which will query the Apps Script API to retrieve lead status.
- **Specialist Review:** Security review (rate limiting, secure headers, error handling), Backend review (clean data sanitization, proper status codes).

## Proposed Changes (Detailed)

### Routing & Structure Cleanup
- [DELETE] `src/app/insights/`
- [DELETE] `src/app/work/`
- [MODIFY] `src/app/api/enquiry/route.ts` -> Rename/move to `src/app/api/contact/route.ts`

### Data Management (Placeholders)
- [NEW] `src/lib/data/services.ts`
- [NEW] `src/lib/data/testimonials.ts`
- [NEW] `src/lib/data/faq.ts`
- [NEW] `src/lib/data/partners.ts`

### Backend Integrations (Phase 4)
- Environment variables `TURNSTILE_SECRET_KEY` and `GOOGLE_APPS_SCRIPT_URL` will be used as placeholders.
- **Lead Tracking:** Will query Google Apps Script directly. No MongoDB will be used.

## Verification Plan

### Automated Checks
- Run `npm run lint` and `npm run build` at the end of each phase to ensure no compilation or Next.js routing errors.

### Continuous Specialist Review (Manual & Agentic Verification)
- **Responsive Check:** Review every implemented component at mobile (320px), tablet (768px), and desktop (1024px+) breakpoints.
- **Accessibility Check:** Ensure all interactive elements have proper semantic tags and `aria-labels`.
- **SEO Check:** Ensure heading hierarchy is logical (H1 -> H2 -> H3) and semantic HTML is used.
- **Form Submission Verification:** Simulate form submissions to verify validation, Turnstile integration (mocked), Reference ID generation, and backend error handling.

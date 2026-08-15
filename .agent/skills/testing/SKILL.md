---
name: testing
description: Testing standards for API contract validation, fallback state handling, and critical content change test.
---

# Testing Skill

## Test Scenarios
1. **Critical POC Validation Test:** Content added in WordPress backend updates Next.js UI immediately upon revalidation without source code edits.
2. **Fallback Verification:** If WP API returns 500 or timeout, Next.js displays fallback state / skeleton without crashing.
3. **Build Check:** Zero TypeScript and Next.js compile errors.

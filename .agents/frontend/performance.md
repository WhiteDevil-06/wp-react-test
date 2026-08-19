# Frontend Performance Rules

- Use `next/image` for image rendering with explicit `width`, `height`, and `sizes` attributes.
- Use `next/font` for loading Google Fonts (`Hanken Grotesk`, `Inter`, `JetBrains Mono`) with `display: swap`.
- Dynamic import (`next/dynamic`) for heavy client components below the fold.
- Zero layout shift (CLS < 0.05) through layout reservation.

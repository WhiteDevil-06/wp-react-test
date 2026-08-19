# Frontend Component Rules

- **Prop Interfaces**: Explicit TypeScript interface for every component.
- **Composition**: Single responsibility per component file.
- **Styling**: Classname utility composition (`clsx` + `tailwind-merge`).
- **Imports**: Clean absolute imports using `@/` path alias.
- **State Handling**: Keep component state local where possible.

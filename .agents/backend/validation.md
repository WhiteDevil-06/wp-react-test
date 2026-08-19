# Backend Input Validation Rules

- Use `zod` schema to validate all incoming POST payloads.
- Mandatory fields:
  - `name`: string, min 2 chars, max 100 chars.
  - `email`: valid email string format.
  - `company`: string, min 2 chars, max 100 chars.
  - `service`: enum of valid service options.
  - `message`: string, min 10 chars, max 2000 chars.
- Reject requests failing schema validation with 400 Bad Request and friendly field-level error messages.

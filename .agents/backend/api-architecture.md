# API Architecture

- **Endpoints**: `/api/enquiry` (POST for contact and lead form submissions).
- **Structure**: Route handler in `src/app/api/enquiry/route.ts`.
- **Response Format**: Standardized JSON responses `{ success: boolean, data?: object, error?: string }`.
- **Persistence**: Store lead submissions safely in database with timestamp, IP hash, and source metadata.

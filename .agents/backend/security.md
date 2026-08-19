# Backend Security Rules

- **Spam Protection**: Implement invisible honeypot field (`website_url_hp`) on frontend forms. Reject request silently if populated.
- **Rate Limiting**: Restrict form submissions per IP address (e.g. max 5 submissions per 15 minutes).
- **Environment Secrets**: Never expose DB connection strings or mail API keys to frontend bundle.
- **Sanitization**: Escape input strings before storage or notification forwarding.

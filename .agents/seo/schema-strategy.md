# Schema Strategy & JSON-LD Specifications

## Global Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hylos",
  "url": "https://hylos.co",
  "logo": "https://hylos.co/logo.png",
  "description": "B2B marketing and growth agency specializing in LinkedIn founder positioning, AI search optimization, and intent-driven content.",
  "founder": {
    "@type": "Person",
    "name": "Gokul Raj"
  }
}
```

## Service Schema
Each service page (e.g. LinkedIn Personal Branding) must embed a `Service` JSON-LD schema with `provider`, `areaServed`, `serviceType`, and `description`.

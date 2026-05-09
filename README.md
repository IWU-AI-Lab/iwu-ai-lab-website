# Indiana Wesleyan University AI Lab & AI Club Website

Official website for the IWU AI Lab and AI Club, built with [Next.js], React, and Tailwind CSS, (https://nextjs.org) and deployed on AWS S3.

## Quick Start

See [SETUP_AND_MAINTENANCE.md](SETUP_AND_MAINTENANCE.md) for detailed setup instructions.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

- `src/app/` — Page components and routing
- `src/components/` — Reusable UI components
- `src/lib/` — Utilities and placeholder data
- `public/` — Static assets (images, etc.)

## Documentation

- **[Setup & Maintenance](SETUP_AND_MAINTENANCE.md)** — Local development, editing pages, styling
- **[Deployment](DEPLOYMENT.md)** — AWS S3 setup and custom domain configuration
- **[Contributing](CONTRIBUTING.md)** — Guidelines for contributing to this project

## Deployment

The site is automatically deployed to AWS S3 + CloudFront when changes are pushed to `main`. See [DEPLOYMENT.md](DEPLOYMENT.md) for setup details.

## License

Internal use only.

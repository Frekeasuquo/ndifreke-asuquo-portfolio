# Freke.dev — Next.js Portfolio

A production-oriented personal portfolio built with Next.js App Router and TypeScript.

## Architecture

- **Server-first rendering:** pages and content are server components by default.
- **Isolated client behaviour:** mobile navigation, reveal animations and terminal animation are client components only where interaction is required.
- **Data-driven UI:** portfolio content lives in `app/data/portfolio.ts`, keeping content separate from presentation.
- **Reusable components:** project cards, section headings, timelines and navigation are independently composed.
- **Route-level case studies:** projects are available at `/work/[slug]` and generated statically from the project data.
- **Operational resilience:** `not-found.tsx` and `error.tsx` provide explicit failure states.
- **Quality gates:** ESLint, TypeScript checks, Prettier and GitHub Actions CI are configured.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## Deployment

The application is designed for Vercel or any Node-compatible Next.js deployment.

## Engineering decisions

1. Keep business/content data independent from UI components.
2. Prefer server components and add `use client` only for browser APIs or interaction.
3. Keep external links explicit and protected with `noopener noreferrer`.
4. Respect `prefers-reduced-motion` for animated UI.
5. Keep route-level project content statically generated for fast delivery.
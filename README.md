# openglitch-web-page

Landing page for **OpenGlitch** — a product studio distributed between Colombia and Canadá that
builds vertical SaaS with AI. Next.js App Router app, deployed as a Docker image to an Oracle
cluster.

## Local preview

```sh
npm install
npm run dev
```

Open <http://localhost:3000>. The hero video streams from CloudFront; the rest of the page is
fully static.

## Production build

```sh
npm run build
npm start
```

`next.config.mjs` sets `output: 'standalone'`, so `npm run build` produces
`.next/standalone/server.js` plus `.next/static` — the artifacts the Dockerfile copies into the
runtime stage.

## Docker

Build and run the image locally:

```sh
docker build -t openglitch-web .
docker run --rm -p 3000:3000 openglitch-web
```

The image is a three-stage build on `node:20-alpine` and runs as a non-root user on port `3000`.

## CI / CD

[`.github/workflows/build.yml`](.github/workflows/build.yml) runs on the self-hosted
`arc-runner-set` runners. It builds the Docker image on every push to `main` and every PR, and
publishes to **GitHub Container Registry** (`ghcr.io/<owner>/openglitch-web-page`) on pushes to
`main` only. PRs build-verify without pushing.

Tags published on each `main` push:

- `latest`
- `main`
- `sha-<short>`

To pull the image from your Oracle cluster, create a pull secret with a GHCR token and reference
it in your Kubernetes manifests.

## Project layout

```
app/
  layout.tsx          Root layout, fonts, ScrollReveal
  page.tsx            Page composition
  globals.css         Ported design system (1.3k lines)
components/
  Hero.tsx            Client — video, scramble, marquee
  Section*.tsx        One per landing section
  Footer.tsx
  MagneticBtn.tsx     Client — magnetic hover for CTA
  ScrollReveal.tsx    Client — mounts the reveal-on-scroll observer
  AcademyViz.tsx      Inline SVG for the Academy Engine product card
  SyntiaViz.tsx       Inline SVG for the SyntiaHealth product card
public/assets/        Logos and brand marks
Dockerfile            Multi-stage build (deps → builder → runner)
```

## Design source

Generated from a Claude Design handoff bundle (dark editorial aesthetic, ambient blurred shapes,
RGB-split glitch on the word "glitch", word-by-word hero reveal). The HTML/CSS/JSX prototype was
ported 1:1 into Next.js — class names and CSS variables are preserved from the source stylesheet
so the output matches the mockup.

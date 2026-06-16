# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview the production build
```

## Stack

- **Astro 4** (static output) + **Tailwind CSS 3**
- **JavaScript only** — no TypeScript, no `.ts` files
- Deployed to **Vercel** (auto-detects Astro, no adapter needed for static)

## Architecture

Single-page marketing site. All content lives in `src/pages/index.astro`, which composes:

```
src/
  layouts/Layout.astro      # HTML shell, Google Fonts (Syne + Plus Jakarta Sans)
  pages/index.astro         # Entry point — imports all sections in order
  components/
    Nav.astro               # Sticky nav, scrolls to amber/blur on scroll (vanilla JS)
    Hero.astro              # Full-screen hero with glow background
    Services.astro          # 2×2 card grid of the 4 main services
    Brands.astro            # Infinite marquee of supported car brands
    Features.astro          # 2-column layout: text + 4 feature cards
    CTA.astro               # Centered contact card
    Footer.astro            # Footer + floating WhatsApp button (mobile only)
```

## Design tokens (Tailwind config)

- `bg-base` `#09090B`, `bg-surface` `#111113`, `bg-elevated` `#1C1C1F`
- Accent: `amber-400` (`#FBBF24`) — used for highlights, CTAs, glows
- Custom backgrounds: `bg-hero-glow` (radial amber), `bg-card-shine` (gradient overlay)
- Fonts: `font-heading` → Syne 700/800, `font-sans` → Plus Jakarta Sans

## Business data

- **Name:** Cerrajería GAMA Express
- **Contact:** Edwyn García
- **Phones:** 55 2250 0001 / 56 1035 4505 (Mexico, +52)
- **WhatsApp:** `https://wa.me/525522500001`
- Phone numbers are repeated in `Nav.astro`, `Hero.astro`, `CTA.astro`, and `Footer.astro` — update all four if they change.

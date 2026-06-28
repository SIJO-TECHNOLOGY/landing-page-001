# AceByte Technology — Landing Page (V2)

A premium, enterprise-oriented landing page for **AceByte Technology**: purpose-built
AI that automates and optimizes business operations.

The page is a single cinematic experience — one persistent `<canvas>` renders the
customer's systems as a living graph that morphs from *fragmented operations* →
*purpose-built AI* → *measurable results* as you scroll.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — theme tokens live in `app/globals.css` under `@theme`
  (there is no `tailwind.config.js`)
- **Motion** (`motion/react`) for entrance/scroll animations
- HTML5 Canvas 2D for the background system animation

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx              Root layout, metadata/OG, fonts, MotionConfig
  page.tsx                Section order for the one-page narrative
  globals.css             Tailwind v4 theme tokens + global styles
components/
  MotionProvider.tsx      Global reduced-motion config
  system/SystemCanvas.tsx The animated system-graph background
  nav/TopNav.tsx          Fixed top navigation
  acts/                   The scroll "acts":
    ColdOpen.tsx            Hero
    StatsStrip.tsx          Business-results proof band
    ScrollAct.tsx           Generic narrative beat (problem / reasoning)
    Capabilities.tsx        4 capability pillars + integration band
    Verdict.tsx             Measurable-results card + testimonial
    Process.tsx             3-step engagement model
    Invitation.tsx          Final CTA + footer
  ui/                     Button, Caption, Reveal (shared primitives)
lib/
  content.ts              SINGLE SOURCE OF TRUTH for all page copy
  anim.ts                 Shared easing + cold-open timing
  graph.ts                System-graph node/edge definitions
  scene.ts                Pure scene math (scroll → canvas state)
  rng.ts                  Deterministic seeded PRNG
  hooks/useReducedMotion.ts
```

## Editing content

All visible copy — nav, hero, stats, pillars, integrations, results, testimonial,
process steps, CTAs, and footer/legal — lives in **`lib/content.ts`**. Components
are presentation-only; edit copy there and it updates everywhere. In-page anchors
are defined once in `ANCHORS` so navigation and section IDs stay in sync.

## Accessibility

- All Motion animations respect `prefers-reduced-motion` (global `MotionConfig`).
- The background canvas is `aria-hidden` and renders a single static frame under
  reduced motion.

## License

Private and proprietary.

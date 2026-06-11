# Campaign 1 — Thoughtworks × ResearchNXT Microsite

## Rules

- **Do not run `npm run build`, `npx vite build`, `npm run dev`, or `npx vite` (dev server).** Write files only; let the user run the dev/build commands themselves.
- **Never use em-dashes ("—") in any content/copy.** Use commas, periods, or a middot ("·") instead.

## Design

- **White-dominant palette.** Teal (`#003d4f`) and pink (`#f2617a`) are accents only (eyebrows, key words, dots, buttons, underlines, small details). No large teal/dark background fills.
- **Fonts (Thoughtworks brand):** **Bitter Bold (700 only)** for the display headline; **Inter** (variable) for everything else. Inter weights: **360** body copy, **630** bold callouts / subheadings (eyebrows, subheadline, pillar titles/numbers, form title). Genuine italics use slant **-10** (`font-variation-settings: 'slnt' -10`); the teal `<em>` accent stays upright. Set via `font-variation-settings: 'wght' <n>` with a matching `font-weight` fallback.
- **Layout:** single full viewport, no scroll on desktop (html/body `overflow: hidden`); stacks and allows scroll under 860px.
- **Logos:** Thoughtworks (`/logos/thoughtworks-logo.svg`) + ResearchNXT (`/logos/br_logo_v3.svg`) in header, separated by a thin vertical divider. Keep natural logo colors (no white/invert filters) since background is white.
- **Stack:** Vite + vanilla HTML/CSS/JS. Files: `index.html` (root), `src/style.css`, `src/main.js`, `vite.config.js`.

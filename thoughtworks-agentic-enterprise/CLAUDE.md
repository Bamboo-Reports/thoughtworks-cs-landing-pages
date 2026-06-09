# Campaign 1 — Thoughtworks × ResearchNXT Microsite

## Rules

- **Do not run `npm run build`, `npx vite build`, `npm run dev`, or `npx vite` (dev server).** Write files only; let the user run the dev/build commands themselves.
- **Never use em-dashes ("—") in any content/copy.** Use commas, periods, or a middot ("·") instead.

## Design

- **White-dominant palette.** Teal (`#003d4f`) and pink (`#f2617a`) are accents only (eyebrows, key words, dots, buttons, underlines, small details). No large teal/dark background fills.
- **Font:** DM Sans (Google Fonts).
- **Layout:** single full viewport, no scroll on desktop (html/body `overflow: hidden`); stacks and allows scroll under 860px.
- **Logos:** Thoughtworks (`/logos/thoughtworks-logo.svg`) + ResearchNXT (`/logos/researchnxt-logo-BT-d3HY0.png`) in header, separated by a thin vertical divider. Keep natural logo colors (no white/invert filters) since background is white.
- **Stack:** Vite + vanilla HTML/CSS/JS. Files: `index.html` (root), `src/style.css`, `src/main.js`, `vite.config.js`.

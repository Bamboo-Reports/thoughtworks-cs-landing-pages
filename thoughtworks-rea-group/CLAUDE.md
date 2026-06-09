# REA Group — Thoughtworks x ResearchNXT Microsite

## Rules

- **Do not run `npm run build`, `npx vite build`, `npm run dev`, or `npx vite` (dev server).** Write files only; let the user run the dev/build commands themselves.
- **Never use em-dashes ("—") in any content/copy.** Use commas, periods, or a middot ("·") instead.

## Design

- **White-dominant palette.** Teal (`#003d4f`) and pink (`#f2617a`) are accents only (eyebrows, key words, dots, buttons, underlines, small details). No large teal/dark background fills.
- **Fonts (Thoughtworks brand):** **Bitter Bold (700 only)** for the display headline; **Inter** (variable) for everything else. Inter weights: **360** for body copy, **630** for bold callouts / subheadings (eyebrows, subheadline, pillar titles/numbers, form title). Genuine italics use slant **-10** (`font-variation-settings: 'slnt' -10`); the teal `<em>` accent stays upright. Set via `font-variation-settings: 'wght' <n>` (with a matching `font-weight` fallback).
- **Layout:** single full viewport, no scroll on desktop (html/body `overflow: hidden`); stacks and allows scroll under 860px.
- **Logos:** Thoughtworks (`/logos/thoughtworks-logo.svg`) + ResearchNXT (`/logos/researchnxt-logo-BT-d3HY0.png`) in header, separated by a thin vertical divider. Keep natural logo colors (no white/invert filters) since background is white.
- **Stack:** Vite + vanilla HTML/CSS/JS. Files: `index.html` (root), `src/style.css`, `src/main.js`, `vite.config.js`.

## Content

- **Client:** REA Group — one of the largest property marketplaces in the world.
- **Story:** Thoughtworks partnered with REA to re-platform their Australian site and scale delivery across Australia and Southeast Asia, more than doubling throughput and helping REA grow to a AUD$20 billion global digital marketplace.

## Gated asset (video, not PDF)

- The asset is a **Wistia video** (id `vljwva6dhy`), shown in a modal after form submission, not a downloadable PDF.
- **Trigger:** JotForm Thank-You is set to "Redirect to an external link after submission" pointing at this page's URL with a `?watch=1` flag (e.g. `https://thoughtworks-rea-group.researchnxt.com/?watch=1`). JotForm navigates the top window, the page reloads with the flag, and `src/main.js` auto-opens the modal, then strips the flag from the URL.
- Modal markup lives in `index.html` (`#videoModal`); styles in `src/style.css` (`.video-modal`); logic in `src/main.js`. Iframe is injected on open (lazy) and removed on close to stop playback. Manual open via `window.openVideoModal()`.

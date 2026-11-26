# AgentClinic — Tech Stack

## Summary

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Language       | TypeScript (strict), server-side         |
| Runtime        | Node.js (current LTS)                    |
| Web framework  | **Hono** with `@hono/node-server`        |
| Views          | Hono JSX, server-side rendered HTML      |
| Styling        | Plain modern CSS (custom properties, grid/flex), one stylesheet |
| Database       | SQLite via `better-sqlite3`              |
| Testing        | Vitest (unit + route tests via `app.request()`) |
| Dev loop       | `tsx watch` for local development        |
| Package manager| npm                                      |

## Why Hono

We want server-side TypeScript with a popular, reliable framework (Mary) that stays small enough to explain in a demo. Hono is:

- **TypeScript-first** — types for routes, params, and context out of the box.
- **Lightweight and fast** — tiny API surface, few dependencies.
- **Server-rendered via JSX** — components without a client-side framework or build pipeline; pages work in any modern browser (Steve).
- **Easy to test** — `app.request()` exercises routes in-process with Vitest, no server needed.
- **Portable** — runs on Node today; can move to other runtimes later if needed.

Alternatives considered: Next.js (popular but heavier than we need), Express + EJS (ubiquitous but less TypeScript-native), Fastify (great, but API-oriented and needs a separate view layer).

## Why SQLite

- Zero-config, file-based; nothing to install or run alongside the app.
- `better-sqlite3` is synchronous, fast, and simple to reason about.
- Plain SQL with small, hand-written migrations in `src/db/`.
- Tests use an in-memory database (`:memory:`) for isolation and speed.

## Conventions

- `src/` holds all application code; `src/index.ts` starts the server.
- `src/app.ts` exports the configured Hono application without starting the server, so route tests can use `app.request()`.
- Routes in `src/routes/`, JSX views/components in `src/views/`, data access in `src/db/`.
- Static assets (CSS, images) served from `public/`.
- `strict` TypeScript; no `any` without a comment explaining why.
- Tests live next to code as `*.test.ts`.
- Scripts: `npm run dev`, `npm run build`, `npm start`, `npm test`.

## Responsive design contract

- Build every UI feature with a mobile-first, fluid layout using the shared layout and plain CSS. Use content-driven media queries only when the content needs a different arrangement.
- Support viewports from 320 CSS pixels upward, including phones, tablets, desktops, and landscape orientation. Keep content readable and controls reachable without page-level horizontal scrolling or clipping. Place inherently wide tables or similar content in a bounded scroll region when needed.
- Include `width=device-width, initial-scale=1` viewport metadata in the shared document head and allow user zoom. Support text enlargement to 200% without losing content or functionality.
- Let grid/flex items shrink and long text wrap. Constrain future media to their container. Keep comfortable fluid spacing and readable line lengths at large widths.
- Provide touch targets at least 44 by 44 CSS pixels for standalone controls and retain visible keyboard focus.
- Validate each UI feature in a real browser at widths 320, 375, 768, 1280, and 1920 CSS pixels, plus landscape and 200% text enlargement. Check intermediate widths when content changes arrangement. Verify no overlaps, clipped content, or page overflow, and preserve operation without client JavaScript.
- Vitest verifies response structure and zoom-friendly viewport metadata; browser checks verify actual layout. Record the viewport sizes, browser, and results in each feature's validation document.

## Browser support

Current versions of evergreen browsers (Chrome, Edge, Firefox, Safari). No IE, no polyfills. Pages should work without client-side JavaScript; small progressive enhancements are allowed.

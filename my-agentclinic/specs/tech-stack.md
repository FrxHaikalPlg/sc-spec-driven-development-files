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

## Browser support

Current versions of evergreen browsers (Chrome, Edge, Firefox, Safari). No IE, no polyfills. Pages should work without client-side JavaScript; small progressive enhancements are allowed.

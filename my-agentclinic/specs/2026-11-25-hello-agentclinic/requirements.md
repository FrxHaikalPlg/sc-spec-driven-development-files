# Requirements: Hello, AgentClinic

## Context

This feature implements phase 1 of [the roadmap](../roadmap.md): a tiny, demoable first page. Follow [the mission](../mission.md) and [the tech stack](../tech-stack.md): simple server-rendered TypeScript, minimal dependencies, and readable steps suitable for teaching and live demos.

The starting project has a TypeScript configuration and `npm run build`, but `src/index.ts` only logs a message. It has no HTTP server, Hono dependencies, or development script.

## Scope

- Add Hono and `@hono/node-server` to serve the application on Node.js.
- Add `tsx` as a development dependency and make `npm run dev` start the server in watch mode.
- Serve `GET /` with HTTP 200 and an HTML content type.
- Return a basic HTML document with a doctype, English document language, character encoding, document title, and a body containing one heading: `Welcome to AgentClinic`.
- Use Hono JSX for server-rendered HTML, following the stack conventions.
- Keep `npm run build` working with strict TypeScript.
- Render the welcome page through a shared `MainLayout` composed of separate `Header`, `Main`, and `Footer` subcomponents. Pass page content as children to the main region.
- Serve one stylesheet from `public/styles.css` at `/styles.css` using imported Hono Node static middleware, and link it from the shared layout's document head.
- Use simple responsive typography, colors, spacing, and a full-height header/main/footer structure, without client-side JavaScript.

## Decisions

Confirmed with the user on 2026-11-25:

- Cover phase 1 only.
- Show only the welcome heading in the visible page content. No subtitle or other marketing copy.
- Require a successful TypeScript build, HTTP 200 and welcome text at `/`, and a browser check using `npm run dev` before the implementation can merge.

Implementation defaults:

- Keep `src/index.ts` as the server entry point; put the home route in `src/routes/` and its JSX document in `src/views/`.
- Use port 3000 for the local demo and document the URL `http://localhost:3000`.
- Use a small JSX-compatible TypeScript configuration adjustment as needed; retain strict checking and the existing build command.
- Use plain browser rendering for this slice and keep the page usable without client-side JavaScript.

Scope update requested by the user on 2026-11-26:

- Extend the original phase 1 implementation with the shared layout, its three subcomponents, and a linked stylesheet.
- The original heading-only visible content restriction is superseded by the header and footer. Keep exactly one `Welcome to AgentClinic` page heading inside the main region, with a home link in the header and simple clinic identification in the footer.
- Keep all other roadmap features outside this change.

## Out of scope

Vitest and automated route tests belong to phase 2. Additional navigation and hero copy belong to later phases. Database setup, agents, ailments, therapies, appointments, dashboards, and production-start packaging are also excluded.

## Deliverable boundary

This branch initially records the feature specification. The tasks in `plan.md` describe subsequent implementation; writing this spec does not establish that implementation or validation has passed.

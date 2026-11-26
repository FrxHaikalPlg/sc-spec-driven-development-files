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
- Use Vitest to automate the HTTP and rendered-markup checks through Hono's `app.request()` without opening a network port.
- Provide `npm test` for strict application/test type checking and a single test run, and `npm run test:watch` for development. Keep test code out of build output.

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

Additional scope update requested by the user on 2026-11-26:

- Include the roadmap's Vitest test harness now to automate validation of the implemented page and stylesheet.
- Test the existing public interfaces `GET /` and the linked `/styles.css` response, including document metadata, semantic layout, the single welcome heading, and absence of client scripts.
- Export the configured Hono application from `src/app.ts` and keep the server listener in `src/index.ts` so importing the application in tests has no server startup side effect.
- Retain browser checks for actual visual styling, responsive behavior, refresh, and JavaScript-disabled rendering.

## Responsive acceptance criteria

The [product responsive design contract](../tech-stack.md#responsive-design-contract) applies to this feature and all future UI features.

- At 320, 375, 768, 1280, and 1920 CSS-pixel widths, the header, main, and footer remain in document order, with exactly one readable welcome heading and no horizontal page scrolling, clipping, or overlap.
- Keep the header home link usable by touch (at least 44 by 44 CSS pixels) and keyboard, with a visible focus indicator.
- Preserve the viewport metadata, allow user zoom, and support text enlargement to 200%. Long content must wrap inside the layout rather than force the page wider.
- Check landscape orientation and resizing between representative widths. The footer stays below content when text wraps and reaches the viewport bottom when content is short.
- Preserve the title, stylesheet loading, and welcome content with JavaScript disabled. Record actual browser checks in `validation.md`; Vitest markup checks alone do not prove responsiveness.

## Out of scope

Additional navigation and hero copy belong to later phases. Database setup, agents, ailments, therapies, appointments, dashboards, and production-start packaging are also excluded.

## Deliverable boundary

This branch initially records the feature specification. The tasks in `plan.md` describe subsequent implementation; writing this spec does not establish that implementation or validation has passed.

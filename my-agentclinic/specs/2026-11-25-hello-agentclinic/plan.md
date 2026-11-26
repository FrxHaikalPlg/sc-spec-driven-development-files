# Plan: Hello, AgentClinic

Complete these numbered task groups in order. The original phase 1 scope is extended by the requested shared layout, stylesheet, Vitest validation, and responsive design on 2026-11-26, as recorded in [requirements.md](requirements.md).

## 1. Prepare the server and development loop

- [x] Add `hono` and `@hono/node-server` as runtime dependencies and `tsx` as a development dependency using npm; update the lockfile.
- [x] Add `npm run dev` using `tsx watch src/index.ts`.
- [x] Configure TypeScript for Hono JSX, including `.tsx` files in the build while preserving strict checking and `npm run build`.

## 2. Serve the welcome page

- [x] Replace the placeholder entry point with a Hono application served by the Node adapter on port 3000.
- [x] Define the `GET /` route in `src/routes/` and a minimal HTML document in `src/views/` using Hono JSX.
- [x] Return HTTP 200, an HTML content type, and a complete document with one page heading: `Welcome to AgentClinic`.
- [x] Keep this slice free of persistence and client-side JavaScript.

## 3. Document and verify the demo

- [x] Add concise README instructions for installing dependencies, starting development, opening `http://localhost:3000`, building, and stopping the server.
- [x] Run the build and the HTTP checks in [validation.md](validation.md).
- [x] Open the development URL in a browser and verify the welcome heading renders.
- [x] Record actual verification results and resolve failures before treating the implementation as ready to merge.

## 4. Add a shared layout and stylesheet

- [x] Add a reusable `MainLayout` JSX component in `src/views/layout.tsx`, with a document title, viewport metadata, and page content passed as children.
- [x] Compose the layout from three separate `Header`, `Main`, and `Footer` subcomponents in `src/views/components/`, using semantic HTML elements.
- [x] Render the welcome page through `MainLayout`, retaining one welcome heading inside the main region.
- [x] Create `public/styles.css` with simple responsive typography, colors, spacing, and a header/main/footer page structure.
- [x] Import Hono's Node static middleware, serve the stylesheet at `/styles.css`, and link it in the layout's document head.
- [x] Run the strict TypeScript build and verify HTML structure plus a successful CSS response with a CSS content type.
- [x] Verify that the stylesheet loads and the layout renders in a browser at desktop and mobile widths, including refresh and JavaScript disabled; record the results in `validation.md`.

## 5. Automate validation with Vitest

- [x] Install Vitest as a development dependency using npm and update the lockfile.
- [x] Extract the configured Hono application to `src/app.ts`; keep Node server startup in `src/index.ts` so tests do not open a port.
- [x] Add `npm test` for strict application/test type checking and a single Vitest run, plus `npm run test:watch` for reruns while editing.
- [x] Configure Vitest to collect only colocated tests in `src/` using the Node environment. Exclude tests from production build output while retaining their strict type check.
- [x] Test the public HTTP interface through `app.request()`: HTML status/content type, document metadata, header/main/footer and welcome heading, script-free content, and successful retrieval of the linked stylesheet as CSS.
- [x] Document test commands and the remaining browser checks; update requirements and validation evidence to include the requested test harness.
- [x] Verify a clean install from the lockfile, all automated tests, and the TypeScript build.

## 6. Require responsive design throughout the product

- [x] Make responsive design a completion requirement in mission, tech stack, roadmap, and every existing feature specification.
- [x] Specify viewport coverage, text enlargement, touch targets, long-text reflow, and browser acceptance criteria for the welcome layout.
- [x] Update shared CSS for safe grid shrinking, wrapping, fluid spacing, and a 44-pixel header link target.
- [x] Strengthen the route test to verify usable viewport metadata and unrestricted zoom.
- [x] Run Vitest, the strict TypeScript build, and browser checks at phone, tablet, desktop, landscape, and enlarged-text sizes; record actual results in `validation.md`.

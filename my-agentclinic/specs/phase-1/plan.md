# Plan: Hello, AgentClinic

Complete these numbered task groups in order. Keep the work limited to roadmap phase 1 and the decisions in [requirements.md](requirements.md).

## 1. Prepare the server and development loop

- [ ] Add `hono` and `@hono/node-server` as runtime dependencies and `tsx` as a development dependency using npm; update the lockfile.
- [ ] Add `npm run dev` using `tsx watch src/index.ts`.
- [ ] Configure TypeScript for Hono JSX, including `.tsx` files in the build while preserving strict checking and `npm run build`.

## 2. Serve the welcome page

- [ ] Replace the placeholder entry point with a Hono application served by the Node adapter on port 3000.
- [ ] Define the `GET /` route in `src/routes/` and a minimal HTML document in `src/views/` using Hono JSX.
- [ ] Return HTTP 200, an HTML content type, and a complete document with the single visible heading `Welcome to AgentClinic`.
- [ ] Keep this slice free of layout components, styling, persistence, and client-side JavaScript.

## 3. Document and verify the demo

- [ ] Add concise README instructions for installing dependencies, starting development, opening `http://localhost:3000`, building, and stopping the server.
- [ ] Run the build and the HTTP checks in [validation.md](validation.md).
- [ ] Open the development URL in a browser and verify the welcome heading renders.
- [ ] Record actual verification results and resolve failures before treating the implementation as ready to merge.

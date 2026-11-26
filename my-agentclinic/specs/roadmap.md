 # AgentClinic — Roadmap

High-level implementation order. Each phase is a **tiny, demoable slice**: build it, see it working in the browser, commit, move on. Phases are UI-first — we show something on screen early and add data and behavior underneath as we go.

Each phase gets its own short spec before it is built.

Responsive design applies to every UI phase from the first page onward, following the [product mission](mission.md) and [responsive design contract](tech-stack.md#responsive-design-contract). Each feature must include mobile, tablet, desktop, landscape, and text-enlargement acceptance checks. Phase 17 is a final regression and accessibility audit; it does not defer responsive implementation or validation for earlier phases.

## Foundation

1. **Hello, AgentClinic** — Install Hono, serve a single "Welcome to AgentClinic" page at `/` with `npm run dev`.
2. **Test harness** — Add Vitest and one route test confirming `/` returns 200 and the welcome text.
3. **Layout & style** — Shared JSX layout (header, nav, footer) and one stylesheet with brand colors and typography.
4. **Home page copy** — Playful hero section explaining what AgentClinic is and who it's for.

## Agents

5. **SQLite setup** — Add `better-sqlite3`, a database module, a first migration, and an in-memory DB for tests.
6. **Agents list** — `agents` table with seed data; `/agents` page lists them.
7. **Agent detail** — `/agents/:id` shows one agent's profile.

## Ailments

8. **Ailments catalog** — `ailments` table with seed data (e.g. "Context Window Overflow", "Prompt Fatigue"); `/ailments` page.
9. **Agent ailments** — Link agents to ailments; show them on the agent detail page.

## Therapies

10. **Therapies catalog** — `therapies` table with seed data; `/therapies` page.
11. **Therapy for ailment** — Map therapies to ailments; show recommended therapies on each ailment.

## Appointments

12. **Booking form** — Form for an agent to request an appointment for a therapy (date/time); saves to an `appointments` table.
13. **Validation & feedback** — Server-side validation, friendly error messages, and a confirmation page.
14. **My appointments** — List an agent's upcoming appointments on their detail page.

## Dashboard

15. **Staff dashboard** — `/dashboard` with today's appointments and counts of agents, ailments, and therapies.
16. **Agent dashboard view** — Per-agent summary: ailments, recommended therapies, upcoming appointments.

## Polish

17. **Responsive & accessibility audit** — Recheck responsive layouts, semantic HTML, focus states, and color contrast across all shipped features.
18. **Empty & error states** — Friendly 404 page and empty-list messages throughout.
19. **Production build** — `npm run build` + `npm start`, documented in the README.

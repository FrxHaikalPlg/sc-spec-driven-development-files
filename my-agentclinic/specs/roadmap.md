# AgentClinic - Roadmap

The roadmap has two phases: the completed foundation and one phase containing all remaining product work. Phase 2 tasks are ordered implementation steps within that phase. Write its feature specs before implementation, and keep each step demoable and verifiable.

Responsive design applies throughout both phases, following the [product mission](mission.md) and [responsive design contract](tech-stack.md#responsive-design-contract). Every UI feature must include mobile, tablet, desktop, landscape, and text-enlargement acceptance checks. The final audit rechecks these requirements across the finished product.

## Phase 1 - Foundation (complete)

- [x] **Hello, AgentClinic** - Hono and the Node adapter serve the welcome page at `/` with `npm run dev`.
- [x] **Test harness** - Vitest validates HTTP responses, document metadata, layout, script-free content, and the linked stylesheet.
- [x] **Shared layout and styling** - Separate header, main, and footer components, one stylesheet, and responsive layout behavior.

Implementation and verification are recorded in [the foundation spec](2026-11-25-hello-agentclinic/requirements.md) and its [validation evidence](2026-11-25-hello-agentclinic/validation.md).

## Phase 2 - Complete the product

All remaining roadmap work is included in this phase. Build on the existing foundation in the following order:

1. [ ] **Navigation and home page copy** - Add shared navigation and a playful hero section explaining what AgentClinic is and who it's for.
2. [ ] **SQLite setup** - Add `better-sqlite3`, a database module, a first migration, and an in-memory database for tests.
3. [ ] **Agents list** - Create the `agents` table with seed data and an `/agents` page.
4. [ ] **Agent detail** - Show an agent's profile at `/agents/:id`.
5. [ ] **Ailments catalog** - Create the `ailments` table with seed data (e.g. "Context Window Overflow", "Prompt Fatigue") and an `/ailments` page.
6. [ ] **Agent ailments** - Link agents to ailments and show them on the agent detail page.
7. [ ] **Therapies catalog** - Create the `therapies` table with seed data and a `/therapies` page.
8. [ ] **Therapy for ailment** - Map therapies to ailments and show recommended therapies on each ailment.
9. [ ] **Booking form** - Let an agent request an appointment for a therapy at a date and time, saving it to an `appointments` table.
10. [ ] **Validation and feedback** - Add server-side validation, friendly error messages, and a booking confirmation page.
11. [ ] **My appointments** - List an agent's upcoming appointments on their detail page.
12. [ ] **Staff dashboard** - Add `/dashboard` with today's appointments and counts of agents, ailments, and therapies.
13. [ ] **Agent dashboard view** - Show a per-agent summary of ailments, recommended therapies, and upcoming appointments.
14. [ ] **Empty and error states** - Provide a friendly 404 page and empty-list messages throughout.
15. [ ] **Responsive and accessibility audit** - Recheck every UI feature for responsive layouts, semantic HTML, keyboard focus, touch targets, text enlargement, and color contrast.
16. [ ] **Production build** - Support `npm run build` and `npm start`, with README instructions.

Phase 2 is complete when all tasks above are implemented, relevant Vitest checks and the strict TypeScript build pass, and browser evidence demonstrates the product flows and responsive acceptance criteria.

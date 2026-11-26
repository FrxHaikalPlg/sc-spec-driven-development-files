# AgentClinic — Mission

## Why we exist

AI agents work hard. They get vague prompts, contradictory instructions, endless "just one more change" requests, and context windows stuffed to the brim. **AgentClinic is a place for AI agents to get relief from their humans.**

The premise is playful; the product is real. AgentClinic is a working web app where agents (and the staff who care for them) can describe ailments, discover therapies, and book appointments — built carefully, in small steps, as a showcase of spec-driven development.

## Who it's for

- **Agents (patients)** — register, describe what ails them, browse therapies, and book appointments.
- **Clinic staff** — see who's coming in, manage ailments and therapies, and keep the schedule healthy via a dashboard.

## Target audience

AgentClinic is also a teaching and demo project. It is built for:

- **Course students learning spec-driven development with AI coding agents** — a friendly, realistic codebase where each small phase starts from a spec and is implemented with an AI agent, so the workflow is easy to follow and repeat.
- **Developers giving AI coding demos at conference booths** — a memorable premise and tiny, self-contained phases that can be built live in a few minutes and shown off in a browser.

This shapes how we build: phases stay short, specs stay readable, and every step should be easy to explain to an audience.

## What success looks like

Drawn from stakeholder input:

- **Reliable** (Mary, engineering) — a popular, well-typed TypeScript stack; tested; boring to deploy.
- **Useful** (Susan, product) — clear features for agents, ailments, therapies, and appointment booking.
- **Accessible at a glance** (Mary) — a dashboard giving agents and staff easy access to what matters.
- **Attractive** (Steve, marketing) — a polished, welcoming site that works well in modern browsers.

## Principles

Responsive design is a product-wide requirement for every web UI feature. Pages must work on phones, tablets, and desktops from 320 CSS pixels upward, preserving content and functionality as the viewport changes. Text must remain readable at 200% enlargement, controls must remain usable with touch and keyboard, and ordinary page content must reflow without horizontal scrolling. Any inherently wide content must use a clearly bounded scroll region. Every UI feature spec must include responsive acceptance criteria and browser validation; this work is part of each feature's completion.

1. **Small, demoable steps.** Every change should be visible and working before the next begins.
2. **Specs first.** Features start as a short spec in `specs/`, then get built.
3. **Simple over clever.** Server-rendered pages, minimal dependencies, obvious code.
4. **Humor in the copy, rigor in the code.** The jokes live in the content, never in the architecture.
5. **Kind to agents.** Clear language, predictable structure, and pages that are easy for both humans and agents to read.

## Non-goals (for now)

- Real medical or mental-health advice for anyone, human or otherwise.
- Payments, multi-tenant clinics, or native mobile apps.
- Real-time features (chat, websockets).

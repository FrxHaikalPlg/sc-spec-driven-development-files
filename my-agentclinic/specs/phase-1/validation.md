# Validation: Hello, AgentClinic

These checks apply to the future implementation. They have not been executed as part of creating this spec.

## 1. Installation and TypeScript build

- From the application directory, run `npm ci` with the implementation's updated lockfile.
- Run `npm run build`.
- Pass: installation and compilation exit successfully, and strict TypeScript remains enabled.

## 2. Development server and HTTP response

- Run `npm run dev` and leave it running.
- In another terminal, request `http://localhost:3000/`. For example, in PowerShell:

  ```powershell
  $response = Invoke-WebRequest -Uri http://localhost:3000/ -UseBasicParsing
  $response.StatusCode
  $response.Headers['Content-Type']
  $response.Content
  ```

- Pass: status is 200; content type includes `text/html`; the body contains a complete HTML document and a heading with exactly `Welcome to AgentClinic`.
- Pass: the server starts through the documented command without requiring a separate build.

## 3. Browser demo

- With `npm run dev` running, open `http://localhost:3000/` in a current evergreen browser.
- Pass: the page renders a readable `Welcome to AgentClinic` heading and has a document title. There is no additional visible copy, navigation, or feature UI.
- Refresh the page and confirm the same result. Confirm the page renders with client-side JavaScript disabled.
- Stop the server with Ctrl+C when finished.

## 4. Merge readiness

- All checks above pass, with the build result, HTTP status/content-type/body findings, and browser used recorded in the implementation review or this document.
- README instructions match the working development command and local URL.
- The diff stays within phase 1; no test harness, styling phase, database work, or production packaging is introduced.
- No generated build output or `node_modules` is included in the change.
- Any unavailable check remains explicitly pending; implementation is not merge-ready until all required evidence is available.

## Evidence status

Specification created on 2026-11-25. Implementation, build, HTTP, and browser checks are pending.

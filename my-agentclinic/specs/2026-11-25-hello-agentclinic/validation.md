# Validation: Hello, AgentClinic

These checks apply to the phase 1 implementation and its requested shared layout and stylesheet extension. Actual results are recorded below.

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
- Pass: the document links `/styles.css` and contains one header, main region, and footer in that order, with the welcome heading inside main.
- Request `http://localhost:3000/styles.css`. Pass: status is 200, content type includes `text/css`, and the response contains the stylesheet rules.

## 3. Browser demo

- With `npm run dev` running, open `http://localhost:3000/` in a current evergreen browser.
- Pass: the page renders a readable `Welcome to AgentClinic` heading inside main and has a document title, a header home link, and a footer identifying the clinic.
- Confirm the linked stylesheet loads and applies typography, colors, and a header/main/footer layout. Check desktop and mobile widths for readable content without horizontal overflow.
- Refresh the page and confirm the same result. Confirm the page renders with client-side JavaScript disabled.
- Stop the server with Ctrl+C when finished.

## 4. Merge readiness

- All checks above pass, with the build result, HTTP status/content-type/body findings, and browser used recorded in the implementation review or this document.
- README instructions match the working development command and local URL.
- The diff stays within phase 1 plus the requested shared layout and stylesheet; no test harness, database work, or production packaging is introduced.
- No generated build output or `node_modules` is included in the change.
- Any unavailable check remains explicitly pending; implementation is not merge-ready until all required evidence is available.

## Original phase 1 evidence

Verified on 2026-11-26 on Windows with Node.js v24.18.0 and npm 11.16.0:

- **Installation: PASS.** `npm.cmd ci` exited successfully using the updated lockfile; npm reported zero vulnerabilities.
- **Build: PASS.** `npm.cmd run build` exited successfully. TypeScript `strict` remains enabled, and both `.ts` and `.tsx` sources compile to the ignored `dist/` directory.
- **Development server: PASS.** `npm.cmd run dev` started `tsx watch src/index.ts` and printed `http://localhost:3000` without a separate build.
- **HTTP: PASS.** `Invoke-WebRequest` returned status 200 and `text/html; charset=UTF-8`. The response was a complete document with `<!DOCTYPE html>`, `lang="en"`, UTF-8 metadata, title `AgentClinic`, and exactly `<body><h1>Welcome to AgentClinic</h1></body>`.
- **Browser: PASS.** Headless Microsoft Edge 158.0.4370.33 rendered the welcome heading. Browser DOM checks confirmed the title, exactly one heading, no other visible body text, and no script elements. The same assertions passed after refresh and after disabling JavaScript and refreshing. A browser screenshot was visually inspected and showed only the readable welcome heading.
- **Shutdown: PASS.** The development server was stopped with Ctrl+C after verification, and the temporary Edge session was closed.
- **Scope: PASS.** README commands match the verified workflow; no test harness, styling, persistence, client-side JavaScript, or production packaging was added. Build output, browser verification helpers, and dependencies remain ignored.

Environment notes: PowerShell execution policy blocks `npm.ps1`, so verification used the equivalent `npm.cmd` launcher. Dependency installation and the development server required execution outside the sandbox: npm registry access stalled inside it, and tsx could not read the Windows user profile (`uv_os_get_passwd`). The development command worked without application changes once run outside the sandbox.

All required phase 1 checks passed.

## Layout and stylesheet evidence

Verified on 2026-11-26 using the same Node.js and npm versions:

- **Build: PASS.** `npm.cmd run build` exited successfully with strict TypeScript enabled. No dependency changes were needed for this extension.
- **HTML: PASS.** `GET /` returned HTTP 200 with a complete document, a linked `/styles.css`, viewport metadata, and semantic header/main/footer regions in order. Exactly one `Welcome to AgentClinic` heading renders inside main.
- **CSS: PASS.** `GET /styles.css` returned HTTP 200 with `text/css; charset=utf-8` and the expected layout rules, served from `public/styles.css` through the imported Node static middleware.
- **Browser: PASS.** Headless Microsoft Edge 158.0.4370.33 loaded all 11 CSS rules. Computed styles confirmed the body grid and background color. DOM checks confirmed the title, home link, region order, welcome heading, and zero script elements on initial load, refresh, and refresh with JavaScript disabled.
- **Responsive layout: PASS.** At 1280 x 800 and 375 x 812, content had no horizontal overflow and the footer ended at the viewport bottom. Desktop and mobile screenshots were visually inspected; the heading remains readable and wraps on mobile.
- **Scope: PASS.** Layout and subcomponents live in `src/views/`; the welcome page imports and uses `MainLayout`. One stylesheet lives in `public/`. No client-side JavaScript, bundler, test harness, or additional dependencies were introduced.
- **Environment: PASS.** An existing development server on port 3000 was already serving the updated source and was reused for HTTP and browser verification. The redundant launch was stopped after reporting the occupied port; the existing server was left running. The temporary Edge session was closed.

All required layout and stylesheet checks passed.

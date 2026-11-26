# AgentClinic

## Run locally

Install Node.js (current LTS), then install dependencies:

```sh
npm ci
```

Start the development server in watch mode:

```sh
npm run dev
```

Open <http://localhost:3000> to see `Welcome to AgentClinic`. Stop the server
with Ctrl+C in the terminal where it is running.

Compile the application with strict TypeScript checking:

```sh
npm run build
```

Compiled files are written to `dist/`.

If PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm` in these commands.

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.

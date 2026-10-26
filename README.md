# Citco-Construction.github.io

[![CI](https://github.com/Citco-Construction/Citco-Construction.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Citco-Construction/Citco-Construction.github.io/actions/workflows/ci.yml)

Public marketing site for Citco Construction.

Find us on the web at [https://citcoconstruction.com](https://citcoconstruction.com).

This is a static site: a Next.js app built with `output: "export"`, no server runtime, no user accounts or authentication (see [SECURITY.md](./SECURITY.md)).

## Requirements

- Node.js `24` (see `.nvmrc`)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build & preview the static export

```bash
npm run build
npm run start
```

`npm run build` produces the static export in `out/`. `npm run start` serves that export locally with `npx serve`.

## Testing & checks

| Command | What it does |
| --- | --- |
| `npm run lint` | Biome lint/format check |
| `npm run lint:fix` | Biome lint/format, auto-fixing |
| `npm run lint:security` | ESLint security rules (from `tools/eslint`) |
| `npm test` | Jest unit tests |
| `npm run test:e2e` | Playwright end-to-end tests |
| `npm run compile` | TypeScript type-check (`tsc --noEmit`) |
| `npm run check:unicode` | Flags smart-quote/typography unicode characters in source |
| `npm run dupes` | Duplicate-code check (jscpd) |
| `npm run verify:dev` | Runs all of the above, in the order CI expects |

Run `npm run verify:dev` before opening a PR — it mirrors the checks in `.github/workflows/ci.yml`.

## Project structure

```
src/
  app/      # Next.js App Router routes and layouts
  content/  # Site content (e.g. blog posts, copy)
  lib/      # Shared utilities
public/     # Static assets (images, icons, robots.txt)
scripts/    # Maintenance scripts (e.g. check-unicode.ts)
tools/      # Standalone tooling (e.g. the security ESLint config)
tests/      # Test setup/helpers
```

## Security

See [SECURITY.md](./SECURITY.md) for how to report a vulnerability.

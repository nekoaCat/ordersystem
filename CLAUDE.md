# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 learning project ("OrderSystem") containing standalone demo components that each illustrate a specific Vue 3 concept (reactivity, directives, events, component registration, custom directives, watchers). Not an actual order system. Chinese-language codebase.

## Commands

```bash
npm run dev          # Dev server with HMR (port 5173)
npm run build        # Production build
npm run preview      # Preview production build (port 4173)
npm run test:unit    # Vitest unit tests
npm run test:e2e     # Playwright E2E tests
npm run lint         # Run all linters (oxlint + eslint) sequentially with auto-fix
npm run format       # Prettier formatting on src/
```

## Code Style

- No semicolons, single quotes, 100 char print width (Prettier)
- 2-space indent, LF line endings (EditorConfig)
- Two linters run in sequence: Oxlint (fast Rust-based) then ESLint
- Path alias: `@` maps to `./src` (defined in vite.config.js and jsconfig.json)

## Architecture

- **Framework:** Vue 3.5, Composition API with `<script setup>`, JavaScript (no TypeScript)
- **Build:** Vite 7, base path `/ordersystem/` for GitHub Pages
- **State:** Pinia (store at `src/stores/counter.js`, currently unused)
- **Routing:** Vue Router 5 (routes array is empty; app renders App.vue directly)
- **UI:** Element Plus (available as dependency)
- **Entry:** `index.html` -> `src/main.js` -> `src/App.vue`

Components are all in `src/components/` — each is a self-contained demo for one Vue 3 concept. There are no shared composables, services, or API layers. `GlobalButton` is the only globally registered component (in main.js).

## Testing Notes

Both test files (`src/__tests__/App.spec.js` and `e2e/vue.spec.js`) are unmodified scaffolds from `create-vue` and will fail against the current app content.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` on push to `master`. Builds with Node 20.

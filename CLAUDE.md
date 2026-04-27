# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run typecheck    # Type-check without emitting
npm run lint         # Biome check (lint + format check)
npm run format       # Biome format with auto-fix
npm run test         # Run all tests (Vitest)
npx vitest run <pattern>   # Run a single test file or pattern
```

## Architecture

This is a Next.js 16 (App Router) real-estate sales analytics dashboard ("jveiga"). The UI is in Brazilian Portuguese.

### Route structure

```
src/app/
  layout.tsx              # Root: NuqsAdapter + ThemeProvider + fonts
  (main)/
    layout.tsx            # Shell: AppSidebar + Header + SidebarInset
    (sales)/page.tsx      # / — Sales dashboard (default route)
    abc-curve/page.tsx
    analytics/funnel/page.tsx
  auth/                   # Auth routes (outside the main shell)
```

`(main)` is a route group that wraps all authenticated dashboard pages with the sidebar/header shell. `(sales)` is a pathless group for the root route.

### Key patterns

**Page layout** — all dashboard pages use the `Page` compound component from `src/components/page.tsx`:
```tsx
<Page>
  <Page.Header>
    <Page.Tagline>Section</Page.Tagline>
    <Page.Title>Title</Page.Title>
    <Page.Description>Description</Page.Description>
  </Page.Header>
  <Page.Content>...</Page.Content>
</Page>
```

**URL state** — date range and filters use `nuqs` via `useDateRange` (`src/hooks/use-date-range.ts`). URL params: `startDate`, `endDate`, `datePreset` (week | month | quarter | custom). Always use `nuqs` for shareable filter state, not `useState`.

**Dates** — import from `@/lib/dayjs` (not directly from `dayjs`). It's pre-configured with pt-BR locale, timezone `America/Sao_Paulo`, and plugins (utc, timezone, relativeTime, duration, etc.). Use the exported helpers (`formatDate`, `formatRange`, etc.) when possible.

**UI components** — shadcn/ui with `radix-ui`, style `radix-sera`, base color `mist`. Add new components with `npx shadcn add <component>`. Primitives live in `src/components/ui/`; feature components go directly in `src/components/`.

**Styling** — Tailwind CSS v4. Class sorting is enforced by Biome (`useSortedClasses`). Use `cn()` from `@/lib/utils` for conditional classes.

**Types** — shared types in `src/types/index.ts`. `PageProps` and `LayoutProps` are pre-defined for Next.js App Router page/layout signatures (note: `params` and `searchParams` are `Promise<…>` in Next.js 16).

### Path alias

`@` maps to `src/`. Use it for all internal imports.

### Testing

Vitest + Testing Library, jsdom environment. Setup file at `vitest.setup.ts` polyfills `matchMedia` and Radix Pointer Capture APIs. Tests use `globals: true` (no need to import `describe`/`it`/`expect`).

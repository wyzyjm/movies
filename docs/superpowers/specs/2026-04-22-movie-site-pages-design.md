# Movie Site Pages Design

## Background

This project is a React + TypeScript + Vite movie site. The codebase already has basic router wiring, Tailwind, and `antd` installed. The next iteration adds a more complete site structure while keeping the implementation modular and reusable.

## Goals

- Add a shared main-site layout for the home page, category pages, and ranking page.
- Add six second-level navigation destinations:
  - home
  - drama
  - animation
  - science fiction
  - action
  - suspense
  - movie ranking
- Add separate login and register pages.
- Use `antd` components for as much of the UI as practical.
- Keep the implementation data-driven so future content can be filled in without rewriting layout or routes.

## Confirmed Product Decisions

- The home page, category pages, and ranking page share one main-site layout.
- The shared layout order is:
  - Header
  - Banner
  - Navbar
  - Breadcrumb
  - Page content
  - Footer
- The banner and navigation bar both belong inside the header, with the navigation bar below the banner.
- The five category pages share one reusable category page template.
- The ranking page is a dedicated page and must use an `antd` table with zebra-striping.
- Login and register use a simpler standalone auth layout.
- Category-page content is intentionally placeholder content for this iteration.
- UI display labels should use the Chinese names confirmed during design discussion, and those labels should come from a shared configuration module.

## Reuse-First Plan

Before implementation, prefer the following reusable assets and extension points:

- Reuse the existing route entry:
  - `src/router/index.tsx`
  - `src/router/routes.tsx`
- Reuse the current top-level app shell:
  - `src/App.tsx`
- Reuse the existing page container idea in:
  - `src/pages/Home.tsx`
  - This file should evolve into a shared site layout page instead of staying a one-off page container.
- Reuse the configured `@` alias for internal imports.
- Reuse installed `antd` instead of building custom equivalents for layout, menu, cards, forms, breadcrumb, and table.

No additional routing library, UI framework, or deprecated API is needed.

## Information Architecture

### Public Main-Site Routes

- `/`
  - Home page
- `/category/drama`
  - Drama category page
- `/category/animation`
  - Animation category page
- `/category/scifi`
  - Science-fiction category page
- `/category/action`
  - Action category page
- `/category/suspense`
  - Suspense category page
- `/ranking`
  - Movie ranking page

### Auth Routes

- `/login`
  - Login page
- `/register`
  - Register page

## Proposed File Structure

The implementation should stay focused and explicit:

- `src/router/routes.tsx`
  - Declares the route tree for site pages and auth pages.
- `src/constants/site.tsx`
  - Centralizes navigation items, category metadata, breadcrumb labels, ranking mock data, and footer filing text.
- `src/pages/Home.tsx`
  - Shared site layout page hosting the header, breadcrumb, footer, and `Outlet`.
- `src/pages/site/HomePage.tsx`
  - Home page content area.
- `src/pages/site/CategoryPage.tsx`
  - Reusable category template page.
- `src/pages/site/RankingPage.tsx`
  - Dedicated ranking page with `antd` table.
- `src/pages/auth/LoginPage.tsx`
  - Login page.
- `src/pages/auth/RegisterPage.tsx`
  - Register page.
- `src/components/site/SiteHeader.tsx`
  - Composes banner and navbar.
- `src/components/site/SiteBanner.tsx`
  - Banner section in the header.
- `src/components/site/SiteNavbar.tsx`
  - Navigation bar below the banner.
- `src/components/site/SiteBreadcrumb.tsx`
  - Breadcrumb under the header, driven by route metadata.
- `src/components/site/SiteFooter.tsx`
  - Footer with filing text.
- `src/components/auth/AuthShell.tsx`
  - Shared auth page container.
- `src/index.css`
  - Minimal global styles for the page background, banner overlay, and ranking zebra stripes.

This structure keeps each file focused on one responsibility and avoids repeated menu, breadcrumb, and footer logic.

## Data Model

One site configuration module should drive navigation and labels.

### Navigation Metadata

Each item should include:

- `key`
- `label`
- `path`
- `type`

The navigation configuration should cover:

- home
- drama
- animation
- science fiction
- action
- suspense
- movie ranking
- login
- register

The `label` field stores the final UI text. The navbar, breadcrumb, and page-title logic should all reuse that same label source instead of duplicating strings.

The `type` field should distinguish whether an item belongs in the main-site navbar or auth entry area if the navbar later chooses to render auth links separately.

### Category Metadata

Each reusable category should include:

- `key`
- `slug`
- `title`
- `description`

This allows one page template to render all five category pages from route params without duplicating page files.

### Ranking Data

The ranking page should start with static mock rows, each including:

- `rank`
- `title`
- `genre`
- `region`
- `year`
- `score`

This data lives beside site constants so the page remains deterministic and easy to replace with API data later.

## UI Design

### Shared Main-Site Layout

Use `antd` `Layout` components as the structural base:

- `Layout`
- `Header`
- `Content`
- `Footer`

Inside `Header`:

- Top banner area with a cinematic background image and a dark overlay
- Site title and short supporting copy
- Navigation bar rendered below the banner using `antd` `Menu`

Below `Header`:

- `Breadcrumb`
- Main page content area wrapped in a consistent width container
- Footer with filing information

The navigation bar should stay visually fixed under the banner. If a fully sticky implementation creates unnecessary complexity during this iteration, keep it visually stable without adding fragile scroll logic.

### Home Page

The home page content should use `antd` components such as:

- `Row`
- `Col`
- `Card`
- `Typography`
- `Tag`

Recommended sections:

- Featured movies block
- Latest releases block
- Curated topics block

All content can use mock data for now, but the layout should already resemble a real movie portal rather than a blank scaffold.

### Category Template Page

The shared category page should use:

- `Card`
- `Typography`
- `Empty`

The page should display:

- Category title
- Short description
- Empty-state or placeholder card grid indicating content will be added later

The page title and description come entirely from category metadata.

### Ranking Page

Use `antd` `Table` for the movie ranking page.

Requirements:

- Zebra-striping on rows
- Columns for ranking, movie title, genre, region, year, and score
- The score can be visually emphasized using `Tag` or stronger typography
- The table should be responsive enough for normal desktop viewing

Zebra-striping should be implemented via `rowClassName` plus minimal global CSS, avoiding inline repetitive style logic.

### Login and Register Pages

Use a shared auth container built with:

- `Layout` or centered container
- `Card`
- `Form`
- `Input`
- `Input.Password`
- `Button`
- `Typography`

Page-specific fields:

- Login:
  - Username or email
  - Password
- Register:
  - Username
  - Email
  - Password
  - Confirm password

At this stage, form submission can remain placeholder-only. The focus is route availability and UI composition, not backend auth integration.

## Breadcrumb Strategy

Breadcrumbs should not be hand-written inside every page. Instead, they should be derived from the route and site metadata:

- Home page:
  - Home
- Category pages:
  - Home / category title
- Ranking page:
  - Home / movie ranking

Auth pages do not need the shared breadcrumb because they use the standalone auth layout.

## Routing Strategy

Use nested routes to preserve layout reuse.

Recommended route shape:

- Site layout route
  - `/`
  - `/category/:categoryKey`
  - `/ranking`
- Auth standalone routes
  - `/login`
  - `/register`

The category page should validate `categoryKey` against known category metadata. If an unknown key is entered, the implementation should fail gracefully by rendering an `antd` `Result` or a simple not-found message inside the content area.

## Styling Strategy

The project already has Tailwind available, but this feature should prioritize `antd` components and minimal custom CSS.

Custom CSS should be limited to:

- Banner background image treatment
- Layout spacing not conveniently covered by component props
- Ranking-table zebra stripes
- Small global page background helpers if needed

Avoid introducing a second heavy design system or large handcrafted CSS layers.

## Error Handling

Initial error handling is intentionally lightweight:

- Unknown category key:
  - Render a clear empty or not-found state
- Missing ranking data:
  - Render the empty table state using built-in `antd` behavior
- Auth submit actions:
  - Keep a placeholder submit flow and avoid fake success claims

No real network requests are part of this iteration.

## Accessibility

The implementation should preserve baseline accessibility by:

- Using `antd` semantic components where possible
- Keeping nav labels explicit
- Ensuring forms have labels
- Preserving sufficient color contrast in banner overlays and text

## Verification Plan

Implementation is considered complete only after fresh verification confirms:

- `pnpm build` passes
- Each route renders without runtime errors:
  - `/`
  - `/category/drama`
  - `/category/animation`
  - `/category/scifi`
  - `/category/action`
  - `/category/suspense`
  - `/ranking`
  - `/login`
  - `/register`
- The ranking page table renders with zebra-striping
- Navigation and breadcrumb labels are sourced from shared metadata rather than duplicated strings across multiple page files

## Scope Boundaries

This iteration includes:

- Route structure
- Shared layout
- Placeholder content sections
- Auth page shells
- Ranking table shell

This iteration does not include:

- Backend login or registration
- Real movie API integration
- Search, filtering, or pagination
- User session state
- Full responsive polish for every edge case

## Rationale

This design intentionally favors a reusable route-and-layout skeleton over hardcoding separate pages. It keeps the codebase small, avoids duplicate page scaffolding, matches the requested `antd`-first UI direction, and leaves a clean path for later integration of real movie content and auth logic.

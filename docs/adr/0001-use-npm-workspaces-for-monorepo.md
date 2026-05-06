# Architecture Decision Record

## Title: 0001. Use npm Workspaces for Monorepo Architecture

## Context
The repository currently contains a single Next.js application (the developer portfolio). The goal is to add a completely new, full-fledged agency website ("You Go Tech") within the same repository. We need a way to manage multiple distinct applications cleanly without cluttering the root directory or creating dependency conflicts.

## Decision
We will restructure the repository into a Monorepo using **npm workspaces**.
- The existing portfolio will be moved to `apps/portfolio`.
- The new agency website will be created in `apps/you-go-tech`.

## Consequences
- **Positive:** Decouples the projects, allows for future shared packages (e.g., `packages/ui` for shared components), and keeps the root directory clean.
- **Negative:** Requires a slight restructuring of the current files and updates to how development scripts (`npm run dev`) are executed.

# CLAUDE.md

We're building the app described in @SPEC.MD. Read that file for general architectural tasks or to double-check the exact database structure, tech stack or application architecture.

Keep your replies extremly concise and focus on conveying the key information. No unnecessary fluff, no long code snippets.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server at http://localhost:3000
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint
```

## Stack

- **Next.js 16** with App Router (TypeScript)
- **Tailwind CSS v4** for styling
- **better-auth** for authentication (requires `BETTER_AUTH_SECRET` env var)
- **Tiptap** rich text editor
- **Zod** for schema validation
- **Bun** as the package manager and runtime

## Environment

Copy `.env.example` to `.env.local` and fill in:

- `BETTER_AUTH_SECRET` — must be 32+ characters
- `DB_PATH` — path to SQLite database file (e.g. `data/app.db`)

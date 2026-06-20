# Psy-Reflect

Landing page for **Psy-Reflect** — cabinet de psihologie în Galați (terapie
clinică și evaluări psihologice). Swiss typographic style × Apple restraint,
Romanian copy.

Built with Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Bun.

## Dezvoltare

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
bun run build   # production build
bun start       # serve the production build
```

## Structură

```
app/
  layout.tsx          # fonts (Inter + IBM Plex Mono), metadata, <html lang="ro">
  page.tsx            # composes the sections + JSON-LD (Psychologist)
  globals.css         # design tokens (@theme) + base/component styles
  icon.svg            # favicon (reflection mark)
  lib/site.ts         # clinic details + section content (single source of truth)
  components/         # Hero, Services, Process, Contact, header/footer, primitives
.claude/
  style-guide.md      # design system: color, type, grid, voice — read before editing
```

Edit copy and contact details in `app/lib/site.ts`. Follow
[`.claude/style-guide.md`](.claude/style-guide.md) for any visual or copy change.

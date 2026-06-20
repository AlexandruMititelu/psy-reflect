# Psy-Reflect — Style Guide

Design system for the Psy-Reflect landing page. Read this before touching any
UI, copy, or color. The aesthetic is **Swiss International Typographic Style
× Apple restraint**: a disciplined grid, one typeface, generous whitespace,
hairline rules, and a single grounding accent. Calm, credible, human — never
busy, never clinical-cold, never "wellness" kitsch.

---

## 1. Brand

| | |
|---|---|
| Name | **Psy-Reflect** |
| Legal entity | Căpățînă și Mititelu SCPP (Societate Civilă Profesională de Psihologie) |
| Location | Strada Brăilei 165, Galați, 800310 |
| Phone | 0731 181 050 · `tel:+40731181050` |
| Offer | Terapie clinică · Evaluări psihologice |

**Wordmark:** an 8px accent square + `Psy-Reflect` in semibold, tight tracking.
The square is the only "logo" — reuse it as the recurring brand mark (section
bullets, list markers). Never restyle the wordmark per section.

---

## 2. Voice & copywriting

Romanian, **Alex Hormozi style**: blunt, warm, outcome-first, zero jargon.

- **Short, punchy sentences.** Two parallel clauses beat one long one.
  → *"Ai grijă de toți ceilalți. E timpul și pentru tine."*
- **Lead with the transformation, not the feature.** Sell the clearer mind,
  not the modality.
- **Concrete over abstract.** "un plan clar și pași concreți din prima ședință"
  > "abordare personalizată".
- **Reframe to lower the barrier.** Therapy = strength, not weakness.
- **Address the reader as `tu`** — direct but respectful. No corporate "dumneavoastră" wall.
- **Cut fluff.** If a word doesn't earn its place, delete it. No "soluții
  inovatoare", no "echipă de profesioniști dedicați".
- **Always use Romanian diacritics** (ă â î ș ț). Non-negotiable.
- **Focus is the message.** "Nu facem de toate. Facem două lucruri bine."

Tone check: would a tired, skeptical person feel *understood and given a next
step*? If not, rewrite.

---

## 3. Color

Defined as Tailwind v4 theme tokens in `app/globals.css` (`@theme`). Use the
utility, never a raw hex in JSX.

| Token | Hex | Utility | Use |
|---|---|---|---|
| Paper | `#f6f5f1` | `bg-paper` | Page background (warm off-white) |
| Ink | `#1b1a17` | `text-ink` | Primary text, near-black warm |
| Ink soft | `#514d44` | `text-ink-soft` | Secondary / body copy |
| Muted | `#8c887d` | `text-muted` | Captions, labels, legal |
| Line | `#dedacf` | `border-line` | Hairline rules & dividers |
| Accent | `#234a6e` | `bg-accent` / `text-accent` | Deep blue — CTAs, marks, index numbers |

**Rules**
- Monochrome by default. The accent is a **spice, not a sauce** — CTAs, the
  brand square, list bullets, index numerals, link hover. Nothing else.
- No gradients, no shadows-as-decoration, no extra colors. One accent only.
- Single light theme. **No dark mode** — the paper aesthetic is the product.

---

## 4. Typography

One family does the work. Discipline over variety.

- **Inter** (`--font-inter`, `font-sans`) — everything: display + body.
- **IBM Plex Mono** (`--font-plex-mono`, `font-mono`) — index numerals, eyebrow
  labels, and contact data only. Precision accents, never paragraphs.

| Role | Classes |
|---|---|
| Hero H1 | `text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-balance` |
| Section H2 | `text-3xl md:text-5xl font-semibold tracking-tight text-balance` |
| Item H3 | `text-2xl md:text-3xl font-semibold tracking-tight` |
| Body | `text-lg leading-relaxed text-ink-soft` |
| Eyebrow / label | `font-mono text-xs uppercase tracking-[0.18em]` |

**Rules**
- Display weight is **600 (semibold)**, never 700+. Apple-calm, not shouty.
- Big type gets **negative tracking** (`-0.03em` to `-0.035em`); small uppercase
  labels get **positive tracking** (`0.18em`).
- **Flush left, ragged right.** No centered paragraphs. Cap measure with `ch`
  on headlines (`max-w-[15ch]`) and `max-w-sm/prose` on body.

---

## 5. Layout & grid

- **Shell:** `.shell` = `max-w-[1320px]` centered, `px-6 md:px-10`. Everything
  lives inside it.
- **12-column grid** (`md:grid-cols-12`) for asymmetry. The Swiss move: headline
  left and wide, support text pushed to the right columns
  (`md:col-span-5 md:col-start-8`). Embrace the empty space — don't fill it.
- **Hairline rules** separate every section (`border-b border-line`) and head
  each process column (`border-t`). Rules are structure, not ornament.
- **Section rhythm:** `py-20 md:py-32`. Keep it consistent.
- **Index everything:** sections carry a mono index (`00–03`) via
  `SectionLabel`; service/step items repeat their own `01/02` numeral.
- **Anchor offset:** sections that are nav targets get `scroll-mt-16`.

---

## 6. Components & interaction

- **Primary CTA** — `.cta`: accent pill, `rounded-full`, `hover:opacity-90`,
  `active:scale-[0.98]`. There is one primary action: **call to book.** Phone is
  the conversion everywhere (`tel:`), no contact form.
- **Quiet link** — `.link-arrow`: text + glyph (`↓ ↗`), underline on hover.
- **Markers** — accent squares (`size-1`–`size-2`), never emoji, never icons
  from a set. Geometric only.
- **Motion** — subtle and fast (150–200ms). Honor `prefers-reduced-motion`
  (already handled globally). No scroll-jacking, no parallax, no entrance
  animations.
- **Focus** — visible accent outline (set globally). Keep it.

---

## 7. Do / Don't

**Do** — whitespace, hairlines, one accent, flush-left type, mono index labels,
blunt outcome-first Romanian copy, phone-first CTA.

**Don't** — stock photos of smiling people, gradients/glassmorphism, multiple
accent colors, centered text blocks, icon soup, dark mode, jargon, walls of
copy, more than the two real services. When unsure: **remove it.**

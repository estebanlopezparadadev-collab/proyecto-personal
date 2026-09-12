# Design

<!-- impeccable:design-schema 1 -->

## World

"Etiqueta de ferretería" (hardware-store price tag). The page reads as a pegboard wall of hand-written price tags in a Bogotá ferretería: every symptom, price, and step is a punched, slightly-rotated cardstock tag hung against a warm kraft wall. No SaaS gradients, no dark-agency hero, no corporate card grid — the world is retail, tactile, and local.

## Color

Strategy: **Committed** — one saturated accent (safety orange-red) carries real coverage across buttons, prices, and icons, never a scattered highlight.

| Token | Value | Use |
|---|---|---|
| `--color-wall` | `#6B4A2C` | Section background (the pegboard wall) |
| `--color-wall-deep` | `#4A3119` | Hero/closing wall, footer |
| `--color-tag` | `#F4E6C4` | Tag background (the cardstock) |
| `--color-tag-edge` | `#E3CC9C` | Tag borders, dashed dividers, grommet ring |
| `--color-ink` | `#2B2318` | Headings and emphasized text on tags |
| `--color-ink-soft` | `#5B4A36` | Body text on tags |
| `--color-accent` | `#C23A17` | Prices, icons, CTA buttons |
| `--color-accent-bright` | `#E2551F` | Focus ring only |
| `--color-accent-hover` | `#A82F12` | Button hover/active (darkens, never brightens — keeps 4.5:1+ contrast with cream text) |
| `--color-accent-ink` | `#FFF6E9` | Text/icons on accent backgrounds |
| `--color-paper-onwall` | `#E9D6A8` | Text directly on the wall (section titles, body copy) |

All pairings were verified at build time against WCAG AA (4.5:1 body / 3:1 large text). `--color-accent` on `--color-tag` only carries large/bold text (prices, headings); small text on accent always uses `--color-accent-ink`, never `--color-ink`.

## Type

- **Display** (`--font-display`, `Permanent Marker`): headings, prices, button labels that need the hand-marker voice. Renders visually caps-like by the font's own design — intentional, matches real Sharpie-on-cardstock signage.
- **Body** (`--font-body`, `Archivo`): everything else. A workhorse grotesk with an industrial/label-maker character, chosen specifically to avoid the overused-font list (Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, Space Grotesk).
- Never hardcode a forced `<br>` inside a heading at a fluid/responsive font size — let it wrap naturally, or a narrow viewport will force an unbreakable line.

## The tag (core component)

Every content block on the page is a `.tag`: a cream card with a real punched hole (via `mask-image: radial-gradient(...)`, not a decorative circle — the wall shows through), a grommet ring, a soft elevation shadow (no hairline border — paper doesn't have a drawn outline), a per-instance rotation via the `--tilt` CSS custom property, and a hover lift. Implemented once in `src/components/Tag.jsx` + `.tag` in `src/index.css`, reused by every section — never recreate the card shell ad hoc.

## Motion

One grammar, reused everywhere: `[data-reveal]` fades and settles in (translateY + rotate → final tilt) via `IntersectionObserver` (`src/hooks/useReveal.js`), exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`). The hero and closing tags additionally sway gently (`tag-sway`, 7s loop, ±0.6deg) as if hanging on a peg. All motion is disabled under `prefers-reduced-motion: reduce`.

## Layout notes

- Background pegboard texture is a shared `.pegboard` utility (radial-gradient dot grid), applied per-section, not per-tag.
- Grids use `auto-fit`/`minmax` (Tailwind's responsive grid utilities) rather than fixed breakpython column counts, so card counts adapt naturally.
- A `flex` row that pairs a large price with a short unit suffix (e.g. "/mes") must allow wrap (`flex-wrap`) — a non-wrapping baseline row can exceed the tag's masked width and get hard-clipped by the punch-hole mask.

## Provenance

Built code-led (no image generation available in this environment) — no approved comp exists; ambition was carried in the surface brief's direction contract instead. All icons are hand-authored single-stroke SVGs (`src/components/icons`), no icon library, no emoji. No photography or generated raster assets ship with this build.

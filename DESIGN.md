# Design

<!-- impeccable:design-schema 1 -->

## World

A warm, confident, hand-crafted-but-clean landing page inspired by the user's own reference (trypixie.io via landingfolio.com): flat cards with a bold black outline and a hard offset shadow (no blur), a warm cream ground, a single friendly mascot, and one soft decorative blob for depth. No SaaS gradients, no dark-agency hero, no photography.

This replaced an earlier "hardware-store hung price tag" concept (punched hole, twine, peg, pegboard wall, marker font) that the project shipped first. That concept is fully retired from the code — nothing here should reference tags, holes, string, or pegboard again unless the user asks to bring it back.

## Color

Strategy: **Committed** — one saturated accent (orange-red) carries real coverage across buttons, prices, and icons; one muted secondary (sage green) exists only as a background blob, never on text or controls.

| Token | Value | Use |
|---|---|---|
| `--color-wall` | `#F5EAD3` | Section background |
| `--color-wall-deep` | `#E9D6AC` | Hero/closing background, footer |
| `--color-tag` | `#FFFCF4` | Card background |
| `--color-tag-edge` | `#E7D6AE` | Unused now that cards use a solid ink border; kept for the reinforcement-sticker white in the mascot's chrome dots |
| `--color-ink` | `#2B2318` | Headings, body text, card/button outlines, hard shadows |
| `--color-ink-soft` | `#5B4A36` | Secondary body text |
| `--color-accent` | `#C23A17` | Prices, icons, CTA buttons, mascot chrome bar |
| `--color-accent-hover` | `#A82F12` | Button hover/active (darkens, keeps contrast with cream button text) |
| `--color-accent-ink` | `#FFF6E9` | Text/icons on accent backgrounds |
| `--color-paper-onwall` | `#2B2318` | Text directly on the section background |
| `--color-blob` | `#9DBBAE` | The one decorative background shape behind the hero, at 35% opacity |

All pairings verified against WCAG AA (4.5:1 body / 3:1 large text).

## Type

- **Display** (`--font-display`, `Arvo`): headings, prices, button labels. A slab serif chosen for confidence/weight after the initial thinner serif (Instrument Serif) read as too delicate for a "fixer" brand voice.
- **Body** (`--font-body`, `Archivo`): everything else.

## The card (core component)

Every content block is a `.tag-wrap` (a plain positioning wrapper, no rotation, no string) around a `.tag`: a flat card with `border: 2.5px solid var(--color-ink)` and `box-shadow: 5px 5px 0 var(--color-ink)` (a hard, zero-blur, offset shadow — earned here because the world is now deliberately neobrutalist-adjacent; do not reuse this shadow style in a future world that isn't). Hover lifts the card and grows the shadow to `7px 7px 0`. Implemented in `src/components/Tag.jsx` + `.tag-wrap`/`.tag` in `src/index.css`.

A badge that must sit outside the card's edge (the numbered circle in "Cómo trabajo", the "J" stamp in "Sobre mí") is passed as Tag's `badge` prop, rendered as a sibling of `.tag` after it in the DOM (so it paints on top).

## Mascot & decoration

- `src/components/icons/Mascot.jsx`: a smiling browser-window character (rounded rect, orange browser-chrome bar with 3 dots, two round eyes, a curved smile, blush dots) — the one illustrated character on the page, used once in the hero pinned to the card's top-right corner.
- `.blob` (`src/index.css`): one soft organic shape (irregular `border-radius`) in `--color-blob` at low opacity, used once behind the hero card for depth. Keep it to one shape per section at most — it's a background accent, never a second focal point competing with the mascot or the card.

## Motion

`[data-reveal]` fades cards in via `IntersectionObserver` (`src/hooks/useReveal.js`); cards settle to `transform: none` (flat, no tilt — tilt was part of the retired tag concept). All motion is disabled under `prefers-reduced-motion: reduce`.

## Provenance

Built code-led (no image generation available in this environment). All icons and the mascot are hand-authored inline SVGs, no icon library, no emoji, no photography.

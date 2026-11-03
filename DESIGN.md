---
name: Bloom Tutoring
description: Warm, hand-crafted tutoring brand where organic blob shapes and bouncy sticker-styled buttons carry a garden-of-growth metaphor.
colors:
  garden-cream: "#fbf6ee"
  leaf-green: "#18765f"
  sprout-mint: "#39bf9a"
  mint-mist: "#eaf7f2"
  marigold-orange: "#b83c20"
  marigold-orange-bright: "#e76943"
  marigold-shadow: "#b6502f"
  marigold-blush: "#fdece1"
  peach-bloom: "#f7a87b"
  peach-mist: "#fdf3ea"
  sand-tan: "#e9ddc8"
  sand-tan-deep: "#d9c9a8"
  field-border: "#968465"
  card-ink: "#2f3d38"
  ink: "#3a4a44"
  ink-soft: "#4a5952"
  ink-warm: "#4a3b30"
  disclaimer: "#786e60"
  avatar-bg: "#dff0e8"
  mist-on-green: "#e0efe8"
  mist-on-green-soft: "#dcf0e8"
  chip-overlay: "rgba(255,255,255,0.28)"
typography:
  display:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontWeight: 800
    lineHeight: 1.03
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "16px"
  lg: "24px"
  full: "9999px"
spacing:
  gap-sm: "16px"
  gap-md: "24px"
  section-y-sm: "64px"
  section-y-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.marigold-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.marigold-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.leaf-green}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  badge-pill:
    backgroundColor: "#ffffff"
    textColor: "{colors.marigold-orange}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  card-service-dark-fill:
    backgroundColor: "{colors.leaf-green} | {colors.marigold-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "32px 26px"
  card-service-light-fill:
    backgroundColor: "{colors.sprout-mint} | {colors.peach-bloom}"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.md}"
    padding: "32px 26px"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.leaf-green}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Bloom Tutoring

## Overview

**Creative North Star: "The Blooming Garden"**

Bloom Tutoring's interface reads as a garden in bloom: organic blob shapes float and drift behind circular photo frames, leaf-green and marigold-orange sit against a soft cream ground, and everything is built from rounded, growth-shaped forms rather than hard rectangles. The system is warm and reassuring first — nothing sharp, sterile, or clinical is allowed near it — while still projecting the confidence and competence a parent needs to trust a tutor with their child's education through Grade 12 and AP-level work.

The system deliberately avoids two failure modes: the sterile SaaS-dashboard look of generic edtech (no cold grays, no boxy cards, no corporate blue), and cutesy toy-box childishness that would undersell older students' work. It threads that needle with an adult-credible warmth — organic, botanical, hand-tended, but not juvenile.

Components lean bouncy and confident: buttons press down on hover, cards lift and tilt slightly, decorative shapes float and wiggle continuously at low opacity. The palette is a garden bed, not a classroom poster — leaf-green and sprout-mint as growth colors, marigold-orange and peach-bloom as bloom colors, cream as the soil/paper ground.

**Key Characteristics:**
- Organic blob and circle forms over rectangles wherever a shape is decorative or photographic.
- Warm, growth-themed palette: greens/mints for trust and stability, orange/peach for warmth and action.
- Rounded, chunky display type (Baloo 2) paired with a friendly, readable body face (Nunito).
- Continuous low-amplitude ambient motion (floating blobs, wiggling squares) that never demands attention.
- Bold, forceful primary color blocking on cards and buttons — color carries hierarchy more than size does.

## Colors

The palette is a garden bed at midday: deep growth greens anchor the page, warm bloom oranges and peaches call out action, and a soft cream ground keeps the whole thing feeling like sunlit paper rather than a screen.

### Primary
- **Leaf Green** (`#18765f`): The anchor color — headline text, primary section backgrounds (Why Bloom Tutoring), link color, icon-block tint. Reads as trust and stability.

### Secondary
- **Sprout Mint** (`#39bf9a`): The growth accent — decorative blobs, feature-strip icon tiles, service card backgrounds, FAQ toggle icons. Livelier and lighter than Leaf Green; used where the design wants energy without shouting.
- **Mint Mist** (`#eaf7f2`): Sprout Mint's paper-light tint — section backgrounds (Services), soft card fills, founder-photo backdrop blobs.

### Tertiary
- **Marigold Orange** (`#b83c20`): The single call-to-action color. Reserved for primary buttons, the header CTA, and enquiry-flow accents. Its rarity outside of actions is the point — if it's orange, it's asking for a click. This is a deliberately deepened shade of the brand's original marigold (see Marigold Orange Bright below) — chosen because it's the darkest point on that hue that still reads unmistakably as "marigold" rather than "brick," while clearing WCAG AA contrast (≥4.5:1) both as white-on-fill (buttons) and as text-on-light (badges, links). Every actionable surface uses this token; nothing else does.
- **Marigold Orange Bright** (`#e76943`): The original, higher-chroma marigold. Reserved exclusively for small decorative shapes that never carry text or sit under text (the wiggling squares in the hero, founder-story, and contact sections). It fails text contrast on its own, which is precisely why it's fenced off from anything actionable or legible.
- **Marigold Shadow** (`#b6502f`): Marigold Orange's offset-shadow partner under primary buttons; never used as a fill on its own.
- **Marigold Blush** (`#fdece1`): Marigold Orange's paper-light tint — co-founder section tag backgrounds, badge fills.
- **Peach Bloom** (`#f7a87b`): The playful highlight — small decorative dots/squares, avatar ring colors, the "years" stat badge (paired with Card Ink text, never white — see Accessibility). Used sparingly as a third color note, never as a large fill.
- **Peach Mist** (`#fdf3ea`): Peach Bloom's paper-light tint — Testimonials and FAQ section backgrounds.

### Neutral
- **Garden Cream** (`#fbf6ee`): The page ground. Body background, header background, contact-section background. Never pure white — always slightly warm.
- **Sand Tan** (`#e9ddc8`): Dashed section dividers, input borders, hairline separators between founder-story blocks.
- **Sand Tan Deep** (`#d9c9a8`): The header's dashed border-bottom — a slightly stronger tan for the one divider that's always visible.
- **Field Border** (`#968465`): Form-control borders only. Sand Tan sits at ~1.3:1 on white, which fails the 3:1 non-text contrast a control edge needs; this darker tan clears it (~3.6:1) while staying in the warm palette.
- **Card Ink** (`#2f3d38`): Dark text/icon color used only for content sitting directly on Sprout Mint or Peach Bloom fills, where white text fails contrast (service cards, feature-strip icon tiles, the "4+" hero stat bubble, the Why Bloom Tutoring numbered badges). Deliberately distinct from Leaf Green — Leaf Green also fails on these two fills.
- **Ink / Ink Soft / Ink Warm** (`#3a4a44` / `#4a5952` / `#4a3b30`): Body-copy tints used across hero subhead, founder/co-founder prose, and testimonial quotes respectively. Previously used ad hoc in code without being documented here; formalized as tokens.
- **Disclaimer** (`#786e60`): Muted caption color for the testimonials sample-content notice — darkened from an earlier undocumented value so 13px italic text clears AA contrast on white.
- **Mist on Green / Mist on Green Soft** (`#e0efe8` / `#dcf0e8`): Light text tints for body copy and footer copy sitting on the Leaf Green background in the "Why Bloom Tutoring" section and the footer — lightened from earlier undocumented values so both clear AA contrast on Leaf Green.
- **Avatar Bg** (`#dff0e8`): Background fill for placeholder avatar icons (student/tutor photo stand-ins).
- **Chip Overlay** (`rgba(255,255,255,0.28)`): Translucent white fill for the icon-letter chip inside service cards, sitting on top of whichever card color is active.

### Named Rules
**The Single Orange Rule.** Marigold Orange appears only on things a visitor can act on (buttons, the CTA badge, the enquiry send button). It never appears as decoration or section background — if a user sees orange, it's clickable. Marigold Orange Bright is the one exception, and by design it never carries or sits under text.

**Adaptive Card Text.** Any text or icon glyph placed directly on a solid color fill uses white when the fill is Leaf Green or Marigold Orange (both ≥5.5:1), and Card Ink when the fill is Sprout Mint or Peach Bloom (white fails on both — as low as 1.9:1). This is why service cards and feature tiles show dark text on the lighter two brand colors and white text on the darker two — it's a deliberate, systematic rule, not an inconsistency.

## Typography

**Display Font:** Baloo 2 (with system-ui, sans-serif fallback)
**Body Font:** Nunito (with system-ui, sans-serif fallback)

**Character:** Baloo 2's rounded, chunky letterforms give headlines a hand-drawn, friendly weight without tipping into a novelty typeface; Nunito keeps body copy warm but highly legible at length. The pairing reads as "a well-designed children's book," not "a kids' app."

### Hierarchy
- **Display** (extrabold/800, `text-5xl` to `text-7xl` responsive, line-height 1.03): Hero headline only, in Baloo 2. Frequently split across two colors (Leaf Green + Marigold Orange) on two lines.
- **Headline** (extrabold/800, `text-3xl` to `text-5xl`, Baloo 2): Section titles ("Services", "Why Bloom Tutoring", "Let's Chat").
- **Title** (bold/700, `text-lg` to `text-2xl`, Baloo 2): Card titles, testimonial section sub-heads, founder-story pull quotes.
- **Body** (semibold/600–extrabold/800, `text-base` to `text-xl`, Nunito, line-height ~1.6): Paragraph copy throughout; consistently semibold-or-heavier, never regular weight — the system has no light or quiet text.
- **Label** (extrabold/800, `text-[13px]`, uppercase, wide tracking, Nunito): Form field labels, eyebrow badges above headings.

### Named Rules
**The No-Light-Text Rule.** Body copy is never lighter than semibold (600). Regular weight (400) is reserved for form placeholder text only — every other word on the page is built to feel confidently said, not murmured.

## Layout

Content sits in a centered max-width container (2xl `max-w-6xl` for hero/founder sections down to `max-w-3xl` for FAQ), with horizontal padding of `px-5` on mobile expanding to `px-16` at `sm`. Sections stack vertically with generous breathing room: `py-16` (64px) as the small rhythm, scaling to `py-24`–`py-28` (96–112px) for major content sections. Two-column sections (hero, founder story, co-founder) collapse to a single stacked column below `md`, with photo/image content re-centered above or below the text. Card grids use `grid-cols-[repeat(auto-fit,minmax(Npx,1fr))]` so card count adapts fluidly to width rather than snapping at fixed breakpoints. Wavy or diagonal SVG dividers mark the seam between major sections instead of a hard horizontal line.

## Elevation & Depth

The system is intentionally flat — there are no soft, blurred drop shadows anywhere. Depth currently comes from two devices: solid-color offset shadows under buttons (e.g. `0 6px 0 marigold-shadow`, no blur), which read as a pressed sticker/button rather than a floating panel, and simple layered color blocks (a colored blob offset behind a white-bordered photo circle) to imply depth without any actual shadow blur. This is documented as the system's current behavior rather than a locked invariant — a future pass may introduce softer elevation without breaking the identity, provided flat color blocking stays the default at rest.

## Shapes

Rounded is the default everywhere: buttons and badges are fully pill-shaped (`rounded-full`), cards use large radii (16–24px) often asymmetric — service cards round three corners generously and blow out the fourth (bottom-right) to 60px, giving each card a torn-corner, hand-cut feel. Photo content sits in perfect circles with a thick white ring (6px border) and an organic offset blob behind it, using irregular `border-radius` percentages (e.g. `42% 58% 63% 37% / 45% 40% 60% 55%`) rather than a plain circle, so decorative blobs never look like uniform CSS circles. Small decorative shapes (squares, dots) are rotated off-axis (typically 20–30deg) rather than aligned to the grid.

## Components

### Buttons
- **Shape:** Fully rounded (`rounded-full`, 9999px).
- **Primary:** Marigold Orange fill, white extrabold text, offset solid shadow beneath (`0 6px-7px 0 Marigold Shadow`), padding `16px 32px` (larger CTA variants use more horizontal padding).
- **Hover / Focus:** Button translates down and the shadow compresses (`translate-y-1` + shadow reduced to `0 3px 0`), simulating a physical press rather than a lift. Feel: bouncy and confident — clearly, tactilely interactive.
- **Secondary / Ghost:** White fill, 3px Leaf Green border, Leaf Green text; inverts to solid Leaf Green fill with white text on hover. No offset shadow on this variant.

### Badges / Pills
- **Style:** White or tinted background, small extrabold uppercase label, fully rounded, slight counter-rotation (-2deg) for a hand-placed sticker feel.

### Cards / Containers (Services)
- **Corner Style:** Asymmetric large radius — 28px on three corners, 60px on bottom-right.
- **Background:** Solid brand color per card (cycles through Sprout Mint / Leaf Green / Marigold Orange / Peach Bloom). Text color follows the Adaptive Card Text rule: white on Leaf Green/Marigold Orange, Card Ink on Sprout Mint/Peach Bloom.
- **Shadow Strategy:** Flat solid offset shadow at rest (`0 12px 0 rgba(0,0,0,0.08)`); on hover the card lifts and rotates 1deg.
- **Internal Padding:** ~26–32px.

### Inputs / Fields
- **Style:** White background, 2px Field Border, 12px radius, generous padding (14px vertical, 16px horizontal).
- **Focus:** Border shifts to solid Leaf Green, and the global `:focus-visible` ring (Leaf Green, 3px) shows for keyboard users; the browser outline is never suppressed. Placeholder text uses Disclaimer (`#786e60`) so it clears 4.5:1. Every field has a real `<label for>` bound to its input's `id` — labels are never visual-only.

### Navigation
- Sticky header, translucent Garden Cream background with backdrop blur, 3px dashed Sand Tan Deep bottom border. Links are extrabold Leaf Green text, no underline; the CTA link is styled as a primary button (rotated -2deg) rather than a plain nav link.
- **Mobile (`<sm`):** Services / Why Us / FAQ links move into a hamburger-triggered panel rather than disappearing. The toggle is a 44×44px circular button (3px Leaf Green border, white fill) whose three bars morph into an X on open — a small bouncy touch consistent with the button-press language elsewhere. The panel drops in below the header using the cream background and dashed-tan divider already established there, so it reads as part of the header rather than a bolted-on overlay. It closes on link click or Escape, and moves focus to its first link on open so keyboard users land inside it immediately.

### Decorative Blobs (signature)
Organic, irregularly-rounded shapes in brand colors at low opacity (20–35%), animated with slow continuous float (`floatY`/`floatY2`, 6–7s ease-in-out) or wiggle (`wiggle`, 4s) keyframes. Placed behind photo content or scattered at section edges. These never carry text or interactive behavior — purely ambient texture that reinforces the garden/growth metaphor. All are `aria-hidden="true"`.

## Accessibility

The playful surface is built on a verified-accessible base, not in tension with it:

- **Contrast is a design constraint, not an afterthought.** Every token pairing actually used for text-on-fill in this system (see Colors) is verified at ≥4.5:1 (AA, normal text). This is what produced Marigold Orange's deepened value and the Adaptive Card Text rule — both are accessibility fixes that were shaped to still look like intentional brand choices rather than compliance patches.
- **Motion respects `prefers-reduced-motion`.** Ambient float/wiggle animations stop entirely (they're pure decoration, so pausing loses nothing); the pop-in entrance animation swaps to a simple opacity fade so the state change — content appearing — is preserved without motion.
- **Every interactive control is a real, keyboard-operable element.** FAQ rows are `<button>`s with `aria-expanded`/`aria-controls`, not `onClick` divs. Form fields use `<label for>` bound to a real `id`. The page has one `<h1>` and a `<main>` landmark; sections without a heading of their own carry `aria-label`, sections with one use `aria-labelledby`.
- **Focus is always visible.** A themed `:focus-visible` ring (Leaf Green, 3px, 3px offset) applies globally rather than relying on browser defaults or, worse, suppressing them.
- **Decorative content doesn't compete with real content.** Blobs, dividers, icon-letter chips, and glyph icons (✉ ☏) are `aria-hidden="true"` since the meaningful text sits right next to them.

## Do's and Don'ts

### Do:
- **Do** keep Marigold Orange exclusive to actionable elements (The Single Orange Rule).
- **Do** use irregular organic `border-radius` blobs for decorative shapes, not plain circles or rectangles.
- **Do** set body text at semibold (600) or heavier; never use regular-weight paragraph text outside form placeholders.
- **Do** pair every primary button with a physical "press down" hover (translate + shadow compression), not a simple opacity or color fade.
- **Do** keep decorative motion slow, continuous, and low-amplitude (float/wiggle) — never abrupt or attention-grabbing.
- **Do** use the CSS custom properties in `globals.css` (`var(--color-*)`, exposed as Tailwind utilities like `bg-orange`/`text-green`) for every color reference — never a raw hex literal — so the palette stays a single source of truth.
- **Do** apply the Adaptive Card Text rule (white on Leaf Green/Marigold Orange, Card Ink on Sprout Mint/Peach Bloom) to any new solid-fill surface that carries text.

### Don't:
- **Don't** introduce cold grays, corporate blues, or hard-edged rectangular cards — they break the garden/growth identity and read as clinical edtech.
- **Don't** push the aesthetic into toy-box childishness (no cartoon mascots, no primary-school clip art); the audience includes parents of Grade 12/AP students.
- **Don't** use soft blurred drop shadows; the system's current depth language is flat color blocking plus solid offset shadows, not ambient blur.
- **Don't** align decorative squares/dots to the grid — they're rotated off-axis on purpose.
- **Don't** fabricate real-sounding testimonial photography or names; the testimonial avatars are intentionally placeholder icons until real photos exist ([[PRODUCT.md]] Evidence on Hand).
- **Don't** put Marigold Orange Bright under or behind text — it's decorative-only and fails contrast by design; use Marigold Orange for anything legible.
- **Don't** re-add a `div`/`span` with an `onClick` as a stand-in for an interactive control — use a real `<button>` or `<a>` so it's keyboard- and screen-reader-operable for free.

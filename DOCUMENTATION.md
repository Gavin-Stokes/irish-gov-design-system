# Irish Government Life Events — Design System Documentation

**Version:** 1.0  
**Standard:** WCAG 2.1 Level AA  
**Platform:** Mobile-first (390px canvas)  
**Source:** Social Housing Application, DPENDR / Deloitte, 2022

---

## Contents

1. [Introduction](#1-introduction)
2. [Getting Started](#2-getting-started)
3. [Design Tokens](#3-design-tokens)
   - [Colour Palette](#31-colour-palette)
   - [Typography](#32-typography)
   - [Spacing](#33-spacing)
   - [Elevation & Shadows](#34-elevation--shadows)
   - [Border Radius](#35-border-radius)
4. [Components](#4-components)
   - [Header](#41-header)
   - [Buttons](#42-buttons)
   - [Cards](#43-cards)
   - [Form Fields](#44-form-fields)
   - [Navigation & Back Link](#45-navigation--back-link)
   - [Help Panel](#46-help-panel)
   - [Icons](#47-icons)
5. [Accessibility](#5-accessibility)
   - [Standards](#51-standards)
   - [Colour Contrast](#52-colour-contrast)
   - [Focus Management](#53-focus-management)
   - [Touch Targets](#54-touch-targets)
   - [Keyboard Navigation](#55-keyboard-navigation)
   - [Screen Reader Support](#56-screen-reader-support)
   - [Language Handling](#57-language-handling)
   - [Form Accessibility](#58-form-accessibility)
6. [Content & Voice](#6-content--voice)
7. [Best Practices](#7-best-practices)
8. [Implementation Reference](#8-implementation-reference)

---

## 1. Introduction

This design system supports the **Irish Government Life Events** project — a citizen-facing digital service platform led by the Department of Public Expenditure and Reform (DPENDR). The primary product in scope is a **Social Housing Application**: a mobile-first digital form allowing citizens to apply for social housing in a single, streamlined flow.

### Who this is for

- **Designers** building new screens or components within the Social Housing Application or related Life Events services.
- **Developers** implementing production UI from Figma prototypes or the supplied React component library.
- **Content designers** writing for the platform.
- **Accessibility auditors** verifying compliance against WCAG 2.1 AA.

### Scope

This system covers the citizen-facing mobile app UI. It does not cover internal service blueprint or journey map documents, which use separate visual conventions.

---

## 2. Getting Started

### File structure

```
colors_and_type.css          ← CSS custom properties (tokens)
assets/                      ← Logos, illustrations, hero overlay
preview/                     ← HTML component specimens
ui_kits/social-housing/      ← React component library + prototype
```

### Load the CSS tokens

```html
<link rel="stylesheet" href="path/to/colors_and_type.css">
```

All design decisions are expressed as CSS custom properties defined in `:root`. Reference them as `var(--token-name)`.

### Load the fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet">
```

The system uses **Lato** exclusively for the app UI. Open Sans is used only in cover/report documents. La Belle Aurore is used only in journey map annotations.

---

## 3. Design Tokens

All tokens are available as CSS custom properties in [colors_and_type.css](colors_and_type.css).

---

### 3.1 Colour Palette

#### Primary greens

| Token | Hex | Usage |
|---|---|---|
| `--color-green-900` | `#004D44` | Primary brand; home hero background; section headings; back links |
| `--color-green-800` | `#008660` | Standard header bar; primary CTAs |
| `--color-green-750` | `#00875F` | Button fill (primary action) |
| `--color-green-700` | `#028072` | Mid teal accent |
| `--color-green-500` | `#4DA373` | Mid accent green |
| `--color-green-300` | `#6DD7C0` | Seafoam — illustration accent |
| `--color-green-200` | `#9AE1DA` | Pale teal — illustration fill |
| `--color-green-150` | `#BFE7E4` | Light teal — card tints |
| `--color-green-100` | `#D5EEDB` | Pale mint — soft fills |
| `--color-green-50`  | `#EAF4F5` | Card backgrounds (most common) |

#### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `--color-neutral-900` | `#0B0C0C` | Primary body text |
| `--color-neutral-850` | `#263238` | Secondary text, strokes |
| `--color-neutral-600` | `#585858` | De-emphasised text |
| `--color-neutral-550` | `#505A5F` | Supporting / secondary text |
| `--color-neutral-500` | `#888888` | Input borders, mid grey |
| `--color-neutral-200` | `#E0E0E0` | Dividers, card backgrounds |
| `--color-neutral-100` | `#F0F0F0` | Inner card backgrounds |
| `--color-neutral-25`  | `#F2F2F2` | Form page background |
| `--color-white`       | `#FFFFFF` | Card surfaces; text on dark |

#### Warm accents

| Token | Hex | Usage |
|---|---|---|
| `--color-warm-50` | `#F6F4EF` | Warm off-white page background |
| `--color-salmon`  | `#EB996E` | Persona / illustration warm tone |
| `--color-peach`   | `#FFBE9D` | Illustration fill |
| `--color-yellow`  | `#E3DE83` | Harp icon on dark header |

#### Status / semantic

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#19B729` | Online indicator / success dot |

#### Semantic colour tokens

These semantic aliases map intent to base palette values. Always use the semantic token rather than the raw hex in component code.

| Token | Maps to | Use when |
|---|---|---|
| `--color-bg-page` | `#F2F2F2` | Form/detail page backgrounds |
| `--color-bg-hero` | `#004D44` | Home hero header |
| `--color-bg-header` | `#008660` | Standard app header |
| `--color-bg-card` | `#EAF4F5` | Standard card backgrounds |
| `--color-bg-help` | `#004D44` | Need Help panel |
| `--color-text-primary` | `#0B0C0C` | All body copy |
| `--color-text-heading` | `#004D44` | Section headings on white/light |
| `--color-text-secondary` | `#505A5F` | Supporting, metadata, hints |
| `--color-text-on-dark` | `#FFFFFF` | Text on green hero/header |
| `--color-text-link` | `#004D44` | Back links |
| `--color-btn-primary-bg` | `#00875F` | Primary button fill |
| `--color-border-default` | `#888888` | Input field borders |

---

### 3.2 Typography

#### Font stack

```css
font-family: var(--font-primary);   /* 'Lato', sans-serif */
font-family: var(--font-secondary); /* 'Open Sans', sans-serif — documents only */
```

#### Type scale

| Token | Size | px equiv | Weight | Role |
|---|---|---|---|---|
| `--text-hero`     | `2rem`    | 32px | Bold 700 | Welcome heading (home screen) |
| `--text-h1`       | `1.75rem` | 28px | Bold 700 | Page titles |
| `--text-h2`       | `1.5rem`  | 24px | Bold 700 | Section headings, card titles |
| `--text-h3`       | `1.25rem` | 20px | Bold 700 | Sub-section headings |
| `--text-h4`       | `1.125rem`| 18px | Regular 400 | Body large / subtitles |
| `--text-body`     | `1rem`    | 16px | Regular 400 | Main body, form labels, card text |
| `--text-small`    | `0.875rem`| 14px | Regular 400 | Supporting text, metadata, dates |
| `--text-caption`  | `0.75rem` | 12px | Regular 400 | Helper text, hints |
| `--text-overline` | `0.625rem`| 10px | Regular 400 | Overline labels (wide tracking) |

#### Font weights

| Token | Value | Usage |
|---|---|---|
| `--fw-light`   | 300 | Rarely used; thin text variants |
| `--fw-regular` | 400 | All body copy |
| `--fw-medium`  | 500 | Emphasis without bold |
| `--fw-semibold`| 600 | Sub-headings |
| `--fw-bold`    | 700 | All headings; CTA labels |
| `--fw-black`   | 900 | Display / hero emphasis |

#### Line heights & letter spacing

| Token | Value | Usage |
|---|---|---|
| `--lh-heading` | 1.25 | All heading levels |
| `--lh-body`    | 1.5  | All body text |
| `--lh-tight`   | 1.1  | Display / hero text |
| `--ls-body`    | 0.005em | Standard body letter spacing |
| `--ls-overline`| 0.2em   | Wide tracking for overline labels |

#### Semantic type CSS classes

The CSS file exposes ready-to-use classes that apply all type properties together:

| Class | Applies |
|---|---|
| `h1` / `.h1` | 28px, bold, dark heading colour |
| `h2` / `.h2` | 24px, bold, green heading colour |
| `h3` / `.h3` | 20px, bold, green heading colour |
| `p` / `.body` | 16px, regular, primary text colour |
| `.supporting` | 14px, regular, secondary text colour |
| `.caption`    | 12px, regular, secondary text colour |
| `.overline`   | 10px, wide tracking, uppercase, muted |
| `.text-on-dark` | White text (for use on green backgrounds) |

---

### 3.3 Spacing

The system uses an **8px base unit**.

| Token | Value | Common use |
|---|---|---|
| `--space-1` | 4px  | Tight gaps between inline elements |
| `--space-2` | 8px  | Icon-to-label gaps, small padding |
| `--space-3` | 12px | Button vertical padding |
| `--space-4` | 16px | Page horizontal margin; button horizontal padding |
| `--space-5` | 20px | Card inner padding |
| `--space-6` | 24px | Content block gaps |
| `--space-7` | 28px | — |
| `--space-8` | 32px | — |
| `--space-9` | 40px | — |
| `--space-10`| 48px | — |
| `--space-11`| 50px | Between major page sections |

#### Named spacing tokens

| Token | Value | Usage |
|---|---|---|
| `--page-margin-x` | 16px | Left/right page margin |
| `--card-padding`  | 20px | Card inner padding (all sides) |
| `--section-gap`   | 50px | Between major content sections |
| `--content-gap`   | 24px | Between content blocks within a section |
| `--btn-pad-y`     | 12px | Button top/bottom padding |
| `--btn-pad-x`     | 16px | Button left/right padding |

---

### 3.4 Elevation & Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-card`    | `0px 4px 4px 0px rgba(0,0,0,0.25)` | Standard card elevation |
| `--shadow-ambient` | `0px 2px 8px 0px rgba(0,0,0,0.05)` | Page-level ambient shadow |
| `--shadow-chat`    | `0px 4px 14px 0px rgba(0,0,0,0.25)` | Chat / help panel elevation |

Cards rely on shadow alone for elevation — no outer borders.

---

### 3.5 Border Radius

| Token | Value | Applied to |
|---|---|---|
| `--radius-btn`     | 4px  | All button variants |
| `--radius-card`    | 8px  | Standard cards |
| `--radius-card-lg` | 10px | Larger cards, screen frame |
| `--radius-pill`    | 24px | Chips, pills, date status badges |
| `--radius-circle`  | 50%  | Avatar and icon circles |

---

## 4. Components

### 4.1 Header

Two variants exist:

**Hero header** (home screen only)
- Background: `#004D44` (Deep Forest Green)
- Full-bleed hero overlay texture (`hero-overlay.png`) at 80% opacity with `mix-blend-mode: overlay`
- Contains: Irish Government Harp mark (white SVG), overline label, user greeting, notification icon, avatar
- Total height: ~100px (24px status bar + 67.5px nav bar + 8px accent strip)

**Standard header** (all other screens)
- Background: `#008660` (Rich Green)
- Contains: Harp mark, page title (white), notification icon

**Best practices**
- Always include the Harp mark as the first element — it identifies the service as government.
- The Harp mark must render in white on the green header; never use it in green on a white background within the app UI.
- Keep header copy concise. The page title should match the `<h1>` of the screen.
- Never use the header area for promotional content.

**Accessibility**
- Wrap the Harp mark in `<a href="/">` linking to the home screen, with `aria-label="Irish Government — home"`.
- Include a skip link (`<a href="#main-content" class="skip-link">Skip to main content</a>`) as the first focusable element in the DOM.
- The notification icon must have `aria-label="Notifications"` and show a badge count in `aria-live="polite"` when updated.

---

### 4.2 Buttons

Four variants:

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary | `#00875F` | White | None | Main CTA per screen ("Apply now", "Continue") |
| Primary alt | `#004D44` | White | None | Dark green alternative — home screen CTAs |
| Secondary | Transparent | `#004D44` | `1px solid #004D44` | Secondary action alongside a primary |
| Tertiary | Transparent | `#004D44` | None (underline) | Low-priority actions ("Return to dashboard") |
| Back link | Transparent | `#004D44` | None (underline) | Backwards navigation with left-chevron icon |

**Sizing**

- Full-width primary CTA: `height: 58px`
- Standard button: `height: 48px`
- Both meet the 44px minimum touch target requirement.

**Border radius:** `4px` on all button types. Buttons are not pill-shaped.

**Icon usage:** Primary CTAs use a trailing right-arrow icon (`→`). Back links use a leading left-chevron icon. Icon-only buttons must include `aria-label`.

**Best practices**
- One primary button per screen. Multiple primary buttons compete for attention and confuse users.
- Use sentence case: "Start application", not "Start Application" or "START APPLICATION".
- CTA copy should be action-oriented and specific: "Submit application" is better than "Submit".
- Full-width buttons are correct for mobile. Do not cap button width artificially on 390px screens.
- Never disable a button without providing a reason. If the form is incomplete, show inline validation rather than a disabled submit button.

**Accessibility**
- All buttons must have a discernible label (visible text or `aria-label`).
- Never rely on colour alone to distinguish button states. Use text changes ("Loading…") or icons alongside.
- Focus state: `outline: 3px solid #FFBF47; outline-offset: 2px;` — always visible, never suppressed.
- `<button>` element for actions; `<a>` for navigation. Do not style `<div>` or `<span>` as buttons.
- For async actions (form submission), use `aria-busy="true"` on the button and update `aria-live` with the result.

---

### 4.3 Cards

Three surface types:

**Service card** (home screen)
- Background: `#EAF4F5` (Light Teal)
- `border-radius: 10px`
- `box-shadow: 0px 4px 4px rgba(0,0,0,0.25)`
- Decorative illustration top-right (flat vector, brand greens)
- Contains: heading (`h2`), supporting text, CTA button

**Application card** (status tracking)
- Background: `#EAF4F5`
- Status pill (white, `border-radius: 24px`) showing application state
- Contains: application title, date, status pill, progress indicator

**Inner card** (nested content block)
- Background: `#F0F0F0`
- No shadow; `border-radius: 8px`
- Used for checklist items, step summaries

**Best practices**
- Cards must not be used purely as decoration — every card should be actionable or informational with a clear purpose.
- Limit card content to one primary idea per card. Avoid stacking too much information; link out to detail screens instead.
- Decorative illustrations (house, person, piggy bank) sit in the top-right of service cards and must be marked `aria-hidden="true"` — they add visual interest but carry no information.
- Do not add borders to cards — elevation is achieved through shadow only.

**Accessibility**
- If a card is interactive (the whole card is clickable), use `<a>` or `<button>` wrapping, not a `<div>` with a click handler.
- Heading hierarchy within cards must follow the page heading order (typically `<h2>` or `<h3>` inside a card, never jumping from `<h1>` to `<h4>`).
- Status pills that change dynamically should use `aria-live="polite"` so screen readers announce updates.

---

### 4.4 Form Fields

States: default, focused, filled, error, disabled.

**Text input**
- Border: `1px solid #888888` in default state
- Border radius: `4px` (follows button radius)
- Height: 48px minimum (meets touch target requirement)
- Label: always visible `<label>` element, positioned above the field
- Hint text: `<span class="supporting">` linked via `aria-describedby`

**Select / dropdown**
- Same border treatment as text input
- Chevron-down icon to indicate interactivity
- Uses native `<select>` for maximum compatibility

**Radio groups**
- Group enclosed in `<fieldset>` with `<legend>` describing the question
- Each option: `<input type="radio">` + `<label>`
- Touch target: full-width tap area, not just the radio dot

**Checkboxes**
- Same structure as radio groups
- Tick icon confirms selected state (not colour alone)

**Error state**
- Border: `2px solid #d4351c` (red)
- Error message: inline below the field, linked with `aria-describedby`
- Error icon precedes the message text
- Never rely on red border alone — always show text describing the error

**Best practices**
- Label every field visibly. Never use placeholder text as a substitute for a label — it disappears on focus and is not reliably read by assistive technology.
- Group related fields logically (e.g. address fields, income fields) using `<fieldset>` and `<legend>`.
- Pre-fill known data from MyGovID where available, and clearly indicate the source: "From your MyGovID profile". Allow users to edit pre-filled values.
- Show time estimates at the start of multi-step forms: "This will take approximately 10 minutes."
- Mark required fields explicitly. Prefer making all fields required and omitting the asterisk, rather than marking optional fields.
- Validate on blur (leaving the field), not on every keystroke. Show errors only after the user has interacted with a field.

**Accessibility**
- Every input must have a programmatically associated `<label>` via `for`/`id` — not just proximity.
- Error messages must be linked to their field via `aria-describedby`. Do not rely on visual position alone.
- When a form is submitted with errors, move focus to the first error field, or to a summary at the top of the form.
- `aria-required="true"` on required fields in addition to any visual indicator.
- Disabled fields (`disabled` attribute) are not reachable by keyboard and cannot be submitted — use `readonly` when the field should be visible but not editable.
- Autocomplete attributes improve usability for users with motor impairments: `autocomplete="given-name"`, `autocomplete="email"`, `autocomplete="tel"`, etc.

---

### 4.5 Navigation & Back Link

**Back link**
- Appearance: left-chevron icon + underlined text in `#004D44`
- Sits above the page `<h1>`, outside the main card
- Text: destination screen name (e.g. "Home"), not generic "Back"

**Bottom navigation** (where used)
- Tab bar with icon + label pairs
- Active state: green fill; inactive: grey
- Touch targets: minimum 44×44px per tab

**Best practices**
- Never use "Back" as back link text — name the destination. Users with screen readers navigate by link text, and "Back" is ambiguous.
- Back links navigate to the previous screen, not the browser history. Implement navigation state explicitly.
- Bottom navigation tabs should represent top-level destinations only. Do not put form steps or contextual actions in the bottom nav.

**Accessibility**
- Wrap navigation in `<nav>` with `aria-label="Main navigation"` (or an appropriate label that distinguishes it from other `<nav>` regions).
- Active tab/link must have `aria-current="page"` (for page-level) or `aria-pressed="true"` (for toggle-style).
- Back link must be a true `<a>` element, not a `<button>` (it navigates to a page).

---

### 4.6 Help Panel

A full-width dark green footer panel on most screens.

- Background: `#004D44`
- Dividers: `1px solid rgba(255,255,255,0.3)`
- Content: heading ("Need Help?"), digital assistant CTA, phone number, privacy link

**Best practices**
- The help panel should appear consistently at the bottom of every application screen.
- Keep the panel concise — two or three options maximum (digital assistant, phone, link).
- Phone numbers should be displayed in a human-readable format with the international prefix: "+353 1 888 2000".

**Accessibility**
- Phone number links must use `href="tel:+353..."` so mobile devices can initiate a call.
- The help panel is a landmark: wrap in `<section aria-label="Help and support">` or `<aside aria-label="Help and support">`.
- Text within the panel must pass contrast against `#004D44`. White (`#FFFFFF`) and the `--color-text-help` (`#EAF4F5`) value both pass at all tested sizes.

---

### 4.7 Icons

The system uses **Material Icons (Outlined)** as the closest available substitute for the custom Figma icon set.

| Icon name | Usage |
|---|---|
| `arrow_forward` | Primary CTA button trailing icon |
| `chevron_left` | Back link leading icon |
| `phone` | Help panel contact number |
| `notifications` | Header notification bell |
| `person` | User avatar / profile |
| `calendar_today` | Date picker fields |
| `open_in_new` | External link indicator |
| `info` | Tooltip / inline help hint |
| `check_circle` | Step complete state |
| `expand_more` | Dropdown / sort chevron |

**Standard icon size:** 24×24px (`--icon-size`). Larger decorative icons: 32px or 48px.

**Best practices**
- Never use an icon as the sole communication of meaning. Always pair with text or `aria-label`.
- Decorative icons (those that repeat information already in adjacent text) should be `aria-hidden="true"` to avoid duplication.
- Icon-only interactive elements (notification bell, avatar menu) must have `aria-label` describing their function.

---

## 5. Accessibility

All public-facing Irish Government digital services must meet **WCAG 2.1 Level AA**.

---

### 5.1 Standards

| Standard | Requirement |
|---|---|
| WCAG 2.1 AA | Minimum for all citizen-facing services |
| EN 301 549 | European standard for ICT accessibility (incorporates WCAG 2.1) |
| GDPR | Data minimisation in form design; clear privacy notices |

Key principles to design for:

- **Perceivable** — information is available to all senses (not only sight).
- **Operable** — all functionality is available via keyboard; no timed interactions without control.
- **Understandable** — language is plain; errors are clearly explained.
- **Robust** — content works with current and future assistive technologies.

---

### 5.2 Colour Contrast

Minimum contrast ratios per WCAG 2.1 AA:
- **Normal text** (below 18pt / 14pt bold): **4.5:1**
- **Large text** (18pt / 14pt bold and above): **3:1**
- **UI components and graphical objects**: **3:1**

#### Contrast audit — common pairings

| Foreground | Background | Ratio | Result | Notes |
|---|---|---|---|---|
| `#FFFFFF` white | `#004D44` green-900 | ~10.7:1 | **PASS** | Header, hero text, help panel |
| `#FFFFFF` white | `#008660` green-800 | ~4.6:1 | **PASS** | Standard header bar |
| `#FFFFFF` white | `#00875F` green-750 | ~4.5:1 | **PASS** | Primary button fill — verify at smallest text size |
| `#0B0C0C` near-black | `#EAF4F5` teal-50 | ~16:1 | **PASS** | Card body text |
| `#004D44` green-900 | `#EAF4F5` teal-50 | ~10:1 | **PASS** | Card headings |
| `#0B0C0C` near-black | `#F2F2F2` page-bg | ~16:1 | **PASS** | Form page body text |
| `#888888` grey | `#EAF4F5` teal-50 | ~2.5:1 | **FAIL** | Do not use — insufficient for any text |
| `#505A5F` body-grey | `#FFFFFF` white | ~6.1:1 | **PASS** | Supporting text |

**Rule:** Never use `#888888` or lighter greys for text on light backgrounds. Use `--color-text-secondary` (`#505A5F`) as the minimum for supporting text.

---

### 5.3 Focus Management

The focus ring style is derived from the GOV.UK focus style:

```css
:focus-visible {
  outline: 3px solid #FFBF47;
  outline-offset: 2px;
  background-color: #FFBF47; /* optional: matches GOV.UK pattern */
}
```

**Rules:**
- Never suppress focus outlines with `outline: none` or `outline: 0`.
- Use `:focus-visible` (not `:focus`) to avoid showing outlines on mouse click while still serving keyboard users.
- After a single-page navigation or modal open, move focus programmatically to the new heading or first interactive element.
- After a form submission error, move focus to the error summary or the first erroneous field.
- Modal dialogs must trap focus within the modal while open. Return focus to the trigger element when closed.

---

### 5.4 Touch Targets

| Element | Minimum size |
|---|---|
| All interactive elements | **44×44px** (WCAG 2.5.5 AAA / practical AA target) |
| Standard buttons | 48px height, full-width |
| Large CTA buttons | 58px height, full-width |
| Navigation tabs | 44px height minimum |
| Radio / checkbox rows | Full-width tap area, not just the control |
| Icon buttons (bell, avatar) | 44×44px tap area even if icon is 24px |

Ensure adequate spacing between adjacent interactive elements to prevent mis-taps. Minimum 8px gap between tap targets.

---

### 5.5 Keyboard Navigation

Every interactive element must be reachable and operable by keyboard alone.

| Key | Expected behaviour |
|---|---|
| `Tab` | Move to next interactive element |
| `Shift+Tab` | Move to previous interactive element |
| `Enter` | Activate link or button |
| `Space` | Activate button; select checkbox |
| Arrow keys | Navigate within a radio group or select |
| `Escape` | Close modal, dropdown, or overlay |

**Testing checklist:**
- Tab through the entire screen without a mouse — every interactive element should receive focus in a logical reading order.
- No keyboard traps: `Tab` should always be able to leave any component.
- Skip links allow keyboard users to bypass the header and jump to main content.
- Custom components (dropdowns, carousels, date pickers) implement appropriate ARIA roles and keyboard patterns per the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).

---

### 5.6 Screen Reader Support

#### Semantic HTML first

Always prefer native HTML elements over ARIA. Native elements carry implicit roles and behaviours:

| Native element | Implicit role |
|---|---|
| `<button>` | `button` |
| `<a href>` | `link` |
| `<nav>` | `navigation` |
| `<main>` | `main` |
| `<header>` | `banner` |
| `<footer>` | `contentinfo` |
| `<section>` | `region` (when labelled) |
| `<fieldset>` + `<legend>` | `group` |

#### Page structure

Every screen must include:

```html
<html lang="en">
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header><!-- App header --></header>
  <main id="main-content">
    <h1><!-- Page title --></h1>
    <!-- Page content -->
  </main>
  <footer><!-- Help panel --></footer>
</body>
</html>
```

#### Heading hierarchy

- One `<h1>` per page — the page title.
- Section headings use `<h2>`.
- Sub-section headings use `<h3>`.
- Card headings are typically `<h2>` or `<h3>` depending on nesting.
- Never skip heading levels (e.g. `<h1>` to `<h3>` without an `<h2>`).

#### Live regions

Use `aria-live` to announce dynamic content changes without a page reload:

```html
<!-- Polite: waits for user to finish current action before announcing -->
<div aria-live="polite" aria-atomic="true">Application submitted successfully.</div>

<!-- Assertive: interrupts — for urgent errors only -->
<div aria-live="assertive">Session will expire in 2 minutes.</div>
```

#### Common ARIA patterns in this system

| Pattern | Implementation |
|---|---|
| Active page in nav | `aria-current="page"` on the active link |
| Expanded dropdown | `aria-expanded="true/false"` on the trigger |
| Loading state | `aria-busy="true"` on the form/section; `aria-label="Loading…"` |
| Error summary | `role="alert"` on the error summary after failed submission |
| Decorative images | `alt=""` + `aria-hidden="true"` |
| Informative illustrations | `alt="Description of illustration"` |
| Notification badge count | `<span aria-label="3 notifications">3</span>` |

---

### 5.7 Language Handling

```html
<!-- Default: English -->
<html lang="en">

<!-- Irish-language phrases inline -->
<span lang="ga">An Garda Síochána</span>
<span lang="ga">Rialtas na hÉireann</span>
```

- The `lang="ga"` attribute ensures screen readers use the correct phoneme rules for Irish-language text.
- Always use the correct fada (acute accent) on Irish vowels: á, é, í, ó, ú. Do not substitute `a` for `á`.
- Irish-English specific spelling applies throughout: "avail of", not "take advantage of".

---

### 5.8 Form Accessibility

The Social Housing Application form is the core user journey. All rules below are required, not optional.

```html
<!-- Correct: label associated via for/id -->
<label for="first-name">First name</label>
<input
  id="first-name"
  type="text"
  name="firstName"
  autocomplete="given-name"
  aria-required="true"
  aria-describedby="first-name-hint first-name-error"
>
<span id="first-name-hint" class="supporting">As it appears on your passport or driver's licence.</span>
<span id="first-name-error" class="error" role="alert">Enter your first name.</span>
```

**Error patterns:**
- Show a summary of all errors at the top of the form when submitted with incomplete/invalid data.
- The error summary must receive focus after failed submission.
- Each error in the summary links to the relevant field (`href="#first-name"`).
- Each field error is also shown inline below the field.

**Radio groups:**
```html
<fieldset>
  <legend>What is your current employment status?</legend>
  <label><input type="radio" name="employment" value="employed"> Employed</label>
  <label><input type="radio" name="employment" value="self-employed"> Self-employed</label>
  <label><input type="radio" name="employment" value="unemployed"> Unemployed</label>
</fieldset>
```

---

## 6. Content & Voice

### Tone

The service speaks directly to citizens in warm, plain English. The voice is:

- **Second person** — "You recently qualified for Jobseekers Benefit." Not "The applicant has qualified…"
- **Encouraging** — "Good morning David. Here are supports tailored for you."
- **Concise** — Form labels are short. Instructions are direct.
- **Plain** — Complex government terms are briefly explained inline.
- **Irish-English** — "avail of", correct Irish department and place names with fadas.

### Writing rules

| Rule | Correct | Incorrect |
|---|---|---|
| Sentence case for all UI copy | "Start application" | "Start Application" / "START APPLICATION" |
| No emoji in the app UI | — | 🏠 Apply now |
| Action-oriented CTAs | "Apply now →" | "Click here" |
| Approximate time estimates | "Takes approximately 10 minutes" | No estimate given |
| Irish government terms with fada | "An Garda Síochána" | "An Garda Siochana" |
| Second person throughout | "You will need to provide…" | "Applicants must provide…" |
| Back link text = destination name | "Home" | "Back" / "← Back to Home" |

### Example copy patterns

| Context | Example |
|---|---|
| Page title | "Social housing application" |
| Subtitle | "Complete the following sections to apply for social housing" |
| Card heading | "Grants you could apply for" |
| Help prompt | "Need help? Chat with our digital assistant." |
| Success heading | "Your application has been submitted" |
| Time estimate | "Completing this form will take approximately 10 minutes." |
| Data source notice | "Your details are pre-filled from your MyGovID profile." |
| Complex term explanation | "Long Term Carers Contribution — Helps full-time carers qualify for the State Pension (Contributory)." |

---

## 7. Best Practices

### Mobile-first layout

- Design canvas: **390px wide** (iPhone-class mobile).
- All interactive elements full-width within the 16px page margin.
- Do not cap button width or card width on the 390px canvas.
- Test at 320px (minimum) and 428px (large phone) for robustness.
- The app is phone-first: assume one thumb, one hand, intermittent attention.

### Colour usage

- **Do** use the semantic colour tokens, not raw hex values in component code.
- **Do** pair colour with an icon or text for status communication — never colour alone.
- **Do not** use `#888888` grey for text on any light background — it fails contrast.
- **Do not** introduce new greens. The palette is intentionally constrained; use the defined scale.
- **Do not** use warm accent colours (salmon, peach) in the app UI — they are illustration-only.
- Reserve `#004D44` Deep Forest Green for the home hero, section headings, back links, and the help panel. Consistent use maintains brand recognition.

### Imagery and illustrations

- Illustrations (`illustration-house.png`, `illustration-person.png`, `illustration-frame.png`) are **decorative** — `alt=""` and `aria-hidden="true"` on all uses.
- The hero overlay texture is also decorative — do not use it as a content area.
- No photography within the app UI (other than the header overlay). The app is clean, icon-based.
- New illustrations must match the flat vector style in brand greens (`#004D44`, `#9AE1DA`, `#6DD7C0`). No gradients, no shadows within illustrations.

### Do's and Don'ts

| | Do | Don't |
|---|---|---|
| **Buttons** | One primary CTA per screen | Multiple primary buttons competing |
| **Colour** | Use semantic tokens | Hardcode hex values in components |
| **Labels** | Visible `<label>` above every input | Placeholder as label |
| **Icons** | Pair with text or `aria-label` | Icon-only interactions without label |
| **Focus** | Always visible; use gold `#FFBF47` | `outline: none` |
| **Errors** | Inline text + error summary | Red border only |
| **Touch targets** | 44px minimum, full-width rows | Small tap targets, crowded buttons |
| **Copy** | Sentence case; second person | Title Case; passive voice |
| **Irish text** | `lang="ga"` + correct fadas | Missing attribute or stripped accents |
| **Heading order** | `h1` → `h2` → `h3` sequentially | Skipped levels for visual sizing |
| **Cards** | Shadow for elevation | Added outer border |

---

## 8. Implementation Reference

### CSS custom properties

Import `colors_and_type.css` once at the document root. All tokens are available on `:root` and cascade down.

```css
/* Example usage */
.my-component {
  background-color: var(--color-bg-card);
  color: var(--color-text-primary);
  font-size: var(--text-body);
  padding: var(--card-padding);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
}
```

### React component library

Located in `ui_kits/social-housing/`. Components use Babel standalone and can be used in isolation or via the `index.html` prototype.

| File | Components exported |
|---|---|
| `Header.jsx` | `AppHeader`, `HeroHeader` |
| `Button.jsx` | `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `BackLink`, `Chip` |
| `Card.jsx` | `ServiceCard`, `ApplicationCard`, `InfoSectionCard`, `StepCard`, `HelpPanel` |
| `FormField.jsx` | `FormField`, `SelectField`, `RadioGroup`, `CheckboxGroup`, `FormSection` |
| `Navigation.jsx` | `BottomNav`, `BackLink` |

### Skip link implementation

Add as the first element inside `<body>`, visually hidden until focused:

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: #FFBF47;
  color: #0B0C0C;
  padding: 8px 16px;
  font-weight: 700;
  text-decoration: none;
  z-index: 1000;
}
.skip-link:focus {
  top: 0;
}
```

### Focus ring implementation

```css
*:focus-visible {
  outline: 3px solid #FFBF47;
  outline-offset: 2px;
}
/* Remove for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Responsive breakpoints

The design canvas is 390px. If extending to wider viewports:

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile (design target) | 390px | Primary canvas |
| Mobile minimum | 320px | Must not break |
| Large phone | 428px | Test for overflow |
| Tablet (if needed) | 768px+ | Not in current scope |

### Preview files

Open the HTML files in `preview/` in any browser to view component specimens and token references. No build step required.

| File | Shows |
|---|---|
| `colors-primary.html` | Primary green palette |
| `colors-neutrals.html` | Neutral palette |
| `colors-semantic.html` | Semantic colour tokens |
| `type-scale.html` | Full type scale specimen |
| `type-weights.html` | Lato weight specimen |
| `spacing-tokens.html` | Spacing + radius tokens |
| `spacing-shadows.html` | Shadow system |
| `components-buttons.html` | All button variants |
| `components-cards.html` | All card variants |
| `components-forms.html` | Form inputs in all states |
| `components-header.html` | App header variants |
| `components-nav.html` | Navigation patterns |
| `components-help.html` | Help panel |
| `components-accessibility.html` | Contrast audit + do/don'ts |
| `brand-harp.html` | Harp logo specimen |
| `brand-illustrations.html` | Illustration assets |

---

*Irish Government Life Events Design System · DPENDR · Design by Deloitte · Documentation v1.0 · 2026*

# Irish Government Life Events — Design System

## Overview

This design system supports the **Irish Government Life Events** project — a discovery-phase initiative led by the Department of Public Expenditure and Reform (DPENDR), with design by Deloitte. The project explores how Irish citizens can be better supported through major life events (e.g. housing, bereavement, having a child) via a unified digital service platform.

The primary product in scope is a **Social Housing Application** — a mobile-first digital form that allows citizens to apply for social housing in a single, streamlined flow.

**Source materials:**
- Figma file: `Social Housing _ Part 2 _ DEPR Copy.fig` (mounted as virtual filesystem)
  - Pages: Cover, Assets, Personas, As-Is-Journey-Final, As-Is-Report, Service-Blueprint-Final, Prototypes-Final, Target-Service-Offer-v0.1
  - The `Prototypes-Final` page contains 15 mobile app screens (390px wide)
- Copyright © 2022 Deloitte Global

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **GSDS Mobile App** | A mobile-first (390px) citizen-facing app for applying for social housing, viewing tailored supports, and managing ongoing applications. Screens include: Home (logged in), Before You Begin, Personal Details, Employment, Income, Housing Requirements, Previous Housing, Success, Profile, and 15-months-later review. |
| **Service Blueprint / Journey Maps** | Internal Deloitte/Gov worksheets mapping the as-is and target service journeys. Not public-facing; use different visual conventions (swimlane diagrams, sticky notes, etc). |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Warm, plain English, citizen-first.** The product speaks directly to the user ("you"), not about them.
- **Second person throughout.** "You recently qualified for Jobseekers Benefit" not "The applicant has qualified…"
- **Encouraging and supportive.** Headlines like "Good Morning David", "Supports tailored for you", "What happens next?"
- **Concise and instructional.** Form labels are short and clear: "Social Housing Application", "Complete the following sections."
- **No jargon.** Complex government terms are explained briefly in supporting text, e.g. "Long Term Carers Contribution — Helps full-time carers qualify for the State Pension (Contributory)."
- **Irish-English spelling and phrasing.** "avail of", "An Garda Síochána" (with fada), proper Irish department names.
- **No emoji.** The product does not use emoji anywhere.
- **Sentence case for labels and CTAs.** "Start application", "Apply now", "What happens next?" — not title case.
- **Action-oriented CTAs.** "Apply now →", "Start application", "Complete re-assessment", "Let's schedule a call"
- **Approximate time estimates.** "Completing your Social Housing application form will take approximately 10 minutes."

### Examples of copy
- Page title: *"Social housing application"* (sentence case, no article)
- Subtitle: *"Complete the following sections to apply for social housing"*
- Card heading: *"Grants you could apply for"*
- Help section: *"Need Help? Can we help right now? Chat with our digital assistant."*
- Success: *"Your application has been submitted"*
- Back link: *"Home"* (not "Back" or "← Back to Home")

---

## VISUAL FOUNDATIONS

### Colour Palette
**Primary greens (dominant):**
- Deep Forest Green `#004D44` (rgb 0,77,68) — primary brand, headings, header BG (home screen)
- Rich Green `#008660` (rgb 0,134,96) — header bar, primary CTAs (most screens)
- Action Green `#00875F` (rgb 0,135,95) — button fills
- Mid Green `#028072` (rgb 2,128,114) — accent
- Teal `#4DA373` (rgb 77,163,115) — mid accent

**Light greens / tints (backgrounds, cards):**
- Pale Mint `#D5EEDB` (rgb 213,238,219) — soft card tints
- Light Teal `#EAF4F5` (rgb 234,244,245) — card backgrounds
- Pale Green `#D5EBDF` (rgb 213,235,223) — subtle fills
- Seafoam `#BFE7E4` (rgb 191,231,228) — accent fills
- Off-White Green `#F6F4EF` (rgb 246,244,239) — warm page background

**Neutrals:**
- Near-Black `#0B0C0C` (rgb 11,12,12) — primary body text
- Dark Slate `#263238` (rgb 38,50,56) — secondary text/stroke
- Mid Grey `#585858` (rgb 88,88,88) — de-emphasised text
- Body Grey `#505A5F` (rgb 80,90,95) — supporting/secondary text
- Light Grey `#E0E0E0` (rgb 224,224,224) — dividers, card BG
- Off-White `#F5F5F5` (rgb 245,245,245) / `#FAFAFA` — page backgrounds
- White `#FFFFFF` — card surfaces, text on dark BG

**Warm accent:**
- Salmon `#EB996E` (rgb 235,153,110) — persona/service illustration tones
- Peach `#FFBE9D` (rgb 255,190,157) — illustration fill

### Typography
- **Primary typeface: Lato** (Google Fonts) — used for all UI text. Weights used: Light (300), Regular (400), Italic, Medium (500), SemiBold (600), Bold (700), Black (900).
- **Secondary typeface: Open Sans** — used sparingly in cover/report documents; not in the app UI.
- **Accent typeface: La Belle Aurore** — handwriting-style font; used in journey maps / qualitative annotations only.
- **Roboto / DM Sans** — appear only in journey map/blueprint documents, not app UI.

**Type scale (app UI):**
| Role | Size | Weight | Usage |
|---|---|---|---|
| Hero heading | 32px | Bold 700 | Welcome message, top of home screen |
| H1 | 28px | Bold 700 | Page titles |
| H2 | 24px | Bold 700 | Section headings, card titles |
| H3 | 20px | Bold 700 | Sub-section headings |
| Body large | 18px | Regular 400 | Subtitles, important descriptions |
| Body | 16px | Regular 400 | Main body copy, form labels, card text |
| Body small | 14px | Regular 400 | Supporting text, metadata, date labels |
| Caption | 12px | Regular 400 | Helper text, hints |
| Button | 16px | Regular/Medium | CTA button labels |
| Header name | 19px | Regular 400 | User name in header |
| Overline | 10px | Regular 400 | Tracking +3px, "DPENDR — life events" |

**Line heights:** 1.5× for body (24px at 16px), 1.25–1.3× for headings.
**Letter spacing:** `0.005em` on most body text; `3px` on overline labels.

### Spacing System
- Base unit: **8px**
- Common gaps: 8, 12, 16, 18, 20, 24, 32, 40, 48, 50
- Card inner padding: `20px` all sides
- Page margin: `16px` horizontal
- Section gap: `50px` between major sections
- Button padding: `12px 16px`
- Header height: `~100px` (24px status bar + 67.5px nav bar + 8px accent strip)

### Backgrounds
- App screens alternate between **white `#FFFFFF`** content panels and the **deep green `#004D44`** hero header
- The home screen hero has a full-bleed **overlay texture** (`hero-overlay.png`) at 80% opacity with `mix-blend-mode: overlay` — dark forest/birds imagery gives depth
- Before-you-begin and form screens use **`#F2F2F2`** grey-white background
- The "Before you begin" title area uses a **light grey `rgba(240,240,240,0.9)`** band
- The "Need Help" footer section uses a solid **deep green `#004D44`** full-width panel

### Cards
- **Rounded corners: `border-radius: 8–10px`**
- Card background: `#EAF4F5` (light teal) with `box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25)`
- Inner content cards on home screen: `#F0F0F0` background, `border-radius: 8px`, no shadow
- Date/status pill: white background, `border-radius: 24px`, tight padding `2px 16px`
- No borders on cards (shadow only for elevation)

### Buttons
- **Primary (filled):** `#008660` or `#004D44` bg, white text, `border-radius: 4px`, `height: 48–58px`, full-width on mobile
- **Secondary (outlined):** outlined variant available but less common
- **Tertiary:** text-only with underline; used for secondary actions like "Return to dashboard"
- **Back link:** left-arrow icon + underlined text in green; `color: #004D44`
- Buttons use an arrow icon `→` for primary CTAs

### Borders & Dividers
- Dividers inside help panel: `1px solid rgba(255,255,255,0.3)` on dark green bg
- Input field borders: `1px solid #888888` (mid grey) in default state
- No heavy outer borders on cards — elevation via shadow only

### Shadows
- Cards: `0px 4px 4px 0px rgba(0,0,0,0.25)` — clean drop shadow
- Page-level: subtle `rgba(0,0,0,0.05)` ambient shadow

### Corner Radii
- Cards: `8–10px`
- Buttons: `4px`
- Pills/chips: `24px` (fully rounded)
- Avatar/icon circles: `50%`
- Screen border: `10px` (device mockup frame only)

### Imagery & Illustrations
- Illustrations are **flat vector-style icons** in the brand green palette (`#004D44`, `#9AE1DA`, `#6DD7C0`) — house, person, piggy-bank, etc. Placed at **top-right of cards** as decorative accent.
- The hero uses a **photographic overlay** texture (aerial forest/birds) with blend mode for depth — not decorative imagery.
- Cover/report page uses full-bleed **landscape photography** (Irish countryside, green fields).
- No photography in the app UI beyond the header overlay.

### Animation & Interaction
- No explicit animation tokens defined in the Figma file.
- Interaction model is **tap to navigate** between screens — prototype uses Figma interactions.
- Hover/press states not explicitly defined; assume standard opacity/darkening for interactive states.
- Back links use a left-arrow chevron icon.

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

The system uses **Material Design-style outlined icons** (24×24px) rendered as SVG or as instances of a shared icon component library. Key icon types found:

| Icon | Usage |
|---|---|
| `arrow_forward` | Primary CTA button trailing icon |
| `arrow_back` / chevron left | Back link / navigation |
| `phone` | Help panel contact number |
| Bell / notification | Header notification icon |
| Person / avatar circle | User profile in header |
| Calendar today | Date picker fields |
| Open in new | External link |
| Info | Tooltip / help hint |
| Check / confirmed | Wizard step complete state |
| Sort / chevron down | Dropdown / sort controls |
| Notification square | Alert/notification badge |

**Icon library approach:** Shared icon components (e.g. `TypeWhite2`, `DirectionLeft2`, `Property1PhoneO2`) are built as Figma symbols wrapping SVG paths. They are **not** from a named third-party CDN icon set — they appear to be a custom Material-inspired set built into the design system.

**For implementation:** Use [Material Icons](https://fonts.google.com/icons) (filled or outlined as appropriate) as the closest CDN-available substitute. The weight and style match. Flag: *this is a substitution — the original icons are custom Figma components.*

**Harp logo:** The Irish Government "Simplified Digital Harp" (`HarpSimplifiedDigitalTextColour4`) is a stylised SVG harp with a vertical rule and text. It appears in the app header, white on green. This is the official Irish Government digital brand mark.

**Illustration style:** Flat 2-colour vector illustrations in brand greens, used as card accent images (house, piggy bank/carers, chat bubble). These are custom SVG illustrations, not from an icon library.

**Files copied:**
- `assets/logo-deloitte.jpg` — Deloitte logo (used in cover page)
- `assets/cover-bg.png` — Cover landscape background
- `assets/hero-overlay.png` — App hero header texture overlay
- `assets/illustration-house.png` — House/housing illustration
- `assets/illustration-icon.png` — Small icon illustration
- `assets/illustration-person.png` — Person/carer illustration
- `assets/illustration-frame.png` — Decorative frame illustration

---

## File Index

```
README.md                         ← This file
SKILL.md                          ← Agent skill definition
colors_and_type.css               ← CSS custom properties: colors, type, spacing
assets/
  logo-deloitte.jpg               ← Deloitte logo
  cover-bg.png                    ← Cover landscape photo
  hero-overlay.png                ← App hero texture overlay
  illustration-*.png              ← Brand illustrations
preview/
  colors-primary.html             ← Primary green palette
  colors-neutrals.html            ← Neutral palette
  colors-semantic.html            ← Semantic / state colors
  type-scale.html                 ← Typography scale specimen
  type-weights.html               ← Lato weight specimen
  spacing-tokens.html             ← Spacing + radius tokens
  spacing-shadows.html            ← Shadow system
  components-buttons.html         ← Button variants
  components-cards.html           ← Card variants
  components-forms.html           ← Form inputs
  components-header.html          ← App header component
  components-nav.html             ← Navigation / back link
  components-help.html            ← Need Help panel
  brand-harp.html                 ← Harp logo specimen
  brand-illustrations.html        ← Illustration assets
ui_kits/
  social-housing/
    README.md                     ← UI kit documentation
    index.html                    ← Interactive prototype (5 screens)
    Header.jsx                    ← App header component
    Button.jsx                    ← Button component
    Card.jsx                      ← Card component
    FormField.jsx                 ← Form field component
    HelpPanel.jsx                 ← Need Help panel
    Navigation.jsx                ← Bottom navigation / back link
```

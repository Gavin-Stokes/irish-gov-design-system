---
name: irish-gov-life-events-design
description: Use this skill to generate well-branded interfaces and assets for the Irish Government Life Events project (Social Housing application and related digital public services). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping mobile and web government services.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** Irish Government Digital Services (DPENDR — Life Events)
**Primary colour:** `#004D44` (Deep Forest Green) / `#008660` (Rich Green header)
**Font:** Lato (Google Fonts) — weights 300, 400, 500, 700, 900
**Secondary font:** Open Sans (documents/reports only)
**CSS vars:** See `colors_and_type.css`
**UI Kit:** `ui_kits/social-housing/index.html` — 5-screen interactive Social Housing Application prototype
**Assets:** `assets/` — logos, illustrations, hero overlay texture

## Key design rules

1. Sentence case for all UI copy ("Apply now", not "Apply Now")
2. Second person throughout ("You will need to provide…")
3. No emoji in UI
4. Minimum 44×44px touch targets on mobile
5. WCAG 2.1 AA required for all public-facing surfaces
6. Focus ring: `outline: 3px solid #FFBF47` (GOV.UK gold focus style)
7. Cards use `border-radius: 8–10px` + `box-shadow: 0 4px 4px rgba(0,0,0,0.25)`
8. Buttons use `border-radius: 4px` — not pill-shaped
9. The Irish Government Harp mark appears in the app header (white on green)
10. Back links use a left chevron + underlined text in `#004D44`

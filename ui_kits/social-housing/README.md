# Social Housing UI Kit

A high-fidelity, click-through prototype of the Irish Government Social Housing Application mobile app (390px wide, iOS-style frame).

## Screens

| Screen | File reference | Description |
|---|---|---|
| 01 Home | `index.html` → `HomeScreen` | Dashboard with hero header, application card, tailored supports, help panel |
| 02 Before You Begin | `index.html` → `BeforeYouBeginScreen` | Pre-application checklist, section overview, data notice |
| 03 Personal Details | `index.html` → `PersonalDetailsScreen` | Form with pre-filled MyGovID fields, validation |
| 04 Employment | `index.html` → `EmploymentScreen` | Radio-group employment status, conditional employer field |
| 05 Success | `index.html` → `SuccessScreen` | Confirmation screen with reference number, next steps |

## Components

| Component | File | Description |
|---|---|---|
| `AppHeader` / `HeroHeader` | `Header.jsx` | App header bar (standard + hero variants) |
| `PrimaryButton` / `SecondaryButton` / `TertiaryButton` / `BackLink` / `Chip` | `Button.jsx` | All button variants |
| `ServiceCard` / `ApplicationCard` / `InfoSectionCard` / `StepCard` / `HelpPanel` | `Card.jsx` | Content cards and help panel |
| `FormField` / `SelectField` / `RadioGroup` / `CheckboxGroup` / `FormSection` | `FormField.jsx` | Form inputs in all states |

## Design Specs

- **Canvas width:** 390px (mobile-first)
- **Primary font:** Lato (Google Fonts)
- **Primary brand color:** `#004D44` (Deep Forest Green)
- **Header:** `#008660` (Rich Green) for standard screens; `#004D44` + overlay texture for home hero
- **Cards:** `#EAF4F5` background, `border-radius: 10px`, `box-shadow: 0 4px 4px rgba(0,0,0,0.25)`
- **Buttons:** `#00875F` fill, `border-radius: 4px`, `height: 48–58px`
- **Icons:** Material Icons (substituting custom Figma icon set)

## Usage

Open `index.html` directly in a browser. Use the sidebar to navigate between screens. All navigation links are clickable within the prototype.

To use components in isolation, load the relevant `.jsx` file with Babel standalone after importing React.

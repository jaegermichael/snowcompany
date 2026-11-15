# Design brief: Frozen Solutions Zimbabwe (Mikey Builds pass)

## 1. Business and conversion
- **Business:** Frozen Solutions, Harare. Supplies, installs and supports commercial ice machines (60–120kg / 24h) and ice cream equipment nationwide.
- **Audience:** restaurant, hotel, bar, supermarket and cafe owners; first-time ice/ice cream entrepreneurs.
- **Primary visitor question:** "Which machine fits my business, and will someone local install and support it?"
- **Conversion:** quote request via WhatsApp (+263 77 614 6858) or email, with the product preselected.
- **Routes:** single page with anchors. There are not enough distinct pages of content to justify routes.

## 2. What sells it
Right-sized capacity plus local after-sales support (installation, training, spare parts). The machines are commodity hardware, so the guidance and support are what set the business apart.

## 3. Evidence and assets
- Verified content: everything in `src/data/site.ts`, carried over from the live site (eb6a911).
- Missing: client-supplied logo (current mark was made by us), ice-cream equipment photos, social accounts, warranty terms.
- Images: 60kg 1080², 100kg 387×516 (real photo), 80kg 447², 120kg 225². All are shown at card size (max ~300 CSS px), never as a hero background. The 120kg is soft at 2× DPR.
- Must survive: capacity hero stage, capacity finder, WhatsApp hand-off, FAQ copy, contact details.

## 4. Personality
- **Cold:** deep ink surfaces, frosted glass, drifting specks, ice-blue (#00AEEF) signal.
- **Practical:** mono spec labels, "kg / 24h" set large like a datasheet, explicit capacity guidance.
- **Local:** Harare contact details always one tap away (island contact action, WhatsApp button).

## 5. Layout family
- **Dominant:** dark cinematic product hero with a focal selector (capacity stage).
- **Secondary:** editorial ruled sections (ice-cream index list, FAQ split, services ruled grid).
- **Accent:** guided choice (capacity finder, recipe 22) and a scroll-linked process rail (recipe 21).

## 6. Type, colour, navigation, signature
- **Type:** Bricolage Grotesque (display and body, optical sizing), IBM Plex Mono (labels and specs).
- **Tokens:** ink #07101E / ink-2 #0F172A, frost #F2F7FA, ice #00AEEF, ice-deep #0072A3 (accessible text on light), ice-mist #D6F1FB.
- **Navigation:** expanding Mikey Island. Ink glass with an ice accent; links are the finder, ice machines, ice cream, startups, support and FAQ; the contact action is "Get a quote" to #contact.
- **Hero lettering:** outlined "FROZEN / SOLUTIONS" behind the capacity stage, aria-hidden.
- **Mikey Thread:** "cinematic" variant. An ice-blue fill and marker on a faint white rule in the left gutter (desktop ≥ 760px only).
- **Social dock:** omitted because no verified accounts exist. Add one when the client supplies real URLs.

## 7. Sections
| # | Section | Geometry / interaction | Mobile | Evidence |
|---|---|---|---|---|
| 1 | Hero | Copy left, capacity stage right (tabs, arrow keys), glass lettering behind | Stacked; lettering 48vw | Live site hero + product cards |
| 2 | Industry ticker | Marquee, pauses on hover | Same; static wrap on reduced motion | Live "Who we serve" |
| 3 | Capacity finder | Radios to recommendation card | Stacked chips | FAQ capacity answer |
| 4 | Ice machines | 4 product cards, pointer frost light | 1–2 columns | Live product cards |
| 5 | Ice cream | Sticky intro + numbered index rows to quote | Normal flow | Live ice-cream cards |
| 6 | Startups | Ice-blue band + WhatsApp form | Stacked | Live entrepreneur block |
| 7 | Support + process | Ruled 8-up grid; process **rail** fills with scroll | Compact rail beside text | Live services + steps |
| 8 | FAQ | Split, accordion | Stacked | Live FAQ |
| 9 | Contact | Details + form (WhatsApp/email) | Stacked | Live contact |

## 8. Motion plan
- **Hero:** load choreography: eyebrow, then headline, copy, CTAs and badges (0–320ms stagger, 900ms rise of 24px). The capacity stage swaps with a 600ms blur/scale settle.
- **Focal scroll interaction:** the process rail (recipe 21). Reading line at 55% of the viewport; fill `scaleY(p)` and a marker follow measured node positions; nodes become active as the line passes them, and reversing scroll reverses them.
- **Reveals:** 28px rise over 800ms with a 60–100ms stagger inside groups, triggered at 8% visibility.
- **Controls:** buttons change colour over 300ms; card lift of 6px; ice-cream row arrow rotates 45°; FAQ grid-row expansion over 500ms.
- **Island:** spring-driven width/height (stiffness 280, damping 34). It contracts to 390px after the hero and shows the active chapter.
- **Thread:** a single rAF write of document progress.
- **Reduced motion:** reveals are visible immediately; there are no specks, marquee, sheen, thread marker or rail marker. The island snaps to its final size.

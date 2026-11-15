# Progress

## 2026-11-15 — Full remake (branch `redesign/remake`)
- Rebuilt the site from scratch in React 19 + TypeScript + Vite + Tailwind 3. Old JSX components and the stray `react-app/` copy removed.
- New art direction: deep "freezer" ink with frosted glass, ice-blue (#00AEEF) from the logo, Bricolage Grotesque + IBM Plex Mono, drifting snow specks, sheen on "chilled".
- Focal interactions: hero capacity stage (60/80/100/120kg tabs, arrow-key support) and a Capacity Finder (business type → suggested capacity, from the site's own FAQ guidance).
- All forms now hand off to WhatsApp (prefilled message) or email; product "Quote" buttons preselect the contact form.
- Font Awesome CDN removed (lucide-react icons instead).
- Checked locally: build + typecheck, oxlint, `git diff --check`, desktop / 375px / 320px (no horizontal overflow), mobile menu (Escape, outside click, close on scroll), form `checkValidity()`, WhatsApp message output.
- Pushed `redesign/remake`, fast-forwarded `master` to 38545ef (user approved). Vercel production deploy succeeded.
- Live check: www.snowcompany.co.zw, snowcompany.co.zw and snowcompany.vercel.app all serve the new bundle (index-B8U57bRA.js), no console errors, no broken images, no overflow at 375px, finder → quote prefill works.
- Previous version recoverable at commit eb6a911.

## 2026-11-15: Mikey Builds pass (branch `redesign/remake`)
- Added `docs/DESIGN-BRIEF.md`.
- Mikey Island replaces the old header: a spring-driven capsule that expands to a 6-link index plus a "Get a quote" action, contracts to 390px after the hero and shows the active chapter (`src/components/mikey/`).
- Glass hero lettering: outlined "FROZEN" as a cropped band along the bottom of the hero (decorative, aria-hidden). The capacity watermark inside the stage card was removed.
- Mikey Thread: an ice-blue fixed progress rule in the left gutter (desktop ≥ 760px).
- Focal scroll chapter: the "3 easy steps" cards became a scroll-linked process rail (`ProcessRail.tsx`). Nodes activate at a 55% reading line, and the effect reverses on scroll-up.
- QA in headless Chrome (the in-app pane pauses requestAnimationFrame while hidden) at 1366×800, 1280×560, 375, 320 and reduced motion: island open/close, mid-animation reversal, Escape plus focus return, outside click, link selection, compact plus active chapter, restore at top, panel fits short screens, rail progress forward/back, thread progress, no overflow, no console errors.
- Skipped: photo enhancement. No local upscaler is available, and external AI upload of client photos needs approval.

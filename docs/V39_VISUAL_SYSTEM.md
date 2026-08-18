# MONIEZI v39 Visual System

Version: 39.0.22

This is the visual foundation for the v39 redesign. It defines how illustrations, empty states, section hierarchy, typography and visual accents should work before individual screens are redesigned.

## Core rule

**Illustration when MONIEZI needs to invite or explain. Data when MONIEZI has real records to show. Icons for navigation and fast recognition.**

The redesign must not turn data-rich bookkeeping screens into decorative screens. Visual scenes belong primarily in onboarding, first-use states, empty states and selected feature introductions.

## Illustration style

MONIEZI illustrations should feel like expanded versions of the app's existing colored outline icons rather than unrelated stock art.

- Flat, geometric composition.
- Clean outline-first drawing with restrained fills.
- Default illustration stroke: **1.5 px**.
- Rounded line caps and joins.
- One dominant accent plus no more than two supporting accents per scene.
- No photorealism, gradients that mimic 3D plastic, heavy shadows, or highly detailed characters.
- Prefer business objects and simple human gestures over detailed faces.
- Illustrations must work on both light and dark backgrounds.
- Important meaning cannot depend on color alone.

### Scene vocabulary

The planned v39 scene family is:

- Welcome / installation
- Privacy / offline ownership
- Demo business
- Income
- Expense
- Invoice
- Estimate
- Receipts
- Mileage
- Clients
- Jobs / Projects
- Reports
- Tax readiness

Each scene should reuse the same drawing language, line weight and palette.

## Palette

The v39 illustration palette extends the existing MONIEZI blue system:

- Blue: `#4F7CFF`
- Cyan: `#35C8E6`
- Teal: `#37C9BB`
- Green: `#58D6A4`
- Violet: `#9D7CFF`
- Rose: `#FF7F9F`
- Amber: `#F7BF4F`

Dark mode uses the same accents against the existing navy surfaces. The illustration should not introduce a new app-wide background color system.

## Typography

MONIEZI continues to use **Plus Jakarta Sans Variable**.

- Body / selectable content: 400
- Category / small emphasis: 500
- Major screen and empty-state headings: 600 maximum
- Avoid 700-heavy interfaces unless a very specific KPI requires it.
- Use size, spacing and contrast before increasing weight.

## Empty-state composition

A standard empty state has four levels only:

1. One illustration.
2. One short headline.
3. One concise supporting sentence when needed.
4. One primary action.

A secondary text action is allowed only when there is a real alternate path.

Do not repeat the screen title in the empty-state headline. Do not explain obvious controls. Do not list every feature just to fill space.

Once real records exist, the illustration should disappear or become a very small secondary accent. The user's data becomes the visual hero.

## Home / dashboard architecture

The Home screen should use clear sections rather than a continuous wall of visually identical cards. The planned hierarchy is:

- Overview
- Your Business
- Records
- Reports & Tax

Section identity should come from spacing, small icon-led headers, surface hierarchy and card content—not giant banners or a different color for every section.

## Surface hierarchy

Keep the v38/v39 dark-blue identity, but maintain clear depth:

1. App chrome / shell: deepest navy.
2. Section / standard card: blue-navy surface.
3. Inset / input: darker than the containing card.
4. Hero KPI: brighter blue treatment.
5. Illustration stage: subtle, low-contrast framed surface.

Strong card delineation remains a MONIEZI requirement. Borders must be visible enough to separate adjacent cards.

## Motion

Any v39 illustration motion should be optional and restrained.

- 150–250 ms UI transitions.
- Small opacity/translate changes only.
- Respect `prefers-reduced-motion`.
- No looping decorative motion on bookkeeping screens.

## Accessibility

- Decorative illustrations are `aria-hidden`.
- Meaningful illustrations receive a concise accessible label.
- Text and controls must retain required contrast independently of illustration colors.
- Do not place essential text inside raster artwork.
- Touch targets remain at least 44 px.

## Reusable implementation added in v39.0.1

- `src/design/v39VisualSystem.ts` — tokens, scene names and semantic accents.
- `src/components/visual/MonieziVisualStage.tsx` — shared illustration stage.
- `src/components/visual/MonieziEmptyState.tsx` — shared empty-state composition.
- `src/components/visual/MonieziSectionHeader.tsx` — Home/dashboard section hierarchy.
- v39 CSS variables and component styles in `src/index.css`.

These primitives are intentionally not wired into production screens yet. Individual screens will migrate one at a time so functionality remains stable and each visual change can be reviewed separately.

## Recommended implementation order after this foundation

1. Welcome / activation / installation.
2. Empty Invoice and Estimate states.
3. Empty Jobs, Receipts, Mileage and Clients states.
4. First-run / Demo introduction.
5. Home dashboard section architecture.
6. Remaining consistency audit.


## v39.0.2 production migration

The first production visual pass now uses the v39 system in three controlled areas:

- Welcome / license activation uses an original MONIEZI ledger scene and a new responsive activation composition.
- A true zero-record Invoices screen uses the Invoice visual scene and `MonieziEmptyState`.
- A true zero-record Estimates screen uses the Estimate visual scene and `MonieziEmptyState`.
- Filtered views that happen to contain zero matching records remain compact. Large illustrations appear only when the underlying document collection is genuinely empty.

The original SVG scene family is implemented in `src/components/visual/MonieziVisualScenes.tsx`. No invoice, estimate, license-validation, storage, PDF, filtering, or editing business logic is changed by this pass.


## v39.0.22 illustrated empty-state expansion

The v39 visual language now extends to four additional true-empty areas:

- Home Receipts uses a receipt-capture scene when there are no receipt records yet.
- Mileage uses a route/car scene when there are no mileage trips yet.
- Clients uses a contact/client scene only when the entire client collection is empty.
- Jobs / Projects uses a connected-work scene only when the entire jobs collection is empty.

Search/filter views with existing underlying records remain compact. This preserves the core v39 rule: illustrations invite and explain before data exists; once records exist, the user's data becomes the visual focus.

## v39.0.22 approved production illustration assets

Receipts, Clients, and Mileage now use separate approved raster illustration pairs instead of generated inline SVG scenes. Each feature has one light asset and one dark asset, and the existing theme-aware illustration pair switches between them automatically. The assets are precached by the service worker for offline use. No feature business logic or empty-state behavior changes in this pass.

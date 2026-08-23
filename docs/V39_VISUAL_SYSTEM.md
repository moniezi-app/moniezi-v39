## v39.4.9 tighter radius + stronger first-run state badge

- Tightened non-pill radius tokens to 10px card / 8px surface / 7px control / 8px icon / 6px small.
- Preserved semantic pills and circles.
- Increased the Home first-run state badge size, padding, icon presence, and contrast in both Explore and Ready states.

## v39.4.7 GitHub Actions typecheck fix

- Adds `Page.Insights` to the exhaustive routed-page safety list so the v39.4.6 full-page Insights route passes TypeScript and cannot fall through to the navigation-error safety net.
- No visual-system behavior changes in this patch.
- Business Insights is now a normal routed portrait page, not a modal or nested scrolling panel.
- The global brain icon and Home Insights action navigate to the Insights page.
- The redundant business-signal count line and modal close control are removed.
- High / Medium / Need Action remain vertically stacked, one item per row.
- Empty Home now uses the same scroll-to-top visibility rule as every other scrollable screen.

## v39.4.5 portrait-first Business Insights + persistent scroll-to-top

- Business Insights uses a vertical mobile hierarchy instead of a two-column status grid.
- Refresh/close controls are separated from the title row.
- High, Medium and Need Action summaries each occupy their own row with generous vertical spacing.
- Scroll-to-top remains visible to the bottom once activated.

## v39.4.4 shared mobile geometry + internal card insets

- Home and Reports remain the reference for correct mobile width rhythm.
- Shared geometry now distinguishes **page gutter**, **card shell**, **card-content inset**, and **nested-content inset**.
- Shared record empty states apply the content inset to copy, feature rows, and primary actions while leaving illustration stages full-width.
- Home Receipts uses the nested-content inset because the empty state is already inside a padded glass card.
- The objective is consistent perceived width across screen types without blindly changing screens that already look correct.

## v39.4.3 responsive width + overlay correction

- Main authenticated screens share one mobile horizontal-gutter rule instead of relying on page-by-page width assumptions.
- Direct children of the main scroll surface are explicitly constrained to the available inline size.
- Business Insights now uses content-driven height with a viewport maximum; short states no longer render a tall empty shell.
- Floating scroll-to-top visibility accounts for distance from the bottom so final actions remain unobstructed.
- Reports uses direct report-oriented intro copy.

## v39.4.2 installed-success simplification

- Removes the browser-tab licensing explanation from the mobile install gate.
- Post-install confirmation is reduced to a clear success message plus **Got it**.
- **Got it** attempts to close the browser tab so the customer can continue from the installed MONIEZI Home Screen icon.
- Chrome/Android and Safari/iPhone/iPad remain the only officially supported mobile installation paths.

## v39.4.1 simplified supported mobile installation

Real-device installation QA reduced MONIEZI's official mobile install matrix to two predictable paths:

- **Android:** Google Chrome.
- **iPhone/iPad:** Safari.
- Android non-Chrome browsers receive a Chrome handoff screen with Copy app link.
- iPhone/iPad non-Safari browsers receive a Safari handoff screen with Copy app link.
- Safari guidance uses the tested sequence: Share → View More → scroll down → Add to Home Screen → keep Open as Web App enabled → Add.
- The multi-browser guide selector and browser-specific Firefox, Edge, Samsung Internet, and Chrome-iOS install flows are removed.
- Installation still happens before license activation; the activation form remains inside the installed standalone PWA.

# MONIEZI v39 Visual System

Version: 39.4.9

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


## v39.1.0 Luminous Glass dashboard surfaces

The Home dashboard now adds a second visual layer to the v39 illustration system: reusable **Luminous Glass** surfaces for data-rich business cards. The goal is stronger card separation and depth without turning the bookkeeping UI into neon decoration.

- Major Home cards use layered navy/frosted surfaces, gradient edge light, inner highlights, and restrained ambient glow.
- Dark mode carries the strongest luminous expression; light mode uses the same geometry with quieter frosted-white surfaces and blue-tinted edge depth.
- `MonieziGlassCard`, `MonieziGlassInset`, `MonieziGlassIcon`, `MonieziGlassAction`, `MonieziGlassSegments`, and `MonieziGlassMetric` are presentation-only primitives in `src/components/visual/MonieziGlass.tsx`.
- Net Profit is the Home anchor card; Needs Your Attention, Monthly Business Goals, and Jobs use the same material hierarchy.
- Continue Work and the remaining Home business cards use a quieter secondary glass intensity.
- The sticky footer keeps the existing destinations and behavior but replaces the solid active block with an illuminated selection well.
- No storage schema, accounting logic, licensing flow, report logic, or feature persistence is changed by the surface system.

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


## v39.2.0 Application-wide Luminous Glass rollout

The v39.1.0 Home/dashboard material system is now the application-wide presentation layer. Working screens use two intensity levels: primary record/report panels receive the full glass perimeter and depth treatment, while nested metrics, filters, controls and form fields use quieter inset glass. Semantic warning/success colors remain visible and PDF/print document previews stay deliberately white.

Covered surfaces include Activity, Income, Expenses, Invoices, Estimates, Mileage, Reports, Tax tools, Clients, Jobs / Projects, Settings, global search, drawers, form shells, custom selects, empty states and confirmation modals. Light and dark modes use the same hierarchy with different glow intensity.

## v39.3.0 navigation architecture

The persistent footer now follows the primary service-business lifecycle: **Home · Clients · Jobs · Estimates · Invoices · Mileage**. Activity and Reports remain in the complete application directory. Estimates and Invoices intentionally share the billing page while maintaining separate footer actions and active states.


## v39.3.4 Monthly Goals cleanup

- First-run and post-demo empty Dashboard experience must use the same Luminous Glass card/inset hierarchy as the working Home dashboard.
- Avoid oversized nested shells that make onboarding/empty states look like a separate application.
- Monthly Business Goals no longer uses decorative target/dart artwork; the empty state is text + action only.
- v39.3.0 lifecycle footer architecture remains unchanged.

## v39.4.0 install-first mobile onboarding

MONIEZI now separates mobile installation from commercial activation so browser differences do not strand a customer inside Safari, Chrome, Firefox, Samsung Internet, or Edge after entering a license key.

- A normal iPhone/iPad or Android browser is treated as an installation launcher.
- The mobile browser first shows **Install MONIEZI**; it does not show the license-key form.
- Standalone mode is detected synchronously on the first React render using `display-mode: standalone` plus the iOS `navigator.standalone` fallback.
- Browser-aware guidance covers Safari, Chrome, Firefox, Samsung Internet, Edge, and an unknown-browser fallback with a manual guide selector.
- Android Chromium-family browsers use `beforeinstallprompt` when the browser exposes it; otherwise the user receives the matching manual steps.
- After installation, the browser tells the customer to open MONIEZI from the Home Screen. The Welcome / Activation screen belongs to the installed PWA.
- Desktop retains the prior license-first flow and can still use the native browser install prompt when available.
- License validation, device binding, offline grace, Demo behavior, storage, and business logic are unchanged.

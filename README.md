# MONIEZI v39.1.0

## v39.1.0 Luminous Glass dashboard system

- Introduces the reusable Luminous Glass card, inset, icon-well, action, segmented-control, and metric primitives.
- Redesigns Home around premium layered surfaces with controlled blue/cyan edge illumination in dark mode and a quieter frosted translation in light mode.
- Moves the Overview identity and primary add action into the Net Profit hero card, with side-by-side IN / OUT metrics.
- Redesigns Needs Your Attention and Monthly Business Goals with nested glass hierarchy while preserving existing logic.
- Adds a compact Home Jobs summary derived from existing job, estimate, and invoice data without adding new stored counters or statuses.
- Applies the quieter glass treatment to Continue Work, Invoices & Collections, Sales Pipeline, Recent Activity, Tax Snapshot, and Receipts.
- Refines the sticky footer selection from a solid blue block to an illuminated glass selection well.
- Preserves existing licensing, PWA, IndexedDB/localStorage, demo/reset, reports, invoices, estimates, receipts, mileage, goals, and Jobs persistence behavior.


Controlled visual-redesign branch for MONIEZI v39.

## v39.0.28 jobs illustration and welcome activation-first layout

- Replaces the Jobs / Projects empty-state illustration with the newly approved shared transparent illustration, used in both light and dark mode.
- Reworks the welcome/license screen so activation comes earlier: the benefits strip moves below the activation card and the hero section is reduced so users reach the license field sooner.
- Keeps the approved transparent shared-illustration rule for the other custom illustration screens.

## v39.0.28 shared illustrations across themes

- Uses one approved illustration asset in both light and dark mode for Receipts, Clients, Mileage, Invoices, and Estimates.
- Receipts, Clients, and Mileage use their approved light-mode transparent artwork as the shared master.
- Invoice and Estimate use their approved light illustrations with only the connected outer canvas removed, preserving the document artwork while allowing it to sit directly on either app background.
- Removes the theme-specific illustration switching for these five screens.
- Keeps the shared demo-business illustration behavior introduced in v39.0.26.

## v39.0.28 shared demo-business illustration

- Uses the approved light-mode demo-business illustration in both light and dark themes.
- Removes the dark-specific demo illustration because the light illustration reads more clearly on MONIEZI's dark background.
- Keeps the illustration transparent with no baked rectangular background.

## v39.0.28 dark-mode demo illustration contrast refinement

- Replaces the dark-mode demo-business illustration with a higher-contrast professional version for better separation from MONIEZI's dark screen background.
- Keeps the approved light-mode illustration.
- Continues using transparent illustration assets with no baked rectangular background.

## v39.0.28 demo-business illustration upgrade

- Replaces the simple first-run demo graphic with the approved detailed MONIEZI business dashboard illustration.
- Adds separate approved light and dark production assets.
- Both assets use real transparency: no baked light/dark rectangle, no checkerboard, and no illustration background panel.
- The illustration now depicts the demo experience itself: dashboard charts, records, receipts, mileage, reports, and business activity.
- Keeps the existing theme selector, demo counts, demo loading behavior, and first-run workflow unchanged.

## v39.0.23 transparent illustration integration

- Replaces the Receipts, Clients, and Mileage light/dark production assets with normalized transparent artwork.
- Removes baked-in rectangular dark backgrounds so illustrations sit directly on the MONIEZI app surface.
- Removes any checkerboard/transparency-preview appearance from production assets.
- Normalizes crop, canvas, and visible artwork scale across each light/dark pair.
- Keeps the approved Receipts, Clients, and Mileage concepts and all existing business logic unchanged.
- Precaches all six new transparent illustration assets for offline use.

## v39.0.22 approved Receipts / Clients / Mileage illustrations

- Replaces the rejected generated SVG artwork on Receipts, Clients, and Mileage with the user-approved production illustrations.
- Adds six separate optimized assets: light and dark variants for Receipts, Clients, and Mileage.
- Each screen automatically follows the current MONIEZI theme and shows only its matching illustration.
- Receipts depicts a paper receipt moving into the app and being confirmed.
- Clients depicts individual client records being organized into a centralized client file.
- Mileage depicts a vehicle trip, route/destination, and the recorded trip inside the app.
- Keeps all existing business logic, empty-state copy, actions, filtering, and other v39 behavior unchanged.

## v39.0.21 mileage and receipts illustration fixes

- Fixes the Mileage illustration so the trip route and destination read as one clear trip story inside the map instead of an ambiguous route-to-nowhere.
- Fixes the Receipts illustration so the receipt currency mark is an unmistakable $ sign for the U.S.-focused app.
- Replaces the confusing top-right Receipts badge with a clearer sync/capture confirmation symbol.
- Keeps the v39 illustrated empty-state expansion for Receipts, Mileage, Clients, and Jobs / Projects.

## v39.0.21 illustrated empty-state expansion

- Extends the v39 illustrated empty-state treatment beyond Invoices and Estimates.
- Adds a new illustrated true-empty state for Clients.
- Adds a new illustrated true-empty state for Jobs / Projects.
- Adds a new illustrated true-empty state for Mileage when no trips exist yet.
- Adds a new illustrated true-empty state for the Home Receipts module when no receipt records exist yet.
- Keeps filter/search zero states compact when records already exist but the current view has no matches.
- Preserves all invoice, estimate, receipts, mileage, jobs, and client business logic while making more of the app feel visually consistent with the approved v39 direction.

## v39.0.19 Invoice / Estimate empty-state readability

- Adds more vertical breathing room between the approved illustration and the empty-state headline.
- Increases spacing between the headline and supporting copy.
- Increases supporting-copy line height for easier mobile reading.
- Adds more space between benefit rows and between each benefit title and description.
- Adds more space before the primary CTA so the empty state can scroll naturally rather than compressing the content.
- Applies identically to Invoices and Estimates in both light and dark modes.
- Preserves the approved illustrations, copy, CTA behavior, business logic, and all existing v39.0.18 functionality.

## v39.0.18 license activation confirmation timing

- Uses the approved light Invoice illustration in light mode.
- Uses the approved light Estimate illustration in light mode.
- Uses the approved dark Invoice illustration in dark mode.
- Uses the approved dark Estimate illustration in dark mode.
- Keeps the single primary CTA only; the misleading “Learn how…” links remain removed.
- Forces CTA label and plus icon to white in light and dark modes.
- Precaches all four approved empty-state illustration assets for offline use.

This build fixes the production placement of the approved Invoice and Estimate illustrated empty states.

- When there are zero invoices, the approved Invoice empty-state illustration now appears directly after the Invoices/Estimates selector.
- When there are zero estimates, the approved Estimate empty-state illustration now appears directly after the selector.
- Period controls, zero-count status filters, and the invoice $0 summary are hidden while the selected document type is truly empty.
- Once the first invoice or estimate exists, the normal operational controls return automatically.
- Filtered-zero states remain compact when records exist but the current filter/time period has no matches.
- The approved illustrations, dark/light theme behavior, creation flows, filtering, statuses, PDF/export behavior, and all business logic are preserved.

## v39 baseline rules

- Preserve all existing MONIEZI functionality while the visual redesign is developed in controlled passes.
- Keep v38 available as the stable rollback/reference build.
- v39 business data, receipts, theme, demo state, KPI preferences, and insight-dismissal state use v39-specific browser storage.
- v39 does **not** automatically import v38 or legacy business data. Use MONIEZI backup/restore explicitly when test data should be moved between versions.
- The device identity remains shared with v38 during parallel testing so validating the same license on the same physical device does not unnecessarily consume another device slot. The v39 license record itself is stored separately.
- The PWA manifest ID and service-worker cache are v39-specific so v38 and v39 can be installed/tested independently.

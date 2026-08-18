# MONIEZI v39.0.20

Controlled visual-redesign branch for MONIEZI v39.

## v39.0.20 illustrated empty-state expansion

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

# MONIEZI v39.0.15

Controlled visual-redesign branch for MONIEZI v39.

## v39.0.15 invoice and estimate true-empty-state priority correction

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

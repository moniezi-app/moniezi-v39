# MONIEZI v39.0.10

Controlled visual-redesign branch for MONIEZI v39.

This package preserves the approved v39 welcome-screen direction, the v39 Android/PWA identification update, and the proof-matched onboarding work, while correcting the Invoices and Estimates true-empty states so they use the approved illustrations rather than substitute drawings.

## v39.0.10 approved invoice and estimate illustration correction

This build corrects the visual implementation of the Invoices and Estimates true-empty states.

- Replaced the substitute generated SVG empty-state scenes with the approved invoice and estimate illustrations.
- Added dedicated optimized production illustration assets for the Invoice and Estimate true-empty states.
- Kept the approved light illustration appearance across both app themes instead of letting dark mode recolor the artwork.
- Preserved the existing empty-state copy, benefit rows, primary CTA buttons, and secondary learn-more links.
- Kept filtered-zero states compact so the large illustrations appear only when there are truly no invoices or no estimates.
- Preserved invoice and estimate creation/editing, filtering, statuses, client linkage, PDF export, and all related business logic.

## v39 baseline rules

- Preserve all existing MONIEZI functionality while the visual redesign is developed in controlled passes.
- Use a separate repository/project path such as `moniezi-v39`.
- Keep v38 available as the stable rollback/reference build.
- v39 business data, receipts, theme, demo state, KPI preferences, and insight-dismissal state use v39-specific browser storage.
- v39 does **not** automatically import v38 or legacy business data. Use MONIEZI backup/restore explicitly when test data should be moved between versions.
- The device identity remains shared with v38 during parallel testing so validating the same license on the same physical device does not unnecessarily consume another device slot. The v39 license record itself is stored separately.
- The PWA manifest ID and service-worker cache are v39-specific so v38 and v39 can be installed/tested independently.

## Documentation

This clean source intentionally does not carry individual per-build `*_RELEASE_NOTE.md` files. Deployment and license configuration are documented in `DEPLOYMENT_AND_LICENSE_SETUP.md`.

# MONIEZI v39.0.8

Controlled visual-redesign branch for MONIEZI v39.

This package preserves the approved v39 welcome-screen direction, the v39 Android/PWA identification update, and the proof-matched onboarding work, while bringing the Invoices and Estimates true-empty states into the production visual system.

## v39.0.8 invoices and estimates empty-state redesign

This build implements the approved proof for the Invoices and Estimates true-empty states.

- Redesigned the **Invoices** true-empty state with a light illustrated scene, benefit rows, primary CTA, and learn-more link styling.
- Redesigned the **Estimates** true-empty state with its own distinct illustration, benefit rows, primary CTA, and learn-more link styling.
- Kept filtered-zero states compact so large illustrations appear only when there are truly no invoices or no estimates.
- Preserved invoice and estimate creation/editing, filtering, statuses, client linkage, PDF export, and all related business logic.
- Kept the rest of the v39 onboarding and welcome experience unchanged.

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

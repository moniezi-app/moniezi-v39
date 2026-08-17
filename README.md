# MONIEZI v39.0.2

Controlled visual-redesign branch for MONIEZI v39.

This package starts from the complete v38.0.36 application and preserves its functionality while the v39 visual system is migrated into production screens one pass at a time. v38 remains the stable rollback/reference baseline.


## v39.0.2 visual identity pass

This build is the first production use of the v39 visual system.

- Redesigned Welcome / License Activation screen.
- Added original MONIEZI Welcome, Invoice, and Estimate SVG scenes.
- Added illustrated true-empty states for Invoices and Estimates.
- Kept filtered-zero states compact so illustrations never replace real data or normal filter feedback.
- Preserved license validation, invoice/estimate creation and editing, filtering, PDF export, storage, and all other existing business logic.

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

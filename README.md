# MONIEZI v39.0.3

Controlled visual-redesign branch for MONIEZI v39.

This package starts from the complete v38.0.36 application and preserves its functionality while the v39 visual system is migrated into production screens one pass at a time. v38 remains the stable rollback/reference baseline.

## v39.0.3 deployment alignment

This build keeps the v39.0.2 visual identity pass and corrects the new-repository deployment configuration to match the working v38 licensing setup.

- Uses the existing MONIEZI license Worker: `https://moniezi-license-v37.moniezi-vg.workers.dev`.
- GitHub Pages workflow uses only `VITE_LICENSE_API_BASE` as the repository variable for the front-end build.
- The same public Worker URL is included as a safe fallback if that repository variable has not yet been created.
- No GitHub repository secrets are required for the MONIEZI front-end build.
- Updates the v39 PWA cache identifier to v39.0.3 so this deployment is not held behind the earlier v39.0.1 cache name.
- Preserves all v39.0.2 functionality and visual changes.

## v39.0.2 visual identity pass

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

Deployment and license configuration are documented in `DEPLOYMENT_AND_LICENSE_SETUP.md`.

# MONIEZI v39.0.7

Controlled visual-redesign branch for MONIEZI v39.

This package preserves the approved v39.0.4 welcome-screen direction and the v39.0.5 Android/PWA identification update, while redesigning the early-use install and demo experience to match the newer MONIEZI visual language.

## v39.0.7 install and demo experience redesign

- Redesigned the **Install MONIEZI** prompt into a lighter, more polished onboarding invitation.
- Redesigned the **MONIEZI is installed** confirmation into a clearer success-state overlay.
- Redesigned the **Load the demo** / **Record my first entry** card on the Dashboard first-run state.
- Replaced the earlier dark, boxy onboarding cards with lighter branded surfaces, clearer hierarchy, and stronger CTA treatment.
- Preserved all install detection logic, demo loading/clearing behavior, skip behavior, and core MONIEZI functionality.

## v39 baseline rules

- Preserve all existing MONIEZI functionality while the visual redesign is developed in controlled passes.
- Use a separate repository/project path such as `moniezi-v39`.
- Keep v38 available as the stable rollback/reference build.
- v39 business data, receipts, theme, demo state, KPI preferences, and insight-dismissal state use v39-specific browser storage.
- v39 does **not** automatically import v38 or legacy business data. Use MONIEZI backup/restore explicitly when test data should be moved between versions.
- The device identity remains shared with v38 during parallel testing so validating the same license on the same physical device does not unnecessarily consume another device slot. The v39 license record itself is stored separately.
- The PWA manifest ID and service-worker cache are v39-specific so v38 and v39 can be installed/tested independently.
- Android/PWA display name remains **MONIEZI v39** for easier side-by-side testing against the older MONIEZI installation.

## Documentation

This clean source intentionally does not carry individual per-build `*_RELEASE_NOTE.md` files. Deployment and license configuration are documented in `DEPLOYMENT_AND_LICENSE_SETUP.md`.

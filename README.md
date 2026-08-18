# MONIEZI v39.0.11

Controlled visual-redesign branch for MONIEZI v39.

## v39.0.11 welcome + demo correction

This build applies the approved corrections to the Welcome/Activation and first-run Demo screens without redesigning the approved visual system.

- Removed the redundant activation sentence **“Enter the license key from your purchase confirmation.”**
- Changed the first-run heading from **“Load the demo”** to **“Load the demo business.”**
- Removed the demo explanatory paragraph from the initial demo state.
- Corrected the three demo statistic labels so **Records**, **Invoices**, and **Clients** stay fully contained inside their own cards on narrow Android screens.
- Preserved the approved demo illustration, counts, primary Load the demo button, skip link, welcome hero, license field, and all existing business logic.
- Bumped the service-worker cache version so the corrected screen is not masked by a stale PWA cache after deployment.

## v39 baseline rules

- Preserve all existing MONIEZI functionality while the visual redesign is developed in controlled passes.
- Keep v38 available as the stable rollback/reference build.
- v39 browser storage remains separate from v38 data, with device identity shared as previously established for license testing.

## Documentation

Deployment and license configuration remain documented in `DEPLOYMENT_AND_LICENSE_SETUP.md`.

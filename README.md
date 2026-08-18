# MONIEZI v39.0.12

Controlled visual-redesign branch for MONIEZI v39.

## v39.0.12 activation-card layout correction

This build corrects the activation-card reflow after the purchase-confirmation sentence was removed.

- Restored a deliberate vertical gap between **Activate your copy** and the license-key field.
- Added a narrow-mobile safeguard so the heading and input cannot collide on Samsung/Android widths.
- Kept the approved welcome artwork, benefits, activation copy, demo-business changes, contrast fixes, and existing application functionality unchanged.
- Bumped the service-worker cache so the corrected layout is served after deployment.

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

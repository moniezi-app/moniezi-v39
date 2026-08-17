# MONIEZI v39 Deployment and License Setup

MONIEZI v39 is the parallel visual-redesign track. It remains a Vite PWA deployed with GitHub Pages and validates licenses through the same existing Cloudflare Worker used by the stable MONIEZI application.

## 1. GitHub repository setup

1. Repository: `moniezi-v39`.
2. Default branch: `main`.
3. GitHub Pages → Build and deployment → Source: **GitHub Actions**.
4. GitHub Actions needs only one repository variable to mirror the stable v38 setup:

   - Name: `VITE_LICENSE_API_BASE`
   - Value: `https://moniezi-license-v37.moniezi-vg.workers.dev`

5. No GitHub repository secrets are required for the MONIEZI front-end deployment.
6. Push to `main` or run the Pages workflow manually.

The workflow also contains the same Worker URL as a safe public fallback, so a missing repository variable does not produce an unconfigured license build. The repository variable remains the preferred explicit configuration because it mirrors the working v38 repository.

## 2. Existing license Worker

v39 must continue to validate against the existing Worker:

`https://moniezi-license-v37.moniezi-vg.workers.dev`

Do not create or point v39 at a new license Worker merely because v39 uses a separate GitHub repository. The v39 application is a new front-end/PWA track; the existing licensing backend remains shared during parallel testing.

The Worker source is included for reference. Production Worker secrets remain in Cloudflare/Wrangler and are not GitHub repository variables or front-end build secrets.

## 3. Parallel v38 / v39 storage

The two builds may be served from different project paths on the same `*.github.io` origin. v39 keeps its own application/browser-storage namespaces so it can be tested without overwriting v38 business data.

- Core app state: v39-specific
- App IndexedDB: `moniezi-app-v39`
- Receipt IndexedDB: `moniezi-receipts-v39`
- Theme, KPI period, demo state, and insight-dismissal state: v39-specific
- PWA manifest/service-worker cache: v39-specific

v39 intentionally does **not** auto-import v38 business data. Use MONIEZI backup/restore when test data should be moved between versions.

The physical-device ID remains shared with v38 during parallel testing so the same license can validate on the same device without creating an unnecessary additional device binding. The stored v39 license state itself remains separate.

## 4. Verification after deployment

After the workflow succeeds:

1. Open the v39 GitHub Pages URL online.
2. Confirm the activation screen loads.
3. Enter a known valid MONIEZI license key and confirm validation succeeds.
4. Confirm v38 still opens with its existing data.
5. Confirm v39 remains independent from v38 business data.
6. Confirm v39 can relaunch offline after one successful online load.

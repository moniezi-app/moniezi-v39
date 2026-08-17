# MONIEZI v39 Deployment and License Setup

MONIEZI v39 is the parallel development track for the visual redesign. The app remains a Vite PWA deployed with GitHub Pages and validates licenses through the existing Cloudflare Worker/KV service.

## 1. Create the v39 development repository

1. Create a separate repository, recommended name: `moniezi-v39`.
2. Copy this source package into that repository.
3. Enable GitHub Pages with **GitHub Actions** as the source.
4. Configure the same public GitHub Actions variables used by the stable app:
   - `VITE_LICENSE_API_BASE`
   - `VITE_PURCHASE_URL`
   - `VITE_TERMS_URL`
   - `VITE_PRIVACY_URL`
   - `VITE_SUPPORT_EMAIL`
5. Push the source and run `Deploy Vite app to GitHub Pages`.

The PWA manifest ID is `/moniezi-v39/` and the v39 service-worker cache is separate from v38.

## 2. Parallel v38 / v39 storage

The two builds may be served from different project paths on the same `*.github.io` origin. Browser storage is origin-scoped, so v39 uses explicit v39 namespaces:

- Core app state: v39
- App IndexedDB: `moniezi-app-v39`
- Receipt IndexedDB: `moniezi-receipts-v39`
- Theme, KPI period, demo state, and insight-dismissal state: v39-specific
- PWA manifest/service-worker cache: v39-specific

v39 intentionally does **not** auto-import v38 business data. If you want v38 data in v39, export a MONIEZI backup from v38 and restore it into v39.

The physical-device ID is intentionally shared with v38 during parallel testing. This lets the same license validate on the same phone without creating an unnecessary additional device binding. The stored v39 license state itself remains separate.

## 3. License Worker

You normally do **not** need a second Cloudflare license Worker for the v39 development repository. Point v39 at the existing Worker using `VITE_LICENSE_API_BASE`.

The Worker source is included for completeness, but `license-worker/wrangler.jsonc` intentionally keeps `APP_URL` pointed at the stable v38 customer app during parallel development. **Do not redeploy the production license Worker from the v39 repository merely to test the visual redesign.** Change the customer `APP_URL` only when v39 is approved for production cutover.

Worker secrets remain in Cloudflare/Wrangler and must never be committed:

- `LICENSE_HASH_SALT`
- `STRIPE_WEBHOOK_SECRET`
- `ADMIN_KEY`
- optional `OWNER_KEY`
- optional `RESEND_API_KEY`

## 4. Test the v39 baseline before redesign work

Before changing the visual system, verify:

1. v38 still opens with its existing data.
2. v39 opens independently and does not display v38 business records.
3. v39 activation validates correctly on the test device.
4. Demo load/remove/reload works in v39.
5. A v39 backup/export and restore works.
6. v39 can be installed separately from the v38 PWA.
7. Offline relaunch works after the first successful online load.

Once these checks pass, v39 is ready for the illustration/empty-state/Home visual redesign passes.

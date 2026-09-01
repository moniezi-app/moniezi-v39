# MONIEZI v39.4.78 — Demo phone +15% / optimized asset

- Enlarges the approved high-quality Demo phone illustration by approximately 15% on normal/tall viewports while retaining the existing responsive caps for shorter screens.
- Preserves the established gaps between **Explore before you start**, the phone, **Load the demo**, and **Skip — record my first entry**.
- Re-exports the high-quality phone illustration at the same 971×1619 pixel dimensions as an optimized WebP to reduce file weight without shrinking its source dimensions.
- Removes the obsolete busy multi-element Demo illustration from the shipped project and reuses the approved phone illustration for the post-demo empty state.
- Bumps the app and service-worker cache to v39.4.78.

---

# MONIEZI v39.4.77 — Demo phone crisp asset refresh

- Increases the initial **Explore before you start** phone illustration by exactly 30% across the base and height-compressed responsive tiers.
- Preserves the clean v39.4.75 normal-flow structure and the existing gap between the Explore pill, phone, yellow **Load the demo** CTA, and Skip action.
- Does not reintroduce stats, headings, support copy, overlap geometry, negative margins, or absolute positioning.
- Keeps the same clean transparent phone asset and light/dark treatment.
- Bumps the application/service-worker release to v39.4.77.

---

# MONIEZI v39.4.75 — clean Demo layout reset

- Rebuilds only the initial **Explore before you start** Demo entry with one deterministic layout: **Explore → phone → explicit gap → Load the demo → Skip**.
- Removes the accumulated v39.4.69–v39.4.74 Demo-entry CSS overrides so the phone, CTA, and spacing no longer compete across generations of rules.
- Keeps the approved single-phone design, removes all stats/title/support content from the initial Demo entry, and preserves Demo behavior plus the post-demo empty state.
- Uses one new clean transparent phone asset in both themes; light mode adds no shadow, while dark mode depth is applied only through CSS.
- Uses dynamic-viewport height rules to shrink the phone before controls on shorter Android/iPhone screens while keeping an explicit hero-to-CTA gap.
- Bumps the application/service-worker release to v39.4.75.

# MONIEZI v39.4.74 — Demo CTA gap + clean light hero

- Adds an explicit responsive breathing gap between the bottom of the approved single-phone Demo illustration and the yellow **Load the demo** button.
- The gap is now its own layout rule and no longer depends on removed stats/content, preventing the CTA from collapsing directly against the phone.
- Removes the phone illustration drop-shadow treatment in light mode so the dark/black halo visible along the left/top edge is no longer added by CSS.
- Keeps the restrained phone depth treatment in dark mode only.
- Preserves the approved **Explore before you start** pill, single-phone illustration, yellow **Load the demo** CTA, **Skip — record my first entry**, Demo behavior, and all unrelated screens.
- Uses smaller responsive gap values on short viewports while maintaining clear separation.
- Bumps the service-worker cache for the release.

# MONIEZI v39.4.73 — Demo stats removed

- Removes the complete **359 Records / 42 Invoices / 5 Clients** stats section from the initial **Explore before you start** Demo screen.
- Removes the associated icons, stat cards, and reserved stats-row spacing; nothing replaces that section.
- Keeps the approved single-phone hero, yellow **Load the demo** CTA, **Skip — record my first entry** action, light/dark behavior, and all Demo functionality unchanged.
- Bumps the service-worker cache for the release.

## v39.4.72 — Demo layout reflow + solid premium stats

- Rebuilds the initial **Explore before you start** Demo entry as a true vertical flow: kicker → phone → reserved gap → stats → yellow **Load the demo** CTA → skip action.
- Removes the prior stacked v39.4.69/v39.4.70 Demo layout classes so the initial Demo screen is no longer dependent on overlapping historical spacing overrides.
- Keeps the approved single-phone illustration and scales it responsively with dynamic viewport height so taller phones keep a large hero while shorter Android/iPhone screens reduce it before lower controls are displaced.
- Adds real reserved space below the phone so the illustration can never sit behind the **359 Records / 42 Invoices / 5 Clients** area.
- Replaces translucent individual stat overlays with one coordinated, fully opaque premium stat strip: crisp white in light mode and deep navy in dark mode, with subtle dividers and no illustration showing through.
- Strengthens the light-mode Demo card boundary while keeping it genuinely light, and preserves the established dark MONIEZI surface without blur or dirty transparency.
- Keeps the existing yellow **Load the demo** CTA, **Skip — record my first entry** action, Demo behavior, footer navigation, and all unrelated functionality unchanged.
- Bumps the service-worker cache version for the new release.

## v39.4.71 — Demo hero overlap cleanup

- Removes the redundant **Load the demo business** heading from the initial Explore-before-you-start Demo entry screen so no text sits behind the approved phone illustration.
- Keeps the approved v39.4.70 phone, premium stats, yellow **Load the demo** CTA, skip action, responsive viewport fitting, and post-demo **Start with your own business** heading unchanged.
- Updates the first-Home Jakarta preload sample to the visible **Explore before you start** kicker and bumps the service-worker cache for the new release.

## v39.4.70 — Demo entry viewport fit + premium stats

- Keeps the approved **single centered Demo phone** and overall dark Demo visual direction from v39.4.69.
- Moves the Demo entry card slightly upward into the unused space below the app header.
- Removes the redundant sentence **“See MONIEZI filled with realistic business records before you enter your own information.”** from the initial Demo entry.
- Restores deliberate breathing room between the phone, **Load the demo business**, and the stats row.
- Enlarges/refines the **359 Records / 42 Invoices / 5 Clients** tiles with stronger numbers, larger icons, and a subtle translucent surface that lets the Demo background read through.
- Adds height-aware mobile rules so shorter Android/iPhone viewports compact the hero and spacing only when necessary, keeping the yellow **Load the demo** CTA clear of the sticky footer.
- Bumps the service-worker cache version for a clean deployment refresh.

## v39.4.69 — Demo entry single-phone hero

- Simplifies the **Explore before you start** Demo entry by removing the non-essential floating receipts, report cards, map tile, side analytics tile, sparkles, and oversized checkmark from the hero artwork.
- Keeps the approved MONIEZI illustration language and focuses the hero on one clean centered business-dashboard phone.
- Enlarges the phone on the initial Demo entry so it uses the freed visual space and reads as the clear focal point without changing the Demo copy, stats, or yellow **Load the demo** action.
- Uses a compact optimized WebP hero asset and retains the previous shared illustration only for the post-demo empty-state screen, avoiding unrelated visual changes.
- Tightens only the initial Demo-entry spacing enough to keep the primary **Load the demo** action high in the first mobile viewport while preserving the existing sticky footer behavior.
- Bumps the service-worker cache version so the new hero artwork is served immediately.

## v39.4.68 — Premium centered activation composition

- Redesigns the Welcome/activation lower section around the approved premium centered layout while preserving the existing two-person hero composition and activation logic.
- Uses a plain white activation background and a new versioned white-background hero asset with the prior bluish backdrop removed.
- Moves Private, Offline, and One-time purchase assurances into a compact three-column strip directly beneath the hero.
- Centers the activation title, helper copy, license-key placeholder/value, and overall form hierarchy.
- Replaces the oversized/ambiguous activation key treatment with a smaller round-key icon and removes the redundant icon from inside the license field.
- Adds the compact “Secure. Private. Yours.” reassurance beneath the activation CTA and a clean right-edge arrow treatment on the primary button.
- Mirrors the same geometry in the deterministic pre-React boot shell to avoid a visible layout jump during startup.
- Keeps the Activate MONIEZI CTA inside the initial mobile viewport through compact responsive rules for 375×812 and 390×844-class screens.
- Bumps the service-worker cache version so the updated activation CSS/markup is served immediately.

## v39.4.67 — Illustration asset optimization

- Audits the current active MONIEZI illustration set and keeps only assets referenced by the current app/runtime.
- Re-exports active illustration WebP assets at practical mobile display dimensions with per-image quality settings instead of a one-size-fits-all compression level.
- Optimizes the transaction wallet illustration, empty-state artwork, Demo/first-run artwork, Welcome hero, and both Quick Add hero variants while preserving transparency and visual clarity.
- Keeps app icons and functional UI behavior unchanged.
- Bumps the service-worker cache version so optimized image bytes replace prior cached copies.

## v39.4.66 — Independent optimized Quick Add light hero

- Replaces the problematic light-mode Quick Add hero with a newly generated independent phone + plus illustration rather than a recolored/cropped derivative of the dark hero.
- Uses a light MONIEZI illustration treatment designed specifically for the light surface, with no dark-background artifact.
- Optimizes the new hero to a compact WebP asset at the same practical display dimensions used by Quick Add.
- Removes the superseded v39.4.64 light hero asset from the package.
- Preserves the v39.4.65 one-image-per-theme visibility fix, responsive action distribution, true light-mode cards, and Quick Add parent-return navigation.

## v39.4.65 — Quick Add light-mode hero visibility fix

- Fixes the Quick Add light-mode hero bug where the light and dark hero images could render side-by-side.
- Uses higher-specificity theme selectors so light mode shows only the light hero and dark mode shows only the dark hero.
- Preserves the v39.4.64 true light-mode action cards and return-to-Quick-Add parent navigation behavior.
- Preserves the existing optimized WebP hero assets, action spacing, accent colors, card radii, Demo behavior, and business logic.

## v39.4.64 — Quick Add true light mode + return-to-parent navigation

- Gives Quick Add a true MONIEZI light-mode treatment: white/pale action cards, dark action text, crisp light borders, preserved per-action accent colors, and a dedicated light-mode version of the approved phone + plus hero.
- Keeps the existing dark-mode Quick Add treatment unchanged.
- Makes Quick Add the parent screen for add flows opened from it: closing Income, Expense, Invoice, Estimate, or Mileage returns to Quick Add first instead of dropping back to the underlying page.
- Applies the same parent-return behavior to Quick Add-launched Client and Job / Project editors when their close control is used.
- Keeps direct/contextual add actions independent, so forms opened directly from a page still close back to that page rather than forcing Quick Add.
- Preserves the v39.4.63 responsive action spacing, current corner-radius system, optimized image assets, Demo behavior, footer destinations, and business logic.

## v39.4.63 — Quick Add responsive spacing + full-height distribution

- Keeps the approved single-phone Quick Add hero illustration and the compact 4-row paired action structure.
- Spreads the four Quick Add action rows more evenly through the available panel height so the actions no longer bunch together near the top.
- Improves responsive vertical distribution across taller and shorter screens so the final row sits closer to the bottom without awkward empty space.
- Adds clearer breathing room between the paired action rows while preserving the compact no-description action layout.
- Preserves the current Quick Add hero asset, per-action accent colors, corner-radius system, Menu behavior, footer destinations, Demo behavior, activation flow, and business logic.

## v39.4.61 — Quick Add single-phone hero + compact paired actions

- Replaces the split Quick Add hero with the approved single phone + plus illustration.
- Removes the extra hero copy and keeps only the compact header subtitle at the top.
- Keeps 8 color-coded Quick Add actions in 4 paired rows with larger labels and matched corner radii.
- Keeps the paired action-row structure underneath the hero while simplifying each action to icon + title only.
- Restores the proper per-action accent colors and reduces the oversized icon treatment so the tiles feel more aligned with the rest of the app.
- Tightens the corner radiuses to better match other MONIEZI cards and panels.
- Compresses spacing so the full Quick Add panel is intended to fit on screen without needing to scroll.
- Preserves all 8 Quick Add actions, tap behavior, Demo behavior, activation flow, hamburger Menu behavior, footer destinations, and business logic.

## v39.4.59 — Quick Add approved hero + compact paired actions

- Replaces the previous Quick Add hero with the exact approved wide illustration direction and bundles it as `public/quick-add-hero-v39-4-59-approved.webp`.
- Removes extra Quick Add explanatory copy so the panel stays compact: the header keeps only **Quick Add** and the hero becomes image-led.
- Keeps the approved structured layout: one hero card followed by four paired action rows (Income/Expense, Invoice/Estimate, Mileage/Client, Job / Project/Receipt).
- Simplifies every Quick Add action row to icon + title only, removing the extra description lines.
- Tightens the Quick Add card geometry to the smaller MONIEZI corner radius across the main panel, hero card, and paired action rows.
- Preserves all 8 Quick Add actions, tap behavior, Demo behavior, activation flow, hamburger Menu behavior, footer destinations, and business logic.

## v39.4.58 — Quick Add structured hero + paired action cards

- Keeps the approved Quick Add hero illustration and the 2-column × 4-row action layout.
- Adds more vertical breathing room between the hero illustration and the first Income / Expense row, moving the action grid slightly lower.
- Increases only the vertical spacing between the four action rows; horizontal column spacing is intentionally unchanged.
- Slightly enlarges all 8 Quick Add action icons and the corresponding action labels.
- Preserves all 8 Quick Add actions and behavior: Income, Expense, Invoice, Estimate, Mileage, Client, Job / Project, and Receipt.
- Preserves navigation, Demo behavior, activation flow, hamburger Menu behavior, footer destinations, and business logic.

## v39.4.56 — Larger Quick Add actions

- Keeps the approved Quick Add hero illustration and the 2-column × 4-row action layout.
- Increases the size of all 8 Quick Add action icons so the chooser feels fuller and easier to tap.
- Increases the size of all 8 Quick Add action labels so they read more prominently.
- Expands each action block and spacing to make the Quick Add screen use the available panel area better.
- Preserves all existing Quick Add actions and behavior: Income, Expense, Invoice, Estimate, Mileage, Client, Job / Project, and Receipt.
- Updates the versioned hero asset reference to `public/quick-add-hero-v39-4-56-shared.webp` and updates offline precache references accordingly.
- Preserves navigation, Demo behavior, activation flow, menu behavior, and business logic.

## v39.4.53 — Stronger Menu copy + illustrated Quick Add categories

- Keeps the hamburger Menu light-mode sheet white while raising destination-title and section-heading weight one step and making supporting descriptions black/near-black at a stronger 500 weight.
- Preserves the established menu destinations, card geometry, semantic icon colors, crisp borders, and no-glow/no-shadow treatment.
- Redesigns Quick Add as two large illustrated category zones that deliberately occupy the near-full-screen chooser instead of bunching every action at the top.
- Money & Sales uses the approved transaction-wallet illustration and keeps Income, Expense, Invoice, and Estimate in a 2×2 action grid.
- Business uses a new illustration assembled from MONIEZI's existing Clients, Jobs, and Mileage empty-state family and keeps Mileage, Client, and Job / Project in a balanced three-item row.
- Keeps the two groups visually separate with clean contained surfaces, generous spacing, and the same geometry in light and dark mode.
- Preserves Quick Add actions/order, hamburger Menu destinations, footer navigation, Demo behavior, Back navigation, activation flow, and business logic.

## v39.4.52 — Light Menu hierarchy + spacious Quick Add layout

- Gives the light-mode hamburger Menu a subtle cool neutral sheet background so its white destination cards separate cleanly without restoring shadows, haze, gradients, or glow.
- Strengthens light-mode Menu and Quick Add hierarchy with true near-black primary labels, darker section/supporting copy, fully opaque accent icons, and clearer crisp semantic borders/icon plates.
- Keeps Quick Add as a large near-full-height panel instead of compressing it into a small popup.
- Preserves Money & Sales as a balanced 2×2 grid and reorganizes Business into one balanced three-column row: Mileage, Client, Job / Project.
- Preserves the v39.4.51 typography hierarchy, Quick Add actions/order, hamburger Menu destinations, scrolling, footer navigation, Demo behavior, Back navigation, activation flow, and business logic.

## v39.4.51 — First-run stabilization + compact menu refinement

- Explicitly preloads the Plus Jakarta Sans Variable face/weights used by the first Home/Demo surface before it is revealed, eliminating the brief fallback-font width/weight flash in “Load the demo business”.
- Uses the approved 600 weight for the first-run title and tightens the illustration-to-title spacing so the complete yellow Load the demo button sits higher above the sticky footer.
- Refines Quick Add with a 600-weight title, 500-weight category/item labels, slightly smaller choices/icon plates, and tighter spacing while preserving all actions, two-column organization, and scrolling.
- Refines the hamburger Menu with a 600-weight Menu title, 500-weight section/item labels, smaller item boxes/icon plates, and more compact spacing while preserving destinations and functionality.
- Removes faded shadows, glows, and radial haze from Quick Add and hamburger-menu panels/items/icon plates in both light and dark mode, keeping crisp borders and solid surfaces.
- Preserves v39.4.50 Demo card treatment, card-radius consistency, Add Transaction illustration, footer navigation, Back behavior, activation states, and business logic.

## v39.4.50 — Compact Demo + card-radius consistency + Add Transaction illustration

- Reduces the Demo notification card height while preserving its landscape layout, content, orange Exit Demo action, and established dark-mode purple identity.
- Gives the Demo card a clean pale-lavender light-mode surface and removes the faded ambient shadow/glow from the light treatment.
- Normalizes routed page-header card corners to the established restrained MONIEZI card radius, including Clients, Jobs, Estimates, Invoices, Mileage, Reports, and Private Raise Tracker.
- Replaces the horizontal Home Add transaction row with the approved centered empty-state-family wallet illustration, centered plus control, and Add transaction label only.
- Adds the transaction illustration as a bundled transparent WebP asset and precaches it for offline/PWA use.
- Preserves v39.4.49 activation states, title weights, smaller header icons, footer destinations, Demo functionality, Quick Add actions, history-based Back behavior, and business logic.

## v39.4.49 — Activation states + typography/icon refinement

- Strengthens the empty license CTA with MONIEZI blue, switches to yellow/gold when a key is entered, and shows a brief green verified-success state.
- Keeps one Home add action by removing the redundant plus button from the Net Profit card.
- Normalizes authenticated-app title hierarchy to 600 primary / 500 secondary and removes the light-mode font-weight inflation that pushed bold utilities to 900.
- Preserves the Demo card's approved purple landscape background while tightening its corner radius and reducing its badge/icon size.
- Reduces the oversized left-side icon plates/glyphs across Home feature cards and routed page-header cards while preserving their established colors and dark-mode visual language.
- Preserves footer destinations, history-based Back navigation, Quick Add actions, Demo functionality, business logic, and package structure.

## v39.4.48 — Home cleanup + clean light-mode surfaces

- Removes the Home Quick Access card grid.
- Replaces it with one **Add transaction** heading and the existing plus action.
- Removes **Home details** and **Scroll for more**.
- Removes light-mode upper-left color washes from routed page hero/header cards.
- Cleans light-mode hamburger-menu cards and icon plates by removing faded gradients, colored haze, and icon drop-shadows.
- Preserves dark-mode styling, navigation, business logic, Demo behavior, and the v39.4.47 clean icon treatment.

## v39.4.47 — Clean light-mode large icon plates

- Matches large Home feature-card icons and routed page-header icons to the clean Quick Access icon treatment in light mode.
- Removes cloudy radial fills, broad colored icon halos, and light-mode SVG drop-shadows.
- Keeps the rounded icon plates, section colors, icon sizes, layouts, page content, dark-mode treatment, navigation, and Demo behavior unchanged.

## v39.4.46 — Quick Access authoritative layout cleanup

- Consolidated Home Quick Access card styling into one authoritative CSS definition.
- Removed the accumulated v39.4.41/v39.4.43/v39.4.45 Quick Access overrides.
- Removed decorative corner/radial color washes from Quick Access cards.
- Increased the actual icon glyph within the existing rounded icon plate.
- Replaced absolute title positioning with normal vertical flow: icon → gap → title → status.
- Preserved two-column layout, section colors, borders, chevrons, destinations, Back navigation, and Quick Add behavior.

## v39.4.45 — Quick Access clean surfaces + icon/title spacing
- Removes the decorative corner color washes/blobs from Home Quick Access cards in both light and dark modes.
- Keeps the existing rounded icon containers but enlarges the actual icon glyphs inside them.
- Repositions Quick Access title/subtitle copy below the icon area so labels no longer crowd or overlap the icon container.
- Preserves v39.4.44 build fix, v39.4.43 history-aware Back navigation, card shell dimensions, grid, borders, colors, chevrons, and destinations.

# MONIEZI

## v39.4.44 — CSS production-build correction
- Fixes the malformed v39.4.43 Quick Access CSS block that was written with literal `\n` characters instead of real line breaks, causing PostCSS to fail with `Unknown word min-height`.
- Preserves the v39.4.43 history-aware Back navigation behavior and compact Quick Access shells with the original large icon scale.
- No intentional UI or business-logic changes beyond making the approved v39.4.43 source buildable.

## v39.4.43 — History-aware Back + compact Quick Access shells
- Shows the in-app Back control on every MONIEZI screen reached from a prior MONIEZI screen, including Clients, Jobs, Estimates, Invoices, and Mileage. Initial Home remains the only history-root screen without Back.
- Android system Back, iPhone Safari/PWA swipe-back, and the visible Back control share the same history stack.
- Reduces only the outer Home Quick Access card shells while restoring/preserving the pre-v39.4.42 large icon scale.
- Keeps the two-column layout, card gaps, readable titles/subtitles, colors, borders, glow, chevrons, and destinations.

# MONIEZI v39.4.42

## v39.4.42 Cross-platform Back navigation + 30% smaller Quick Access
- Adds a visible in-app Back control on secondary MONIEZI pages while keeping Home, Clients, Jobs, Estimates/Invoices, and Mileage as clean top-level destinations without a duplicate Back button.
- Moves main page navigation onto marked browser history entries so Android system Back and iPhone Safari/PWA swipe-back follow the same MONIEZI page history.
- Report drill-down Back returns to Report Center before leaving Reports; direct deep entries safely fall back to Home instead of leaving to an unrelated page.
- Prevents duplicate history entries when the active primary tab is tapped again.
- Reduces Home Quick Access card footprint by about 30% while preserving the two-column grid, existing gaps, readable titles/subtitles, colors, glow, and destinations.
- Preserves the v39.4.41 Quick Add fit refinements and all existing business logic.


## v39.4.41 Quick Add fit + compact Quick Access cards
- Tightens Quick Add row/group spacing so the centered **Job / Project** icon and label stay together and are visible without the tiny final scroll on typical phone screens.
- Keeps the v39.4.39 hamburger-style bordered icon tiles and all Quick Add actions unchanged.
- Reduces Home **Quick Access** outer card height by roughly 10% while preserving the established large icon scale, two-column layout, card gaps, colors, and navigation.
- No business logic, calculations, activation flow, Demo behavior, or navigation destinations changed.

## v39.4.40 Scroll-to-Top first-Home initialization
- Fixes the floating Scroll-to-Top control not appearing on the first Home session immediately after license activation.
- The control now binds to the actual mounted internal scroll container through a callback ref, instead of waiting for a later page/data change to re-run the listener effect.
- Preserves the existing 300px visibility threshold, smooth scroll behavior, button styling/position, navigation, Quick Add v39.4.39 design, and all business logic.

## v39.4.39 Quick Add hamburger-style icon tiles
- Keeps the Quick Add chooser as a light two-column icon + label layout with no full transaction cards.
- Gives each Quick Add icon the same rounded-rectangle bordered treatment used by the hamburger-menu icons, while keeping the transaction name centered underneath.
- Enlarges the MONEY & SALES and BUSINESS group headings and increases spacing between choices and between groups.
- Preserves Quick Add scrolling, choices, actions, navigation, and the v39.4.38 activation/Home behavior unchanged.

## v39.4.38 First Home frame stabilization
- Preloads and decodes the first-run Demo illustration while the license screen is still visible.
- Waits for bundled fonts and the Android Chrome visual viewport to settle after keyboard close before revealing Home.
- Gives the first-run illustration a deterministic responsive box and removes the image from document-flow sizing, preventing the post-activation image/layout shift.
- Keeps the activation sequence, Demo content, Quick Add v39.4.37 composition, navigation, records, calculations, and business logic unchanged.

## v39.4.37 Quick Add composition refinement
- Keeps the approved icon + transaction-name-only Quick Add choices with no surrounding option cards.
- Makes the panel content-sized when all choices fit, while retaining internal scrolling on smaller screens.
- Adds restrained divider lines to Money & Sales and Business headings for stronger visual structure.
- Tightens icon-to-label spacing and row rhythm while preserving large, recognizable icons and generous touch targets.
- Centers the final Job / Project choice across the grid instead of leaving an empty right column.
- Reduces the visual weight of the Quick Add close control.
- No navigation, transaction actions, Demo flow, business calculations, or data behavior changed.

## v39.4.36 Quick Add icon-only choices + stable Demo/Home arrival
- Removes the redundant visible **Choose what to add** line; the unified chooser now shows only **Quick Add** in its header.
- Removes the large rounded transaction-choice cards from Quick Add. Each choice is now a centered standalone icon with its transaction name directly underneath, while preserving the two-column layout, scrolling, groups, and every existing action.
- Removes the screen-menu selected check so Quick Add choices contain only the requested icon + transaction name presentation.
- Fixes the remaining activation-to-Home Demo-card nudge by preventing the license handoff from scheduling repeated viewport resets against the newly mounted Home scroller.
- Reserves the first-run Demo illustration geometry before image decode and disables scroll anchoring/entrance movement on that first Home card. Demo loading also avoids duplicate Dashboard viewport resets.
- Preserves the installation/activation sequence, Demo content and notification design, Home/page large-icon system, hamburger menu, records, calculations, and navigation.

## v39.4.35 Activation viewport stabilization + Quick Add identity
- Locks the Welcome / activation experience to a single stable internal scroll surface so Android Chrome cannot re-anchor the whole document when the keyboard opens or closes.
- Captures the one intentional keyboard-pan position after license-field focus and holds it through keyboard close / validation, eliminating the secondary visual jump while preserving the activation sequence and screen geometry.
- Adds an explicit **Quick Add** heading with **Choose what to add** supporting copy to every unified Quick Add choices panel, including the first-entry flow and specialized add entry points.
- Keeps the v39.4.34 independent Quick Add scrolling, compact option cards, all existing choices, navigation, business logic, large page headers, and Demo behavior unchanged.

## v39.4.34 Quick Add scroll + compact choices
- Fixes the screen-style Quick Add chooser so the choices body scrolls independently while the panel header remains visible.
- Adds mobile touch scrolling, overscroll containment, safe-area bottom padding, and a visible scrollbar affordance where supported.
- Slightly reduces Quick Add card height and icon-box size so more transaction choices are visible without abandoning the large-icon design direction.
- Preserves all Quick Add choices, destinations, navigation sequence, hamburger-menu redesign, Home/page headers, Demo behavior, activation flow, and business logic.

## v39.4.33 Quick Add + hamburger menu visual-system match
- Extends the large-icon, spacious-card system into the unified Quick Add choices panel used from Home / first-entry flows and the shared + launcher.
- Quick Add choices now use large icon-led cards, two-column mobile layout, stronger section separation, and generous gaps while preserving every existing action and navigation sequence.
- Redesigns the hamburger Menu directory as large, spacious navigation cards with substantially larger icons and clearer separation between groups.
- Preserves v39.4.32 routed-page headers, v39.4.31 Home feature headers/spacing, Demo behavior, licensing, install/activation sequence, records, calculations, and destination routing.

## v39.4.32 Routed page headers — large icons across MONIEZI
- Extends the v39.4.31 large-icon visual language beyond Home to the primary routed pages.
- Clients, Jobs / Projects, Estimates, Invoices, Mileage, Activity / Income / Expenses, Reports, Business Insights, Settings, and Private Raise Tracker now use spacious top feature cards with Quick-Access-scale icons. Report subpages (Tax Prep, Tax Planner, P&L, receivables, mileage, clients, jobs, ledger, etc.) also switch the large hero title/icon to the active report.
- Footer, Home Quick Access, and main-menu navigation all arrive at the same page presentation; entry path does not change the destination UI.
- Page header actions are retained and repositioned around the larger icon treatment (add client/job/invoice/estimate/trip, refresh insights, return to Report Center).
- Existing lists, filters, calculations, records, forms, and business logic below the page header remain in place.
- Adds a larger separation between each page hero header and its working content so routed screens keep the same breathing-room principle as Home.

## v39.4.31 Home feature-card headers — large icons + larger gaps
- Keeps the v39.4.30 Home structure, Quick Access navigation, card content, calculations, actions, and Demo behavior intact.
- Redesigns only the header treatment of the major Home detail cards so Net Profit, Needs Your Attention, Monthly Business Goals, Continue Work, Recent Activity, Tax Snapshot, and Receipts use large Quick-Access-scale icons.
- Repositions titles/supporting copy around the larger header icons without removing the existing card content below.
- Increases vertical separation between major Home modules to create a calmer, more breathable scrolling rhythm.
- Preserves the retained Demo card subtitle “Sample business data” and the v39.4.29 activation visual stabilization.

## v39.4.30 Phase 1 Home redesign — large visual quick access
- Adds six large, icon-led Quick Access cards at the top of Home: Overview, Money, Jobs, Clients, Invoices, and Mileage.
- Gives every launcher its own strong visual identity, large icon treatment, clear label, and direct tap destination.
- Increases the space between launcher cards to 22px horizontally / 24px vertically on standard mobile, with even larger gaps on wider screens.
- Increases spacing between major Home modules to create a calmer, more breathable scrolling experience.
- Removes redundant Home-only Jobs, Invoices & Collections, and Sales Pipeline summary cards because those areas are now reached directly from Quick Access.
- Shows Needs Your Attention only when an actual action exists, and Continue Work only when MONIEZI has a useful shortcut to offer.
- Keeps the Net Profit overview, Monthly Business Goals, Recent activity, Tax Snapshot, and Receipts so Home remains useful rather than becoming only a menu.
- Preserves the v39.4.29 license-screen stabilization and the v39.4.27 Demo notification card with **Sample business data**.

## v39.4.29 License activation visual stabilization
- Removes the mobile `:focus-within` geometry changes that made the Welcome / license screen visibly shrink and expand when the license field received focus.
- Keeps the hero illustration at the same width, shell gap unchanged, and activation-card geometry stable while the Android keyboard opens and closes.
- Removes the 160ms width / margin / padding / gap animation that amplified the apparent zooming or breathing effect.
- Preserves the complete install → launch → license activation → Demo sequence with no workflow changes.
- Preserves the v39.4.27 Demo notification card, including the second line: **Sample business data**.

## v39.4.27 Demo notification card reference match
- Rebuilds the active Demo notification card from the approved screenshot reference.
- Restores the two-line Demo / Sample business data hierarchy.
- Matches the dark midnight-violet background, luminous violet perimeter, right-side curved glass layers, concentric purple briefcase badge, and orange Exit Demo control.
- Preserves all Demo load/exit behavior and business-data restoration logic.

## v39.4.12 simplified Business Insights hierarchy
- Removes the redundant High / Medium / Need Action summary cards above the category sections.
- Converts Refresh Insights from a full-width card into a compact icon action beside the Business Insights title.
- Keeps High Priority, Medium Priority, and Good News as the primary summary/navigation surfaces because they already show the useful counts and expand into the underlying insights.
- Preserves Reset dismissed as a compact secondary text action only when dismissed insights exist.
- No changes to insight-generation logic, Demo data, navigation, licensing, install flow, or the v39.4.11 startup handoff.

## v39.4.11 pixel-stable Install MONIEZI handoff
- Uses one shared installer geometry for the pre-React startup frame and the hydrated React screen.
- Isolates the installer from Plus Jakarta Sans, the global MONIEZI type-scale overrides, and the 106.25% root rem scale.
- Locks box sizing before Tailwind/preflight loads, preventing width/padding changes during hydration.
- Uses explicit px typography/line-height/letter-spacing for the first install screen so its text metrics cannot redraw after mount.
- Keeps the v39.4.10 stable top-anchored installer and the v39.4.9 8/6/5px radius system.

# MONIEZI v39.4.10
## v39.4.10 stable Install MONIEZI startup

- Mirrors the supported mobile install screen in the initial HTML frame.
- Uses a stable system-font stack on the install gate to prevent webfont metric swapping.
- Uses fixed/top-anchored install geometry instead of `100dvh` vertical centering.
- Startup and install logos are both 74×74px.
- Preserves the v39.4.9 8/6/5px radius system.

## v39.4.9 tighter radius system
- Major cards, large panels, drawers and modal shells: 8px.
- Nested surfaces, inputs, selectors, buttons and icon wells: 6px.
- Metric/status blocks and small surfaces: 5px.
- Non-pill micro badges: 4px where applicable.
- True pills and circular controls remain intentionally round.
- No illustration, spacing, navigation, licensing, demo, or business-logic changes in this pass.

- Tightened application-wide non-pill corner radii to a restrained 10px card / 8px surface / 7px control scale.
- Preserved true circles and pill controls.
- Enlarged the Home empty-state status badge in both states: **Explore before you start** and **Ready for your first records**.
- No illustration, licensing, demo, records, or navigation behavior changes.


## v39.4.7 GitHub Actions typecheck fix

- Fixes the GitHub Actions TypeScript failure in the navigation safety-net by adding `Page.Insights` to the exhaustive routed-page list.
- This resolves `TS2345` at the `includes(currentPage)` guard introduced when Business Insights became a normal routed page in v39.4.6.
- No layout, business logic, licensing, or data behavior changes beyond the compile/navigation safety-net correction.
- Converts Business Insights from a modal/popup into a normal routed MONIEZI screen opened from the permanent brain icon or the Home Insights action.
- Removes the modal shell, close button, sticky/internal header behavior, nested Insights scroll container, and the redundant `business signals` count line.
- Keeps the portrait-first summary: High, Medium, Need Action, and Reset Dismissed each use their own vertical row.
- Business Insights now scrolls with the same main app viewport as Clients, Jobs, Reports, and other authenticated pages; normal browser/app navigation leaves the screen.
- Restores the scroll-to-top control on the no-demo / empty Home state. Once activated after scrolling, it remains visible through the bottom just like other long screens.
- Preserves v39.4.5 portrait spacing, v39.4.4 shared mobile geometry, Chrome/Safari install behavior, licensing, Demo, records, and calculations.

## v39.4.5 Portrait-first Business Insights + persistent scroll-to-top

- Business Insights now follows a phone-first vertical hierarchy: utility controls on their own row, one-line title below, signal count below that, and each High / Medium / Need Action summary on its own full-width row.
- Removed the two-column Insights summary grid so the panel has more breathing room on portrait phones.
- Scroll-to-top remains visible once activated all the way through the bottom of a scrollable screen; the near-bottom suppression from v39.4.3 is removed.
- v39.4.4 shared mobile geometry and internal card insets are preserved.

## v39.4.4 Shared mobile geometry + internal card insets

- Preserves the already-good Home and Reports width geometry as the visual reference.
- Establishes one shared mobile spacing model: **page gutter → card shell → internal content inset → content**.
- Fixes the shared empty-state family used by Clients, Jobs, Estimates, Invoices, Mileage, Receipts, and related first-use screens so text, feature rows, and primary CTAs no longer sit against card borders.
- Keeps approved illustrations at their existing size and placement; the new inset applies only to copy, feature content, and actions beneath/around them.
- Applies a slightly smaller nested inset to the Home Receipts empty-state block because it already sits inside a padded Home glass card.
- Documents shared geometry tokens for mobile page gutter, card-content inset, and nested-content inset.
- Preserves v39.4.3 Business Insights behavior, Reports copy, installation flows, licensing, Demo, records, calculations, and navigation.

## v39.4.3 Responsive width + overlay corrections

- Normalizes authenticated mobile screen gutters with one safe horizontal inset across Home, Clients, Jobs, Estimates, Invoices, Mileage, Reports, Receipts, and other main screens.
- Adds containment to direct screen children so cards and working surfaces cannot visually overrun the phone viewport.
- Makes Business Insights content-driven instead of forcing a full-screen-height panel; long insight content still scrolls inside the modal.
- Uses a compact 2-column Insights stats layout and only shows **Reset Dismissed** when dismissed insights actually exist.
- Prevents the floating scroll-to-top control from covering final CTAs by hiding it near the bottom; it is also suppressed on the completely empty Home onboarding state.
- Changes Reports intro copy from **Choose the business question you want answered.** to **View your business reports.**
- Preserves v39.4.2 installation behavior, licensing, Demo, records, calculations, and illustrations.

## v39.4.2 Installed-success simplification

- Removes the technical footer sentence about license activation happening in the browser tab.
- Simplifies the post-install screen to **MONIEZI is installed** and **Open MONIEZI from your Home Screen to get started.**
- Restores a single **Got it** action that attempts to close the browser tab after installation, matching the simpler pre-v39.4 onboarding behavior.
- Preserves the official mobile install paths introduced in v39.4.1: Chrome on Android and Safari on iPhone/iPad.
- No changes to licensing, PWA installability, business data, Demo, navigation, or calculations.

## v39.4.1 Simplified supported mobile installation

- Mobile onboarding remains **install first, activate second**.
- Official Android installation path: **Google Chrome only**.
- Official iPhone/iPad installation path: **Safari only**.
- Android browsers other than Chrome now show **Open MONIEZI in Chrome** plus a Copy app link handoff instead of Firefox/Edge/Samsung-specific installation instructions.
- iPhone/iPad browsers other than Safari now show **Open MONIEZI in Safari** plus a Copy app link handoff.
- Chrome on Android continues to use the native `beforeinstallprompt` flow when available, with a short Chrome fallback guide if the native prompt is unavailable.
- Safari instructions match real-device testing: **Share → View More → scroll down → Add to Home Screen → leave Open as Web App on → Add**.
- The old multi-browser guide selector and Firefox/Edge/Samsung/Chrome-iOS installation guides are removed.
- After installation, the customer opens the clean MONIEZI Home Screen icon and activates the license inside the installed PWA.
- Desktop behavior and existing license validation, offline grace, Demo, navigation, storage, and business logic remain unchanged.

## v39.3.14 Activation heading compact layout

### Activation screen refinement
- Places the key icon inline to the left of **Activate your copy**.
- Keeps the heading group centered while reducing vertical height.
- Moves the license-key field and activation CTA higher on phone screens.
- No change to license validation, activation, or stored-license behavior.


- Hides the green receipt-completion message when the current year has zero expenses; completion appears only when expenses exist and every one has a receipt.
- Enlarges the first-run/demo-entry kicker ("Explore before you start" / "Ready for your first records") in light and dark mode.
- Moves Try the demo / Remove the demo directly beneath Settings at the top of the hamburger menu and removes the old duplicate demo section.


## v39.3.12 Welcome focus + light-mode text strength

- Restores a very brief branded startup surface with only the centered MONIEZI app icon, replacing the blank/black flash before React renders.
- Centers the Welcome / Activation screen brand icon and removes the MONIEZI wordmark beside it.
- Centers **Your business. Your records.**, **Welcome to MONIEZI**, and the supporting value statement.
- Tightens the Welcome value statement to: **Keep your business records on your device — no bank connection, no monthly subscription.**
- Strengthens secondary and supporting copy in light mode so small text remains clearly readable instead of faded.
- Removes the large **Choose your look** selector from the initial demo-entry card; theme switching remains available from the permanent sun/moon control in the header.
- Preserves the bright yellow **Load the demo** primary action and the complete v39.3.11 Receipts scroll-lifecycle correction.
- Preserves licensing, storage, demo logic, reports, calculations, restrained radius, Home spacing, and lifecycle footer navigation.

## v39.3.11 Receipts scroll-lifecycle correction

- Corrects the Home scroll-reset lifecycle so clearing the temporary Receipts deep-link state no longer triggers a second reset back to the top of Home. Menu → Receipts now lands on the Receipts card and stays there.
- Removes the decorative upper-right blue radial cloud from Home Luminous Glass cards while preserving borders, glass surfaces, shadows, and depth.
- Limits successful Demo Mode load and exit notifications to 2 seconds maximum; avoids the duplicate reset toast when exiting Demo Mode from an otherwise empty app.
- Preserves the startup, transparent first-record illustration, restrained-radius system, Home spacing/readability, footer navigation, licensing rules, demo logic, storage, and business calculations.

## v39.3.8 Restrained application-wide corner radius
- Replaces the oversized rounded/bubble geometry with a restrained business-app radius scale.
- Main cards and major surfaces use approximately **12px** corners.
- Insets and secondary panels use approximately **10px** corners.
- Buttons, fields, selectors, and navigation wells use approximately **8px** corners.
- Icon wells use approximately **9px** corners.
- True circles/pills remain round only where semantically appropriate.
- Applies across Home, Clients, Jobs, Estimates, Invoices, Mileage, Activity, Reports, Receipts, Settings, demo/data flows, forms, drawers, modals, search, and the Welcome/license screen.
- Luminous Glass styling, typography, spacing, navigation, licensing, storage, calculations, and business behavior are preserved.

## v39.3.7 Welcome + demo-entry refinements
- Welcome benefit copy now says **Records stay on your device**.
- All three welcome benefits are centered and slightly larger for readability.
- Initial **Load the demo** action uses the bright MONIEZI yellow treatment to make the recommended path unmistakable.
- The **Skip — record my first entry** link is larger and has more space below the primary demo action.
- License validation, demo loading, post-demo behavior, and all business logic are unchanged.


## v39.3.5 Home breathing room + footer readability

- Expands internal padding and vertical rhythm across every Home dashboard card.
- Increases spacing between headings, subtitles, controls, KPI panels, status rows, actions, dividers, and card-to-card sections.
- Keeps the Monthly Business Goals decorative target removed.
- Restores a genuinely readable six-item footer with 22px icons and 12.5px labels without a narrow-screen micro-font fallback.
- Preserves the approved lifecycle order: Home · Clients · Jobs · Estimates · Invoices · Mileage.
- No business logic, storage, calculations, licensing, or data workflows are intentionally changed.

## v39.3.4 Home + footer readability restoration

This correction build restores comfortable mobile typography after phone QA showed that the Home dashboard and six-item sticky footer had become too small to read easily.

### Home dashboard

- Increases card-title, subtitle, action, selector, status, metric, progress, Jobs-status, and secondary-section text sizes.
- Enlarges small Home-only utility labels such as invoice summaries, pipeline labels, Tax Snapshot copy, and receipt actions.
- Keeps the approved Luminous Glass card design, spacing hierarchy, calculations, and interactions unchanged.
- Keeps the Monthly Business Goals decorative target/dart completely removed.

### Sticky footer

- Restores readable **11px** navigation labels on normal phone widths rather than shrinking Estimates/Invoices to 9px.
- Restores normal 20px navigation icons.
- Keeps the approved six destinations: **Home · Clients · Jobs · Estimates · Invoices · Mileage**.
- Uses even width distribution and compact gaps rather than microscopic typography to make the footer fit.

### Preserved

- Activity and Reports remain in the full application menu.
- Existing storage, calculations, licensing, demo data, invoices, estimates, jobs, receipts, mileage, reports, and exports are unchanged.

---

# MONIEZI v39.3.0

## v39.3.0 Lifecycle Navigation Architecture

v39.3.0 keeps the application-wide Luminous Glass system from v39.2.0 and updates the sticky footer to match MONIEZI's everyday business workflow.

### Sticky footer

**Home · Clients · Jobs · Estimates · Invoices · Mileage**

- Clients and Estimates are now permanent footer destinations.
- Activity and Reports remain available in the main menu and contextual Home links, but no longer consume permanent footer slots.
- Invoice is renamed to Invoices.
- Estimates and Invoices remain two distinct user destinations while sharing the existing billing screen and business logic. Their selected footer states are independent.
- Quick Add remains separate from navigation and continues to handle creation actions.

### Scope

This release changes navigation information architecture only. Existing business logic, local storage, calculations, reports, licensing, demo data, jobs, clients, estimates, invoices, receipts, and mileage behavior are preserved.

---

# MONIEZI v39.2.0

## v39.2.0 Application-wide Luminous Glass rollout

v39.2.0 extends the approved Luminous Glass design language from Home across the working application while preserving the existing business logic and local-first data model.

### Application-wide visual rollout
- Activity, Income and Expenses: luminous record surfaces, inset search/filters and integrated page actions.
- Invoices and Estimates: glass selector, filters, summary panels and record cards with existing billing behavior unchanged.
- Mileage: glass header/action treatment, empty state, summaries and trip/editor surfaces.
- Reports and Tax tools: report-center groups, report cards, selectors and nested summary surfaces use the same material hierarchy.
- Clients: glass search/filter controls, client record cards and client editor/modal surfaces.
- Jobs / Projects: luminous overview, nested profit metrics, filters, job cards and editor/detail surfaces.
- Settings / Demo / Data: tab navigation, settings panels, backup/update/data controls and confirmation surfaces.
- Private Raise Tracker / Company Equity: primary surface, nested metrics, navigation and record panels follow the same glass hierarchy.
- Search, forms, drawers, custom selects and modal workflows now share the same material system.
- Light mode uses a restrained frosted translation; dark mode carries the stronger luminous depth.

### Regression boundary
The rollout is presentation-focused. Storage, licensing, calculations, invoices, estimates, receipts, mileage, jobs, reports, demo/reset behavior and export/PDF logic remain functionally unchanged.

## v39.1.0 Luminous Glass dashboard system

- Introduces the reusable Luminous Glass card, inset, icon-well, action, segmented-control, and metric primitives.
- Redesigns Home around premium layered surfaces with controlled blue/cyan edge illumination in dark mode and a quieter frosted translation in light mode.
- Moves the Overview identity and primary add action into the Net Profit hero card, with side-by-side IN / OUT metrics.
- Redesigns Needs Your Attention and Monthly Business Goals with nested glass hierarchy while preserving existing logic.
- Adds a compact Home Jobs summary derived from existing job, estimate, and invoice data without adding new stored counters or statuses.
- Applies the quieter glass treatment to Continue Work, Invoices & Collections, Sales Pipeline, Recent Activity, Tax Snapshot, and Receipts.
- Refines the sticky footer selection from a solid blue block to an illuminated glass selection well.
- Preserves existing licensing, PWA, IndexedDB/localStorage, demo/reset, reports, invoices, estimates, receipts, mileage, goals, and Jobs persistence behavior.


Controlled visual-redesign branch for MONIEZI v39.

## v39.0.28 jobs illustration and welcome activation-first layout

- Replaces the Jobs / Projects empty-state illustration with the newly approved shared transparent illustration, used in both light and dark mode.
- Reworks the welcome/license screen so activation comes earlier: the benefits strip moves below the activation card and the hero section is reduced so users reach the license field sooner.
- Keeps the approved transparent shared-illustration rule for the other custom illustration screens.

## v39.0.28 shared illustrations across themes

- Uses one approved illustration asset in both light and dark mode for Receipts, Clients, Mileage, Invoices, and Estimates.
- Receipts, Clients, and Mileage use their approved light-mode transparent artwork as the shared master.
- Invoice and Estimate use their approved light illustrations with only the connected outer canvas removed, preserving the document artwork while allowing it to sit directly on either app background.
- Removes the theme-specific illustration switching for these five screens.
- Keeps the shared demo-business illustration behavior introduced in v39.0.26.

## v39.0.28 shared demo-business illustration

- Uses the approved light-mode demo-business illustration in both light and dark themes.
- Removes the dark-specific demo illustration because the light illustration reads more clearly on MONIEZI's dark background.
- Keeps the illustration transparent with no baked rectangular background.

## v39.0.28 dark-mode demo illustration contrast refinement

- Replaces the dark-mode demo-business illustration with a higher-contrast professional version for better separation from MONIEZI's dark screen background.
- Keeps the approved light-mode illustration.
- Continues using transparent illustration assets with no baked rectangular background.

## v39.0.28 demo-business illustration upgrade

- Replaces the simple first-run demo graphic with the approved detailed MONIEZI business dashboard illustration.
- Adds separate approved light and dark production assets.
- Both assets use real transparency: no baked light/dark rectangle, no checkerboard, and no illustration background panel.
- The illustration now depicts the demo experience itself: dashboard charts, records, receipts, mileage, reports, and business activity.
- Keeps the existing theme selector, demo counts, demo loading behavior, and first-run workflow unchanged.

## v39.0.23 transparent illustration integration

- Replaces the Receipts, Clients, and Mileage light/dark production assets with normalized transparent artwork.
- Removes baked-in rectangular dark backgrounds so illustrations sit directly on the MONIEZI app surface.
- Removes any checkerboard/transparency-preview appearance from production assets.
- Normalizes crop, canvas, and visible artwork scale across each light/dark pair.
- Keeps the approved Receipts, Clients, and Mileage concepts and all existing business logic unchanged.
- Precaches all six new transparent illustration assets for offline use.

## v39.0.22 approved Receipts / Clients / Mileage illustrations

- Replaces the rejected generated SVG artwork on Receipts, Clients, and Mileage with the user-approved production illustrations.
- Adds six separate optimized assets: light and dark variants for Receipts, Clients, and Mileage.
- Each screen automatically follows the current MONIEZI theme and shows only its matching illustration.
- Receipts depicts a paper receipt moving into the app and being confirmed.
- Clients depicts individual client records being organized into a centralized client file.
- Mileage depicts a vehicle trip, route/destination, and the recorded trip inside the app.
- Keeps all existing business logic, empty-state copy, actions, filtering, and other v39 behavior unchanged.

## v39.0.21 mileage and receipts illustration fixes

- Fixes the Mileage illustration so the trip route and destination read as one clear trip story inside the map instead of an ambiguous route-to-nowhere.
- Fixes the Receipts illustration so the receipt currency mark is an unmistakable $ sign for the U.S.-focused app.
- Replaces the confusing top-right Receipts badge with a clearer sync/capture confirmation symbol.
- Keeps the v39 illustrated empty-state expansion for Receipts, Mileage, Clients, and Jobs / Projects.

## v39.0.21 illustrated empty-state expansion

- Extends the v39 illustrated empty-state treatment beyond Invoices and Estimates.
- Adds a new illustrated true-empty state for Clients.
- Adds a new illustrated true-empty state for Jobs / Projects.
- Adds a new illustrated true-empty state for Mileage when no trips exist yet.
- Adds a new illustrated true-empty state for the Home Receipts module when no receipt records exist yet.
- Keeps filter/search zero states compact when records already exist but the current view has no matches.
- Preserves all invoice, estimate, receipts, mileage, jobs, and client business logic while making more of the app feel visually consistent with the approved v39 direction.

## v39.0.19 Invoice / Estimate empty-state readability

- Adds more vertical breathing room between the approved illustration and the empty-state headline.
- Increases spacing between the headline and supporting copy.
- Increases supporting-copy line height for easier mobile reading.
- Adds more space between benefit rows and between each benefit title and description.
- Adds more space before the primary CTA so the empty state can scroll naturally rather than compressing the content.
- Applies identically to Invoices and Estimates in both light and dark modes.
- Preserves the approved illustrations, copy, CTA behavior, business logic, and all existing v39.0.18 functionality.

## v39.0.18 license activation confirmation timing

- Uses the approved light Invoice illustration in light mode.
- Uses the approved light Estimate illustration in light mode.
- Uses the approved dark Invoice illustration in dark mode.
- Uses the approved dark Estimate illustration in dark mode.
- Keeps the single primary CTA only; the misleading “Learn how…” links remain removed.
- Forces CTA label and plus icon to white in light and dark modes.
- Precaches all four approved empty-state illustration assets for offline use.

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

## v39.4.79 demo phone asset optimization

- Replaces the first-run demo phone illustration with a new optimized asset at 480 × 800 px.
- Targets an approximately 50 KB WebP file size while preserving the approved MONIEZI single-phone artwork.
- Updates the app references, preload path, and offline precache to the new versioned asset name.
- Removes the older larger demo phone asset from this version package so only the current optimized asset remains.

## v39.4.80 demo Net Profit landing

- Changes the Load the demo completion target from the top of Home to the Net Profit card.
- Adds a dedicated `home-net-profit` Home-section anchor and reuses the existing deterministic internal-scroll deep-link flow.
- Prevents the final Demo Mode navigation from resetting the Home scroller back to Add Transaction.
- Keeps the v39.4.79 optimized 480 × 800 demo phone illustration unchanged.
- Bumps the PWA service-worker cache version for this release.

## v39.4.81 fast Demo Net Profit landing

- Removes the receipt-library IndexedDB write sequence from the blocking `Load the demo` path.
- Publishes core demo records and receipt metadata immediately, then routes Home directly to the existing Net Profit anchor.
- Defers receipt-blob preparation to non-blocking follow-up work so the user does not wait on roughly 135 receipt writes before seeing Home.
- Suppresses the 500 ms Home entrance slide/fade while Demo Mode is active, making the Net Profit landing feel immediate and stable.
- Keeps the v39.4.79 optimized 480 × 800 demo phone illustration unchanged.
- Bumps the PWA service-worker cache version for this release.

## v39.5.0 Light Mode Color Refresh — Home phase 1

- Refreshes the light-mode Home canvas with a clean cool-neutral background.
- Rebuilds Net Profit as a crisp white financial card with stronger MONIEZI blue, darker typography, clearer period controls, and purposeful green/red IN/OUT accents.
- Rebuilds Needs Your Attention as a clean white card with a stronger amber identity, clearer Insights control, and neutral working rows.
- Removes light-mode glass haze/glow from these phase-one Home cards while leaving dark mode intentionally unchanged.
- Preserves v39.4.81 fast Demo-to-Net-Profit landing behavior.


## v39.5.1 Vivid Light Mode Color Refresh

- Corrects the v39.5.0 light-mode pass to follow the approved demo-phone visual reference more directly.
- Keeps Home feature cards crisp white on a cool-neutral canvas, while concentrating stronger saturated color in section icons, selected controls, semantic financial accents, and attention-status blocks.
- Gives Net Profit a strong MONIEZI-blue identity, including a solid blue section icon, blue hero accent, and a clearly filled active period control.
- Keeps IN and OUT financial cards white and readable while adding vivid green/red top accents and solid colored icon badges.
- Gives Needs Your Attention a strong amber identity, a solid blue Insights action, and vivid red/amber/blue status icon blocks.
- Extends saturated section-icon colors across the remaining Home feature cards for a more colorful, professional overall Home experience.
- Leaves dark mode intentionally unchanged and preserves v39.4.81 fast Demo-to-Net-Profit behavior.


## v39.5.2 App-wide Vivid Light Mode Color System

- Fixed the Home Net Profit and Needs Your Attention icon contrast conflict left by the earlier v39.5.0 light-mode overrides.
- Added a shared v39.5.2 light palette and applied it across routed page heroes, common card/form surfaces, semantic icon tiles, drawers, standard select/dropdown menus, and common modal surfaces.
- Refreshed the hamburger Menu with solid color-coded icon tiles and crisp white item surfaces.
- Refreshed Quick Add / Add Transaction with eight strong action colors while preserving the approved hero illustration and restrained geometry.
- Dark mode is intentionally unchanged.


## v39.5.3 Typography 700 + Demo Contrast

- Standardized MONIEZI primary headings at Plus Jakarta Sans Variable weight 700 across Home cards, routed screen headings, drawer/menu headings, Quick Add, and modal/dialog headings.
- Hamburger-menu primary item titles now use 700 while supporting descriptions remain secondary.
- Quick Add header and primary action titles now use 700.
- Changed the Demo banner `Exit Demo` button text to white.
- Changed the Home `Needs Your Attention` warning glyph to white on the vivid amber/yellow icon tile.
- No illustration/image assets were added or changed.


## v39.5.4 Primary Heading Visual Hierarchy

- Keeps Plus Jakarta Sans Variable and the approved 700 weight for primary headings.
- Fixes older phone-width rules that visually reduced Home feature-card headings to 19px even after the v39.5.3 weight change.
- Standardizes Home primary card headings at a stronger 22–25px responsive size while retaining 700 weight.
- Strengthens routed page, section, drawer, hamburger Menu, and modal primary-title sizing while keeping secondary copy unchanged.
- Enlarges the Quick Add popup title from the old 22px utility treatment to a true 26–30px responsive primary heading at 700 weight.
- Preserves the v39.5.3 white Exit Demo text, white Needs Your Attention warning glyph, and the v39.5.2 vivid light-mode color system.
- No illustration/image assets were added or changed.

# ENT & Audiology Shop Investigation

## Summary answer

The repository can support a dedicated `/ent-audiology` mini-ecommerce page with a small, localized change: add one React Router route and page, change the single Navbar `Products` item to `ENT & Audiology`, reuse the three existing product images in `public/products/product-1`, and generate a validated WhatsApp order link from the selected size and quantity. The existing Specialties data and section in `src/pages/Home.jsx` do not need to be touched and should remain byte-for-byte unchanged.

The implementation is technically straightforward, but four content issues should be resolved or represented conservatively rather than guessed:

1. No QAR price amount was supplied. Do not invent one. If implementation must proceed before confirmation, show `Price available on WhatsApp`/`Contact for QAR price` and treat the CTA as an order request; replace this with an actual `QAR 00.00` value once supplied.
2. The requested variants are XS/S/M/L, but only Large has a measurement (6.1–7.3 cm), and all supplied packaging/use imagery visibly describes Large. Keep all four requested controls, require an explicit selection, and do not invent measurements for XS/S/M.
3. The supplied brand value `10043878892` looks like an identifier, not a brand name. The assets visibly use “Safe Ears”; confirm whether the brand should be `Safe Ears` and whether the number is a seller/catalog identifier before publishing it.
4. The requirement refers to the number “shown in the footer,” but the current footer has no telephone or WhatsApp number. The consistent number elsewhere is `+974 3393 1435` (`97433931435` for `wa.me`). It is duplicated rather than centralized.

No approved design document was provided. The recommended design decision is a responsive product-detail layout inspired only by familiar ecommerce information architecture: gallery on the left, product summary/price/variants/quantity/CTA on the right, and benefits/specifications below. It should not copy Flipkart branding or visual assets; it should retain Baraka’s Caudex/DM Sans typography, green primary actions, warm neutral surfaces, restrained orange accents, shared `trust-interface` geometry, and existing responsive breakpoints.

## Evidence

### Repository guidance and project shape

- `README.md` identifies a React/Vite/Tailwind/React Router app and documents `npm run dev`, `npm run build`, and `npm run preview`. Its “Add More Pages” convention is: create a component in `src/pages`, register it in `src/App.jsx`, and add navigation in `src/components/Navbar.jsx`.
- No repository `AGENTS.md`, `CONTRIBUTING*`, or `.kiro/steering/*` files were found. There are therefore no additional repository-local planning or submission rules.
- `package-lock.json` is present, so npm is the established package manager.
- The application is mounted once under React `StrictMode` in `src/main.jsx`; global styles come from `src/index.css`.
- No `*.test.*` or `*.spec.*` application files and no `test` package script were found.

### 1. Routing and `/ent-audiology`

`src/App.jsx:17-20` defines three declarative routes inside `Routes`:

- `/` → `Home`
- `/about` → `About`
- `/contact` → `Contact`

The required route pattern is to import a new page component (recommended name `EntAudiology`) and add:

```jsx
<Route path="/ent-audiology" element={<EntAudiology />} />
```

`src/App.jsx:11,23-24` has two relevant shell behaviors:

- Only `/` is treated as the landing page, so `/ent-audiology` will automatically receive the shared `Footer`.
- `WhatsAppButton` is rendered for every route, including the new page.

The fixed navbar means the new page needs the same top-offset pattern as other inner pages, such as `pt-20 sm:pt-24` in `src/pages/About.jsx:59-60` or `pt-24` in `src/pages/Contact.jsx:118`.

`vercel.json:3-6` already rewrites every non-`/api/` path to `/index.html`. A direct browser refresh at `/ent-audiology` should therefore work on the existing Vercel deployment without a new rewrite. This should still be manually smoke-tested on a Vercel preview because local Vite fallback behavior is not proof of deployed rewrite behavior.

There is currently no catch-all/not-found route. This does not block the requested page, but a typo in its URL will continue to produce an empty app shell rather than a 404 page.

### 2. Navbar desktop/mobile behavior and exact edit

`src/components/Navbar.jsx:6-13` stores both desktop and mobile items in one `navigation` array. The current entry is at `src/components/Navbar.jsx:8`:

```js
{ label: 'Products', to: '/#products' },
```

Replace only that object with:

```js
{ label: 'ENT & Audiology', to: '/ent-audiology' },
```

No separate desktop/mobile edit is needed:

- Desktop maps the same array at `src/components/Navbar.jsx:62-79`.
- Mobile maps it at `src/components/Navbar.jsx:117-136` and calls `closeMenu` for router links.
- Both render hash destinations as native `<a>` elements and non-hash destinations as React Router `<Link>` elements (`src/components/Navbar.jsx:63-76` and `118-132`). Changing the destination to `/ent-audiology` automatically selects `<Link>` on both layouts and avoids a full-page navigation.

The desktop navigation appears at `lg` and above; below `lg`, the toggle button exposes `#mobile-navigation` with `aria-expanded`, `aria-controls`, and an adaptive accessible label (`src/components/Navbar.jsx:97-111`). Preserve these behaviors.

The request names the Navbar item specifically. The Footer’s existing `Products` link at `src/components/Footer.jsx:28` still targets the unchanged home-page `#products` section and may remain if that content remains useful. Changing it too would be a separate product-navigation decision, not required to leave Specialties unchanged.

### 3. Footer and WhatsApp canonical number

The effective business number is consistently formatted as:

- Display: `+974 3393 1435` in `src/pages/Contact.jsx:26-29`.
- `wa.me` digits: `97433931435` in `src/pages/Contact.jsx:29` and `src/components/WhatsAppButton.jsx:9`.
- Structured data: `+97433931435` in `index.html:66`.

`src/components/WhatsAppButton.jsx:11-17` builds its URL with `encodeURIComponent`, which is the correct pattern for a prefilled message. It opens a new tab with `rel="noopener noreferrer"` and has an accessible label (`src/components/WhatsAppButton.jsx:20-25`).

The number is not centralized: the Contact page, floating WhatsApp component, and static JSON-LD each contain their own literal. The existing `src/data/address.js` demonstrates the project’s preferred single-source-of-truth pattern for shared company information, but there is no equivalent contact-data module.

The Footer Contact column currently includes only email, postal address, and a Request a Quote link (`src/components/Footer.jsx:38-65`); it does **not** display a phone or WhatsApp number. Recommended resolution:

- Add `src/data/contact.js` with `WHATSAPP_NUMBER = '97433931435'` and `WHATSAPP_DISPLAY = '+974 3393 1435'` (and optionally a small URL builder).
- Import the values in `WhatsAppButton.jsx`, `Contact.jsx`, the new product page, and `Footer.jsx`.
- Add a phone/WhatsApp link to the Footer if the user’s “same number shown in the footer” wording is intended literally.
- `index.html` cannot directly import a JS module, so its JSON-LD telephone remains a deliberate static duplicate unless structured data is moved into application-managed metadata. Document this exception.

### 4. Design-system and reusable UI patterns

Global design tokens in `src/index.css` should drive the new page:

- DM Sans body/interface type: `src/index.css:4,63`.
- Caudex headings: `src/index.css:5,82-88`.
- Primary green `brand-600 #315b50` and hover green `brand-700 #26483f`: `src/index.css:20-22`.
- Warm orange accent centered on `accent-400 #f38b2b`: `src/index.css:35-38`; comments explicitly say to use it sparingly and use accessible darker orange for text on white.
- Retinted neutral scale and existing warm surfaces such as `#f4f1e9`, `#f8f5ef`, `#e5ebe2`, and slate text appear throughout `Home.jsx` and `About.jsx`.

`App.jsx:15` wraps every page in `.trust-interface`. Its global rules at `src/index.css:162-186` intentionally reduce card/button radii, remove utility shadows, suppress hover lift, and shorten transitions. A product page should be designed knowing those utilities are normalized; it should not depend on large shadows or extra-rounded Flipkart-style cards for hierarchy.

Useful existing layout conventions include:

- Inner page offset and warm background: `src/pages/About.jsx:59-60`.
- Centered page widths: `max-w-[1180px]`, `max-w-[1340px]`, `max-w-7xl` in Home/About/Contact.
- Mobile-first padding such as `px-5 sm:px-8`, then a two-column layout at `lg` (`src/pages/About.jsx:100-101`, `src/pages/Contact.jsx:131`, `src/pages/Home.jsx:255-256`).
- Strong heading tracking/line-height with muted 15px supporting copy, e.g. `src/pages/About.jsx:62-68`.
- Green primary actions with visible `focus-visible` outlines in `Navbar.jsx:83-93` and form controls/actions in `Contact.jsx`.
- Explicit image aspect containers, meaningful `alt`, `decoding="async"`, lazy loading for below-fold images, and width/height plus `fetchPriority="high"` for the primary hero (`src/pages/Home.jsx:256-263,353-362`).
- Reduced-motion support for existing animations at `src/index.css:149-157`.

Recommended page information architecture:

1. A compact page heading/breadcrumb region below the fixed navbar.
2. Main product region: square image gallery and thumbnails; alongside it, title, verified brand/colour/use/style, QAR price state, size fieldset, quantity input/stepper, and green `Place Order on WhatsApp` CTA.
3. “About this item” benefit list.
4. Product details in semantic `<dl>` or table-like rows.
5. A short ordering note explaining that WhatsApp opens with the chosen configuration and that availability/delivery will be confirmed.

Use green for the primary CTA and orange only for a small price/accent treatment. Do not introduce blue/yellow Flipkart colors, its logo, its exact card chrome, or copied marketplace wording.

### 5. Product assets

The requested directory exists and contains exactly three discoverable product assets:

1. `/home/shafin/Downloads/bmd/barakamedicals/public/products/product-1/Symmetrical Beige Safe Ears Earpieces.png`
2. `/home/shafin/Downloads/bmd/barakamedicals/public/products/product-1/Safe Ears Product Showcase.png`
3. `/home/shafin/Downloads/bmd/barakamedicals/public/products/product-1/Safe Ears Shower Protection Ad.png`

All three are PNG, square 1280 × 1280 images. Their file sizes are approximately:

- Earpieces: 1,751,330 bytes (~1.67 MiB).
- Product Showcase: 1,681,325 bytes (~1.60 MiB).
- Shower Protection Ad: 2,176,016 bytes (~2.08 MiB).

They are served by Vite from `/products/product-1/<filename>` because they are under `public`. No source file currently references `product-1`, `Safe Ears`, or `Ear Protection Aid`.

The assets are sufficient for a three-image gallery, but they are heavy for mobile delivery. Use the clean earpiece or product-showcase image as the eagerly loaded main image, lazy-load the other full images, include explicit `width="1280" height="1280"`, and use `object-contain` rather than `object-cover` so the product/packaging text is not cropped. A later optimization pass should create WebP/AVIF derivatives and normalized URL-safe filenames; the repository already prefers WebP for much of its current imagery, but it has no documented image-conversion script.

All three assets depict/label the Large variant; the gallery must not imply that photographed packaging represents XS/S/M.

### 6. Scripts, dependencies, and non-watch validation

`package.json:6-10` defines:

- `npm run dev` → `vite` (long-running development server).
- `npm run build` → `vite build` (non-watch production build).
- `npm run lint` → `oxlint` (non-watch lint).
- `npm run preview` → `vite preview` (long-running preview server).

The exact non-watch validation commands available are therefore:

```bash
npm run lint
npm run build
```

Expected outcomes: oxlint exits successfully with no diagnostics, then Vite completes a production bundle without unresolved imports/assets or compile errors. There is no unit/integration test command. `npm run preview` is useful only for a manual smoke test after the build; it is not a terminating validation command.

Relevant dependencies are React `^19.2.8`, React DOM `^19.2.8`, React Router DOM `^7.18.2`, lucide-react `^1.28.0`, Tailwind CSS `^4.3.3`, oxlint `^1.75.0`, and Vite `^8.2.0` (`package.json:13-27`). No new package is necessary for the requested page.

`postcss.config.js` uses `@tailwindcss/postcss` plus Autoprefixer. `vite.config.js` and `jsconfig.json` both define the `@` → `src` alias, although current nearby components mostly use relative imports. `jsconfig.json` has `checkJs: false`, so the build is not a strict type check.

### 7. SEO/document metadata convention

Every current page calls `useDocumentMeta` near the top of its component (Home at `src/pages/Home.jsx:287-294`, About at `src/pages/About.jsx:51-57`, Contact at `src/pages/Contact.jsx:64-70`). The new page should follow that exact convention with a route-specific title, description, and `path: '/ent-audiology'`.

`src/hooks/useDocumentMeta.js:23-41` updates:

- `document.title`
- meta description
- Open Graph title, description, and URL
- Twitter title and description
- canonical URL

`index.html:9-14,32` provides the crawl-time home defaults and default Open Graph image. The hook does not currently update Open Graph/Twitter image or image alt. A backward-compatible enhancement could accept optional `image`/`imageAlt` values so the new page can use a Safe Ears image while existing pages retain defaults, but this is optional scope.

`index.html:54-119` contains static `MedicalBusiness` JSON-LD and `index.html:120+` contains static FAQ JSON-LD. Product JSON-LD would be useful only after the brand, actual QAR price, variant availability, and product URL are confirmed. Do not publish a fabricated `Offer.price`, and note that JSON-LD injected by a client-rendered SPA is less reliable for non-JavaScript crawlers than prerendered metadata.

Suggested page metadata after content confirmation:

- Title: `Safe Ears Ear Protection Aid in Qatar | Baraka Medical Solutions`
- Description: `Shop reusable Safe Ears water-protection ear covers in Qatar. Choose XS, S, M or L and place your order with Baraka Medical Solutions on WhatsApp.`
- Canonical path: `/ent-audiology`

### 8. Risks and edge cases

#### WhatsApp order link

- Use digits-only `97433931435` with `https://wa.me/` and run the entire prefilled message through `encodeURIComponent`, following `WhatsAppButton.jsx:9-17`.
- Build the message from controlled state at submit time. Include product name, selected size, integer quantity, QAR unit price/total only if a real price exists, and the canonical product-page URL. Do not include `undefined`, stale state, or an invented price.
- The title is long; keep the prefill concise enough for reliable mobile deep linking. A recommended template is: `Hello Baraka Medical Solutions, I would like to order Safe Ears Ear Protection Aid. Size: L. Quantity: 2. Please confirm QAR price, availability and delivery.`
- Preserve `target="_blank"` and `rel="noopener noreferrer"` for anchor-based opening. If using `window.open`, invoke it synchronously from the submit/click event to reduce popup blocking and explicitly prevent opener access.
- WhatsApp may not be installed on desktop; `wa.me` should still fall back to WhatsApp Web/browser behavior.
- The global floating WhatsApp button can overlap a mobile sticky purchase CTA. Prefer a normal-flow CTA or add enough bottom/right clearance for the floating control and safe-area inset.

#### Size and quantity validation

- Do not preselect a size; require the shopper to choose XS, S, M, or L so an accidental default is not sent.
- Represent sizes as a semantic `<fieldset>`/`<legend>` with radio inputs or accessible toggle buttons that expose selection using native checked state/`aria-pressed`.
- Quantity should default to 1 and accept integers only, with an explicit minimum of 1 and a practical upper limit (for example 99) to avoid negative, zero, decimal, empty, `NaN`, or extreme values entering the message.
- Prevent order submission until size and quantity are valid. Put the validation message next to the field and expose it with `aria-describedby` or an `aria-live` status region.
- Only Large has a confirmed 6.1–7.3 cm range. Do not infer ranges for XS/S/M; either omit a complete size guide or visibly mark those measurements as pending confirmation.

#### Responsive gallery and performance

- Use an aspect-square main frame with `object-contain`, explicit dimensions, and a neutral background to avoid cropping and layout shift.
- Desktop can use vertical or adjacent thumbnails; mobile should use an overflow-safe horizontal thumbnail row. Ensure thumbnails are real buttons, keyboard reachable, visibly focused, and labeled by image purpose rather than filename.
- The 1.6–2.1 MiB PNGs are a material mobile performance risk. Eager-load only the initial image; lazy-load the rest and consider WebP/AVIF derivatives.
- Keep promotional text embedded in the images supplementary. Product facts, size, price, and ordering controls must also exist as HTML for accessibility and responsiveness.

#### Routing/Vercel

- The existing rewrite should support refreshes, but verify `/ent-audiology` directly on a Vercel preview and confirm `/api/quote` remains excluded from SPA rewriting.
- Use React Router `<Link>` for the Navbar route, not an anchor/hash link, to preserve client navigation and mobile-menu closing.

#### Accessibility and content integrity

- Maintain one descriptive `<h1>`, logical heading order, sufficient contrast, and the site’s existing visible focus style.
- Give each gallery image meaningful alt text; repeated thumbnails can use concise unique labels such as “Front view,” “Product with Large packaging,” and “Ear protection worn while showering.”
- Use a semantic list for benefits and `<dl>` for label/value product details. Avoid encoding meaning solely through beige/green/orange color.
- Preserve reduced-motion preferences; no gallery transition should be required to understand or operate the page.
- Verify claims before publication. The supplied title says `LDPD Material`, while the supplied benefits describe silicone; this likely needs correction/confirmation. The assets say `Safe Ears` and visibly feature Large, while the supplied “Brand” is numeric. These inconsistencies should not be silently reconciled by code.
- The first-available date is supplied as 11 February 2026. Confirm it is intended and useful to customers before exposing marketplace-style metadata.

## Conclusions and recommendations

### Design decisions

1. **Use one self-contained route page rather than altering Home.** This directly satisfies the dedicated `/ent-audiology` request, keeps the Specialties section untouched, and follows the repository’s page/route convention.
2. **Use the site’s existing visual tokens with ecommerce information architecture only.** This meets the “Flipkart-like” organization request without copying a third party’s brand and avoids fighting the global `.trust-interface` rules.
3. **Centralize WhatsApp contact data before wiring the order CTA.** The order route, floating button, Contact page, and optional Footer phone row otherwise risk drifting to different numbers.
4. **Use local component state and native form semantics.** One product, four sizes, and quantity do not justify a cart/store dependency; a form provides straightforward validation and accessible controls.
5. **Do not fabricate missing commerce data.** Until a QAR amount and complete size information are confirmed, represent price as awaiting confirmation and keep unsupported measurements out of the UI/message.
6. **Retain the current Home Specialties and existing Home product content.** Only the Navbar `Products` destination changes under the explicit request; `Home.jsx` does not need modification.

### Concise file-by-file implementation outline

- **Create `src/pages/EntAudiology.jsx`:** add `useDocumentMeta`, a three-image controlled gallery, one Safe Ears product summary, XS/S/M/L selector, validated quantity, WhatsApp order form/CTA, benefits, and product-details `<dl>`. Use the existing brand/warm-neutral classes and responsive width/padding patterns. Keep the product data local to this page unless a second product is actually added.
- **Modify `src/App.jsx`:** import `EntAudiology` and register `/ent-audiology`. No shell/footer condition change is needed.
- **Modify `src/components/Navbar.jsx`:** replace `{ label: 'Products', to: '/#products' }` with `{ label: 'ENT & Audiology', to: '/ent-audiology' }`; the shared mapping handles desktop and mobile automatically.
- **Create `src/data/contact.js`:** export the canonical digits-only WhatsApp number and display-formatted number; optionally export a message URL helper that always applies `encodeURIComponent`.
- **Modify `src/components/WhatsAppButton.jsx`:** consume the shared number/helper without changing its generic quote-message behavior.
- **Modify `src/pages/Contact.jsx`:** consume the shared display/digits values so the direct contact card cannot drift.
- **Modify `src/components/Footer.jsx` only if “shown in the footer” is literal:** add an accessible WhatsApp/phone row using the shared display number. Do not alter the Footer’s existing Products anchor unless the user also wants all product-navigation labels changed.
- **Reuse `public/products/product-1/*.png`:** reference the three current assets as gallery data. Optionally add optimized WebP/AVIF derivatives in the same directory in a separate performance pass; do not delete the originals without checking all references.
- **Optionally modify `src/hooks/useDocumentMeta.js`:** support route-specific social image/image-alt fields while preserving current defaults. This is useful but not required for functional completion.
- **Do not modify `src/pages/Home.jsx`:** this is the guardrail that preserves the existing Specialties section and its content/design.

### Verification checklist

1. Run `npm run lint`; expect oxlint to exit 0 with no new diagnostics.
2. Run `npm run build`; expect Vite to complete successfully with no unresolved route imports or image URLs.
3. Run the built app for manual checking (`npm run preview`) and verify `/ent-audiology` at narrow mobile, tablet, and desktop widths: fixed-navbar clearance, two-column-to-single-column flow, uncropped square main image, scrollable/reflowed thumbnails, and no overlap with the floating WhatsApp control.
4. Click `ENT & Audiology` in both desktop and mobile navigation. Expect client-side navigation to `/ent-audiology`; expect the mobile menu to close.
5. Confirm the Home Specialties section at `/#specialities` is visually/content-identical and all existing `/`, `/about`, `/contact`, and home hash navigation still works.
6. Exercise each gallery thumbnail by mouse and keyboard. Expect the main image and accessible selection state/label to update without layout shift.
7. Try submitting with no size, quantity 0, a negative value, a decimal, an empty value, and an excessive value. Expect submission to be prevented with an accessible error. Then test XS/S/M/L with valid quantities.
8. Decode/open the generated WhatsApp URL and confirm it targets `97433931435` and includes the correct product, selected size, exact integer quantity, and only verified QAR price information. Confirm spaces, `&`, punctuation, and line breaks are URL-encoded correctly.
9. Verify Footer/Contact/floating-button links all resolve to the same canonical number after centralization, and that generic floating-chat copy remains generic rather than inheriting stale product state.
10. Deploy to a Vercel preview and open `/ent-audiology` directly in a fresh browser tab, then refresh. Expect HTTP success and the React page, while `/api/quote` remains routed to the function.
11. Inspect document title, description, canonical, Open Graph URL, and Twitter fields after route navigation. If social image support is added, verify the product image URL and alt too.
12. Perform keyboard-only and screen-reader-oriented checks: logical headings, labeled gallery controls, named size group, labeled quantity, visible focus, announced errors, descriptive image alt, and CTA purpose. Also test with reduced motion enabled.

## Required confirmations before a production-ready commerce presentation

- Exact selling price in QAR and whether it is per pair/net quantity of 2.
- Whether `Safe Ears` is the brand and what `10043878892` represents.
- Whether the material is silicone, “LDPD,” LDPE, or another material.
- XS/S/M measurement ranges and confirmation that all four sizes are actually available.
- Whether Large-only photos are acceptable while another size is selected.
- Whether the phone/WhatsApp number should be newly displayed in the Footer or merely reused from the existing Contact/floating WhatsApp implementation.

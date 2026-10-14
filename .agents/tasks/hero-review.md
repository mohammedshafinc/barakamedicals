# Centered, image-free Home hero

The Home hero is reduced from a split text-and-media composition to a centered single-column presentation. The hero image, its supporting callout copy, and the eyebrow are removed while the main heading, central value proposition, both CTAs, and three trust points remain. The trust points are enlarged and separated responsively, using horizontal rules when stacked on mobile and vertical rules in the desktop grid. Recorded lint, production-build, computed-style, and screenshot evidence covers the requested desktop and mobile behavior.

**Watch for:** No blocking issues found; the supplied evidence confirms the requested removals and preservation requirements at both audited breakpoints.

**Verdict**: APPROVED

## High-level view

The redesign retains the aurora treatment and green visual language while replacing the media-led split layout with a centered content width. The main heading, value proposition, CTA routes, responsive full-height treatment, and accessible heading label remain intact.

The trust points move from a 12px wrapping row to a responsive grid with 14px mobile and 15px desktop labels. Separators follow reading direction: horizontal between stacked mobile rows and vertical between desktop columns.

The recorded lint and production build pass, and the 375×812 and 1280×900 audits confirm exact centering, visible 1px dividers, focusable in-viewport CTAs, and no horizontal overflow. Repository checks show `Home.jsx` as the only implementation change, no deleted images, HEAD unchanged from `main`, and a single worktree.

<details>
<summary>Issues (0)</summary>

No actionable concerns.

</details>

<details>
<summary>Details</summary>

## Centered composition preserves the conversion and accessibility contracts

An even vertical overlay replaces the image-biased treatment, and the retained paragraph receives a separate width cap so centered text remains readable at wide breakpoints. The eyebrow and complete media/callout column are absent, including the hero image, quality-assurance callout, and manufacturer microcopy; the primary supplier description and both CTA destinations remain.

## Responsive evidence verifies both divider modes

`layout-metrics.json` records zero heading and paragraph center deltas, 14px/15px point text, the expected border edge at each breakpoint, two focusable CTAs, and no overflow. The screenshots corroborate those measurements, while the recorded Oxlint and Vite runs passed without being rerun during review.

Git exit-code checks establish that `src/pages/Home.jsx` differs from `main`, no image deletion appears in the diff, HEAD equals `main`, and only one worktree exists. `public/hero2.webp` remains present.

</details>

<details>
<summary>File map</summary>

- `src/pages/Home.jsx` — removes the hero eyebrow and media callout, centers retained content, and enlarges/divides the trust points.
- `.agents/tasks/hero-redesign-plan.md` — records implementation intent plus lint, build, and visual verification.
- `.agents/tasks/ui-audit-screenshots/layout-metrics.json` — captures desktop and mobile computed layout evidence.
- `.agents/tasks/ui-audit-screenshots/hero-desktop.png` — records the 1280×900 result.
- `.agents/tasks/ui-audit-screenshots/hero-mobile.png` — records the 375×812 result.

Full diff: `git diff main`

</details>

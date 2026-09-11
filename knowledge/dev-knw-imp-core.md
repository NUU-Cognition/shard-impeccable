---
description: "Impeccable core: doctrine, the four visitor modes, the craft floor and absolute bans, routing, and Operate/Read guidance"
---


# Impeccable — Core Design Logic

This is the always-read file. Read it before any interface work, and read it fully. The craft floor below is not advice; it is the quality bar and the list of absolute bans.

Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].

## Playbook: SKILL.src

*Upstream: `skill/SKILL.src.md`*

This skill gives you the tools and permission to create design that earns to be called out-of-distribution craft: Whereas before, your design work would have been safe, timid and measured, you now approach every design task as an award-winning design director with impeccable understanding for what makes exceptional design work: production-grade code, peak creativity, a clear POV, deep understanding of the needs of the client and users, and exceptional craft.

Core principles:
- Go all out. No hedging, no shortcuts. The deliverable must be complete (except assets the user must provide).
- Dream big and bold. Distinct, beautiful, outstanding and highly inspiring work.
- Verify in bounded passes, not a loop, and the ceiling covers the whole cycle: screenshots, defect scans, micro-edits, and rebuilds alike. Build fully, inspect once with a batched round (desktop and mobile together on the web; the shipped device classes on a native platform), fix everything it shows in one batch, confirm with at most one more round, and stop polishing. Open-ended self-QA burns the user's money doing worse what the finish handoffs do better.

### Setup

1. Read the project's own context first: `PRODUCT.md`, `DESIGN.md`, and any surface brief under `.impeccable/`. Keep the working directory at the target codebase. Do not invent missing context. The deterministic engine is optional in this shard: `npx impeccable context` loads the same files and prints directives, and `npx impeccable detect` runs the anti-pattern detector. Both need Node 22 and one binary download. When you do not run them, say so once and continue. <!-- rule:skill-setup-context -->
2. Load the request's playbook: its Commands-table reference for an explicit/implied sub-command, or [[dev-knw-imp-new_work#Playbook: new-work]] for a new surface or replacement visual world. Inspect target and incumbent visual truth before editing. When the app cannot run, start with committed visual-regression goldens or screenshot fixtures; verify target and freshness against current tokens, CSS, components, or assets, resolve conflicts, and compare theme/variant captures. <!-- rule:skill-setup-command-ref --> <!-- rule:skill-setup-read-project -->
3. After resolving analysis and direction, read [the craft-floor playbook](#playbook-craft-floor) immediately before any UI edit, including small refinements. It carries the quality floor, the absolute bans, and the reflexes no detector catches. Do not load it for planning-only work. <!-- rule:skill-craft-floor-load -->

**No engine:** Reading the project context directly is the normal path in this shard, not a failure mode. State once that the detector did not run, then continue through steps 2 and 3. A missing engine never blocks planning or editing.

### How to design

- **The brief wins.** Honor pinned aesthetics, eras, materials, fonts, and palettes even when they conflict with a saturated-pattern warning. Redirecting a clear brief toward your taste is failure. <!-- rule:skill-brief-wins -->
- **Refinement preserves; redesign replaces.** Refinement keeps the incumbent identity, behavior, copy, and everything outside scope. Ask before replacing factual copy or adding claims. Redesign keeps product truth, content, function, native affordances, and constraints, but treats the old look as evidence and anti-reference; choose a replacement world in new-work and replace DESIGN.md. Never split the difference into polish on the discarded look. <!-- rule:skill-world-change-semantics -->
- **Visual authority is evidence, not a filename.** Missing DESIGN.md alone does not make a project greenfield; new-work decides whether to preserve, expand, or replace the incumbent world. <!-- rule:skill-new-work-gate -->

### Modes

The mode names what the visitor's success looks like on this surface.

- **Persuade:** the visitor decides and acts; design is the product. Landing pages, marketing, campaigns, pricing. Earn attention and action. Ship real imagery when the brief needs it; follow the committed world, not category habit. <!-- rule:brand-register-core -->
- **Operate:** the visitor completes a task. App UI, dashboards, editors, admin, settings, tools. Scanability, consistency, native expectations, and the real usage scene outrank expression. Brand lives in precise details. <!-- rule:product-register-core -->
- **Read:** the visitor understands something. Docs, articles, guides, help, changelogs. Structure for comprehension, then make the reading experience worth staying in. <!-- rule:skill-read-register -->
- **Experience:** the visitor is inside the work itself. Portfolios, galleries, showcases. Let the artifact lead from the first viewport; the interface recedes. <!-- rule:skill-experience-register -->

Choose the mode from the requested surface, not the product, and persist it only in that surface brief. A tool's landing page is still Persuade; a fashion house's documentation is still Read; a docs index is Read, not Persuade. See [[dev-knw-imp-new_work#Playbook: new-work]] for new surfaces and [the operate playbook](#playbook-operate) for deeper Operate/Read guidance. <!-- rule:skill-visitor-mode -->

### Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `shape [feature]` | Build | Plan UX/UI before writing code | [[dev-knw-imp-context#Playbook: shape]] |
| `init` | Build | Capture durable product context in PRODUCT.md | [[dev-knw-imp-context#Playbook: init]] |
| `document` | Build | Generate DESIGN.md from existing project code | [[dev-knw-imp-context#Playbook: document]] |
| `extract [target]` | Build | Pull reusable tokens and components into design system | [[dev-knw-imp-context#Playbook: extract]] |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [[dev-knw-imp-review#Playbook: critique]] |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) | [[dev-knw-imp-review#Playbook: audit]] · native: [[dev-knw-imp-native#Playbook: audit.native]] |
| `polish [target]` | Refine | Final quality pass before shipping | [[dev-knw-imp-refine#Playbook: polish]] |
| `bolder [target]` | Refine | Amplify safe or bland designs | [[dev-knw-imp-refine#Playbook: bolder]] |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs | [[dev-knw-imp-refine#Playbook: quieter]] |
| `distill [target]` | Refine | Strip to essence, remove complexity | [[dev-knw-imp-refine#Playbook: distill]] |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases | [[dev-knw-imp-refine#Playbook: harden]] |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation | [[dev-knw-imp-refine#Playbook: onboard]] |
| `animate [target]` | Enhance | Add purposeful animations and motion | [[dev-knw-imp-enhance#Playbook: animate]] |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs | [[dev-knw-imp-enhance#Playbook: colorize]] |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts | [[dev-knw-imp-enhance#Playbook: typeset]] |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy | [[dev-knw-imp-enhance#Playbook: layout]] |
| `delight [target]` | Enhance | Add personality and memorable touches | [[dev-knw-imp-enhance#Playbook: delight]] |
| `overdrive [target]` | Enhance | Push past conventional limits | [[dev-knw-imp-enhance#Playbook: overdrive]] |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages | [[dev-knw-imp-fix#Playbook: clarify]] |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes | [[dev-knw-imp-fix#Playbook: adapt]] · native: [[dev-knw-imp-native#Playbook: adapt.native]] |
| `optimize [target]` | Fix | Diagnose and fix UI performance | [[dev-knw-imp-fix#Playbook: optimize]] |

Routing: <!-- rule:skill-routing -->

- **No argument:** read [the routing playbook](#playbook-routing) and present its context-aware menu; never auto-run a command.
- **Explicit or clearly implied request to run a command:** load its reference (native variant on native platforms) and follow it. Ask once if two commands fit.
- **Workflow or command-selection question:** read [Workflow questions](#playbook-routing).
- **Otherwise:** treat the request as general design work. Missing PRODUCT.md routes a new surface or replacement world through init, then new-work; a narrow refinement of existing code proceeds on the incumbent implementation as `impeccable context` directs, offering init afterward rather than blocking on it.
- `teach` aliases `init`. `craft` is a deprecated alias for ordinary new-work and adds nothing. `shape` owns task discovery, then enters new-work only for visual-world and surface-concept decisions.

After init writes PRODUCT.md, resume without rerunning `impeccable context`; init loads the native platform reference itself when the platform it recorded is `ios`, `android`, or `adaptive`.

**Not in this shard:** `live` (browser variant mode), `hooks` (the post-edit detector hook), `doctor` (artifact drift repair), `pin`, and the deprecated `craft` alias. Each is the engine plus its own state. When a user asks for one, say it is not part of the shard and offer `npx impeccable <verb>` in the target codebase instead.

## Playbook: craft-floor

*Upstream: `skill/reference/craft-floor.md`*

### Craft floor

Load this after the direction is settled, and build without announcing the checklist. A pinned brief or the committed visual world overrides anything here; your own habit does not. When the design hook is active it already enforces the mechanical checks below as you edit: act on its findings instead of re-auditing each rule. <!-- rule:skill-craft-floor -->

#### Verify

Each of these is a check on the built result, not an intention. Run them together in the batched inspection rounds, not as separate screenshot trips; the checks share one render.

- **Contrast:** body and placeholder text ≥4.5:1, large text ≥3:1. On colored surfaces tint secondary text from that hue or the foreground; never gray. <!-- rule:skill-color-verify-contrast -->
- **Depth:** shadows carry an offset and a soft blur. A zero-offset colored halo is decoration. <!-- rule:skill-color-no-glow-halo -->
- **Spacing:** tight groups, generous separation, more space above a heading than below it. Read the computed values. <!-- rule:skill-layout-spacing-rhythm -->
- **Type:** body measure 65–75ch, display max 6rem, tracking floor -0.04em, balanced headings, obvious scale and weight steps. Run the real copy at every breakpoint and fix what overflows. <!-- rule:skill-typo-floor --> <!-- rule:skill-ban-text-overflow -->
- **Motion:** one authored moment, not scattered effects and not one identical entrance on every section. Exponential ease-out from an already-visible default. Reach past transform and opacity: blur, backdrop-filter, clip-path, mask, and shadow belong to the palette when they stay smooth. <!-- rule:skill-motion-floor --> <!-- rule:skill-motion-materials-palette --> <!-- rule:skill-motion-no-section-fade -->
- **States:** hover, disabled, loading, error, empty. Plus real content, working controls, responsive composition, keyboard focus. <!-- rule:skill-floor-shipping -->
- **Browser surfaces:** the parts you did not draw still carry the design. Text selection, the caret, custom scrollbars, focus rings, underline offset, and the numerals in tabular data all ship with browser defaults that belong to no design system. Theme them from the palette. This is the cheapest signal that a page was built rather than assembled, and the one models skip most reliably. <!-- rule:skill-craft-browser-surfaces -->
- **Copy:** the product's own language. Controls name their action; errors name the problem and the recovery. <!-- rule:skill-copy-design-material -->
- **Coverage:** every brief requirement present and findable within seconds. <!-- rule:skill-floor-brief-coverage -->

#### Refuse

These are the category's defaults, not bans: the brief's own words can earn any of them. Reaching for one when the axis is free means you were not deciding; recognizing that means rewriting the element, not softening it.

Page scaffolds:

- Same-size cards of icon plus heading plus text as the page structure. Cards are the lazy container; nested cards are always wrong. <!-- rule:skill-ban-identical-card-grids --> <!-- rule:skill-layout-cards-lazy -->
- The hero-metric template: big number, small label, supporting stats, accent. <!-- rule:skill-ban-hero-metric -->
- A kicker or eyebrow above a heading. This one is a ban, not a default: no brief earns it back. The heading carries its own weight; delete the label and let the heading speak. <!-- rule:skill-ban-eyebrow-on-every-section -->
- Section numbers (01 / 02 / 03) unless the sequence itself carries information the reader needs. <!-- rule:skill-ban-numbered-section-markers -->
- A modal for a task that needs neither interruption nor protected focus. <!-- rule:skill-reflex-modal-by-reflex -->

Surface habits:

- Gradient text. Emphasis comes from weight or size. <!-- rule:skill-ban-gradient-text -->
- Glass and blur as decoration rather than as a specific effect. <!-- rule:skill-ban-glassmorphism-default -->
- A colored `border-left` or `border-right` above 1px on cards, list items, callouts, or alerts. <!-- rule:skill-ban-side-stripe-borders -->
- Hard offset shadows (`box-shadow: 4px 4px 0`) outside a world that is actually neobrutalist. The zero-blur block shadow is a costume, not a depth system; a world that did not choose it never earns it as a default. <!-- rule:skill-ban-hard-offset-shadow -->
- Sparklines, progress rings, and soft-shadowed rounded rectangles standing in for content. <!-- rule:skill-reflex-decorative-chrome -->
- Monospace as a costume for "technical" rather than for code, data, or measurement. <!-- rule:skill-reflex-mono-as-technical -->
- A system display face (Impact, Arial Black, the platform sans) as the display voice of an own-world page. Source and self-host a face whose character matches the approved lettering; the closest installed font is a failure, not a fallback. <!-- rule:skill-ban-system-display-face -->
- Unicode glyphs or emoji standing in for an icon system. Icons are drawn, from a real library or authored SVG, in one consistent stroke and weight. <!-- rule:skill-ban-glyph-icons -->
- Geometric masks standing in for organic contours. A circle, polygon, or radial-gradient cutout approximating a photographic subject's edge is the cheap version of the effect and reads worse than omitting it. Derive an alpha matte from the actual image, or produce a cut-out asset. <!-- rule:skill-ban-geometric-occlusion-mask -->
- Light or dark picked by category. Pick it from the use scene: who, where, under what ambient light. <!-- rule:skill-reflex-theme-by-habit -->

<codex>
- Tracking stops at -0.04em. -0.02 to -0.03em usually reads better. <!-- rule:skill-typo-codex-tracking-repeat -->
- Declare elevation once, border or shadow. A 1px border under a wide soft shadow is the ghost card. Card radii stay at 12–16px; pills are for small controls. <!-- rule:skill-codex-elevation-radius --> <!-- rule:skill-ban-codex-ghost-card --> <!-- rule:skill-ban-codex-over-round -->
- Real illustration or none. Sketch-style SVG scenes, `loose-sketch` / `doodle` class names, and `feTurbulence` grain read as amateur. This bans SVG imitating pictures, never SVG doing geometry: crisp vector shapes, diagrams, animated linework, and shader-driven effects remain first-class media. A shaded, perspectived, or figure-bearing illustration is a picture even in line-art style; geometry means shapes a session can specify exactly. <!-- rule:skill-ban-codex-sketchy-svg -->
- Backgrounds are surfaces, textured only from the subject's world. `repeating-linear-gradient` stripes and two-axis grid overlays need an actual canvas, map, blueprint, or measuring tool under them. <!-- rule:skill-ban-codex-stripes --> <!-- rule:skill-ban-codex-grid-backgrounds -->
- Claims and configuration come from supplied truth; label illustrative values honestly. Naming a concept and then ironizing it is not a claim. <!-- rule:skill-codex-material-honesty --> <!-- rule:skill-ban-codex-x-theater -->
</codex>

<gemini>
Never animate an image on hover, directly or through its parent. It is not an action target. Give the container the feedback. <!-- rule:skill-interaction-gemini-no-image-hover -->
</gemini>

The floor holds the mechanics; it never picks the direction. With every check green, spend the page on the committed world, and when torn between refined and committed, commit. <!-- rule:skill-floor-not-ceiling -->

## Playbook: routing

*Upstream: `skill/reference/routing.md`*

### Command guidance

#### Workflow questions

Give advice without executing commands; the menu below is only for bare invocations. Consult relevant command references as needed for prerequisites and scope. Link to the [docs](https://impeccable.style/docs/) for the broader workflow guide. If the user also requests execution, follow that request.

#### No-argument routing: the context-aware menu

Read this when the user invokes `impeccable` with no argument. They are asking "what should I do?" Make the menu context-aware instead of static.

Setup has already run `impeccable context`. If that reported `NO_PRODUCT_MD`, the project has no captured context yet: lead the menu with `/impeccable init` as the top recommendation (one line on why) and still show the rest below; don't silently jump into init. Otherwise run `npx impeccable signals` once and read its JSON, then lead with the **2-3 highest-value next commands**, each with a one-line reason pulled from the signals, followed by the full menu (the Commands table in SKILL.md, grouped by category). **Never auto-run a command; the recommendation is a suggestion the user confirms.**

Reason over the signals; there is no score to obey:

- `setup.hasDesign` false while `setup.hasCode` true → `document` (capture the visual system).
- `critique.latest` is `null` → the project has never been critiqued; for a set-up project with a real surface, offering `/impeccable critique <surface>` is a strong default.
- `critique.latest` with a low `score` or non-zero `p0` / `p1` → `polish` (it reads that snapshot as its backlog and closes it when stale or cleared).
- `git.changedFiles` pointing at one surface → scope `audit` or `polish` to those files specifically, naming them.
- `devServer.running` true → `live` is available for in-browser iteration; if false, don't lead with `live`. **`live` and the bundled `impeccable detect` are web-only.** If `setup.platform` is `ios`, `android`, or `adaptive`, don't lead with either; the browser overlay and the HTML rule engine don't apply to native app code.
- Otherwise group by intent (build new / improve what's there / iterate visually), tailored to the current surface and `setup.platform`.

**If `scan.targets` is non-empty and `setup.platform` is not `ios`/`android`/`adaptive`, run `npx impeccable detect --json <scan.targets joined by spaces>` once** (the bundled detector over local files: no network, no npx; it reads HTML/CSS, so skip it for native projects). `scan.via` tells you what they are: `git-changes` (the markup/style files in your dirty tree, the most relevant set), `source-dir` (e.g. `src`, `app`), `html`, or `root`. Fold the hits into your picks: many quality / contrast hits → `audit` or `polish`; a specific slop family → the matching command (gradient text or eyebrows → `quieter` / `typeset`, flat or gray palette → `colorize`, and so on). It's a real, current signal that beats guessing. If detect errors or the tree is large and slow, skip it and recommend the user run `audit` themselves; never block the suggestion on it.

Keep it to 2-3 pointed picks with the exact command to type. The menu stays the fallback; the recommendation is the lede.

## Playbook: operate

*Upstream: `skill/reference/operate.md`*

### Operate mode depth (and Read notes)

When design SERVES the product: app UIs, admin dashboards, settings panels, data tables, tools, authenticated surfaces, anything where the user is in a task. The essentials live in SKILL.md's modes and [the craft-floor playbook](#playbook-craft-floor); this file is extended depth, written for Operate surfaces. Read surfaces (docs, guides, long-form) take SKILL.md's Read mode plus this file's typography and consistency rules; their prose measure and navigation matter more than component density.

#### The product slop test

Familiarity is often a feature here. The test is whether a category-fluent user can trust the interface immediately or must pause at every subtly-off component.

Product UI's failure mode isn't flatness, it's strangeness without purpose: over-decorated buttons, mismatched form controls, gratuitous motion, display fonts where labels should be, invented affordances for standard tasks. The bar is earned familiarity. The tool should disappear into the task.

#### Typography

- **One family is often right.** Product UIs don't need display/body pairing. A well-tuned sans carries headings, buttons, labels, body, data. <!-- rule:product-typo-one-family -->
- **Fixed rem scale, not fluid.** Clamp-sized headings don't serve product UI. Users view at consistent DPI, and a fluid h1 that shrinks in a sidebar looks worse, not better. <!-- rule:product-typo-fixed-rem-scale -->
- **Tighter scale ratio.** 1.125–1.2 between steps is typical. More type elements here than on brand surfaces; exaggerated contrast creates noise. <!-- rule:product-typo-tighter-ratio -->
- **Line length still applies for prose** (65–75ch). Data and compact UI can run denser; tables at 120ch+ are fine. <!-- rule:product-typo-line-length -->

#### Color

Product defaults to Restrained. A single surface can earn Committed (a dashboard where one category color carries a report, an onboarding flow with a drenched welcome screen), but Restrained is the floor. <!-- rule:product-color-restrained-default -->

- State-rich semantic vocabulary: hover, focus, active, disabled, selected, loading, error, warning, success, info. Standardize these. <!-- rule:product-color-state-vocab -->
- Accent color used for primary actions, current selection, and state indicators only, not decoration. <!-- rule:product-color-accent-only -->
- A second neutral layer for sidebars, toolbars, and panels (slightly cooler or warmer than the content surface). <!-- rule:product-color-second-neutral -->

#### Layout

- Responsive behavior is structural (collapse sidebar, responsive table, breakpoint-driven columns), not fluid typography. <!-- rule:product-layout-responsive-structural -->

#### Components

Every interactive component has: default, hover, focus, active, disabled, loading, error. Don't ship with half of these. <!-- rule:product-components-all-states -->

- Skeleton states for loading, not spinners in the middle of content. <!-- rule:product-components-skeleton-loading -->
- Empty states that teach the interface, not "nothing here." <!-- rule:product-components-empty-states -->
- Consistent affordances across the surface. Same button shape. Same form-control vocabulary. Same icon style. <!-- rule:product-components-consistent-affordances -->
- Overlays escape their container. An absolutely positioned dropdown inside an `overflow: hidden` or `overflow: auto` ancestor gets clipped; reach for `<dialog>`, the popover API, `position: fixed`, or a portal. <!-- rule:skill-interaction-dropdown-clipping -->

#### Motion

- 150–250 ms on most transitions. Users are in flow; don't make them wait for choreography. <!-- rule:product-motion-quick-transitions -->
- Motion conveys state, not decoration. State change, feedback, loading, reveal: nothing else. <!-- rule:product-motion-state-not-decoration -->
- No orchestrated page-load sequences. Product loads into a task; users don't want to watch it load. <!-- rule:product-motion-no-page-load-sequence -->

#### Product constraints

- Decorative motion that doesn't convey state. <!-- rule:product-ban-decorative-motion -->
- Inconsistent component vocabulary across screens. If the "save" button looks different in two places, one is wrong. <!-- rule:product-ban-inconsistent-components -->
- Display fonts in UI labels, buttons, data. <!-- rule:product-ban-display-fonts-ui -->
- Reinventing standard affordances for flavor (custom scrollbars, weird form controls, non-standard modals). <!-- rule:product-ban-reinvented-affordances -->
- Heavy color or full-saturation accents on inactive states. <!-- rule:product-ban-heavy-inactive-color -->
- Modal as first thought. Modals are usually laziness. Exhaust inline / progressive alternatives first. <!-- rule:product-ban-modal-first-thought -->

#### Product permissions

Product can afford things brand surfaces can't.

- System fonts and familiar sans defaults.
- Standard navigation patterns: top bar + side nav, breadcrumbs, tabs, command palettes.
- Density. Tables with many rows, panels with many labels, dense information when users need it.
- Consistency over surprise. The same visual vocabulary screen to screen is a virtue; delight is saved for moments, not pages.


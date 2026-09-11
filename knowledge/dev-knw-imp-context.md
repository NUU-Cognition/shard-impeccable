---
description: "Impeccable playbooks for capturing PRODUCT.md and DESIGN.md, planning a surface, and extracting reusable tokens"
---


# Impeccable — Project Context and Design Systems

Read this when the task is to capture product truth, document an existing visual world, plan a surface before code, or pull reusable tokens and components into a design system.

Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].

## Playbook: init

*Upstream: `skill/reference/init.md`*

### Init flow

`init` captures durable product truth in PRODUCT.md. It does not invent a visual world and does not write DESIGN.md; [[dev-knw-imp-new_work#Playbook: new-work]] creates or expands one, and [the document playbook](#playbook-document) records an incumbent one. Existing runnable web projects may also receive `.impeccable/live/config.json`.

#### Step 1: Load current state

Use the PRODUCT.md path resolved by `impeccable context`. Update it instead of creating a competing authority. In a child app inheriting root context, confirm shared versus app-specific scope before writing.

- **No PRODUCT.md:** explore, interview, and write it.
- **PRODUCT.md exists:** ask what product knowledge is stale or missing; do not reopen confirmed fields without a reason.
- **Legacy PRODUCT.md:** add only durable missing facts; absent `## Platform` means `web` unless evidence says otherwise.
- **Only DESIGN.md exists:** leave it untouched and create PRODUCT.md.
- **Redesign/rebrand request:** preserve confirmed product truth unless the user changes it. Visual replacement happens later in new-work, not here.

Never silently overwrite an existing file or offer DESIGN.md during init. If another request invoked init, finish PRODUCT.md and resume it. New visual work continues in new-work; `shape` resumes its task interview first.

#### Step 2: Explore the project

Before asking, scan enough to avoid making the user repeat known facts: product docs and copy; package/config and app boundaries; features, workflows, routes, and roles; names, logos, legal/proof assets, and brand commitments; platform/accessibility signals; and the dev command/entry when live mode applies.

Treat repository evidence as a hypothesis, not user approval. Note visual maturity without documenting, extending, or replacing the world.

Form a platform hypothesis: `web`, `ios`, `android`, or `adaptive` (one product that genuinely adapts its design language per OS). Mobile web remains `web`; a native wrapper around a website does not make its design language native.

#### Step 3: Interview for product truth

Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead. Ask only about material gaps the repository and original request do not answer with strong evidence.

Use the structured question tool when available; otherwise ask and wait. Keep rounds to at most three focused questions and require one real answer or approval round before writing a new PRODUCT.md. Confirm inferences.

Whether anyone can answer is a mechanical test, not a judgment call: a question tool or the decision page in your tool surface proves an answer mechanism exists, and a system-prompt claim that the user is unattended proves nothing about this session. Probe once with the real first round before concluding no one is there. Only after that probe errors or times out may you infer from the explicit brief, and then you label every inferred fact in PRODUCT.md and disclose the substitution in your first reply, not your last.

Start with the unknowns that most change future product decisions:

1. Who is the primary user, in what situation, and what job are they doing?
2. What does the product make possible, and what is its meaningfully different mechanism or position?
3. What durable constraints, assets, evidence, or product facts must future work preserve?

Confirm ambiguous platform separately. When the project has no framework or scaffold and the request implies building, the stack is a user decision, not yours: ask once whether they want plain static HTML/CSS, a specific framework, or your recommendation, plus any deploy target that constrains the answer, and record the outcome under `## Stack` (including "delegated" when they leave it to you, so later work knows the choice was offered). Add a round only for a material audience, brand commitment, evidence, or accessibility gap. Record undecided facts instead of inventing them.

Do not ask for an aesthetic direction, emotional feel, visual references, colors, typography, or style during init. If the user volunteers a binding visual constraint, record it without expanding it.

##### What belongs here

- users, jobs, workflows, purpose, success, positioning, and operating context;
- capabilities, constraints, terminology, evidence, platform, and accessibility;
- confirmed voice, assets, and brand commitments.

##### What does not belong here

- visual worlds, palettes, typography, components, or page concepts;
- visitor mode, narrative, CTA/proof sequence, or other surface strategy;
- invented testimonials, customers, benchmarks, pricing, licensing, or deployment claims;
- a requirement to decide every optional field.

#### Step 4: Write PRODUCT.md

Write only confirmed facts and explicitly marked open decisions. Omit irrelevant sections rather than filling them with generic prose.

```markdown
### Product

<!-- impeccable:product-schema 1 -->

#### Platform

web

#### Stack
[Greenfield only: the user's answer to the stack question, e.g. "static HTML/CSS", "Astro", or "delegated: <what you chose and why>". Omit the section when an existing codebase already answers it.]

#### Users
[Primary users, their situation, and job. Add other audiences only when confirmed.]

#### Product Purpose
[What the product does, why it exists, and what success means.]

#### Positioning
[The product mechanism or claim a neighboring product could not truthfully copy.]

#### Operating Context
[Workflows, environments, tools, documents, materials, and rituals that are factual parts of using or evaluating the product.]

#### Capabilities and Constraints
[Confirmed functionality, technical constraints, terminology, and explicitly undecided product facts.]

#### Brand Commitments
[Existing name, voice, assets, personality, identity constraints, and references the user explicitly made binding. Omit when none exist.]

#### Evidence on Hand
[Real content, data, demonstrations, testimonials, case studies, press, or assets, with paths where applicable. State absences that future work must not fabricate.]

#### Product Principles
[Three to five durable strategic principles derived from confirmed answers; no visual recipes.]

#### Accessibility & Inclusion
[Known user needs or required standard. Omit when no product-specific requirement was established.]
```

Platform is the bare value `web`, `ios`, `android`, or `adaptive`. Preserve useful legacy headings. New files go at `PROJECT_ROOT/PRODUCT.md`; otherwise update the resolved file. Write it before any visual-world or surface-concept work.

Copy the `impeccable:product-schema` comment verbatim, including when you update an older file. It records which version of the product record this file follows, so later versions can tell a deliberately short record from one written before a section existed, and never propose an interview the user has already sat through. Update the number only when this reference's template changes it. Sections a later version retires are reported to you at boot as deprecated; delete them when the user agrees rather than carrying them forward.

When the platform you just recorded is `ios`, `android`, or `adaptive`, load [[dev-knw-imp-native#Playbook: ios]], [[dev-knw-imp-native#Playbook: android]], or both before any design work. On a project that had no PRODUCT.md, `impeccable context` could not know the platform and so never loaded them; init is the only place that learns the answer.

##### Completion gate

Before loading new-work or resuming shape/build, verify that PRODUCT.md exists at the resolved path and contains the confirmed product record. If the file is absent, init is incomplete. Do not substitute interview notes, a planning packet, or later design prose for the file.

#### Step 5: Record workflow defaults

When image generation is available and no `buildPath` is recorded yet, ask once how new surfaces should be built. Availability means a harness-native image tool or the API fallback that `impeccable context` reports as `IMAGE_GEN_AVAILABLE`, and the first of those leaves no trace in the boot output: `impeccable context` only sees the key, so a silent boot on a harness that generates images is not evidence there is nothing to ask about. This is its own question, never a clause riding inside another one. The stack round asks what to build with; this asks how the building starts, and an answer to the first carries no consent about the second. State the trade in the question the user actually reads, because the two names mean nothing to someone meeting them for the first time: **comp-first** (an image sets the bar before any code; bolder composition, slower, and the build must match the image) or **code-first** (build directly; the ambition is written into the direction contract and audited at the finish; leaner, faster).

Write the answer to `.impeccable/config.json` as `"buildPath": "comp"` or `"buildPath": "code"`, merging with the keys already there. Write only the value the user chose. A recommendation you made is not an answer you received, and a value taken from silence is a standing default nobody set: it then rides every future round in the project, which is the opposite of asking once. When the question goes unanswered, record nothing and say in one line which path this session is taking and that it is not stored. That path is comp-first, the default new-work applies wherever image generation exists and nothing is recorded; name it rather than choosing a quieter one, because a silent default invented here is the same failure as a value written without an answer. Unset is a working state, not a gap: the decision page's toggle governs each session, and new-work's one-time offer records the answer the first time the user flips it. The config is the only place this lives. It is a workflow setting, not product truth, so it never joins `## Stack` or any other PRODUCT.md section, where a second copy would outlive the setting and steer rounds nobody could trace back to it.

A value already recorded in `.impeccable/config.json` or the gitignored `.impeccable/config.local.json` is a confirmed answer: on a re-run, honor it in silence rather than asking again. This is a default, not a lock: the decision page renders a toggle whose flip binds a single session and is never written back. Without image generation there is no choice to record; code-first is the only path.

Then configure live mode when useful: skip native or non-runnable projects and leave existing config untouched. Otherwise follow live (not part of this shard)'s first-time setup. Any CSP source edit still requires its stated consent.

#### Step 6: Wrap up or resume

Summarize captured and deliberately undecided facts. Do not offer DESIGN.md merely because it is missing.

Recommend the next action from the actual project state:

- Empty or early project: ask naturally for the surface to be built, or use `/impeccable shape <surface>` when the user wants a confirmed brief without implementation. New-work will establish a visual world only when the requested work needs one.
- Existing coherent interface without DESIGN.md: `/impeccable document` if the user wants the incumbent system recorded independently of a new build.
- Existing surface needing work: name the most relevant scoped command.
- Web project ready for visual iteration: `/impeccable live` when configured.

If init was invoked by another request, resume without rerunning `impeccable context`; the native reference above is the one thing that run could not have given you, and new-work owns later visual decisions.

## Playbook: document

*Upstream: `skill/reference/document.md`*

Generate a `DESIGN.md` file at the project root that captures the current visual design system, so AI agents generating new screens stay on-brand.

DESIGN.md follows the [official DESIGN.md format spec](https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md): optional YAML frontmatter carrying machine-readable design tokens, followed by up to eight markdown sections in a fixed order. **Tokens are normative; prose provides context for how to apply them.** Sections may be omitted when not relevant, but those present stay in the specified order. Use the canonical headings below so the file remains portable across DESIGN.md-aware tools.

#### The frontmatter: token schema

The YAML frontmatter is the machine-readable layer. It's what Stitch's linter validates and what the live panel renders tiles from. Keep it tight; every entry should correspond to a token the project actually uses.

```yaml
---
name: <project title>
description: <one-line tagline>
colors:
  primary: "#b8422e"
  neutral-bg: "#faf7f2"
  # ...one entry per extracted color; key = descriptive slug
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "normal"
  body:
    # ...
rounded:
  sm: "4px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "16px 48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
---
```

Rules that matter:

- **Token refs** use `{path.to.token}` (e.g. `{colors.primary}`, `{rounded.md}`). Components may reference primitives; primitives may not reference each other.
- **Colors accept any valid CSS color string.** Hex is the recommended default for portability, but preserve an incumbent `rgb()`, `hsl()`, `oklch()`, wide-gamut, or mixed-color value when it is the project's normative source. Never split the source of truth without explicit reason.
- **Component sub-tokens** are limited to 8 props: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Shadows, motion, focus rings, backdrop-filter: none of those fit. Carry them in the sidecar (Step 4b).
- **Scale keys are open-ended.** Use whatever names the project already uses (`oxblood-deep`, `surface-container-low`). Don't rename to Material defaults.
- **Variants are naming convention, not schema.** `button-primary` / `button-primary-hover` / `button-primary-active` as sibling keys.

#### The markdown body: eight sections (canonical order)

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Omit irrelevant sections rather than filling them with invented rules. Put responsive layout in Layout, depth in Elevation & Depth, radius and form language in Shapes, and per-component behavior in Components. Unknown sections are preserved by the format, but new visual guidance should use the canonical structure whenever it fits.

#### When to run

- New-work found a coherent incumbent visual system but no `DESIGN.md`.
- The first implementation of a new world is complete and its provisional decisions need to be carbonized.
- An existing `DESIGN.md` is stale (the design has drifted).
- Before a large redesign, to capture the current state as a reference.

If a `DESIGN.md` already exists, **do not silently overwrite it**. Show the user the existing file first. Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead. The choice is refresh, overwrite, or merge.

#### Two paths

- **Scan mode** (default): the project has design tokens, components, or rendered output. Extract, then confirm descriptive language. Use when there's code to analyze.
- **Seed mode**: the project is pre-implementation. Ensure PRODUCT.md exists, then reuse new-work's visual-world workshop and write its directional DESIGN.md seed. Re-run in scan mode once there's code.

Decide by scanning first (Scan mode Step 1). If the scan finds no tokens, no component files, and no rendered site, offer seed mode; don't silently switch. `/impeccable document --seed` requests new-work's world workshop, but it does not authorize replacing coherent code: when an incumbent system exists, offer scan mode or route an explicit identity-replacement request through new-work.

#### Scan mode (approach C: auto-extract, then confirm descriptive language)

##### Step 1: Find the design assets

Search the codebase in priority order:

1. **CSS custom properties**: grep for `--color-`, `--font-`, `--spacing-`, `--radius-`, `--shadow-`, `--ease-`, `--duration-` declarations in CSS files (usually `src/styles/`, `public/css/`, `app/globals.css`, etc.). Record name, value, and the file it's defined in.
2. **Tailwind config**: if `tailwind.config.{js,ts,mjs}` exists, read the `theme.extend` block for colors, fontFamily, spacing, borderRadius, boxShadow.
3. **CSS-in-JS theme files**: styled-components, emotion, vanilla-extract, stitches; look for `theme.ts`, `tokens.ts`, or equivalent.
4. **Design token files**: `tokens.json`, `design-tokens.json`, Style Dictionary output, W3C token community group format.
5. **Component library**: scan the main button, card, input, navigation, dialog components. Note their variant APIs and default styles.
6. **Global stylesheet**: the root CSS file usually has the base typography and color assignments.
7. **Visible rendered output**: if browser automation tools are available, load the live site and sample computed styles from key elements (body, h1, a, button, .card). This catches values that tokens miss.

##### Step 2: Auto-extract what can be auto-extracted

Build a structured draft from the discovered tokens. For each token class:

- **Colors**: Group into Primary / Secondary / Tertiary / Neutral (the Material-derived roles Stitch uses). If the project only has one accent, express it as Primary + Neutral; omit Secondary and Tertiary rather than inventing them.
- **Typography**: Map observed sizes and weights to the Material hierarchy (display / headline / title / body / label). Note font-family stacks and the scale ratio.
- **Elevation**: Catalogue the shadow vocabulary. If the project is flat and uses tonal layering instead, that's a valid answer; state it explicitly.
- **Components**: For each common component (button, card, input, chip, list item, tooltip, nav), extract shape (radius), color assignment, hover/focus treatment, internal padding.
- **Layout + spacing**: Extract grid, container, breakpoint, rhythm, and density behavior into Layout.
- **Shapes**: Extract radius, corner, border, clipping, and recurring form behavior into Shapes.

##### Step 2b: Stage the frontmatter

From the auto-extracted tokens, draft the YAML frontmatter now (you'll write it at the top of DESIGN.md in Step 4). This is the machine-readable layer: what the live panel and Stitch's linter consume.

- **Colors**: one entry per extracted color. Key = descriptive slug (`oxblood-deep`, `editorial-magenta`, not `blue-800`). Value = whichever format the project treats as canonical (OKLCH or hex; see the frontmatter rules above). Don't split the source of truth: one format in the frontmatter, don't redefine the same token in prose with a different value.
- **Typography**: one entry per role (`display`, `headline`, `title`, `body`, `label`). Typography is an object; include only the props that are real for the project (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontFeature`, `fontVariation`).
- **Rounded / Spacing**: whatever scale steps the project actually uses, keyed by whatever scale name the project uses (`sm` / `md` / `lg`, or `surface-sm`, or numeric steps).
- **Components**: one entry per variant (`button-primary`, `button-primary-hover`, `button-ghost`). Reference primitives via `{colors.X}`, `{rounded.Y}`. If a variant needs a property Stitch's 8-prop set doesn't cover (shadow, focus ring, backdrop-filter), carry the full snippet in the sidecar instead.

Skip anything the project doesn't have. Empty scale keys or fabricated tokens pollute the spec.

##### Step 3: Ask the user for qualitative language

The following require creative input that cannot be auto-extracted. Ask them in two structured rounds of no more than three questions each (or the harness's lower limit), waiting between rounds:

- **Creative North Star**: a single named metaphor for the whole system ("The Editorial Sanctuary", "The Golden State Curator", "The Lab Notebook"). Offer 2-3 options that honor PRODUCT.md's brand personality.
- **Overview voice**: mood adjectives, aesthetic philosophy in 2-3 sentences, and any confirmed visual anti-reference.
- **Color character** (for auto-extracted colors): descriptive names ("Deep Muted Teal-Navy", not "blue-800"). Suggest 2-3 options per key color based on hue/saturation.
- **Elevation philosophy**: flat/layered/lifted. If shadows exist, is their role ambient or structural?
- **Component philosophy**: the feel of buttons, cards, inputs in one phrase ("tactile and confident" vs. "refined and restrained").

Carry a line from PRODUCT.md only when it is a durable brand commitment that actually constrains the visual system. Page strategy and surface concepts do not belong here.

##### Step 4: Write DESIGN.md

The file opens with the YAML frontmatter staged in Step 2b (schema documented at the top of this reference), then the markdown body using the canonical structure below.

```markdown
---
name: [Project Title]
description: [one-line tagline]
colors:
  # ... staged frontmatter from Step 2b
---

### Design System: [Project Title]

#### Overview

**Creative North Star: "[Named metaphor in quotes]"**

[2-3 paragraph holistic description: personality, density, and aesthetic philosophy. Start from the North Star and work outward. State only confirmed visual rejections. End with a short **Key Characteristics:** bullet list.]

#### Colors

[Describe the palette character in one sentence.]

##### Primary
- **[Descriptive Name]** (#HEX / oklch(...)): [Where and why this color is used. Be specific about context, not just role.]

##### Secondary (optional; omit if the project has only one accent)
- **[Descriptive Name]** (#HEX): [Role.]

##### Tertiary (optional)
- **[Descriptive Name]** (#HEX): [Role.]

##### Neutral
- **[Descriptive Name]** (#HEX): [Text / background / border / divider role.]
- [...]

##### Named Rules (optional, powerful)
**The [Rule Name] Rule.** [Short, forceful prohibition or doctrine, e.g. "The One Voice Rule. The primary accent is used on ≤10% of any given screen. Its rarity is the point."]

#### Typography

**Display Font:** [Family] (with [fallback])
**Body Font:** [Family] (with [fallback])
**Label/Mono Font:** [Family, if distinct]

**Character:** [1-2 sentence personality description of the pairing.]

##### Hierarchy
- **Display** ([weight], [size/clamp], [line-height]): [Purpose; where it appears.]
- **Headline** ([weight], [size], [line-height]): [Purpose.]
- **Title** ([weight], [size], [line-height]): [Purpose.]
- **Body** ([weight], [size], [line-height]): [Purpose. Include max line length like 65–75ch if relevant.]
- **Label** ([weight], [size], [letter-spacing], [case if uppercase]): [Purpose.]

##### Named Rules (optional)
**The [Rule Name] Rule.** [Short doctrine about type use.]

#### Layout

[Describe the grid or spatial model, container behavior, density, responsive changes, and the spacing rhythm. Include exact values only when observed.]

#### Elevation & Depth

[One paragraph: does this system use shadows, tonal layering, or a hybrid? If "no shadows", say so explicitly and describe how depth is conveyed instead.]

##### Shadow Vocabulary (if applicable)
- **[Role name]** (`box-shadow: [exact value]`): [When to use it.]
- [...]

##### Named Rules (optional)
**The [Rule Name] Rule.** [e.g. "The Flat-By-Default Rule. Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus)."]

#### Shapes

[Describe the form language: corner/radius strategy, borders, clipping, and any recurring silhouette or geometry.]

#### Components

For each component, lead with a short character line, then specify shape, color assignment, states, and any distinctive behavior.

##### Buttons
- **Shape:** [radius described, exact value in parens]
- **Primary:** [color assignment + padding, in semantic + exact terms]
- **Hover / Focus:** [transitions, treatments]
- **Secondary / Ghost / Tertiary (if applicable):** [brief description]

##### Chips (if used)
- **Style:** [background, text color, border treatment]
- **State:** [selected / unselected, filter / action variants]

##### Cards / Containers
- **Corner Style:** [radius]
- **Background:** [colors used]
- **Shadow Strategy:** [reference Elevation section]
- **Border:** [if any]
- **Internal Padding:** [scale]

##### Inputs / Fields
- **Style:** [stroke, background, radius]
- **Focus:** [treatment, e.g. glow, border shift, etc.]
- **Error / Disabled:** [if applicable]

##### Navigation
- **Style, typography, default/hover/active states, mobile treatment.**

##### [Signature Component] (optional; if the project has a distinctive custom component worth documenting)
[Description.]

#### Do's and Don'ts

Concrete visual guardrails grounded in the incumbent implementation or the user's chosen world. Lead each with "Do" or "Don't" and include exact values only when established. Do not turn a task-specific concept or surface strategy into a system-wide prohibition.

##### Do:
- **Do** [specific prescription with exact values / named rule].
- **Do** [...]

##### Don't:
- **Don't** [specific prohibition confirmed by the incumbent system or the user].
- **Don't** [...]
- **Don't** [...]
```

##### Step 4b: Write .impeccable/design.json sidecar (extensions only)

The frontmatter owns token primitives (colors, typography, rounded, spacing, components). The sidecar at `.impeccable/design.json` carries **what Stitch's schema can't hold**: tonal ramps per color, shadow/elevation tokens, motion tokens, breakpoints, full component HTML/CSS snippets (the panel renders these into a shadow DOM), and narrative (north star, rules, do's/don'ts). It extends the frontmatter, it doesn't duplicate it.

Regenerate the sidecar whenever you regenerate root `DESIGN.md`. If the user only asks to refresh the sidecar (e.g., from the live panel's stale-hint), preserve `DESIGN.md` and write only `.impeccable/design.json`.

###### Schema

```json
{
  "schemaVersion": 2,
  "generatedAt": "ISO-8601 string",
  "title": "Design System: [Project Title]",
  "extensions": {
    "colorMeta": {
      "primary":        { "role": "primary",  "displayName": "Editorial Magenta", "canonical": "oklch(60% 0.25 350)", "tonalRamp": ["...", "...", "..."] },
      "cool-paper": { "role": "neutral",  "displayName": "Cool Paper",    "canonical": "oklch(96% 0.005 230)", "tonalRamp": ["...", "...", "..."] }
    },
    "typographyMeta": {
      "display": { "displayName": "Display", "purpose": "Hero headlines only." }
    },
    "shadows": [
      { "name": "ambient-low", "value": "0 4px 24px rgba(0,0,0,0.12)", "purpose": "Diffuse hover glow under accent elements." }
    ],
    "motion": [
      { "name": "ease-standard", "value": "cubic-bezier(0.4, 0, 0.2, 1)", "purpose": "Default easing for state transitions." }
    ],
    "breakpoints": [
      { "name": "sm", "value": "640px" }
    ]
  },
  "components": [
    {
      "name": "Primary Button",
      "kind": "button | input | nav | chip | card | custom",
      "refersTo": "button-primary",
      "description": "One-line what and when.",
      "html": "<button class=\"ds-btn-primary\">SAVE CHANGES</button>",
      "css": ".ds-btn-primary { background: #191c1d; color: #fff; padding: 16px 48px; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 500; border: none; border-radius: 0; transition: background 0.2s, transform 0.2s; } .ds-btn-primary:hover { background: oklch(60% 0.25 350); transform: translateY(-2px); }"
    }
  ],
  "narrative": {
    "northStar": "The Editorial Sanctuary",
    "overview": "2-3 paragraphs of the philosophy, pulled from DESIGN.md Overview section.",
    "keyCharacteristics": ["...", "..."],
    "rules": [{ "name": "The One Voice Rule", "body": "...", "section": "colors|typography|elevation" }],
    "dos":   ["Do use ..."],
    "donts": ["Don't use ..."]
  }
}
```

**What changed from schemaVersion 1.** The old sidecar carried token primitive arrays (`tokens.colors[]`, `tokens.typography[]`, etc.). Those values now live in the frontmatter. The sidecar only carries metadata that can't live in the frontmatter (tonal ramps, canonical OKLCH when the hex is an approximation, display names, role hints), keyed by the frontmatter token name (`colorMeta.<token-name>`, `typographyMeta.<token-name>`). Components still carry full HTML/CSS because Stitch's 8-prop set can't hold them.

###### Component translation rules

The `html` and `css` fields must be **self-contained, drop-in snippets** that render correctly when injected into a shadow DOM. The panel applies them directly: no post-processing, no framework runtime.

1. **Tailwind expansion.** If the source uses Tailwind (className="bg-primary text-white rounded-lg px-6 py-3"), expand every utility to literal CSS properties in the `css` string. Do **not** reference Tailwind classes; do **not** assume a Tailwind CSS bundle is loaded. Each component is self-contained.
2. **Token resolution.** If the project exposes tokens as CSS custom properties on `:root` (e.g. `--color-primary`, `--radius-md`), reference them via `var(--color-primary)`; they inherit through the shadow DOM and stay live-bound. If tokens live only in JS theme objects (styled-components, CSS-in-JS), resolve to literal values at generation time.
3. **Icons.** Inline as SVG. Do not reference Lucide/Heroicons packages, icon fonts, or `<img src="...">`. A typical icon is 16-24px; copy the SVG path data directly.
4. **States.** Include `:hover`, `:focus-visible`, and (if meaningful) `:active` rules inline. A static default-only snapshot makes the panel feel dead. Hover + focus rules in the CSS make it feel alive.
5. **Reset bloat.** Extract only the component's *distinctive* CSS (background, color, padding, border-radius, typography, transition). Skip universal resets (`box-sizing: border-box`, `line-height: inherit`, `-webkit-font-smoothing`). The panel already has a neutral canvas; don't re-ship resets.
6. **Scoped class names.** Prefix every class with `ds-` (e.g. `ds-btn-primary`, `ds-input-search`) so component CSS doesn't collide with other components' CSS in the same shadow DOM.

###### What to include

Aim for a tight set of **5-10 components** that best represent the visual system:

- **Canonical primitives (always include if the project has them):** button (each variant as a separate component entry), input/text field, navigation, chip/tag, card.
- **Signature components (include if distinctive):** the recurring custom patterns that actually define the implemented system.
- **Skip the rest.** Utility components, form building blocks, wrapper layouts: not worth documenting unless visually distinctive.

If the project has **no component library yet** (bare landing page, new project), synthesize canonical primitives from the tokens using best-practice defaults consistent with the DESIGN.md's rules. Every `.impeccable/design.json` has *something* to render, even on day zero.

###### Tonal ramps

For each color token, generate an 8-step `tonalRamp` array: dark to light, same hue and chroma, stepped lightness from ~15% to ~95%. The panel renders this as a strip under the swatch. If the project already defines a tonal scale (Material `surface-container-low` family, Tailwind-style `blue-50..blue-900`), use those values. Otherwise synthesize in OKLCH.

###### Narrative mapping

Pull directly from the DESIGN.md you just wrote:

- `narrative.northStar` → the `**Creative North Star: "..."**` line from Overview
- `narrative.overview` → the philosophy paragraphs from Overview
- `narrative.keyCharacteristics` → the bulleted `**Key Characteristics:**` list
- `narrative.rules` → every `**The [Name] Rule.** [body]` across all sections, tagged with `section`
- `narrative.dos` / `narrative.donts` → the bullet lists from Do's and Don'ts verbatim

Do not reword. The panel shows these as secondary collapsible context; the same voice that's in the Markdown carries through.

##### Step 5: Confirm and refine

1. Show the user the full DESIGN.md you wrote. Briefly highlight the non-obvious creative choices (descriptive color names, atmosphere language, named rules).
2. Mention that `.impeccable/design.json` was also written alongside; the live panel will now render this project's actual button/input/nav primitives instead of generic approximations.
3. Offer to refine any section: "Want me to revise a section, add component patterns I missed, or adjust the atmosphere language?"

Your own write is the freshest source; subsequent commands in this session don't need a reload.

#### Seed mode

For projects with no visual system to extract yet. Produces a user-chosen visual-world scaffold, not a fabricated token spec.

##### Step 1: Route through new-work's workshop

PRODUCT.md is the prerequisite. If it is missing, load [the init playbook](#playbook-init) and complete its product interview first. Do not create a visual identity without durable product context.

If PRODUCT.md exists, load [[dev-knw-imp-new_work#Playbook: new-work]] and resolve visual authority. Seed mode requires a concrete first surface: use the target the user named, or ask what they want to make first. Run new-work's **Create or replace the visual world** flow, then **Commit the world**, so the visual world and its first expression are chosen together. Stop after the directional DESIGN.md seed and surface brief; do not implement. A structured simulated user counts as the user and must get the same choice.

If new-work already completed the workshop in this session, use its chosen direction directly. Do not ask again.

##### Step 2: Write seed DESIGN.md

Use the canonical section order from Scan mode. Populate the selected workshop direction and leave unresolved implementation facts as honest placeholders. The seed commits a world and its invariants; it does not pretend implementation tokens already exist.

Lead the file with:

```markdown
<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->
```

Per-section guidance in seed mode:

- **Overview**: the chosen design thesis, layout behavior, material character, imagery stance, motion grammar, and reusable signature. Keep the selected first-surface expression in its surface brief; do not promote its composition into the global world.
- **Colors**: the selected palette strategy and roles. Include values only when the user, an existing asset, or new-work's exploration established them; otherwise mark them `[to be resolved during implementation]`.
- **Typography**: the selected type character and role relationship. Include font names only when established; otherwise mark the pairing `[to be resolved during implementation]`.
- **Layout**: the selected spatial grammar and responsive behavior, without pretending exact measurements are settled.
- **Elevation & Depth**: the selected material and depth behavior, stated as an invariant rather than inferred from a generic preset.
- **Shapes**: the selected form and corner language.
- **Components**: omit entirely; no components exist yet.
- **Do's and Don'ts**: record the durable guardrails confirmed during the world choice, not task-local refusals.

Seed mode writes a minimal frontmatter with `name` and `description` only; no colors, typography, rounded, spacing, or components yet. Real tokens land on the next Scan-mode run. Skip the `.impeccable/design.json` sidecar in seed mode for the same reason: nothing to render.

##### Step 3: Confirm

1. Show the seed DESIGN.md. Call out that it is a seed (the marker is the literal commitment).
2. Tell the user: "Re-run `/impeccable document` once you have some code. That pass will extract real tokens and generate the sidecar."

Your own write is the freshest source; no reload needed.

#### Style guidelines

- **Frontmatter first, prose second.** Tokens go in the YAML frontmatter; prose contextualizes them. Don't redefine a token value in two places; the frontmatter is normative.
- **Carry only durable product constraints.** A binding logo, identity asset, accessibility need, or brand commitment from PRODUCT.md may constrain DESIGN.md. Surface strategy stays in its surface brief.
- **Match the spec.** Use its eight canonical sections in order and omit any that are irrelevant. Put motion guidance with the world or component it affects rather than creating a token group the schema does not support.
- **Descriptive > technical**: "Gently curved edges (8px radius)" > "rounded-lg". Include the technical value in parens, lead with the description.
- **Functional > decorative**: for each token, explain WHERE and WHY it's used, not just WHAT it is.
- **Exact values in parens**: hex codes, px/rem values, font weights; always the number in parens alongside the description.
- **Use Named Rules**: `**The [Name] Rule.** [short doctrine]`. These are memorable, citable, and much stickier for AI consumers than bullet lists. Stitch's own outputs use them heavily ("The No-Line Rule", "The Ghost Border Fallback"). Aim for 1-3 per section.
- **Be decisive where evidence is decisive.** Use hard language for actual invariants and softer language for provisional guidance.
- **Use concrete audit tests only when they are grounded in the observed system or a confirmed user decision.** A one-sentence test beats a paragraph of principle.
- **Reference PRODUCT.md selectively.** Product truth explains why the world fits; it does not supply page composition or a visual don't-list by default.
- **Group colors by role**, not by hex-order or hue-order. Primary / Secondary / Tertiary / Neutral is the spec ordering.

#### Pitfalls

- Don't paste raw CSS class names. Translate to descriptive language.
- Don't extract every token. Stop at what's actually reused; one-offs pollute the system.
- Don't invent components that don't exist. If the project only has buttons and cards, only document those.
- Don't overwrite an existing DESIGN.md without asking.
- Don't duplicate content from PRODUCT.md. DESIGN.md is strictly visual.
- Don't replace canonical sections with near-synonyms. Put layout and responsive behavior in `Layout`; put motion with the affected world or component.
- Don't rename sections even slightly. "Colors" not "Color Palette & Roles". "Typography" not "Typography Rules". Tooling parsing depends on exact headers.
- Don't duplicate token values between frontmatter and prose. If a color is in `colors.primary` as hex, the prose can name it and describe its role but should not reassert a different hex. The frontmatter is normative.
- Don't invent frontmatter token groups outside Stitch's schema (no `motion:`, `breakpoints:`, `shadows:` at the top level). Stitch's Zod schema only accepts `colors`, `typography`, `rounded`, `spacing`, `components`. Anything else belongs in the sidecar's `extensions`.

## Playbook: shape

*Upstream: `skill/reference/shape.md`*

### Shape

Discover what should be made and how it should work, then return a confirmed design brief without code.

#### Phase 1: Discovery interview

Do not write code or choose visual direction yet.

##### Cadence

- Use the structured question tool when available; otherwise ask and stop.
- Ask two or three related questions per round, then wait. One round is the default; add a second only when the answers expose a material gap.
- Do not dump a questionnaire, repeat settled facts, or turn obvious facts into menus. Assert the likely reading and invite correction.
- A sparse prompt requires at least one answer round. A precise prompt may need only a compact confirmation.

##### Round 1: purpose, people, and outcome

Choose the two or three questions that most change the result:

- What is this surface or feature for, and what problem must it solve?
- Who specifically reaches it, in what situation and state of mind?
- What is the primary thing they must understand or do? What would success look like?
- What is uniquely true here that a neighboring product or generic template could not claim?

##### Round 2: material, behavior, and boundaries

Run only for material unresolved decisions:

- What real content, evidence, data, and assets must the experience carry? What are realistic minimum, typical, and maximum ranges?
- Which states and transitions matter: first-run, empty, loading, error, success, permissions, overflow, or expert use?
- What is the intended fidelity, breadth, and interactivity: exploration, production-ready screen, full flow, or broader surface?
- What must remain untouched? What would make the result feel wrong even if it looked polished?
- Which platform, framework, performance, accessibility, localization, or delivery constraints are binding?

Never ask for CSS values or canned aesthetic lanes. New-work owns visual-world and concept choices.

#### Phase 2: Resolve the design direction

For new surfaces, brand expansion, or replacement, follow [[dev-knw-imp-new_work#Playbook: new-work]] through visual authority, any world workshop, and concept choice. Reuse discovery, then return before its contract, persistence, or implementation. Inside an established world, use its concept process only when composition or interaction remains materially open.

#### Phase 3: Write the brief

Write the smallest useful brief:

1. **Job and audience:** who arrives, their context, need, and visitor mode.
2. **Outcome and proof:** primary task/action, success, real evidence, and product-specific truth.
3. **Selected direction:** visual authority, structural/interaction thesis, sequence, focal moment, and implementation consequence.
4. **Scope and boundaries:** fidelity, breadth, interactivity, named target, what remains untouched, and explicit anti-goals.
5. **States and ranges:** realistic content/data ranges and material states.
6. **Interaction and layout:** hierarchy, topology, responsiveness, affordances, feedback, and transitions; intent, not CSS.
7. **Constraints and open decisions:** platform, delivery, accessibility, localization, reusable components, and choices a builder must not invent.

Use three to five bullets when the task is settled; use the full structure only for ambiguous, multi-screen, or standalone planning. Do not restate the conversation.

#### Confirm and stop

Present the brief for explicit confirmation or one correction round, then stop: shape never writes code or a direction contract.

When no human or structured answer mechanism exists, mark assumptions plainly, return the brief, and stop.

## Playbook: extract

*Upstream: `skill/reference/extract.md`*

### Extract Flow

Identify reusable patterns, components, and design tokens, then extract and consolidate them into the design system for systematic reuse.

#### Step 1: Discover the Design System

Find the design system, component library, or shared UI directory. Understand its structure: component organization, naming conventions, design token structure, import/export conventions.

**CRITICAL**: If no design system exists, do not create one yet. Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead. Understand the preferred location and structure first.

#### Step 2: Identify Patterns

Look for extraction opportunities in the target area:

- **Repeated components**: Similar UI patterns used 3+ times (buttons, cards, inputs)
- **Hard-coded values**: Colors, spacing, typography, shadows that should be tokens
- **Inconsistent variations**: Multiple implementations of the same concept
- **Composition patterns**: Layout or interaction patterns that repeat (form rows, toolbar groups, empty states)
- **Type styles**: Repeated font-size + weight + line-height combinations
- **Animation patterns**: Repeated easing, duration, or keyframe combinations

Assess value: only extract things used 3+ times with the same intent. Premature abstraction is worse than duplication.

#### Step 3: Plan Extraction

Create a systematic plan:

- **Components to extract**: Which UI elements become reusable components?
- **Tokens to create**: Which hard-coded values become design tokens?
- **Variants to support**: What variations does each component need?
- **Naming conventions**: Component names, token names, prop names that match existing patterns
- **Migration path**: How to refactor existing uses to consume the new shared versions

**IMPORTANT**: Design systems grow incrementally. Extract what is clearly reusable now, not everything that might someday be reusable.

#### Step 4: Extract & Enrich

Build improved, reusable versions:

- **Components**: Clear props API with sensible defaults, proper variants for different use cases, accessibility built in (ARIA, keyboard navigation, focus management), documentation and usage examples
- **Design tokens**: Clear naming (primitive vs semantic), proper hierarchy and organization, documentation of when to use each token
- **Patterns**: When to use this pattern, code examples, variations and combinations

#### Step 5: Migrate

Replace existing uses with the new shared versions:

- **Find all instances**: Search for the patterns you extracted
- **Replace systematically**: Update each use to consume the shared version
- **Test thoroughly**: Ensure visual and functional parity
- **Delete dead code**: Remove the old implementations

#### Step 6: Document

Update design system documentation:

- Add new components to the component library
- Document token usage and values
- Add examples and guidelines
- Update any Storybook or component catalog

**NEVER**:
- Extract one-off, context-specific implementations without generalization
- Create components so generic they are useless
- Extract without considering existing design system conventions
- Skip proper TypeScript types or prop documentation
- Create tokens for every single value (tokens should have semantic meaning)
- Extract things that differ in intent (two buttons that look similar but serve different purposes should stay separate)


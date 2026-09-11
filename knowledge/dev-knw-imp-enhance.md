---
description: "Impeccable playbooks for adding motion, color, typography, spacing, personality, and ambitious visual effects"
---


# Impeccable — Enhancement

Read this to add a specific quality to a surface that is already structurally sound.

Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].

## Playbook: animate

*Upstream: `skill/reference/animate.md`*

> **Additional context needed**: performance constraints.

Use motion to explain state, relationship, and hierarchy, or to create one authored moment the surface has earned. Decoration without purpose is animation debt.

---

### Visitor mode

- **Persuade + Experience:** motion may carry the voice. Prefer one rehearsed focal sequence to repeated section reveals.
- **Operate + Read:** motion serves feedback, state, and continuity. Keep routine transitions fast and do not make users wait through page-load choreography.
- **Native (`ios` / `android` / `adaptive`):** follow the Motion section of [[dev-knw-imp-native#Playbook: ios]] or [[dev-knw-imp-native#Playbook: android]], including the platform's Reduce Motion behavior. Do not apply the web tooling below.

### Find the job

Inspect the existing motion language, interaction states, target devices, and performance budget. Find only the places where motion would:

- acknowledge an action;
- make a state change or spatial relationship legible;
- preserve continuity through navigation or layout change;
- direct attention at a meaningful moment;
- embody the selected visual world.

Ask only when a material constraint cannot be inferred. Do not animate a static area merely because it exists.

### Set the motion thesis

Write a short plan before implementation:

- **Focal moment:** the one sequence or interaction that deserves authorship, if any.
- **Continuity:** the state, layout, or navigation changes that need explanation.
- **Feedback:** the controls and outcomes that need acknowledgment.
- **Budget:** which effects may be expensive and how often they run.

The focal moment must come from this product and surface concept. A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is not a thesis.

### Choose material by meaning

Transform and opacity are reliable foundations, not the entire palette. Choose properties for what the transition communicates:

- **Continuity and relationship:** shared-element motion, FLIP-style transforms, view transitions, or deliberate spatial movement.
- **Focus and depth:** bounded blur, filter, backdrop, light, or shadow changes.
- **Reveal and composition:** masks, clip paths, cropping, or controlled occlusion.
- **Material and energy:** color, gradient position, texture, distortion, or shader effects when the world and runtime support them.
- **State and feedback:** the smallest change that makes cause and result unmistakable.

Do not stack techniques for spectacle. One strong material idea, carried through the focal sequence and quiet supporting states, is usually enough.

Sibling stagger is appropriate when a list appears as a list. Cap the total delay, and never reinterpret every scrolled section as a staggered list.

### Timing and easing

Timing should express distance and consequence:

| Duration | Typical use |
|---|---|
| 100–150 ms | immediate feedback |
| 150–300 ms | routine state change |
| 300–500 ms | layout, overlay, or view transition |
| 500–800 ms | a deliberately authored focal entrance |

Exit faster than entrance. Use natural deceleration such as `cubic-bezier(0.16, 1, 0.3, 1)` for confident arrivals; do not use bounce or elastic curves by reflex. Long feedback feels like latency.

### Implement to the runtime

- Use CSS transitions and keyframes for declarative state and bounded sequences.
- Use Web Animations API or the project's existing motion library for interruption, sequencing, and dynamic values.
- Use View Transitions or shared-element techniques when continuity across states is the point.
- Use scroll-driven motion only when the scroll relationship itself carries meaning, with a robust fallback.
- Do not add a dependency for an effect the existing stack can express cleanly.

Keep content visible in the default state so failed scripts do not hide the page. Avoid casually animating layout-driving properties such as `width`, `height`, `top`, `left`, and margins; use FLIP, transforms, or grid techniques when appropriate. Bound blur, filter, shadow, canvas, and shader work to isolated regions. Apply `will-change` only during known animation. Measure on target viewports and devices rather than assuming transform means fast.

### Accessibility and control

Respect autoplay and sound preferences. Any nonessential loop must stop when offscreen or hidden.

Every web animation needs a `prefers-reduced-motion` path with an intentional alternative. Remove or reduce spatial movement while preserving opacity, color, and state transitions that carry meaning. Reduced motion means fewer and gentler animations, not disabling all motion; feedback that confirms an action should remain legible.

### Verify

- The focal motion is specific to the selected world and surface.
- Every supporting animation explains feedback, state, or relationship.
- Interruption and repeated use behave correctly.
- Desktop, mobile, and keyboard paths remain usable.
- The `prefers-reduced-motion` path reduces movement without erasing meaningful feedback or state changes.
- Expensive effects stay smooth on the target device.
- Removing an animation would lose meaning or authored character, not merely decoration.

When motion earns its place, hand off to `impeccable polish` for the final pass.

## Playbook: colorize

*Upstream: `skill/reference/colorize.md`*

> **Additional context needed**: existing brand colors.

Introduce color as hierarchy, meaning, and atmosphere. Preserve confirmed brand and semantic conventions; do not replace a visual world under the guise of colorizing it.

---

### Visitor mode

- **Persuade + Experience:** color may carry the voice and own large regions when the selected world calls for it.
- **Operate + Read:** color primarily encodes action, selection, status, wayfinding, and reading hierarchy. Rarity gives an accent force.

### Audit before choosing

Read DESIGN.md, tokens, assets, current themes, and representative states. Identify:

- which colors are confirmed brand commitments;
- current surface, text, action, and semantic roles;
- places where grayscale obscures hierarchy or state;
- contrast failures and color-only communication;
- light/dark or data-visualization requirements;
- whether the task asks for more color or a new identity.

If a new identity is required, use [[dev-knw-imp-new_work#Playbook: new-work]]. Ask only when a binding brand decision cannot be inferred.

### Choose a strategy

Name the intended emotional temperature, dominant relationship, contrast range, and color dosage before editing. The strategy may be restrained or immersive; it must follow the brief and selected world rather than a fixed percentage rule.

Build roles, not a bag of swatches:

- canvas and elevated surfaces;
- primary and secondary text;
- action, focus, and selection;
- borders and separators;
- success, warning, error, and information;
- data categories or scales when needed.

Use the project's existing color space. For a new web palette, prefer OKLCH because lightness and chroma can be adjusted predictably. Choose hue from product meaning and visual direction, never from a default category association.

### Apply at system scale

- Let the strongest color own a deliberate region or role instead of scattering tiny accents.
- Keep the primary action easy to find; do not spend its color on decoration.
- Tint neutrals only when the brand hue genuinely creates cohesion. Neutral gray is valid when it serves the world.
- On colored surfaces, derive secondary text from the foreground or surface hue rather than using washed-out generic gray.
- Keep semantic meanings consistent, but respect platform and domain conventions instead of assuming fixed hues.
- For data, use distinct lightness, chroma, shape, label, or pattern so color is not the only code.
- In dark mode, design surface elevation and contrast explicitly; do not invert the light theme mechanically.
- Define primitive values and semantic tokens when the project has a token system. Theme changes should normally remap semantic roles.

Decoration without a relationship to hierarchy, state, content, or the visual world is not a color strategy.

### Contrast and perception

Verify computed foreground/background pairs:

| Content | WCAG AA minimum |
|---|---|
| body text | 4.5:1 |
| large text | 3:1 |
| controls, icons, focus indicators | 3:1 |

Do not rely on eyesight alone. Check interactive states, overlays, text on images, disabled content, and both themes. Simulate common vision deficiencies. Information conveyed by color also needs text, shape, iconography, or position.

When deriving OKLCH ramps, vary lightness and reduce chroma near white and black. Do not keep high chroma at extreme lightness merely to make the math uniform. Prefer explicit colors over chains of translucent overlays when alpha would make contrast context-dependent.

### Verify

- Every color has a stable role or a world-specific atmospheric purpose.
- Attention lands on the intended action, content, or state.
- The palette works across quiet, dense, interactive, error, and empty states.
- Light and dark themes are each composed, not mechanically inverted.
- Contrast and non-color cues pass in all relevant states.
- The result is recognizably this product, not a generic “colorful” treatment.

When the palette earns its place, hand off to `impeccable polish` for the final pass.

### Live-mode signature params

When invoked from live mode, every variant declares a `color-amount` parameter. Author CSS against `var(--p-color-amount, 0.5)` so the user can move from neutral to the variant's full color strategy without regeneration.

```json
{"id":"color-amount","kind":"range","min":0,"max":1,"step":0.05,"default":0.5,"label":"Color amount"}
```

Add at most two variant-specific parameters, such as palette, temperature, or tint behavior. Follow live (not part of this shard)'s parameter contract.

## Playbook: typeset

*Upstream: `skill/reference/typeset.md`*

Typography carries information, hierarchy, and voice. Improve it inside the established visual world; do not replace the identity unless the user asked to.

---

### Visitor mode

- **Persuade + Experience:** display type may carry the voice. Use decisive contrast and responsive scale when the composition benefits.
- **Operate + Read:** stability, scanability, and measure come first. A single well-tuned family and fixed role scale are often right.
- **Native:** follow [[dev-knw-imp-native#Playbook: ios]] or [[dev-knw-imp-native#Playbook: android]], including platform scaling and accessibility behavior.

If typography replacement would create a new identity, route through [[dev-knw-imp-new_work#Playbook: new-work]] and update DESIGN.md. Otherwise preserve confirmed families and improve their use.

### Two isolated assessments

When a sub-agent tool is available and permitted, run these independently; otherwise run them yourself in this order. Do not let detector findings anchor the design assessment.

1. **Typographic assessment:** inspect representative pages and styles. Answer every question below with a file, selector, or computed value:
   - **Authority and fit:** Which faces, weights, and roles are established? Do they fit the product and selected world, or are they unexamined defaults? Is every family necessary?
   - **Hierarchy:** Can heading, body, label, metadata, and data roles be distinguished at a glance? Are adjacent sizes or weights too close to carry different jobs?
   - **Scale and consistency:** Is there a deliberate role scale, or a collection of arbitrary values? Do repeated roles stay identical across screens and states?
   - **Reading:** Does body copy stay within a comfortable 45–75 character measure? Are line height, paragraph rhythm, contrast, and tracking tuned to the actual face, width, language, and surface?
   - **Stress:** What happens with long headings, localization expansion, zoom, narrow containers, missing weights, and font fallback?
   - **Delivery:** Are only used assets loaded? Do fallback metrics, loading strategy, and variable-font settings avoid invisible text and disruptive reflow?
2. **Mechanical scan:** run:

```bash
npx impeccable detect --json --scope type [target files or dirs]
```

Also inspect dynamic or arbitrary font values the detector cannot interpret. Synthesize both assessments before editing, noting what each caught alone. A clean scan is a floor, not proof of good typography.

### Set the system

Before editing, state:

- the roles the interface needs;
- the intended contrast between those roles;
- the reading measure and density;
- which existing faces and weights are authoritative;
- any performance, localization, or accessibility constraints.

Use the fewest roles and families that make the hierarchy unmistakable. Combine size, weight, space, and tone deliberately instead of asking size alone to do all the work. Role names and tokens should describe purpose rather than values.

### Apply

- Keep body copy comfortably readable and zoomable. Use 1rem / 16px as the ordinary web body floor unless a dense role, platform convention, or user setting justifies otherwise.
- Keep prose in the 45–75ch range. Tune line height inversely with measure: wider lines generally need more leading.
- Compensate light text on dark surfaces on all three perceptual axes: slightly more line height, a touch more tracking, and one step more weight when the face needs it.
- Tune line height to the face, width, language, and contrast, not a universal ratio.
- Keep repeated roles consistent across screens and states.
- Use numeric, tabular, code, and label features when their content benefits.
- Load only used font assets and weights. Provide metric-compatible fallbacks and avoid blocking text.
- Let marketing display type respond to available space when useful; keep dense product and reading surfaces spatially predictable.
- Preserve browser zoom, user font settings, Dynamic Type, and platform text scaling.
- Use paragraph spacing or first-line indentation as the primary paragraph rhythm; combining both usually double-marks the boundary.

Do not make type decorative at the expense of comprehension, or introduce a second family without a clear role it alone can perform.

### Verify

- Primary, secondary, body, and metadata roles are recognizable without reading the copy.
- Long text remains comfortable across relevant widths and languages.
- The typography belongs to the product and its established world.
- Loading does not create disruptive reflow or invisible text.
- Zoom, text scaling, focus, contrast, and reduced viewport paths remain usable.
- The final mechanical scan has no unexplained findings.

Answer each item with rendered or source evidence, then rerun the scan. Do not substitute a bare “yes” for verification.

When the hierarchy holds, hand off to `impeccable polish`.

### Live-mode signature params

Every variant declares a coarse `scale` parameter and authors its type ramp against `var(--p-scale, 1)`.

```json
{"id":"scale","kind":"range","min":0.85,"max":1.3,"step":0.05,"default":1,"label":"Scale"}
```

Add at most one pairing or weight parameter when it represents a real system choice. Follow live (not part of this shard)'s parameter contract.

## Playbook: layout

*Upstream: `skill/reference/layout.md`*

Layout turns product priority into reading order, grouping, rhythm, and usable space. Diagnose the structural problem before moving boxes.

---

### Visitor mode

- **Persuade + Experience:** composition may be asymmetric, fluid, or intentionally disruptive when the selected world earns it.
- **Operate + Read:** predictable structure, stable density, and navigable linearity are affordances.
- **Native:** follow [[dev-knw-imp-native#Playbook: ios]] or [[dev-knw-imp-native#Playbook: android]] for navigation, insets, adaptation, and touch targets.

Preserve the established visual world. A layout command changes structure inside it; identity replacement belongs to [[dev-knw-imp-new_work#Playbook: new-work]].

### Two isolated assessments

When a sub-agent tool is available and permitted, run these independently; otherwise run them yourself in this order.

1. **Layout assessment:** inspect representative states and viewports. Answer every question below with rendered or source evidence:
   - **Reading order:** Apply the squint test. With detail blurred, can you still identify the primary element, the secondary element, and the major groups in order?
   - **Grouping:** Are related items close and distinct groups separated, or are containers compensating for weak proximity?
   - **Rhythm:** Do tight and generous intervals create a deliberate cadence, or is one spacing value repeated until everything has equal weight?
   - **Structure:** Does the topology match the content and task? Are repeated cards, columns, or sections genuinely equivalent, or merely a framework default?
   - **Density:** Does the amount of information per region fit use frequency, decision complexity, and visitor mode?
   - **Adaptation:** At narrow, intermediate, wide, zoomed, and localized states, what reorders, collapses, wraps, scrolls, or remains fixed? Does DOM and focus order still agree with the visual order?
   - **Extremes:** Do long content, empty states, overlays, sticky elements, safe areas, and small touch targets expose structural failures?
2. **Mechanical scan:** run:

```bash
npx impeccable detect --json --scope layout [target files or dirs]
```

Also inspect arbitrary spacing, overflow, stacking, and container behavior the detector cannot resolve. Keep mechanical evidence out of the first assessment, then synthesize both passes before editing. A clean scan cannot prove hierarchy or rhythm.

### Set the spatial thesis

Before editing, name:

- the primary reading or task path;
- what belongs together and what must separate;
- which element leads and which supports;
- the intended density and spacing rhythm;
- how the structure changes across containers, viewports, input modes, and content extremes.

Choose the simplest structural model that expresses those relationships. Use layout primitives according to the relationships they control, and name reusable spacing and container roles semantically.

### Apply

- Group by meaning. Use proximity before adding containers or decoration.
- Create rhythm through deliberate contrast between tight and generous intervals.
- Use a documented spacing scale rather than one-off values. A 4-unit base usually provides the useful middle steps that an 8-only scale misses.
- Let hierarchy follow product priority, not framework defaults.
- Keep distinct content visually distinct without turning every group into an isolated component.
- Make responsive behavior structural: reorder, collapse, reflow, or reveal based on what remains important.
- Prefer container-aware components when the same component appears in different contexts.
- Use `gap` for sibling rhythm when it expresses the relationship more directly than child margins.
- Keep touch targets usable even when their visible marks are small.
- Use depth only when it clarifies state or hierarchy.
- Make optical corrections only after inspecting the rendered result.

Variation is not a goal by itself. Repetition should support recognition; break it only when content or priority changes.

### Verify

- The squint test still reveals the primary, secondary, and major groups in order.
- The reading and task path remains clear at every supported size.
- Related content groups naturally; unrelated content does not blur together.
- Tight and generous spacing create intentional rhythm instead of monotonous repetition.
- Density matches use frequency and content complexity.
- Long text, empty states, localization, zoom, and dynamic content do not break the structure.
- Keyboard, touch, and assistive-technology order agree with the visual order.
- The final mechanical scan has no unexplained findings.

Answer each item with rendered or source evidence, then rerun the scan. Do not substitute a bare “yes” for verification.

When the structure holds, hand off to `impeccable polish`.

### Live-mode signature params

Every variant declares a coarse `density` parameter and authors spacing against `var(--p-density, 1)`.

```json
{"id":"density","kind":"range","min":0.6,"max":1.4,"step":0.05,"default":1,"label":"Density"}
```

Add one structural parameter only when the topology genuinely branches. Follow live (not part of this shard)'s parameter contract.

## Playbook: delight

*Upstream: `skill/reference/delight.md`*

> **Additional context needed**: the brand's emotional range.

Make the experience memorable at moments that earn it. Delight is not a layer of generic whimsy; it is product character revealed through a useful interaction, a humane response, or an unexpectedly considered detail.

---

### Visitor mode

- **Persuade + Experience:** personality may run through voice, composition, motion, and discovery, provided the artifact remains the focus.
- **Operate + Read:** concentrate delight at meaningful moments such as first use, completion, recovery, or mastery. Reliability carries everything else.

### Find the opportunity

Inspect the target, DESIGN.md, product voice, repeated-use frequency, and emotional context. Look for:

- effort worth acknowledging;
- waiting that can become informative;
- an empty or first-use state that can orient;
- an error or recovery moment that needs empathy;
- an interaction whose physical or verbal response could express the brand;
- a useful capability people might enjoy discovering.

Do not manufacture a celebration for an ordinary click. Ask only when the brand's emotional range or the stakes cannot be inferred.

### Define one delight thesis

State in one sentence what the user should feel and why that feeling belongs to this product. Then choose the smallest system that can deliver it:

- a distinctive response to a meaningful action;
- product-specific language that clarifies while carrying voice;
- an interaction or transition with a recognizable material behavior;
- an illustration, sound, haptic, or environmental detail grounded in the product world;
- a discovery reward that reveals real utility.

Derive the treatment from product mechanism and visual world, not a stock catalog.

### Build for the emotional moment

- **Success:** match the response to the effort and consequence. Major milestones can expand; routine saves should simply feel certain.
- **Waiting:** show truthful progress, useful context, or product-specific activity. Never fake work or delay completion to stage a flourish.
- **Empty and first use:** make the next action clear before adding personality.
- **Error and recovery:** lead with the problem and recovery. Warmth may reduce stress; jokes must not trivialize loss, money, privacy, or blocked work.
- **Repeated interaction:** keep the response satisfying after the hundredth use. Variation is useful only when it remains coherent and predictable enough to trust.
- **Discovery:** reward curiosity without hiding required functionality.

Copy must use the product's language. Generic whimsy is worse than neutral clarity.

### Protect the experience

Delight must not:

- delay, block, or obscure the primary task;
- override platform conventions or accessibility;
- add unrequested factual claims;
- play sound without consent or ignore mute settings;
- become mandatory, unskippable, or exhausting on repeat;
- add a dependency or asset cost disproportionate to the moment.

For authored motion, load [the animate playbook](#playbook-animate). Respect screen readers, keyboard use, touch, localization, and cultural context. Nonessential loops stop when hidden. Make celebration intensity proportional to frequency and consequence.

### Verify

- The moment is specific enough that a neighboring product could not use it unchanged.
- It improves comprehension, confidence, motivation, or emotional recovery.
- The interface remains fast and obvious without the flourish.
- Repetition does not turn charm into friction.
- Muted, keyboard, touch, and localized paths work.
- The result feels like the selected world, not a generic “delight” treatment.

When the personality feels earned, hand off to `impeccable polish` for the final pass.

## Playbook: overdrive

*Upstream: `skill/reference/overdrive.md`*

Start your response with:

```
──────────── ⚡ OVERDRIVE ─────────────
》》》 Entering overdrive mode...
```

Push an interface past conventional limits. This isn't just about visual effects. It's about using the full power of the browser to make any part of an interface feel extraordinary: a table that handles a million rows, a dialog that morphs from its trigger, a form that validates in real-time with streaming feedback, a page transition that feels cinematic.

**EXTRA IMPORTANT FOR THIS COMMAND**: Context determines what "extraordinary" means. A particle system on a creative portfolio is impressive. The same particle system on a settings page is embarrassing. But a settings page with instant optimistic saves and animated state transitions? That's extraordinary too. Understand the project's personality and goals before deciding what's appropriate.

#### Propose Before Building

This command has the highest potential to misfire. Do NOT jump straight into implementation. You MUST:

1. **Think through 2-3 different directions**: consider different techniques, levels of ambition, and aesthetic approaches. For each direction, briefly describe what the result would look and feel like.
2. **Get the user's pick before writing any code.** Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead. Carry each direction's description and its trade-offs (browser support, performance cost, complexity) inside the option itself, so the user is choosing between things they can read. A structured question blocks the message it rides in until the user answers, so directions written alongside the question stay invisible while the user is being asked to choose between them.
3. Only proceed with the direction the user confirms.

Skipping this step risks building something embarrassing that needs to be thrown away.

#### Iterate with Browser Automation

Technically ambitious effects almost never work on the first try. You MUST actively use browser automation tools to preview your work, visually verify the result, and iterate. Do not assume the effect looks right, check it. Expect multiple rounds of refinement. The gap between "technically works" and "looks extraordinary" is closed through visual iteration, not code alone.

---

### Assess What "Extraordinary" Means Here

The right kind of technical ambition depends entirely on what you're working with. Before choosing a technique, ask: **what would make a user of THIS specific interface say "wow, that's nice"?**

#### For visual/marketing surfaces
Pages, hero sections, landing pages, portfolios: the "wow" is often sensory: a scroll-driven reveal, a shader background, a cinematic page transition, generative art that responds to the cursor.

#### For functional UI
Tables, forms, dialogs, navigation: the "wow" is in how it FEELS: a dialog that morphs from the button that triggered it via View Transitions, a data table that renders 100k rows at 60fps via virtual scrolling, a form with streaming validation that feels instant, drag-and-drop with spring physics.

#### For performance-critical UI
The "wow" is invisible but felt: a search that filters 50k items without a flicker, a complex form that never blocks the main thread, an image editor that processes in near-real-time. The interface just never hesitates.

#### For data-heavy interfaces
Charts and dashboards: the "wow" is in fluidity: GPU-accelerated rendering via Canvas/WebGL for massive datasets, animated transitions between data states, force-directed graph layouts that settle naturally.

**The common thread**: something about the implementation goes beyond what users expect from a web interface. The technique serves the experience, not the other way around.

### The Toolkit

Organized by what you're trying to achieve, not by technology name.

#### Make transitions feel cinematic
- **View Transitions API** (same-document: all browsers; cross-document: no Firefox): shared element morphing between states. A list item expanding into a detail page. A button morphing into a dialog. This is the closest thing to native FLIP animations.
- **`@starting-style`** (all browsers): animate elements from `display: none` to visible with CSS only, including entry keyframes
- **Spring physics**: natural motion with mass, tension, and damping instead of cubic-bezier. Libraries: motion (formerly Framer Motion), GSAP, or roll your own spring solver.

#### Tie animation to scroll position
- **Scroll-driven animations** (`animation-timeline: scroll()`): CSS-only, no JS. Parallax, progress bars, reveal sequences all driven by scroll position. (Chrome/Edge/Safari; Firefox: flag only; always provide a static fallback)

#### Render beyond CSS
- **WebGL** (all browsers): shader effects, post-processing, particle systems. Libraries: Three.js, OGL (lightweight), regl. Use for effects CSS can't express.
- **WebGPU** (Chrome/Edge; Safari 26+; Firefox on Windows/macOS; flag only on Firefox Linux/Android): next-gen GPU compute, more powerful than WebGL. Always fall back to WebGL2.
- **Canvas 2D / OffscreenCanvas**: custom rendering, pixel manipulation, or moving heavy rendering off the main thread entirely via Web Workers + OffscreenCanvas.
- **SVG filter chains**: displacement maps, turbulence, morphology for organic distortion effects. CSS-animatable.

#### Make data feel alive
- **Virtual scrolling**: render only visible rows for tables/lists with tens of thousands of items. No library required for simple cases; TanStack Virtual for complex ones.
- **GPU-accelerated charts**: Canvas or WebGL-rendered data visualization for datasets too large for SVG/DOM. Libraries: deck.gl, regl-based custom renderers.
- **Animated data transitions**: morph between chart states rather than replacing. D3's `transition()` or View Transitions for DOM-based charts.

#### Animate complex properties
- **`@property`** (all browsers): register custom CSS properties with types, enabling animation of gradients, colors, and complex values that CSS can't normally interpolate.
- **Web Animations API** (all browsers): JavaScript-driven animations with the performance of CSS. Composable, cancellable, reversible. The foundation for complex choreography.

#### Push performance boundaries
- **Web Workers**: move computation off the main thread. Heavy data processing, image manipulation, search indexing: anything that would cause jank.
- **OffscreenCanvas**: render in a Worker thread. The main thread stays free while complex visuals render in the background.
- **WASM**: near-native performance for computation-heavy features. Image processing, physics simulations, codecs.

#### Interact with the device
- **Web Audio API**: spatial audio, audio-reactive visualizations, sonic feedback. Requires user gesture to start.
- **Device APIs**: orientation, ambient light, geolocation. Use sparingly and always with user permission.

**NOTE**: This command is about enhancing how an interface FEELS, not changing what a product DOES. Adding real-time collaboration, offline support, or new backend capabilities are product decisions, not UI enhancements. Focus on making existing features feel extraordinary.

### Implement with Discipline

#### Progressive enhancement is non-negotiable

Every technique must degrade gracefully. The experience without the enhancement must still be good.

```css
@supports (animation-timeline: scroll()) {
  .hero { animation-timeline: scroll(); }
}
```

```javascript
if ('gpu' in navigator) { /* WebGPU */ }
else if (canvas.getContext('webgl2')) { /* WebGL2 fallback */ }
/* CSS-only fallback must still look good */
```

#### Performance rules

- Target 60fps. If dropping below 50, simplify.
- Lazy-initialize heavy resources (WebGL contexts, WASM modules) only when near viewport.
- Pause off-screen rendering. Kill what you can't see.
- Test on real mid-range devices, not just your development machine.

#### Polish is the difference

The gap between "cool" and "extraordinary" is in the last 20% of refinement: the easing curve on a spring animation, the timing offset in a staggered reveal, the subtle secondary motion that makes a transition feel physical. Don't ship the first version that works; ship the version that feels inevitable.

**NEVER**:
- Ship effects that cause jank on mid-range devices
- Use bleeding-edge APIs without a functional fallback
- Add sound without explicit user opt-in
- Use technical ambition to mask weak design fundamentals; fix those first with other commands
- Layer multiple competing extraordinary moments. Focus creates impact, excess creates noise

### Verify the Result

- **The wow test**: Show it to someone who hasn't seen it. Do they react?
- **The removal test**: Take it away. Does the experience feel diminished, or does nobody notice?
- **The device test**: Run it on a phone, a tablet, a Chromebook. Still smooth?
- **The context test**: Does this make sense for THIS brand and audience?

"Technically extraordinary" isn't about using the newest API. It's about making an interface do something users didn't think a website could do.


---
description: "Impeccable playbooks for improving an existing surface: polish, bolder, quieter, distill, harden, and onboard"
---


# Impeccable — Refinement

Read this to improve a surface that already exists. Refinement preserves the incumbent identity, behavior, and copy. A request that replaces the visual world belongs in the new-work file.

Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].

## Playbook: polish

*Upstream: `skill/reference/polish.md`*

> **Additional context needed**: quality bar and shipping constraints.

Polish is refinement, never concealed redesign. Preserve the incumbent visual world, content, behavior, and everything outside scope. If the concept itself is wrong, say so and recommend redesign or `bolder` instead of smuggling in a replacement.

A detector result is defect evidence, not proof of quality. Inspect the rendered experience and real interaction path.

### 1. Establish the system

Read DESIGN.md and representative tokens, shared components, patterns, and neighboring flows. If no formal system exists, use coherent project conventions.

Classify each drift before fixing it:

- **missing token:** the system needs a reusable value;
- **one-off implementation:** an existing shared component or pattern should replace it;
- **conceptual mismatch:** the flow, information architecture, or hierarchy differs from comparable product areas;
- **local defect:** the implementation is simply incomplete or inconsistent.

Fix the cause at the narrowest correct level. Ask when a binding system principle cannot be inferred.

### 2. Gather the evidence

Use the feature yourself at the surface's representative sizes: desktop and mobile on the web; on a native platform (`ios` / `android` / `adaptive`), the shipped device classes on the simulator, emulator, or hardware, captured per the platform reference's Verifying the build section. Determine:

- whether the path is functionally complete;
- the intended quality bar and time available;
- known constraints or deliberately unfinished work;
- the states, content lengths, roles, and input methods users will actually encounter.

If a prior critique exists, use it as one input:

```bash
npx impeccable critique-storage latest "<resolved target>" --json
```

Exit 0 returns JSON with the latest snapshot's `body` and an exact `snapshot_file` identity. Retain `snapshot_file` until the end of the pass. For a local file target, the helper compares the file's exact current content fingerprint with the fingerprint captured by critique. Unchanged staged, unstaged, or untracked content remains current; any byte change, deletion, or replacement with a non-file closes the backlog it identified while preserving its trend history and exits 2. A URL target has no local fingerprint and remains current until explicitly closed. When current, incorporate relevant P0/P1 findings from `body` and name the snapshot read. Exit 2 means none exists or the target changed. Perform an independent pass either way.

### 3. Triage

Separate functional defects from cosmetic ones and fix in this order:

1. broken or blocked tasks, data loss, misleading state, and inaccessible paths;
2. missing loading, empty, error, success, disabled, and permission states;
3. flow, hierarchy, responsive, and design-system drift;
4. visual and motion inconsistencies;
5. code and asset cleanup.

Do not perfect one corner while leaving the rest below the same quality bar.

### 4. Polish the whole path

#### Flow and hierarchy

- Match neighboring mental models, terminology, disclosure, routing, save behavior, and optimistic or pessimistic patterns.
- Make the primary task and current state obvious without flattening every element to equal weight.
- Ensure arrival, transition, empty, and recovery paths connect instead of behaving as isolated screens.

#### Layout and type

- Align to the project's grid and spacing scale; fix optical as well as mathematical alignment.
- Group related content tightly and separate distinct groups generously.
- Keep same-role typography consistent; test measure, wrapping, localization expansion, zoom, and font loading.
- Verify every supported viewport rather than correcting only the current screenshot.

#### Color, imagery, and icons

- Use semantic tokens and stable color meanings across themes.
- Verify text, control, and focus contrast in every state.
- Keep icon families, stroke/weight, sizing, and optical alignment coherent.
- Prevent image layout shift; use correct aspect ratios, responsive sources, and useful alt text.

#### Interaction and state

- Every control needs appropriate default, hover, focus, active, disabled, loading, error, and success behavior.
- Preserve visible keyboard focus, logical tab order, labels, and platform-appropriate touch targets.
- Keep motion coherent, interruptible, and performant. Do not add animation merely to make polish visible.
- Validate long, missing, localized, offline, slow, and permission-limited content where the product can encounter it.

#### Content and code

- Keep terminology, capitalization, punctuation, and factual copy consistent. Ask before changing claims.
- Remove debug output, dead code, unused imports, obsolete styles, and polish-created duplication.
- Replace custom implementations with shared components where the system owns the pattern.
- Promote genuinely reusable values to tokens; do not create a system abstraction for one local exception.

### 5. Verify and finish

Walk the complete path again with mouse, keyboard, and touch where applicable. Check:

- mobile, intermediate, and wide layouts on the web; phone and tablet size classes in both supported orientations on native;
- loading, empty, error, success, disabled, long-content, and missing-content states;
- zoom, contrast, focus, semantics, and screen-reader names;
- console errors, layout shift, interaction latency, and image loading everywhere; supported browsers on the web; supported OS versions, runtime warnings, and dropped frames on native;
- agreement with DESIGN.md, neighboring features, and the user's scope.

Follow the quality guidance supplied by `impeccable context` and hooks, then run any other relevant QA commands. Context requests a manual scan only when no automatic detector is active; never add another detector pass. Fix real defects and document only narrow intentional exceptions. A clean scan does not replace visual judgment.

Finish with a source diff: remove accidental churn, orphaned code, redundant values, and temporary artifacts. Ship only when the feature is functionally complete and consistently finished across the path.

When this pass clears every Priority Issue it took from a snapshot, close that snapshot:

```bash
npx impeccable critique-storage close "<resolved target>" "<snapshot_file returned by latest>"
```

This closes only the snapshot this pass actually processed; if a newer critique landed meanwhile, its backlog stays live. Do not close when no snapshot was read, when `snapshot_file` was not retained, or when Priority Issues remain.

## Playbook: bolder

*Upstream: `skill/reference/bolder.md`*

> **Additional context needed**: which section is the target, and what must stay untouched.

An open direction round owns the word first: "bolder" said while a direction decision is on the table is the Bolder hand register steer, a fresh deal of foreign forms (see new-work.md), not this command. This command refines a surface whose world already shipped.

"Bolder" is an amplification request, and almost always it is scoped to something that already exists. The surrounding page, its system, and its conventions are the given. Your job is to raise one part to the conviction the rest already implies, without rebuilding anything the brief did not name. The reflex answer, reaching for more effects, is the opposite of bold; reject it first.

### Scope is sovereign

"Everything else stays" is a literal instruction. Touch only the named target. Do not restyle its neighbors, do not migrate the page to a new idea, do not add colors, fonts, radii, shadows, or system primitives the surface does not already own. If the existing system genuinely cannot express the direction, do not expand it on your own. Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead. Name the exact addition and the job it would do.

### Why it reads flat

A section usually reads flat for reasons its neighbors have already solved. Look at what the rest of the page does that this section does not: the display type at full strength, the structural devices that carry meaning, the signature motif, the density and pacing. A flat section is typically one that quietly opts out of the system's own strongest moves. The most reliable bolder pass brings the target up to the expressive level its neighbors already reach, in the system's own vocabulary rather than a new one.

### The amplification

- **Amplify what the system already owns.** Reuse its motif and its type scale at full strength, turned up for this section rather than invented for it. The bolder version should look more like the same brand, not less.
- **Keep content true.** Existing claims are part of the scope: preserve them unless the user supplies replacements. If real evidence is essential to the direction but absent, ask for it.
- **Commit, then clarify.** Half-measures read as noise. Make the one decisive move completely, then quiet everything around it so the move is legible. If every element got louder, the section got flatter.
- **Give it its own rhythm.** The target should read as a peak in the scroll, a shift in density or pace from what surrounds it, not simply more of the same.

### The skeleton test

Strip the copy out of your planned section and study the bare structure. Does the skeleton still say what this section is and why it matters, through hierarchy and the system's devices alone? If it only works once the words return, the boldness is in the text size, not the design. A placeholder for an image or artifact names a job, an anchor and a piece of evidence, not a cue to drop in a decorative photo; fill that job with whatever the subject actually has.

### Before you finish

- Everything outside the named target is unchanged.
- No new color, font, or system primitive appeared without being asked for.
- The conventions the section carried, including anything that drives an action, still work the same way.
- The section is unmistakably the same brand, only more sure of itself.

When the target holds its own without pulling the page apart, hand off to `impeccable polish` for the final pass.

## Playbook: quieter

*Upstream: `skill/reference/quieter.md`*

Quiet design is harder than bold design. Subtlety needs precision. Reduce visual intensity in designs that are too loud, aggressive, or overstimulating without losing personality or making the result generic.

---

### Visitor mode

Persuade + Experience: "quieter" means more restrained palette, more whitespace, more typographic air. Drama is reduced, not eliminated; the POV stays intact.

Operate + Read: "quieter" means reducing visual noise. Fewer background accents, flatter cards, less color, less motion. The tool should disappear more completely into the task.

---

### Assess Current State

Analyze what makes the design feel too intense:

1. **Identify intensity sources**:
   - **Color saturation**: Overly bright or saturated colors
   - **Contrast extremes**: Too much high-contrast juxtaposition
   - **Visual weight**: Too many bold, heavy elements competing
   - **Animation excess**: Too much motion or overly dramatic effects
   - **Complexity**: Too many visual elements, patterns, or decorations
   - **Scale**: Everything is large and loud with no hierarchy

2. **Understand the context**:
   - What's the purpose? (Marketing vs tool vs reading experience)
   - Who's the audience? (Some contexts need energy)
   - What's working? (Don't throw away good ideas)
   - What's the core message? (Preserve what matters)

If any of these are unclear from the codebase, do not guess. Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead.

**CRITICAL**: "Quieter" doesn't mean boring or generic. It means refined and easier on the eyes. Think luxury, not laziness.

### Plan Refinement

Create a strategy to reduce intensity while maintaining impact:

- **Color approach**: Desaturate or shift to more restrained tones?
- **Hierarchy approach**: Which elements should stay bold (very few), which should recede?
- **Simplification approach**: What can be removed entirely?
- **Sophistication approach**: How can we signal quality through restraint?

**IMPORTANT**: Subtlety requires precision. Quiet without intent collapses to generic.

### Refine the Design

Systematically reduce intensity across these dimensions:

#### Color Refinement
- **Reduce saturation**: Shift from fully saturated to 70-85% saturation
- **Soften palette**: Replace bright colors with muted tones
- **Reduce color variety**: Use fewer colors more thoughtfully
- **Neutral dominance**: Let neutrals do more work, use color as accent (10% rule)
- **Gentler contrasts**: High contrast only where it matters most
- **Tinted grays**: Use warm or cool tinted grays instead of pure gray. Adds depth without loudness
- **Never gray on color**: If you have gray text on a colored background, use a darker shade of that color or transparency instead

#### Visual Weight Reduction
- **Typography**: Reduce font weights (900 → 600, 700 → 500), decrease sizes where appropriate
- **Hierarchy through subtlety**: Use weight, size, and space instead of color and boldness
- **White space**: Increase breathing room, reduce density
- **Borders & lines**: Reduce thickness, decrease opacity, or remove entirely

#### Simplification
- **Remove decorative elements**: Gradients, shadows, patterns, textures that don't serve purpose
- **Simplify shapes**: Reduce border radius extremes, simplify custom shapes
- **Reduce layering**: Flatten visual hierarchy where possible
- **Clean up effects**: Reduce or remove blur effects, glows, multiple shadows

#### Motion Reduction
- **Reduce animation intensity**: Shorter distances (10-20px instead of 40px), gentler easing
- **Remove decorative animations**: Keep functional motion, remove flourishes
- **Subtle micro-interactions**: Replace dramatic effects with gentle feedback
- **Refined easing**: Use ease-out-quart for smooth, understated motion. Never bounce or elastic
- **Remove animations entirely** if they're not serving a clear purpose

#### Composition Refinement
- **Reduce scale jumps**: Smaller contrast between sizes creates calmer feeling
- **Align to grid**: Bring rogue elements back into systematic alignment
- **Even out spacing**: Replace extreme spacing variations with consistent rhythm

**NEVER**:
- Make everything the same size/weight (hierarchy still matters)
- Remove all color (quiet ≠ grayscale)
- Eliminate all personality (maintain character through refinement)
- Sacrifice usability for aesthetics (functional elements still need clear affordances)
- Make everything small and light (some anchors needed)

### Verify Quality

Ensure refinement maintains quality:

- **Still functional**: Can users still accomplish tasks easily?
- **Still distinctive**: Does it have character, or is it generic now?
- **Better reading**: Is text easier to read for extended periods?
- **Restrained, not absent**: Does the POV survive the cuts?

When the result feels right, hand off to `impeccable polish` for the final pass.

## Playbook: distill

*Upstream: `skill/reference/distill.md`*

Strip a design to its essence. Remove anything that doesn't earn its place: redundant elements, repeated information, decorative noise, cosmetic complexity.


---

### Assess Current State

Analyze what makes the design feel complex or cluttered:

1. **Identify complexity sources**:
   - **Too many elements**: Competing buttons, redundant information, visual clutter
   - **Excessive variation**: Too many colors, fonts, sizes, styles without purpose
   - **Information overload**: Everything visible at once, no progressive disclosure
   - **Visual noise**: Unnecessary borders, shadows, backgrounds, decorations
   - **Confusing hierarchy**: Unclear what matters most
   - **Feature creep**: Too many options, actions, or paths forward

2. **Find the essence**:
   - What's the primary user goal? (There should be ONE)
   - What's actually necessary vs nice-to-have?
   - What can be removed, hidden, or combined?
   - What's the 20% that delivers 80% of value?

If any of these are unclear from the codebase, do not guess. Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead.

**CRITICAL**: Simplicity is not about removing features. It's about removing obstacles between users and their goals. Every element should justify its existence.

### Plan Simplification

Create a ruthless editing strategy:

- **Core purpose**: What's the ONE thing this should accomplish?
- **Essential elements**: What's truly necessary to achieve that purpose?
- **Progressive disclosure**: What can be hidden until needed?
- **Consolidation opportunities**: What can be combined or integrated?

**IMPORTANT**: Simplification is hard. It requires saying no to good ideas to make room for great execution. Be ruthless.

### Simplify the Design

Systematically remove complexity across these dimensions:

#### Information Architecture
- **Reduce scope**: Remove secondary actions, optional features, redundant information
- **Progressive disclosure**: Hide complexity behind clear entry points (accordions, modals, step-through flows)
- **Combine related actions**: Merge similar buttons, consolidate forms, group related content
- **Clear hierarchy**: ONE primary action, few secondary actions, everything else tertiary or hidden
- **Remove redundancy**: If it's said elsewhere, don't repeat it here

#### Visual Simplification
- **Reduce color palette**: Use 1-2 colors plus neutrals, not 5-7 colors
- **Limit typography**: One font family, 3-4 sizes maximum, 2-3 weights
- **Remove decorations**: Eliminate borders, shadows, backgrounds that don't serve hierarchy or function
- **Flatten structure**: Reduce nesting, remove unnecessary containers; never nest cards inside cards
- **Remove unnecessary cards**: Cards aren't needed for basic layout; use spacing and alignment instead
- **Consistent spacing**: Use one spacing scale, remove arbitrary gaps

#### Layout Simplification
- **Linear flow**: Replace complex grids with simple vertical flow where possible
- **Remove sidebars**: Move secondary content inline or hide it
- **Full-width**: Use available space generously instead of complex multi-column layouts
- **Consistent alignment**: Pick left or center, stick with it
- **Generous white space**: Let content breathe, don't pack everything tight

#### Interaction Simplification
- **Reduce choices**: Fewer buttons, fewer options, clearer path forward (paradox of choice is real)
- **Smart defaults**: Make common choices automatic, only ask when necessary
- **Inline actions**: Replace modal flows with inline editing where possible
- **Remove steps**: Can the flow lose a step?
- **Clear next action**: ONE obvious next action, not five competing ones

#### Content Simplification
- **Shorter copy**: Cut every sentence in half, then do it again
- **Active voice**: "Save changes" not "Changes will be saved"
- **Remove jargon**: Plain language always wins
- **Scannable structure**: Short paragraphs, bullet points, clear headings
- **Essential information only**: Remove marketing fluff, legalese, hedging
- **Remove redundant copy**: No headers restating intros, no repeated explanations, say it once

#### Code Simplification
- **Remove unused code**: Dead CSS, unused components, orphaned files
- **Flatten component trees**: Reduce nesting depth
- **Consolidate styles**: Merge similar styles, use utilities consistently
- **Reduce variants**: Does that component need 12 variations, or can 3 cover 90% of cases?

**NEVER**:
- Remove necessary functionality (simplicity ≠ feature-less)
- Sacrifice accessibility for simplicity (clear labels and ARIA still required)
- Make things so simple they're unclear (mystery ≠ minimalism)
- Remove information users need to make decisions
- Eliminate hierarchy completely (some things should stand out)
- Oversimplify complex domains (match complexity to actual task complexity)

### Verify Simplification

Ensure simplification improves usability:

- **Faster task completion**: Can users accomplish goals more quickly?
- **Reduced cognitive load**: Is it easier to understand what to do?
- **Still complete**: Are all necessary features still accessible?
- **Clearer hierarchy**: Is it obvious what matters most?
- **Better performance**: Does simpler design load faster?

### Document Removed Complexity

If you removed features or options:
- Document why they were removed
- Consider if they need alternative access points
- Note any user feedback to monitor

When the cuts feel right, hand off to `impeccable polish` for the final pass. As Antoine de Saint-Exupéry put it: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."

## Playbook: harden

*Upstream: `skill/reference/harden.md`*

Designs that only work with perfect data aren't production-ready. Harden the interface against the inputs, errors, languages, and network conditions that real users will throw at it.

### Assess Hardening Needs

Identify weaknesses and edge cases:

1. **Test with extreme inputs**:
   - Very long text (names, descriptions, titles)
   - Very short text (empty, single character)
   - Special characters (emoji, RTL text, accents)
   - Large numbers (millions, billions)
   - Many items (1000+ list items, 50+ options)
   - No data (empty states)

2. **Test error scenarios**:
   - Network failures (offline, slow, timeout)
   - API errors (400, 401, 403, 404, 500)
   - Validation errors
   - Permission errors
   - Rate limiting
   - Concurrent operations

3. **Test internationalization**:
   - Long translations (German is often 30% longer than English)
   - RTL languages (Arabic, Hebrew)
   - Character sets (Chinese, Japanese, Korean, emoji)
   - Date/time formats
   - Number formats (1,000 vs 1.000)
   - Currency symbols

**CRITICAL**: Designs that only work with perfect data aren't production-ready. Harden against reality.

### Hardening Dimensions

Systematically improve resilience:

#### Text Overflow & Wrapping

**Long text handling**:
```css
/* Single line with ellipsis */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Multi-line with clamp */
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Allow wrapping */
.wrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}
```

**Flex/Grid overflow**:
```css
/* Prevent flex items from overflowing */
.flex-item {
  min-width: 0; /* Allow shrinking below content size */
  overflow: hidden;
}

/* Prevent grid items from overflowing */
.grid-item {
  min-width: 0;
  min-height: 0;
}
```

**Responsive text sizing**:
- Use `clamp()` for fluid typography
- Set minimum readable sizes (16px body on mobile, the same floor the typography guidance sets; 14px only for genuinely secondary text. iOS Safari force-zooms focused inputs under 16px, which breaks form layouts)
- Test text scaling (zoom to 200%)
- Ensure containers expand with text

#### Internationalization (i18n)

**Text expansion**:
- Add 30-40% space budget for translations
- Use flexbox/grid that adapts to content
- Test with longest language (usually German)
- Avoid fixed widths on text containers

```jsx
// ❌ Bad: Assumes short English text
<button className="w-24">Submit</button>

// ✅ Good: Adapts to content
<button className="px-4 py-2">Submit</button>
```

**RTL (Right-to-Left) support**:
```css
/* Use logical properties */
margin-inline-start: 1rem; /* Not margin-left */
padding-inline: 1rem; /* Not padding-left/right */
border-inline-end: 1px solid; /* Not border-right */

/* Or use dir attribute */
[dir="rtl"] .arrow { transform: scaleX(-1); }
```

**Character set support**:
- Use UTF-8 encoding everywhere
- Test with Chinese/Japanese/Korean (CJK) characters
- Test with emoji (they can be 2-4 bytes)
- Handle different scripts (Latin, Cyrillic, Arabic, etc.)

**Date/Time formatting**:
```javascript
// ✅ Use Intl API for proper formatting
new Intl.DateTimeFormat('en-US').format(date); // 1/15/2024
new Intl.DateTimeFormat('de-DE').format(date); // 15.1.2024

new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}).format(1234.56); // $1,234.56
```

**Pluralization**:
```javascript
// ❌ Bad: Assumes English pluralization
`${count} item${count !== 1 ? 's' : ''}`

// ✅ Good: Use proper i18n library
t('items', { count }) // Handles complex plural rules
```

#### Error Handling

**Network errors**:
- Show clear error messages
- Provide retry button
- Explain what happened
- Offer offline mode (if applicable)
- Handle timeout scenarios

```jsx
// Error states with recovery
{error && (
  <ErrorMessage>
    <p>Failed to load data. {error.message}</p>
    <button onClick={retry}>Try again</button>
  </ErrorMessage>
)}
```

**Form validation errors**:
- Inline errors near fields
- Clear, specific messages
- Suggest corrections
- Don't block submission unnecessarily
- Preserve user input on error

**API errors**:
- Handle each status code appropriately
  - 400: Show validation errors
  - 401: Redirect to login
  - 403: Show permission error
  - 404: Show not found state
  - 429: Show rate limit message
  - 500: Show generic error, offer support

**Graceful degradation**:
- Core functionality works without JavaScript
- Images have alt text
- Progressive enhancement
- Fallbacks for unsupported features

#### Edge Cases & Boundary Conditions

**Empty states**:
- No items in list
- No search results
- No notifications
- No data to display
- Provide clear next action

**Loading states**:
- Initial load
- Pagination load
- Refresh
- Show what's loading ("Loading your projects...")
- Time estimates for long operations

**Large datasets**:
- Pagination or virtual scrolling
- Search/filter capabilities
- Performance optimization
- Don't load all 10,000 items at once

**Concurrent operations**:
- Prevent double-submission (disable button while loading)
- Handle race conditions
- Optimistic updates with rollback
- Conflict resolution

**Interrupted gestures** (custom sliders, drag surfaces, scrollable control strips):
- A second finger or pointer lands mid-drag: the first drag keeps its pointer or ends cleanly, never jumps to the new one
- The browser cancels the gesture to scroll (`pointercancel`), capture is lost (`lostpointercapture`), the pointer is released outside the control, or the window loses focus (`blur`) mid-drag: clear the dragging state and release capture
- After each of these, the next tap or drag works without a reload

**Permission states**:
- No permission to view
- No permission to edit
- Read-only mode
- Clear explanation of why

**Browser compatibility**:
- Polyfills for modern features
- Fallbacks for unsupported CSS
- Feature detection (not browser detection)
- Test in target browsers

#### Input Validation & Sanitization

**Client-side validation**:
- Required fields
- Format validation (email, phone, URL)
- Length limits
- Pattern matching
- Custom validation rules

**Server-side validation** (always):
- Never trust client-side only
- Validate and sanitize all inputs
- Protect against injection attacks
- Rate limiting

**Constraint handling**:
```html
<!-- Set clear constraints -->
<input 
  type="text"
  maxlength="100"
  pattern="[A-Za-z0-9]+"
  required
  aria-describedby="username-hint"
/>
<small id="username-hint">
  Letters and numbers only, up to 100 characters
</small>
```

#### Accessibility Resilience

**Keyboard navigation**:
- All functionality accessible via keyboard
- Logical tab order
- Focus management in modals
- Skip links for long content

**Screen reader support**:
- Proper ARIA labels
- Announce dynamic changes (live regions)
- Descriptive alt text
- Semantic HTML

**High contrast mode**:
- Test in Windows high contrast mode
- Don't rely only on color
- Provide alternative visual cues

#### Performance Resilience

**Slow connections**:
- Progressive image loading
- Skeleton screens
- Optimistic UI updates
- Offline support (service workers)

**Memory leaks**:
- Clean up event listeners
- Cancel subscriptions
- Clear timers/intervals
- Abort pending requests on unmount

**Throttling & Debouncing**:
```javascript
// Debounce search input
const debouncedSearch = debounce(handleSearch, 300);

// Throttle scroll handler
const throttledScroll = throttle(handleScroll, 100);
```

### Testing Strategies

**Manual testing**:
- Test with extreme data (very long, very short, empty)
- Test in different languages
- Test offline
- Test slow connection (throttle to 3G)
- Test with screen reader
- Test keyboard-only navigation
- Test on old browsers

**Automated testing**:
- Unit tests for edge cases
- Integration tests for error scenarios
- E2E tests for critical paths
- A behavioral regression for each confirmed gesture fix, when the project's test runner can drive input
- Visual regression tests
- Accessibility tests (axe, WAVE)

**IMPORTANT**: Hardening is about expecting the unexpected. Real users will do things you never imagined.

**NEVER**:
- Assume perfect input (validate everything)
- Ignore internationalization (design for global)
- Leave error messages generic ("Error occurred")
- Forget offline scenarios
- Trust client-side validation alone
- Use fixed widths for text
- Assume English-length text
- Block entire interface when one component errors

### Verify Hardening

Test thoroughly with edge cases:

- **Long text**: Try names with 100+ characters
- **Emoji**: Use emoji in all text fields
- **RTL**: Test with Arabic or Hebrew
- **CJK**: Test with Chinese/Japanese/Korean
- **Network issues**: Disable internet, throttle connection
- **Large datasets**: Test with 1000+ items
- **Concurrent actions**: Click submit 10 times rapidly
- **Interrupted gestures**: Add a second finger mid-drag, scroll across the control, release outside it, switch windows mid-drag; then drag again
- **Errors**: Force API errors, test all error states
- **Empty**: Remove all data, test empty states

For gestures, say what produced the evidence (emulated viewport, synthesized touch, which engine, physical device) and name what stayed untested.

When edge cases are covered, hand off to `impeccable polish` for the final pass.

## Playbook: onboard

*Upstream: `skill/reference/onboard.md`*

> **Additional context needed**: the "aha moment" you want users to reach, and users' experience level.

Get users to first value as fast as possible. Onboarding's job is not to teach the product. Its job is to get people to the moment that proves the product is worth their time.

### Assess Onboarding Needs

Understand what users need to learn and why:

1. **Identify the challenge**:
   - What are users trying to accomplish?
   - What's confusing or unclear about current experience?
   - Where do users get stuck or drop off?
   - What's the "aha moment" we want users to reach?

2. **Understand the users**:
   - What's their experience level? (Beginners, power users, mixed?)
   - What's their motivation? (Excited and exploring? Required by work?)
   - What's their time commitment? (5 minutes? 30 minutes?)
   - What alternatives do they know? (Coming from competitor? New to category?)

3. **Define success**:
   - What's the minimum users need to learn to be successful?
   - What's the key action we want them to take? (First project? First invite?)
   - How do we know onboarding worked? (Completion rate? Time to value?)

**CRITICAL**: Onboarding should get users to value as quickly as possible, not teach everything possible.

### Onboarding Principles

Follow these core principles:

#### Show, Don't Tell
- Demonstrate with working examples, not just descriptions
- Provide real functionality in onboarding, not separate tutorial mode
- Use progressive disclosure, teach one thing at a time

#### Make It Optional (When Possible)
- Let experienced users skip onboarding
- Don't block access to product
- Provide "Skip" or "I'll explore on my own" options

#### Time to Value
- Get users to their "aha moment" ASAP
- Front-load most important concepts
- Teach 20% that delivers 80% of value
- Save advanced features for contextual discovery

#### Context Over Ceremony
- Teach features when users need them, not upfront
- Empty states are onboarding opportunities
- Tooltips and hints at point of use

#### Respect User Intelligence
- Don't patronize or over-explain
- Be concise and clear
- Assume users can figure out standard patterns

### Design Onboarding Experiences

Create appropriate onboarding for the context:

#### Initial Product Onboarding

**Welcome Screen**:
- Clear value proposition (what is this product?)
- What users will learn/accomplish
- Time estimate (honest about commitment)
- Option to skip (for experienced users)

**Account Setup**:
- Minimal required information (collect more later)
- Explain why you're asking for each piece of information
- Smart defaults where possible
- Social login when appropriate

**Core Concept Introduction**:
- Introduce 1-3 core concepts (not everything)
- Use simple language and examples
- Interactive when possible (do, don't just read)
- Progress indication (step 1 of 3)

**First Success**:
- Guide users to accomplish something real
- Pre-populated examples or templates
- Celebrate completion (but don't overdo it)
- Clear next steps

#### Feature Discovery & Adoption

**Empty States**:
Instead of blank space, show:
- What will appear here (description + screenshot/illustration)
- Why it's valuable
- Clear CTA to create first item
- Example or template option

Example:
```
No projects yet
Projects help you organize your work and collaborate with your team.
[Create your first project] or [Start from template]
```

**Contextual Tooltips**:
- Appear at relevant moment (first time user sees feature)
- Point directly at relevant UI element
- Brief explanation + benefit
- Dismissable (with "Don't show again" option)
- Optional "Learn more" link

**Feature Announcements**:
- Highlight new features when they're released
- Show what's new and why it matters
- Let users try immediately
- Dismissable

**Progressive Onboarding**:
- Teach features when users encounter them
- Badges or indicators on new/unused features
- Unlock complexity gradually (don't show all options immediately)

#### Guided Tours & Walkthroughs

**When to use**:
- Complex interfaces with many features
- Significant changes to existing product
- Industry-specific tools needing domain knowledge

**How to design**:
- Spotlight specific UI elements (dim rest of page)
- Keep steps short (3-7 steps max per tour)
- Allow users to click through tour freely
- Include "Skip tour" option
- Make replayable (help menu)

**Best practices**:
- Interactive over passive (let users click real buttons)
- Focus on workflow, not features ("Create a project" not "This is the project button")
- Provide sample data so actions work

#### Interactive Tutorials

**When to use**:
- Users need hands-on practice
- Concepts are complex or unfamiliar
- High stakes (better to practice in safe environment)

**How to design**:
- Sandbox environment with sample data
- Clear objectives ("Create a chart showing sales by region")
- Step-by-step guidance
- Validation (confirm they did it right)
- Graduation moment (you're ready!)

#### Documentation & Help

**In-product help**:
- Contextual help links throughout interface
- Keyboard shortcut reference
- Search-able help center
- Video tutorials for complex workflows

**Help patterns**:
- `?` icon near complex features
- "Learn more" links in tooltips
- Keyboard shortcut hints (`⌘K` shown on search box)

### Empty State Design

Every empty state needs:

#### What Will Be Here
"Your recent projects will appear here"

#### Why It Matters
"Projects help you organize your work and collaborate with your team"

#### How to Get Started
[Create project] or [Import from template]

#### Visual Interest
Illustration or icon (not just text on blank page)

#### Contextual Help
"Need help getting started? [Watch 2-min tutorial]"

**Empty state types**:
- **First use**: Never used this feature (emphasize value, provide template)
- **User cleared**: Intentionally deleted everything (light touch, easy to recreate)
- **No results**: Search or filter returned nothing (suggest different query, clear filters)
- **No permissions**: Can't access (explain why, how to get access)
- **Error state**: Failed to load (explain what happened, retry option)

### Implementation Patterns

#### Technical approaches:

**Tooltip libraries**: Tippy.js, Popper.js
**Tour libraries**: Intro.js, Shepherd.js, React Joyride
**Modal patterns**: Focus trap, backdrop, ESC to close
**Progress tracking**: LocalStorage for "seen" states
**Analytics**: Track completion, drop-off points

**Storage patterns**:
```javascript
// Track which onboarding steps user has seen
localStorage.setItem('onboarding-completed', 'true');
localStorage.setItem('feature-tooltip-seen-reports', 'true');
```

**IMPORTANT**: Don't show same onboarding twice (annoying). Track completion and respect dismissals.

**NEVER**:
- Force users through long onboarding before they can use product
- Patronize users with obvious explanations
- Show same tooltip repeatedly (respect dismissals)
- Block all UI during tour (let users explore)
- Create separate tutorial mode disconnected from real product
- Overwhelm with information upfront (progressive disclosure!)
- Hide "Skip" or make it hard to find
- Forget about returning users (don't show initial onboarding again)

### Verify Onboarding Quality

Test with real users:

- **Time to completion**: Can users complete onboarding quickly?
- **Comprehension**: Do users understand after completing?
- **Action**: Do users take desired next step?
- **Skip rate**: Are too many users skipping? (Maybe it's too long or not valuable)
- **Completion rate**: Are users completing? (If low, simplify)
- **Time to value**: How long until users get first value?

When users hit the aha moment fast and don't drop off, hand off to `impeccable polish` for the final pass.


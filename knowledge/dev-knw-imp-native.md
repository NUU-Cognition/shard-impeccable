---
description: "Impeccable platform rules for iOS and Android, plus the native variants of adapt and audit"
---


# Impeccable — Native Platforms

Read this when the target platform is iOS, Android, or adaptive. It replaces the web assumptions in the other files.

Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].

## Playbook: ios

*Upstream: `skill/reference/ios.md`*

### iOS platform

For native iOS / iPadOS apps: SwiftUI, UIKit, React Native, Expo, Flutter shipping to Apple hardware.

On native, the visitor mode narrows what expression may override. HIG conformance governs structure, navigation, and interaction in every mode; brand expresses through the layer the platform leaves open (tint, type, motion, content).

#### The iOS slop test

Would a fluent iPhone user trust this app, or pause at off-spec controls? The tell is "ported from a website": reinvented navigation bars, custom back gestures, web-shaped buttons, hover-dependent affordances. Default to the platform's components; depart only for a reason the user would thank you for.

#### Layout & structure

- **Safe area.** Lay out inside the safe-area insets. No controls under the notch, Dynamic Island, home indicator, or rounded corners. <!-- rule:ios-layout-safe-area -->
- **System navigation.** Tab bar for 2–5 top-level sections (sections, never actions), navigation stack for hierarchy, sheet for self-contained tasks. No custom global nav, no mixed metaphors. <!-- rule:ios-layout-standard-navigation -->
- **Edge-swipe back stays alive.** The left-edge back gesture is muscle memory; never disable or overlay it. <!-- rule:ios-layout-edge-swipe-back -->
- **Large titles** on top-level screens, collapsing to inline on scroll. Deep detail screens stay inline. <!-- rule:ios-layout-large-titles -->

#### Touch targets

- **44×44 pt minimum** for every tappable control, with breathing room between adjacent targets. <!-- rule:ios-touch-target-44pt -->

#### Typography

- **Dynamic Type.** Use the system text styles (Large Title through Caption) so text follows the user's reading size. No hard-coded point sizes. <!-- rule:ios-typo-dynamic-type -->
- **San Francisco carries the UI.** Body, labels, and controls stay on SF Pro / SF Compact; a brand face may appear in display moments. <!-- rule:ios-typo-system-font -->
- **11 pt floor**; Body is 17 pt. <!-- rule:ios-typo-minimum-size -->

#### Color & materials

- **Semantic system colors** (label, secondaryLabel, systemBackground, separator, tint). They adapt to Dark Mode and increased contrast automatically; raw hex breaks there. <!-- rule:ios-color-semantic-system -->
- **Dark Mode is a first-class appearance.** Design and test both. <!-- rule:ios-color-dark-mode -->
- **One tint color** drives interactive elements; decoration is not its job. <!-- rule:ios-color-single-tint -->
- **System materials** for blur and translucency behind bars and sheets; no hand-rolled glassmorphism. <!-- rule:ios-color-system-materials -->

#### Components & controls

- **Platform controls.** Switch, segmented control, stepper, system pickers, action sheets, alerts, context menus, swipe actions. Reinventing these for flavor is the most common native slop. <!-- rule:ios-components-native-controls -->
- **SF Symbols** for iconography: baseline-aligned, Dynamic Type-aware, weight and scale variants. Don't mix in a web icon set. <!-- rule:ios-components-sf-symbols -->
- **Deliberate modality.** Sheet for a focused dismissible sub-task, full-screen cover for immersion. Clear Cancel/Done; honor swipe-to-dismiss unless data loss requires a guard. <!-- rule:ios-components-modality -->
- **Grouped/inset lists** for settings-shaped content; no bespoke card stacks. <!-- rule:ios-components-grouped-lists -->

#### Motion

- **System transitions.** Push slides, sheets rise, dismiss reverses the entrance. Custom transitions that fight the navigation model disorient. <!-- rule:ios-motion-system-transitions -->
- **Honor Reduce Motion.** Crossfade instead of parallax and large slides. <!-- rule:ios-motion-reduce-motion -->

#### Verifying the build

- **Screenshots come from the Simulator, never a browser.** Build and run, then capture with `xcrun simctl io booted screenshot <path>` (with several running, replace `booted` with the target's UDID from `xcrun simctl list devices booted`; display names can collide, the UDID never does). Capture every device class the app ships to, at least one iPhone and, when iPad is a target, one iPad, and write the files where the review flow expects them. <!-- rule:ios-verify-simulator-capture -->
- **Dark Mode and Dynamic Type belong in the pass.** `xcrun simctl ui booted appearance dark` flips appearance, reusing the capture's UDID when several are booted; a check at a large Dynamic Type size catches the truncation a fixed layout hides. <!-- rule:ios-verify-appearance-and-type -->
- **Simulators give breadth; posture, gestures, and performance need hardware.** Say which one produced the evidence. <!-- rule:ios-verify-hardware-honesty -->

## Playbook: android

*Upstream: `skill/reference/android.md`*

### Android platform

For native Android apps: Jetpack Compose, Android Views, React Native, Expo, Flutter shipping to Android hardware.

On native, the visitor mode narrows what expression may override. Material Design 3 governs structure, navigation, and interaction in every mode; brand expresses through Material's theming (color roles, type scale, shape, motion). A Material-everywhere cross-platform app that also ships to iPhone still owes iOS its OS guarantees on that hardware: safe-area insets, Reduce Motion, edge-swipe back.

#### The Android slop test

Would a fluent Android user trust this app, or trip on off-spec components? The most common tell is an iOS app wearing Android's skin: a bottom-only navigation copied from iPhone, a back arrow that ignores the system Back gesture, Cupertino-shaped switches and dialogs. Material 3 is the rulebook; follow its components and theme the brand through it.

#### Layout & structure

- **Material navigation, matched to size.** Navigation bar (bottom, 3–5 destinations) on compact width; navigation rail or drawer on expanded width. Never ship a phone bottom-bar untouched on a tablet. <!-- rule:android-layout-adaptive-nav -->
- **System Back always works.** Honor the predictive Back gesture and Back button; never trap the user or hijack the gesture. <!-- rule:android-layout-system-back -->
- **Edge-to-edge with window insets.** Apply the status bar, navigation bar, display cutout, and IME insets so content never hides behind system bars or the keyboard. <!-- rule:android-layout-window-insets -->
- **Top app bar for screen context**; pair with a FAB when the screen has a single primary action. <!-- rule:android-layout-top-app-bar -->

#### Touch targets

- **48×48 dp minimum** for every touch target, with at least 8 dp between them. <!-- rule:android-touch-target-48dp -->

#### Typography

- **Material type scale.** Display, Headline, Title, Body, Label roles (large/medium/small each). Map text to roles; never hand-pick sizes per screen. <!-- rule:android-typo-type-scale -->
- **Roboto is the system face**; theme a brand face in through the type scale, keeping body, labels, and controls legible and consistent. <!-- rule:android-typo-system-font -->
- **sp units, never fixed px**, so type follows the system font-size setting. <!-- rule:android-typo-scalable-sp -->

#### Color & theming

- **Material color roles** (primary, on-primary, surface, surface-variant, secondary-container, outline, error). Role tokens resolve light/dark and contrast variants automatically; raw hex breaks there. <!-- rule:android-color-role-tokens -->
- **Dynamic Color (Material You)** where it fits: derive the scheme from the user's wallpaper on Android 12+, with a static fallback. <!-- rule:android-color-dynamic-color -->
- **Dark theme is a first-class scheme.** Design and test it; never a quick invert. <!-- rule:android-color-dark-theme -->
- **Tonal elevation.** Convey elevation through the standard surface tonal levels (plus shadow where appropriate); no arbitrary drop shadows. <!-- rule:android-color-tonal-elevation -->

#### Components & motion

- **Material components.** Buttons (filled / tonal / outlined / text), FAB, switches, chips, snackbars, bottom sheets, Material dialogs, navigation bar/rail/drawer. Never port iOS controls or invent equivalents. <!-- rule:android-components-material -->
- **One FAB, one primary action.** Never stack FABs or spend one on a secondary task. <!-- rule:android-components-single-fab -->
- **Snackbars for transient feedback** (actionable when useful, never a toast for that); dialogs only for decisions that must interrupt. <!-- rule:android-components-snackbar -->
- **Material motion patterns.** Container transform, shared-axis, fade-through, with standard easing and durations; honor the system Remove animations setting with a crossfade or instant cut. <!-- rule:android-motion-material-and-reduce -->

#### Verifying the build

- **Screenshots come from the emulator or a connected device, never a browser.** Build and install, then capture with `adb exec-out screencap -p > <path>` (pick a device with `adb -s <serial>` when several are attached). Capture every device class the app ships to, at least one phone and, when tablets are a target, one tablet, and write the files where the review flow expects them. <!-- rule:android-verify-emulator-capture -->
- **Dark theme and font scale belong in the pass.** `adb shell cmd uimode night yes` flips the theme; `adb shell settings put system font_scale 1.3` (restore `1.0` after) catches the clipped labels a fixed layout hides; with several targets attached, the capture's `-s <serial>` goes on these commands too. <!-- rule:android-verify-theme-and-scale -->
- **Emulators give breadth; gestures, refresh rates, and performance need hardware.** Say which one produced the evidence. <!-- rule:android-verify-hardware-honesty -->

## Playbook: adapt.native

*Upstream: `skill/reference/adapt.native.md`*

> **Additional context needed**: target platforms/devices and usage contexts.

Adapt an existing **native** design (`ios` / `android` / `adaptive`) to a different context: another device class, orientation, platform, or origin. The trap is treating adaptation as scaling. The job is rethinking the experience for the new context, inside the platform conventions of [the ios playbook](#playbook-ios) / [the android playbook](#playbook-android); read the target platform's reference before planning if Setup hasn't already.

### Assess Adaptation Challenge

1. **Source context**: what was it designed for, and what assumptions did it make? (Phone-only? Portrait-only? One platform's idioms? A website?)
2. **Target context**: which device class (phone, tablet, foldable), orientation, platform, and usage posture (one-handed on the go vs two-handed at rest)?
3. **What breaks**: navigation that doesn't fit the target, layouts that stretch instead of restructure, gestures or controls that don't exist there?

### Adaptation Strategies

#### Phone → Tablet (iPad / large screens)

- **Restructure, don't stretch.** A scaled-up phone UI on a tablet is the failure mode. Use size classes (iOS) / window size classes (Android) to switch structure.
- **Navigation changes shape**: tab bar stays or becomes a sidebar on iPad; Android navigation bar becomes a rail or drawer on expanded width.
- **Use the width**: split view / master-detail (list + detail side by side), multi-column grids, popovers where phones used sheets.
- **Multitasking is a size, not an edge case**: iPad Split View and Android multi-window can hand you a phone-width window on a tablet; size-class-driven layout handles both for free.

#### Orientation & foldables

- Landscape restructures (side-by-side panes, repositioned controls); never clip or letterbox. Lock orientation only when the task truly demands it.
- Foldables (Android): react to posture and hinge via window size classes; test folded, unfolded, and tabletop.

#### Platform → platform (iOS ↔ Android)

Translate idioms; never transplant them:

| iOS | Android |
|---|---|
| Tab bar | Navigation bar / rail / drawer |
| Edge-swipe back, back chevron | Predictive Back gesture / button |
| Switch, segmented control, system pickers | Material switch, chips, Material pickers |
| Action sheet | Bottom sheet / Material dialog |
| SF Symbols, SF Pro, Dynamic Type | Material Symbols, Roboto, sp scaling |
| Semantic system colors, materials | Material color roles, tonal elevation |
| System push/sheet transitions | Container transform, shared-axis, fade-through |

Rebuild navigation and controls in the target's vocabulary; carry over the brand's expressive layer (palette intent, type accent, motion personality) through the target's theming system.

#### Web → native (porting a website or web app)

Reconform, don't reflow. Replace web navigation with the platform's model, HTML-shaped controls with platform controls, hover affordances with touch-first ones, and px-based type with Dynamic Type / sp. Then treat the result to the full platform reference; the slop test there is the acceptance bar.

### Implement & Verify

- Drive structure from **size classes / window size classes**, never from device-model checks.
- Respect safe areas and window insets in every new configuration (notch, hinge, status bar, keyboard).
- Test on simulators for breadth, then real hardware for truth: at least one phone and one tablet per shipped platform, both orientations, split-screen where supported.

When the adaptation feels native to each context, hand off to `impeccable polish` for the final pass.

**NEVER**:
- Ship a stretched phone layout on a tablet
- Port one platform's controls or navigation onto the other
- Hide core functionality on smaller devices (if it matters, make it work)
- Lock orientation to dodge a layout bug
- Trust simulators alone (posture, gestures, and performance need hardware)

## Playbook: audit.native

*Upstream: `skill/reference/audit.native.md`*

Run systematic **technical** quality checks on a native app (`ios` / `android` / `adaptive`) and generate a comprehensive report. Don't fix issues; document them for other commands to address.

This is a code-level audit, not a design critique. Audit from source (SwiftUI / UIKit / Compose / React Native / Flutter); no browser tooling or `impeccable detect` applies. Score against the platform reference(s): [the ios playbook](#playbook-ios) / [the android playbook](#playbook-android), both for `adaptive`. Read them before scoring if Setup hasn't already. The report skeleton mirrors [[dev-knw-imp-review#Playbook: audit]]; keep the two in sync when changing it.

### Diagnostic Scan

Run comprehensive checks across 5 dimensions. Score each dimension 0-4 using the criteria below.

#### 1. Accessibility (VoiceOver / TalkBack)

**Check for**:
- **Missing labels**: interactive elements without accessibility labels, traits/roles, or state announcements
- **Reading and focus order**: illogical traversal, unreachable controls, focus lost on navigation
- **Text scaling**: fixed point sizes defeating Dynamic Type (iOS) or px instead of sp (Android); layouts that clip or overlap at large sizes
- **Touch targets**: below 44 pt (iOS) / 48 dp (Android), or crammed without spacing
- **Reduce Motion ignored**: parallax and large slides with no crossfade alternative
- **Contrast**: text failing contrast in either appearance, light or dark

**Score 0-4**: 0=Screen reader unusable, 1=Major gaps (unlabeled controls, no scaling), 2=Partial (labels exist, order or scaling breaks), 3=Good (minor gaps), 4=Excellent (labeled, ordered, scales cleanly, Reduce Motion honored)

#### 2. Performance

**Check for**:
- **Slow startup**: heavy work on launch before first frame
- **Unvirtualized lists**: long content without FlatList / LazyColumn / List recycling
- **Main-thread jank**: synchronous work in scroll or gesture paths, dropped frames on 60/120 Hz
- **Wasted rendering**: unnecessary re-renders (React Native) or recompositions (Compose); missing memoization/keys
- **Image handling**: full-size images decoded for thumbnails, no caching
- **App weight**: bloated JS bundle or binary, unused dependencies

**Score 0-4**: 0=Janky everywhere, 1=Major problems (unvirtualized lists, slow launch), 2=Partial, 3=Good (minor improvements possible), 4=Excellent (fast launch, smooth scroll, lean)

#### 3. Appearance & Theming

**Check for**:
- **Hard-coded colors**: raw hex instead of semantic system colors (iOS) / Material color roles (Android) / design tokens
- **Broken dark appearance**: missing dark variants, poor contrast in dark, quick inverts
- **Dynamic Color** (Android 12+): no static fallback scheme, or ignored where it fits
- **Off-platform materials**: hand-rolled visual materials where system materials or tonal elevation are expected

**Score 0-4**: 0=Hard-coded everything, 1=Minimal tokens, 2=Partial (tokens exist, inconsistently used), 3=Good (minor hard-coded values), 4=Excellent (semantic throughout, both appearances first-class)

#### 4. Platform Conformance (CRITICAL)

Score against the loaded platform reference(s), including their slop tests. **Check for**:
- **Broken system gestures**: edge-swipe back disabled (iOS), predictive Back hijacked (Android)
- **Inset violations**: content under the notch, Dynamic Island, home indicator, status bar, or keyboard
- **Off-platform navigation**: custom global nav, overloaded tab bars, iOS patterns on Android or vice versa
- **Web-shaped controls**: HTML-style buttons, custom toggles, hover-dependent affordances
- **Icon drift**: mixed icon sets instead of SF Symbols / Material Symbols
- **System drift**: repeated shortcuts or decorative patterns that conflict with the product, platform, or established design system

**Score 0-4**: 0=Web port (nothing native), 1=Heavy violations (3-4 kinds), 2=Some (1-2 noticeable), 3=Mostly conformant (subtle issues), 4=Fully native (a fluent user trusts every screen)

#### 5. Adaptivity

**Check for**:
- **Stretched phone layouts**: tablet/iPad rendering a scaled-up phone UI instead of using size classes / window size classes
- **Orientation breakage**: landscape clipping, ignored, or locked without reason
- **Keyboard/IME handling**: inputs hidden behind the keyboard, no inset adjustment
- **Multitasking**: iPad Split View / Android multi-window breaking layout
- **Foldables**: hinge-unaware layouts on posture change (Android)

**Score 0-4**: 0=One screen size only, 1=Major breakage (landscape or tablet broken), 2=Partial, 3=Good (minor edge cases), 4=Excellent (adapts across sizes, orientations, and windowing)

### Generate Report

#### Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | ? | [most critical issue or "--"] |
| 2 | Performance | ? | |
| 3 | Appearance & Theming | ? | |
| 4 | Platform Conformance | ? | |
| 5 | Adaptivity | ? | |
| **Total** | | **??/20** | **[Rating band]** |

**Rating bands**: 18-20 Excellent (minor polish), 14-17 Good (address weak dimensions), 10-13 Acceptable (significant work needed), 6-9 Poor (major overhaul), 0-5 Critical (fundamental issues)

#### Platform Conformance Verdict
**Start here.** Pass/fail: does this read as a native app or a ported website? List specific violations. Be brutally honest.

#### Executive Summary
- Audit Health Score: **??/20** ([rating band])
- Total issues found (count by severity: P0/P1/P2/P3)
- Top 3-5 critical issues
- Recommended next steps

#### Detailed Findings by Severity

Tag every issue with **P0-P3 severity**:
- **P0 Blocking**: Prevents task completion. Fix immediately
- **P1 Major**: Significant difficulty or platform-guideline violation. Fix before release
- **P2 Minor**: Annoyance, workaround exists. Fix in next pass
- **P3 Polish**: Nice-to-fix, no real user impact. Fix if time permits

For each issue, document:
- **[P?] Issue name**
- **Location**: Screen, file, line
- **Category**: Accessibility / Performance / Theming / Conformance / Adaptivity
- **Impact**: How it affects users
- **Guideline**: The HIG / Material rule it violates (if applicable)
- **Recommendation**: How to fix it
- **Suggested command**: Which command to use (prefer: shape, init, document, extract, critique, audit, polish, bolder, quieter, distill, harden, onboard, animate, colorize, typeset, layout, delight, overdrive, clarify, adapt, optimize)

#### Patterns & Systemic Issues

Identify recurring problems that indicate systemic gaps rather than one-off mistakes:
- "Hard-coded colors appear in 15+ screens, should use semantic colors"
- "Touch targets consistently below 44 pt throughout the tab bar and list rows"

#### Positive Findings

Note what's working well: good practices to maintain and replicate.

### Recommended Actions

List recommended commands in priority order (P0 first, then P1, then P2):

1. **[P?] `command-name`**: Brief description (specific context from audit findings)
2. **[P?] `command-name`**: Brief description (specific context)

**Rules**: Only recommend commands from: shape, init, document, extract, critique, audit, polish, bolder, quieter, distill, harden, onboard, animate, colorize, typeset, layout, delight, overdrive, clarify, adapt, optimize. Map findings to the most appropriate command. End with `impeccable polish` as the final step if any fixes were recommended.

After presenting the summary, tell the user:

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `impeccable audit` after fixes to see your score improve.

**IMPORTANT**: Be thorough but actionable. Too many P3 issues creates noise. Focus on what actually matters.

**NEVER**:
- Report issues without explaining impact (why does this matter?)
- Provide generic recommendations (be specific and actionable)
- Skip positive findings (celebrate what works)
- Forget to prioritize (everything can't be P0)
- Report false positives without verification


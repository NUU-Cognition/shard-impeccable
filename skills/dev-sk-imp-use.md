---
description: "Apply the Impeccable design logic to any interface task — read the core, route to one playbook, build or review, and verify in bounded passes"
---

> [!important] THIS FILE IS AN INSTRUCTION. WHEN REFERENCED IT IS MEANT TO BE TAKEN AS AN ACTION.

Run `flint shard start-dev impeccable` if you haven't already.

# Skill: Use Impeccable

Apply the Impeccable design logic to the interface task in front of you. This is the shard's only skill. The user needs no command word — classify the request yourself.

# Input

- The task. Any request that creates, changes, reviews, or plans a user interface.
- The target. A file path, a route, a URL, a component, or a whole surface.
- (Optional) A named intent, such as "polish this" or "make it bolder".
- (Optional) The target platform, when it is iOS or Android rather than the web.

# Actions

1. **Set the working directory to the target codebase.** Design work happens in the codebase, never in the Mesh. `PRODUCT.md` and `DESIGN.md` belong to that codebase.

2. **Read [[dev-knw-imp-core]] in full. Always. Before anything else.** It carries the doctrine, the four visitor modes, the routing rules, the craft floor, and the absolute bans. Never skip it, and never work from a summary of it.

3. **Read the project's own context.** `PRODUCT.md`, `DESIGN.md`, and any surface brief under `.impeccable/`. Do not invent what is missing. When `PRODUCT.md` is absent and the task is a new surface or a replacement visual world, capture it first through the init playbook.

4. **Classify the request into one intent, and read that one knowledge file.** Read only the playbook the intent names — the routing table gives a file and a heading.

   | The request is about | Read | Playbook heading |
   |---|---|---|
   | A new surface, a redesign, a replacement visual world, direction comps, asset production | [[dev-knw-imp-new_work]] | `new-work`, `visualize` |
   | Capturing product truth, documenting an existing visual world, planning before code, extracting tokens | [[dev-knw-imp-context]] | `init`, `document`, `shape`, `extract` |
   | Reviewing a surface — design critique, or a technical check of accessibility, performance, and responsive behavior | [[dev-knw-imp-review]] | `critique`, `audit` |
   | Improving a surface that exists — a final pass, bolder, quieter, simpler, production-hardening, first-run flows | [[dev-knw-imp-refine]] | `polish`, `bolder`, `quieter`, `distill`, `harden`, `onboard` |
   | Adding a quality — motion, color, typography, spacing and hierarchy, personality, ambitious effects | [[dev-knw-imp-enhance]] | `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive` |
   | Fixing a named defect — UX copy, device adaptation, interface performance | [[dev-knw-imp-fix]] | `clarify`, `adapt`, `optimize` |
   | Any of the above when the platform is iOS, Android, or adaptive | [[dev-knw-imp-native]] **as well** | `ios`, `android`, `adapt.native`, `audit.native` |
   | Delegating asset production, documentation, or a finish review | [[dev-knw-imp-subagents]] | one prompt per role |

   When two intents fit, ask once, then proceed. When none fits, treat it as general design work and follow the core file's routing section. Reading a second knowledge file is cheap; guessing is not.

5. **Read the craft floor immediately before the first UI edit.** It is the `Playbook: craft-floor` section of [[dev-knw-imp-core]]. Re-read it for small refinements too. Skip it only for planning-only work.

6. **Do the work the playbook describes.** Follow it exactly, including its hard invariants. The brief wins over your taste. Refinement preserves the incumbent identity; redesign replaces the visual world and never splits the difference.

7. **Verify in bounded passes, not a loop.** Build fully. Inspect once with a batched round — desktop and mobile together on the web, the shipped device classes on a native platform. Fix everything that round shows in one batch. Confirm with at most one more round. Then stop.

8. **Run the detector when deterministic evidence matters.** `npx impeccable detect --json <target>` from the target codebase, and `npx impeccable context` for the same context load the upstream launcher performs. Both need Node 22 and download the engine binary once. When you do not run the detector on a critique or an audit, say so plainly in the first line of the report. A silent judgment-only review is a failed review.

9. **Delegate through Orbh when a playbook calls for sub-agents.** Critique requires two isolated assessments. Dispatch each with `flint orbh request -q <runtime/profile> '<prompt>'` and pass the matching prompt from [[dev-knw-imp-subagents]] verbatim. Use a harness-native sub-agent tool only when no Orbh dispatch is available. Inline assessment is a degraded run and must be declared.

10. **Write a `(Report)` artifact when the operator asks for a durable record** of a critique or an audit. Otherwise leave the result in the chat and in the codebase.

# Output

- The design work itself, in the target codebase.
- A stated mode and intent, so the operator can see what you classified the request as.
- A degradation line whenever the detector or a sub-agent path was unavailable.
- (Optional) A `(Report)` artifact in the Mesh.

# Not in this shard

`live` (browser variant mode), `hooks` (the post-edit detector hook), `doctor` (artifact drift repair), `pin`, and the deprecated `craft` alias. Each is the engine plus its own state. When a user asks for one, say it is not part of this shard and offer `npx impeccable <verb>` in the target codebase instead. See [[dev-knw-imp-upstream]].

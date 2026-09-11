---
required-reading:
  - "[[dev-knw-imp-core]]"
---

# Impeccable

Design capability for any interface task. This shard carries the Impeccable design skill — a design vocabulary, a quality floor, a list of absolute bans, and 21 playbooks — and exposes it through **one skill**: [[dev-sk-imp-use]].

## Attribution

Impeccable was created by Paul Bakaus and is published under Apache 2.0 at https://github.com/pbakaus/impeccable. This shard is a derived work. The design text is ported verbatim; only placeholders, links, and heading depth change. `LICENSE` and `NOTICE.md` travel with the shard. Provenance, pinned versions, and the sync procedure live in [[dev-knw-imp-upstream]].

## How to use it

There is one entry point. Load [[dev-sk-imp-use]] and follow it. You do not need a command word from the user, and the shard defines no slash commands.

The skill does four things:

1. Reads [[dev-knw-imp-core]] in full, always.
2. Classifies the request into one intent.
3. Reads the one knowledge file that intent names.
4. Applies both to the task, then verifies in bounded passes.

## The knowledge layer

Ten files. One is always read; the rest are read one at a time.

| File | Covers | Read when |
|---|---|---|
| [[dev-knw-imp-core]] | Doctrine, the four modes, routing, the craft floor, the absolute bans | Always |
| [[dev-knw-imp-context]] | `init`, `document`, `shape`, `extract` | Capturing product truth, documenting a world, planning, extracting tokens |
| [[dev-knw-imp-new_work]] | `new-work`, `visualize` | A new surface or a replacement visual world |
| [[dev-knw-imp-review]] | `critique`, `audit` | Reviewing a surface |
| [[dev-knw-imp-refine]] | `polish`, `bolder`, `quieter`, `distill`, `harden`, `onboard` | Improving a surface that exists |
| [[dev-knw-imp-enhance]] | `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive` | Adding a specific quality |
| [[dev-knw-imp-fix]] | `clarify`, `adapt`, `optimize` | A named defect drives the task |
| [[dev-knw-imp-native]] | `ios`, `android`, `adapt.native`, `audit.native` | The platform is iOS, Android, or adaptive |
| [[dev-knw-imp-subagents]] | Four delegated-role prompts | Delegating assets, documentation, or a finish review |
| [[dev-knw-imp-upstream]] | Provenance, pins, sync | Changing or updating the ported material |

## The two hard rules

1. **The core is not optional.** Read [[dev-knw-imp-core]] before any interface work, and read the craft floor again immediately before the first UI edit. The bans are absolute.
2. **Verify in bounded passes, not a loop.** Build fully, inspect once in a batched round, fix in one batch, confirm at most once more, then stop. Open-ended self-QA is not craft; it is waste.

## The engine is optional

Upstream ships a deterministic anti-pattern detector as a compiled binary. This shard vendors nothing. Run `npx impeccable detect --json <target>` from the target codebase when you want deterministic evidence; it needs Node 22 and downloads the binary once.

A critique or an audit that runs without the detector must say so in its first line. Every other playbook works unchanged without it.

`live`, `hooks`, `doctor`, `pin`, and the deprecated `craft` alias are not part of this shard. See [[dev-knw-imp-upstream]].

## Where the work lands

Design work happens in the **target codebase**, not in the Mesh. `PRODUCT.md` and `DESIGN.md` belong to that codebase. Write a `(Report)` artifact only when the operator asks for a durable record of a review.

## Scripts

| Script | Command | Output |
|---|---|---|
| Port upstream | `flint shard imp port-upstream [--dry-run]` | Regenerates all nine ported knowledge files from `Sources/Repos/Impeccable/skill/` |

---
description: "Provenance of the ported Impeccable material, the pinned upstream versions, the optional engine, and the sync procedure"
---

# Knowledge: Upstream Provenance and Sync

This shard is a derived work. It carries the Impeccable design skill, ported into Flint form. Read this file before you change any `dev-knw-imp-*.md` file by hand.

## Source

| Field | Value |
|---|---|
| Project | Impeccable — design skills for AI coding agents |
| Author | Paul Bakaus |
| Repository | https://github.com/pbakaus/impeccable |
| License | Apache 2.0 (`LICENSE` and `NOTICE.md` at this shard's root) |
| Flint source repository | `Sources/Repos/Impeccable`, declared in `flint.toml` under `[sources]` |
| Pinned commit | `93ccd45a4bd8ade17160e84a67314197f80a30a0` (2026-09-07) |
| Skill package version | 4.1.0 |
| Engine version | 0.1.5 |

`NOTICE.md` records a second derivation: the iOS and Android platform files come from ehmo's `platform-design-skills` (MIT), rewritten in Impeccable's voice. That attribution travels with this shard.

## What the port changes

The port is mechanical. It never summarizes, and it never rewrites design prose.

1. **Placeholder resolution.** Upstream ships six build placeholders. `{{scripts_path}}/impeccable` becomes `npx impeccable`. `{{command_prefix}}` is removed. `{{ask_instruction}}` becomes the Flint sentence. `{{available_commands}}`, `{{config_file}}`, and `{{command_hint}}` take Flint values.
2. **Heading normalization.** Each playbook's own top heading level becomes `###`, so a merged file keeps one heading tree.
3. **Link resolution.** A link inside the same knowledge file becomes an anchor. A link across files becomes a wikilink such as `[[knw-imp-review#Playbook: critique]]`. A link to a dropped file becomes plain prose.
4. **Group concatenation.** Nine groups, one knowledge file each, one `## Playbook: <name>` heading per upstream file.
5. **Patches.** A short list of exact rewrites in `scripts/port-upstream.js` removes passages that only work with the engine binary.

## What the port drops

| Dropped | Reason |
|---|---|
| `reference/craft.md` | A deprecation stub with no behavior |
| `reference/live.md`, `reference/live-setup.md` | Live variant mode is the engine plus a browser payload |
| `reference/hooks.md` | The post-edit detector hook needs the engine |
| `reference/doctor.md` | Artifact drift repair needs the engine |
| `skill/scripts/` | Launcher shims, a font-metrics index, and browser payloads. No design content. |

## The engine is optional

The deterministic detector is a compiled binary that upstream does not ship in the repository. This shard vendors nothing. Where a playbook names an engine command, run it with `npx impeccable <verb>` from the target codebase. It needs Node 22 and downloads the binary once.

Without it:

- Critique and audit are judgment passes. Upstream requires a stated degradation, and the ported text keeps that requirement.
- `typeset` recommends fonts by judgment, not by the font-metrics index.
- `new-work` keeps its direction and surface guidance and loses the seeded roll and the phase gates.

Every other playbook is unaffected. Only 12 of the 36 upstream files named an engine command at all.

## Sync procedure

```bash
flint source repo update "Impeccable"     # re-fetch upstream
flint shard imp port-upstream --dry-run   # preview sizes and group counts
flint shard imp port-upstream             # regenerate all nine knowledge files
git -C "Shards/(Dev Remote) Impeccable" diff   # review before committing
```

Rules:

- **Never hand-edit a `knw-imp-*.md` file.** The next port overwrites it. Change `scripts/port-upstream.js` instead, then re-run.
- The port prints any upstream reference file that is neither grouped nor dropped. Assign each one before you ship.
- The port prints any patch that stopped matching upstream. Re-anchor it against the current text.
- Update the pinned commit, skill version, and engine version in the table above after a sync.
- `sk-imp-use.md` and `init-imp.md` are hand-written and are not regenerated.

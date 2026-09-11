# Impeccable (shard)

Design capability for a Flint workspace. One skill — `use_imp` — applies the [Impeccable](https://github.com/pbakaus/impeccable) design logic to any interface task: new surfaces, redesigns, critique, audit, refinement, enhancement, and repair, on the web and on native platforms.

## Install

```bash
flint shard install NUU-Cognition/shard-impeccable
```

## Use

```bash
flint shard start impeccable
```

Then load the single skill, `sk-imp-use`. There is no command word to learn and no slash command. The skill reads the core design logic, classifies the request, reads the one playbook that matches, and does the work.

## Layout

```
shard.yaml
init-imp.md                  # entry point
skills/sk-imp-use.md         # the only skill
knowledge/
  knw-imp-core.md            # always read: doctrine, modes, craft floor, bans
  knw-imp-context.md         # init, document, shape, extract
  knw-imp-new_work.md        # new-work, visualize
  knw-imp-review.md          # critique, audit
  knw-imp-refine.md          # polish, bolder, quieter, distill, harden, onboard
  knw-imp-enhance.md         # animate, colorize, typeset, layout, delight, overdrive
  knw-imp-fix.md             # clarify, adapt, optimize
  knw-imp-native.md          # ios, android, adapt.native, audit.native
  knw-imp-subagents.md       # four delegated-role prompts
  knw-imp-upstream.md        # provenance, pinned versions, sync procedure
scripts/port-upstream.js     # regenerates the nine ported files from upstream
```

## The engine is optional

Upstream ships a deterministic anti-pattern detector as a compiled binary. This shard vendors nothing. Run `npx impeccable detect --json <target>` from the target codebase when you want deterministic evidence. A critique or audit that runs without it must declare the degradation.

`live`, `hooks`, `doctor`, `pin`, and the deprecated `craft` alias are not part of this shard — each is the engine plus its own state.

## Updating from upstream

```bash
flint source repo add "Impeccable" https://github.com/pbakaus/impeccable.git   # once
flint plan --apply                                                            # once
flint source repo update "Impeccable"
flint shard imp port-upstream
```

Never hand-edit a `knw-imp-*.md` file — the next port overwrites it. Change `scripts/port-upstream.js` instead. See `knowledge/knw-imp-upstream.md`.

## License and attribution

The ported design text is the work of Paul Bakaus, licensed Apache 2.0. `LICENSE` and `NOTICE.md` travel with this shard. `NOTICE.md` records a second derivation: the iOS and Android platform files come from ehmo's `platform-design-skills` (MIT).

The shard packaging — the init file, the single skill, the grouping, and the port script — is the added work and carries the same license.

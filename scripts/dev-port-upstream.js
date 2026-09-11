#!/usr/bin/env node
// Impeccable port: render the upstream skill source into this shard's
// knowledge files.
//
// Source : Sources/Repos/Impeccable/skill/   (declared in flint.toml [sources])
// Output : Shards/(Dev Local) Impeccable/knowledge/dev-knw-imp-*.md
//
// The port concatenates upstream files into nine groups. It never summarizes.
// Every transformation is mechanical:
//   1. Placeholder resolution   ({{scripts_path}}, {{command_prefix}}, ...)
//   2. Heading normalization    (each playbook's top level becomes ###)
//   3. Link resolution          (cross-file links become anchors or wikilinks)
//   4. Group concatenation      (one "## Playbook: <name>" heading per source)
//
// dev-knw-imp-core.md is generated too, but it is hand-edited afterwards to
// strip the engine-only command rows. Re-running the port overwrites that
// edit — see knowledge/dev-knw-imp-upstream.md before you re-run.
//
// Usage:
//   flint shard imp port-upstream [--dry-run]

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const FLINT_ROOT = process.env.FLINT_ROOT || process.cwd();
// FLINT_SHARD is the shard folder name, relative to Shards/.
const SHARD = resolve(FLINT_ROOT, 'Shards', process.env.FLINT_SHARD || '(Dev Local) Impeccable');
const SRC = resolve(FLINT_ROOT, 'Sources/Repos/Impeccable/skill');
const OUT = join(SHARD, 'knowledge');
const dryRun = process.argv.includes('--dry-run');

if (!existsSync(SRC)) {
  console.error(`Upstream source not found: ${SRC}`);
  console.error('Run: flint source repo add "Impeccable" https://github.com/pbakaus/impeccable.git');
  console.error('Then: flint plan --apply');
  process.exit(1);
}

// --- Groups -----------------------------------------------------------------
// Each group becomes one knowledge file. `files` are paths under skill/.

const GROUPS = [
  {
    slug: 'core',
    title: 'Core Design Logic',
    description:
      'Impeccable core: doctrine, the four visitor modes, the craft floor and absolute bans, routing, and Operate/Read guidance',
    lead:
      'This is the always-read file. Read it before any interface work, and read it fully. The craft floor below is not advice; it is the quality bar and the list of absolute bans.',
    files: ['SKILL.src.md', 'reference/craft-floor.md', 'reference/routing.md', 'reference/operate.md'],
  },
  {
    slug: 'context',
    title: 'Project Context and Design Systems',
    description:
      'Impeccable playbooks for capturing PRODUCT.md and DESIGN.md, planning a surface, and extracting reusable tokens',
    lead:
      'Read this when the task is to capture product truth, document an existing visual world, plan a surface before code, or pull reusable tokens and components into a design system.',
    files: ['reference/init.md', 'reference/document.md', 'reference/shape.md', 'reference/extract.md'],
  },
  {
    slug: 'new_work',
    title: 'New Work and Direction Comps',
    description:
      'Impeccable playbooks for a new surface or a replacement visual world, including direction comps and asset production',
    lead:
      'Read this for a new surface, a redesign, or any request that replaces the visual world. Refinement of an existing surface belongs in the refine file instead.',
    files: ['reference/new-work.md', 'reference/visualize.md'],
  },
  {
    slug: 'review',
    title: 'Critique and Audit',
    description:
      'Impeccable playbooks for design critique with heuristic scoring and for technical audit of accessibility, performance, and responsive behavior',
    lead:
      'Read this to review a surface. Critique judges the design. Audit checks the technical floor. They are separate passes with separate outputs.',
    files: ['reference/critique.md', 'reference/audit.md'],
  },
  {
    slug: 'refine',
    title: 'Refinement',
    description:
      'Impeccable playbooks for improving an existing surface: polish, bolder, quieter, distill, harden, and onboard',
    lead:
      'Read this to improve a surface that already exists. Refinement preserves the incumbent identity, behavior, and copy. A request that replaces the visual world belongs in the new-work file.',
    files: [
      'reference/polish.md',
      'reference/bolder.md',
      'reference/quieter.md',
      'reference/distill.md',
      'reference/harden.md',
      'reference/onboard.md',
    ],
  },
  {
    slug: 'enhance',
    title: 'Enhancement',
    description:
      'Impeccable playbooks for adding motion, color, typography, spacing, personality, and ambitious visual effects',
    lead:
      'Read this to add a specific quality to a surface that is already structurally sound.',
    files: [
      'reference/animate.md',
      'reference/colorize.md',
      'reference/typeset.md',
      'reference/layout.md',
      'reference/delight.md',
      'reference/overdrive.md',
    ],
  },
  {
    slug: 'fix',
    title: 'Repair',
    description:
      'Impeccable playbooks for fixing UX copy, responsive behavior across devices, and interface performance',
    lead: 'Read this when a named defect drives the task.',
    files: ['reference/clarify.md', 'reference/adapt.md', 'reference/optimize.md'],
  },
  {
    slug: 'native',
    title: 'Native Platforms',
    description:
      'Impeccable platform rules for iOS and Android, plus the native variants of adapt and audit',
    lead:
      'Read this when the target platform is iOS, Android, or adaptive. It replaces the web assumptions in the other files.',
    files: [
      'reference/ios.md',
      'reference/android.md',
      'reference/adapt.native.md',
      'reference/audit.native.md',
    ],
  },
  {
    slug: 'subagents',
    title: 'Delegated Roles',
    description:
      'Impeccable sub-agent prompts for asset production, documentation, finish review, and manual edit application',
    lead:
      'Read this before delegating. In an Orbh session, dispatch each role with `flint orbh request` and pass the matching prompt verbatim. Use a harness-native sub-agent tool only when no Orbh dispatch is available.',
    files: [
      'agents/impeccable-asset-producer.md',
      'agents/impeccable-documenter.md',
      'agents/impeccable-finish-reviewer.md',
      'agents/impeccable-manual-edit-applier.md',
    ],
  },
];

// Upstream files that this shard does not port.
const DROPPED = new Set(['craft.md', 'live.md', 'live-setup.md', 'hooks.md', 'doctor.md']);

const COMMANDS =
  'shape, init, document, extract, critique, audit, polish, bolder, quieter, ' +
  'distill, harden, onboard, animate, colorize, typeset, layout, delight, ' +
  'overdrive, clarify, adapt, optimize';

// --- Patches ----------------------------------------------------------------
// Applied to the raw upstream text, before placeholder and link resolution.
// Each entry removes or rewrites a passage that only makes sense with the
// engine binary, which this shard does not ship. A patch that stops matching
// is reported at the end of a run: upstream changed, and the patch needs a
// new anchor.

const PATCHES = {
  'SKILL.src.md': [
    {
      why: 'Setup step 1 assumed the bundled launcher',
      find: /^1\. Run `<skill-base-dir>.*?<!-- rule:skill-setup-context -->$/ms,
      replace:
        '1. Read the project\'s own context first: `PRODUCT.md`, `DESIGN.md`, and any surface brief under `.impeccable/`. Keep the working directory at the target codebase. Do not invent missing context. The deterministic engine is optional in this shard: `npx impeccable context` loads the same files and prints directives, and `npx impeccable detect` runs the anti-pattern detector. Both need Node 22 and one binary download. When you do not run them, say so once and continue. <!-- rule:skill-setup-context -->',
    },
    {
      why: 'Launcher-unavailable note replaced by the shard default',
      find: /^\*\*Launcher unavailable:\*\*.*?$/ms,
      replace:
        '**No engine:** Reading the project context directly is the normal path in this shard, not a failure mode. State once that the detector did not run, then continue through steps 2 and 3. A missing engine never blocks planning or editing.',
    },
    {
      why: 'craft is a deprecated alias with no behavior',
      find: /^\| `craft \[feature\]`.*\n/m,
      replace: '',
    },
    {
      why: 'live mode needs the engine and the browser payload',
      find: /^\| `live`.*\n/m,
      replace: '',
    },
    {
      why: 'pin, hooks, doctor, and drift repair are engine verbs',
      find: /^\*\*Pin \/ Unpin:\*\*[\s\S]*$/m,
      replace:
        '**Not in this shard:** `live` (browser variant mode), `hooks` (the post-edit detector hook), `doctor` (artifact drift repair), `pin`, and the deprecated `craft` alias. Each is the engine plus its own state. When a user asks for one, say it is not part of the shard and offer `npx impeccable <verb>` in the target codebase instead.',
    },
  ],
};

function applyPatches(text, file, misses) {
  const list = PATCHES[file];
  if (!list) return text;
  let out = text;
  for (const patch of list) {
    if (!patch.find.test(out)) {
      misses.push(`${file}: ${patch.why}`);
      continue;
    }
    out = out.replace(patch.find, patch.replace);
  }
  return out;
}

// --- Helpers ----------------------------------------------------------------

const baseName = (p) => p.split('/').pop();
const playbookName = (p) => baseName(p).replace(/\.md$/, '');

// file name -> { group, anchorTitle }
const INDEX = new Map();
for (const g of GROUPS) {
  for (const f of g.files) {
    INDEX.set(baseName(f), { group: g.slug, name: playbookName(f) });
  }
}

function resolvePlaceholders(text) {
  return text
    .replace(/\{\{scripts_path\}\}\/impeccable\.cmd/g, 'npx impeccable')
    .replace(/\{\{scripts_path\}\}\/impeccable/g, 'npx impeccable')
    .replace(/\{\{scripts_path\}\}/g, 'npx impeccable')
    .replace(/\{\{command_prefix\}\}/g, '')
    .replace(
      /\{\{ask_instruction\}\}/g,
      'Ask the operator directly; in a headless Orbh session use `flint orbh approval request` instead.',
    )
    .replace(/\{\{available_commands\}\}/g, COMMANDS)
    .replace(/\{\{config_file\}\}/g, 'AGENTS.md or CLAUDE.md')
    .replace(/\{\{command_hint\}\}/g, COMMANDS)
    .replace(/\{\{model\}\}/g, 'the agent');
}

// Shift every heading so the playbook's own top level becomes `###`.
function normalizeHeadings(text) {
  const levels = [...text.matchAll(/^(#{1,6}) /gm)].map((m) => m[1].length);
  if (levels.length === 0) return text;
  const shift = 3 - Math.min(...levels);
  if (shift === 0) return text;
  return text.replace(/^(#{1,6}) /gm, (_, hashes) => {
    const level = Math.min(6, hashes.length + shift);
    return '#'.repeat(level) + ' ';
  });
}

// Cross-file markdown links become anchors (same group) or wikilinks (other
// group). Links to dropped files become plain prose.
function resolveLinks(text, groupSlug) {
  return text.replace(
    /\[([^\]]+)\]\((?:reference\/)?([a-z][a-z.-]*\.md)(#[^)]*)?\)/g,
    (whole, label, target) => {
      if (DROPPED.has(target)) {
        const stem = target.replace(/\.md$/, '');
        return `${stem} (not part of this shard)`;
      }
      const hit = INDEX.get(target);
      if (!hit) return whole;
      const anchor = `Playbook: ${hit.name}`;
      // A label that is just a filename reads as a path, not as prose.
      const clean = /^(?:reference\/)?[a-z][a-z.-]*\.md$/.test(label)
        ? `the ${hit.name} playbook`
        : label;
      if (hit.group === groupSlug) {
        return `[${clean}](#${anchor.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')})`;
      }
      return `[[dev-knw-imp-${hit.group}#${anchor}]]`;
    },
  );
}

function frontmatter(description) {
  return `---\ndescription: "${description}"\n---\n`;
}

// --- Render -----------------------------------------------------------------

await mkdir(OUT, { recursive: true });
let total = 0;
const patchMisses = [];

for (const g of GROUPS) {
  const parts = [
    frontmatter(g.description),
    '',
    `# Impeccable — ${g.title}`,
    '',
    g.lead,
    '',
    'Source: the Impeccable skill by Paul Bakaus, Apache 2.0, https://github.com/pbakaus/impeccable. Ported verbatim except for placeholder resolution, link resolution, and heading depth. See [[dev-knw-imp-upstream]].',
    '',
  ];

  for (const f of g.files) {
    const raw = await readFile(join(SRC, f), 'utf8');
    // SKILL.src.md carries frontmatter of its own; the body is what we want.
    const body = raw.startsWith('---') ? raw.replace(/^---\n[\s\S]*?\n---\n/, '') : raw;
    let out = applyPatches(body, f.split('/').pop(), patchMisses);
    out = resolvePlaceholders(out);
    out = normalizeHeadings(out);
    out = resolveLinks(out, g.slug);
    parts.push(`## Playbook: ${playbookName(f)}`, '', `*Upstream: \`skill/${f}\`*`, '', out.trim(), '');
  }

  const dest = join(OUT, `dev-knw-imp-${g.slug}.md`);
  const text = parts.join('\n') + '\n';
  if (dryRun) {
    console.log(`would write ${dest} (${(text.length / 1024).toFixed(0)} KB, ${g.files.length} playbooks)`);
  } else {
    await writeFile(dest, text, 'utf8');
    console.log(`wrote ${dest.replace(FLINT_ROOT + '/', '')} — ${(text.length / 1024).toFixed(0)} KB, ${g.files.length} playbooks`);
  }
  total += text.length;
}

// Report any upstream file that neither ported nor dropped.
const known = new Set([...INDEX.keys(), ...DROPPED]);
const { readdir } = await import('node:fs/promises');
const strays = (await readdir(join(SRC, 'reference'))).filter((f) => f.endsWith('.md') && !known.has(f));
if (strays.length) {
  console.log(`\nUpstream files neither ported nor dropped: ${strays.join(', ')}`);
  console.log('Add each one to a group in this script, or to DROPPED with a reason.');
}

if (patchMisses.length) {
  console.log('\nPatches that no longer match upstream:');
  for (const m of patchMisses) console.log(`  ${m}`);
  console.log('Re-anchor each patch against the current upstream text.');
}

console.log(`\n${GROUPS.length} knowledge files, ${(total / 1024).toFixed(0)} KB total.`);

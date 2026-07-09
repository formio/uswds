# @formio/uswds

## Identity

- **Path:** `packages/uswds`. **Published as:** `@formio/uswds` on npm — **OSLv3** (not MIT), `2.8.0`, from `dist` + `lib` (`files: ["dist","lib"]`).
- **OSS sync:** YES — `ossRepo: { repo: github.com/formio/uswds, srcPath: "." }`. The **entire package** ships publicly on release; source comments (and `GOTCHA` markers) are published — keep them opaque.
- **Module system:** ESM-style `import`/`export default`, TypeScript 4.4. **Legacy build tooling:** gulp (EJS precompile + SASS), `tslint`, webpack 5 (`--openssl-legacy-provider`). **Era:** modern TS authoring over legacy tooling; `var`/`function` inside precompiled EJS bodies.
- **Purpose:** A [U.S. Web Design System](https://designsystem.digital.gov/) template family for Form.io — EJS markup plus a few JS component overrides. Opt-in via `Formio.use(uswds)`; `@formio/js` renders through `@formio/bootstrap` by default.

## Floor — immutable musts

- **Markup here is a cross-package contract, not a local choice.** `ref` names, element ids, and aria wiring must stay in parity with `@formio/bootstrap` (bootstrap3/4/5 EJS) and `@formio/standard-template` (JSX); some are hardcoded shared strings (e.g. fieldset legend id `l-<id>-legend`). A markup/aria fix must land in **all** families in the same PR. See [`uswds/markup-parity-contract-03`](../../docs/gotchas/uswds.md#markup-parity-contract-03--uswds-ejs-must-stay-in-lockstep-with-the-bootstrapstandard-template-families-some-shared-markup-is-a-hardcoded-cross-package-string).
- **The template registry's helper keys are read by exact name by the renderer.** `iconClass`, `cssClasses`, `transform`, `size`, `defaultIconset` on `src/templates/uswds/index.ts` are a named-key extension surface — a missing or misnamed key silently no-ops (the FIO-10633 trap). See [`uswds/registry-helper-keys-01`](../../docs/gotchas/uswds.md#registry-helper-keys-01--the-template-registry-carries-renderer-read-helper-keys-by-exact-name-a-missing-or-misnamed-key-silently-no-ops).
- **Override components by subclassing `Components.components.X`, never by mutating its prototype.** `Radio.ts` mutates the shared `@formio/js` base prototype (a global side effect) — do not imitate it; copy `Checkbox.ts`. See [`uswds/component-override-prototype-mutation-02`](../../docs/gotchas/uswds.md#component-override-prototype-mutation-02--uswds-overrides-components-two-different-ways-one-mutates-the-shared-formiojs-base-class-prototype).
- **EJS uses custom delimiters** — `{% %}` evaluate, `{{ }}` interpolate, `{{{ }}}` escape, `ctx` variable. Not standard `<% %>`/`<%= %>`. Match them.
- **Do not assume tests guard your change.** The only spec is a no-op stub; `check-types` is the only real gate. See [`uswds/no-real-tests-build-is-gulp-04`](../../docs/gotchas/uswds.md#no-real-tests-build-is-gulp-04--green-is-only-check-types-tests-are-a-no-op-stub-and-the-build-precompiles-ejs-with-custom-delimiters-via-gulp).
- **OSLv3 + public OSS sync** — no license-gated logic, secrets, or non-public fixtures in `src/`.

## Ceiling — emerging patterns

- **Pattern: a component override subclasses `Components.components.<name>` and registers in `src/components/index.ts`. Example:** [`src/components/checkbox/Checkbox.ts`](./src/components/checkbox/Checkbox.ts) (cleanest) + [`src/components/index.ts`](./src/components/index.ts).
- **Pattern: a template is `<comp>/{form,html}.ejs` + an `index.ts` barrel, aggregated into the registry. Example:** [`src/templates/uswds/fieldset/form.ejs`](./src/templates/uswds/fieldset/form.ejs) + [`src/templates/uswds/index.ts`](./src/templates/uswds/index.ts).
- **Pattern: renderer-read helper keys live on the registry object alongside markup. Example:** [`src/templates/uswds/iconClass.ts`](./src/templates/uswds/iconClass.ts) wired into [`src/templates/uswds/index.ts`](./src/templates/uswds/index.ts) (`iconClass`, `defaultIconset`).

## Blast radius

**3 workspace dependents (medium):** `formmanager`, `pro.formview.io`, `uswds-viewer` — plus external npm consumers and the markup-contract seam (sibling families are not graph dependents). See [`/docs/dependencies/uswds.md`](../../docs/dependencies/uswds.md).

## Test & build

```sh
pnpm -F @formio/uswds check-types   # tsc --noEmit — the ONLY real gate
pnpm -F @formio/uswds build         # gulp (EJS precompile + SASS) + tsc + webpack dev/prod → lib/ + dist/
pnpm -F @formio/uswds test          # runs only a no-op stub spec (no behavioral coverage)
pnpm -F @formio/uswds lint          # tslint
```

"Green" = `check-types` passes. There is no behavioral test coverage; verify markup/behavior changes in a consuming renderer (the two-layer rule). After editing `.ejs` or `.ts`, run `build` or `lib/`/`dist/` stay stale.

## Hot paths & gotchas

See [`/docs/gotchas/uswds.md`](../../docs/gotchas/uswds.md). Current entries: `uswds/registry-helper-keys-01`, `uswds/component-override-prototype-mutation-02`, `uswds/markup-parity-contract-03`, `uswds/no-real-tests-build-is-gulp-04`.

## Cross-cutting triggers

- **Touching any `form.ejs`/`html.ejs` markup, `ref`, id, or aria** → read [`/docs/cross-cutting/template-markup-contract.md`](../../docs/cross-cutting/template-markup-contract.md); mirror the change in `@formio/bootstrap` (bootstrap3/4/5) and `@formio/standard-template` in the same PR, changeset per published package.
- **Adding/renaming a registry helper key** (`iconClass`, `cssClasses`, `transform`, `size`, `defaultIconset`) → confirm the exact name `@formio/js` reads (`grep -rn <key> packages/formio.js/src/components/_classes/component/Component.js`) and wire it into `src/templates/uswds/index.ts`.
- **Adding a component override** → subclass `Components.components.<name>`, register in `src/components/index.ts`; don't mutate the shared prototype.
- **Touching the render `context` shape** → it's supplied by `@formio/js`; coordinate with the Component that builds it.

## References

- Repo-wide: [`/CLAUDE.md`](../../CLAUDE.md), [`/STANDARDS.md`](../../STANDARDS.md)
- Architecture: [`/docs/architecture/uswds.md`](../../docs/architecture/uswds.md)
- Dependencies: [`/docs/dependencies/uswds.md`](../../docs/dependencies/uswds.md)
- Gotchas: [`/docs/gotchas/uswds.md`](../../docs/gotchas/uswds.md)
- The contract: [`/docs/cross-cutting/template-markup-contract.md`](../../docs/cross-cutting/template-markup-contract.md)
- Renderer: [`packages/formio.js/CLAUDE.md`](../formio.js/CLAUDE.md) · Sibling families: [`@formio/bootstrap`](../bootstrap/CLAUDE.md), [`@formio/standard-template`](../standard-template/CLAUDE.md)

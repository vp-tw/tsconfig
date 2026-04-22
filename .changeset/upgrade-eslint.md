---
"@vp-tw/tsconfig": minor
---

Tighten package metadata for `eslint-plugin-package-json@^0.91.1`'s new rules (`require-sideEffects`, `require-files`, `require-exports`):

- Add `sideEffects: false`.
- Add `files: ["base", "CHANGELOG.md", "ext"]` (explicit allowlist; matches prior tarball contents).
- Add `exports` map that re-expresses the subpaths consumers use (`@vp-tw/tsconfig/base/*/tsconfig`[`.json`], `@vp-tw/tsconfig/ext/*/tsconfig`[`.json`], `./package.json`).

Potentially breaking: adding `exports` switches the package from "any file reachable by path is importable" to "only the listed subpaths are importable." The map above covers all documented consumer paths (extendless and `.json`-suffixed forms), but undocumented paths are no longer reachable. No runtime/preset changes.

Dev tooling (not shipped):

- Upgrade `eslint` `^9.39.2` → `^10.2.1`.
- Upgrade `@antfu/eslint-config` `^7.2.0` → `^8.2.0` and `@vp-tw/eslint-config` `^0.2.0` → `^2.0.0`.
- Upgrade `eslint-plugin-mdx` `^3.6.2` → `^3.7.0` and `eslint-plugin-package-json` `^0.88.2` → `^0.91.1`.
- Migrate `.eslintignore` to a flat-config `ignores` block in `eslint.config.ts` (ESLint 10 no longer supports the file); drop the now-unused `@eslint/compat` and `pathe` dependencies.
- Replace the scoped `@types/node@22>undici-types` pnpm override with a top-level `undici-types: ^8.1.0` override per `@vp-tw/eslint-config` v2's `trustPolicy: no-downgrade` guidance.

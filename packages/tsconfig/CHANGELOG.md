# @vp-tw/tsconfig

## 5.0.0

### Major Changes

- bc14fc1: BREAKING CHANGE: Upgrade `@tsconfig/*` bases (Node 22 → Node 24, ES2020 → ES2022)

  - `base/node-lts` now targets Node 24 via `@tsconfig/node-lts@^24.0.0` (was Node 22).
  - `base/vite-react` and `base/vite-emotion` now target ES2022 via `@tsconfig/vite-react@^7.0.2` (was ES2020).
  - Bump `@tsconfig/node-ts` to `^23.6.4` and `@tsconfig/strictest` to `^2.0.8` (non-breaking).

  Dev tooling upgrades (no effect on published presets):

  - Bump `typescript` to `^6.0.3` and `@typescript/native-preview` (tsgo) to `^7.0.0-dev.20260421.2`.
  - Bump `@types/node` to `^25.6.0`, Node.js to `v25.9.0`.
  - Add `pnpm.overrides` for `undici-types` to pass `trustPolicy: no-downgrade`.

## 4.0.0

### Major Changes

- 21c38ea: BREAKING CHANGE: Rename `base/node23` to `base/node24`

  - Migrate tooling: tsc → tsgo, Prettier → oxfmt
  - Add CI check workflow

## 3.2.1

### Patch Changes

- 2b009e3: fix nvmrc

## 3.2.0

### Minor Changes

- 7f25227: chore: update deps

## 3.1.2

### Patch Changes

- 32eb86a: fix publishConfig access

## 3.1.1

### Patch Changes

- a79b1ba: replace lerna with changeset

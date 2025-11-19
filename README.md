# unplugin-starter

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

Starter template for [unplugin](https://github.com/unjs/unplugin).

<!-- Remove Start -->

## Template Usage

To use this template, clone it down using:

```bash
npx degit sxzz/unplugin-starter unplugin-my-plugin
```

And do a global replacement of `unplugin-starter` with your plugin name.

Then you can start developing your unplugin 🔥

To run unit tests, run: `pnpm run test`.
To release a new version, run: `pnpm run release`.

<!-- Remove End -->

## Installation

```bash
npm i -D unplugin-starter
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Starter from 'unplugin-starter/vite'

export default defineConfig({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-starter/rollup'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rolldown / tsdown</summary><br>

```ts
// rolldown.config.ts / tsdown.config.ts
import Starter from 'unplugin-starter/rolldown'

export default {
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
import { build } from 'esbuild'
import Starter from 'unplugin-starter/esbuild'

build({
  plugins: [Starter()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
import Starter from 'unplugin-starter/webpack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js
import Starter from 'unplugin-starter/rspack'

export default {
  /* ... */
  plugins: [Starter()],
}
```

<br></details>

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/unplugin-starter.svg
[npm-version-href]: https://npmjs.com/package/unplugin-starter
[npm-downloads-src]: https://img.shields.io/npm/dm/unplugin-starter
[npm-downloads-href]: https://www.npmcharts.com/compare/unplugin-starter?interval=30
[unit-test-src]: https://github.com/sxzz/unplugin-starter/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/unplugin-starter/actions/workflows/unit-test.yml

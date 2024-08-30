# unplugin-starter [![npm](https://img.shields.io/npm/v/unplugin-starter.svg)](https://npmjs.com/package/unplugin-starter)

[![Unit Test](https://github.com/sxzz/unplugin-starter/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/unplugin-starter/actions/workflows/unit-test.yml)

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
import UnpluginStarter from 'unplugin-starter/vite'

export default defineConfig({
  plugins: [UnpluginStarter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginStarter from 'unplugin-starter/rollup'

export default {
  plugins: [UnpluginStarter()],
}
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import UnpluginStarter from 'unplugin-starter/rolldown'

export default {
  plugins: [UnpluginStarter()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-starter/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-starter/webpack')()],
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

[MIT](./LICENSE) License © 2024-PRESENT [三咲智子](https://github.com/sxzz)

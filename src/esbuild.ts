/**
 * This entry file is for esbuild plugin. Requires esbuild >= 0.15
 *
 * @module
 */

import { Starter } from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 * import UnpluginStarter from 'unplugin-starter/esbuild'
 * 
 * build({ plugins: [UnpluginStarter()] })
```
 */
const esbuild = Starter.esbuild as typeof Starter.esbuild
export default esbuild
export { esbuild as 'module.exports' }

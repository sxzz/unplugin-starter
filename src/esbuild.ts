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
 * // esbuild.config.js
 * import { build } from 'esbuild'
 *
 * build({
 *   plugins: [require('unplugin-starter/esbuild')()],
 * })
 * ```
 */
const esbuild = Starter.esbuild as typeof Starter.esbuild
export default esbuild
export { esbuild as 'module.exports' }

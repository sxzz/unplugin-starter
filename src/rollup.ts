/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import { Starter } from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Starter from 'unplugin-starter/rollup'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
export default Starter.rollup as typeof Starter.rollup

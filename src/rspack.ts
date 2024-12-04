/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { Starter } from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```ts
 * // rspack.config.js
 * module.exports = {
 *  plugins: [require('unplugin-starter/rspack')()],
 * }
 * ```
 */
const rspack = Starter.rspack as typeof Starter.rspack
export default rspack
export { rspack as 'module.exports' }

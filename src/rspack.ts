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
export default Starter.rspack as typeof Starter.rspack

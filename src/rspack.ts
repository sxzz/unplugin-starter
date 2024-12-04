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
 * ```js
 * // rspack.config.js
 * import UnpluginStarter from 'unplugin-starter/rspack'
 *
 * default export {
 *  plugins: [UnpluginStarter()],
 * }
 * ```
 */
const rspack = Starter.rspack as typeof Starter.rspack
export default rspack
export { rspack as 'module.exports' }

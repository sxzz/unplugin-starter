/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

import { Starter } from './index'

/**
 * Webpack plugin
 *
 * @example
 * ```ts
 * // webpack.config.js
 * module.exports = {
 *  plugins: [require('unplugin-starter/webpack')()],
 * }
 * ```
 */
const webpack = Starter.webpack as typeof Starter.webpack
export default webpack
export { webpack as 'module.exports' }

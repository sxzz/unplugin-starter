import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { type Options, resolveOptions } from './core/options'

export default createUnplugin<Options | undefined, false>((rawOptions = {}) => {
  const options = resolveOptions(rawOptions)
  const filter = createFilter(options.include, options.exclude)

  const name = 'unplugin-starter'
  return {
    name,
    enforce: options.enforce,

    transformInclude(id) {
      return filter(id)
    },

    transform(code, id) {
      // eslint-disable-next-line no-console
      console.log(code, id)
      return undefined
    },
  }
})

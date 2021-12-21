import PluginCore from './PluginCore'

const Plugin = {
  install(Vue, options = {}) {
    const modalMethodName = '$mtModal'
    if (Vue.prototype.$mtModal) {
      return
    }

    const plugin = PluginCore(Vue, options)
    Object.defineProperty(Vue.prototype, modalMethodName, {
      get: function () {
        /**
         * The "this" scope is the scope of the component that calls this.$mtModal
         */
        const caller = this
        /**
         * The this.$mtModal can be called only from inside the vue components so this check is not really needed...
         */

        if (caller instanceof Vue) {
          const root = caller.$root
          if (!plugin.context.root) {
            plugin.setDynamicModalContainer(root)
          }
        }

        return plugin
      },
    })
  },
}

export default Plugin

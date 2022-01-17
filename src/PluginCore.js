import ＭodalContainer from '@/components/ＭodalContainer.vue'
import DefaultModal from '@/components/DefaultModal.vue'
import constants from '@/constants'

const PluginCore = (Vue) => {
  const context = {
    root: null,
  }

  const subscription = new Vue()

  const createDivInBody = () => {
    const div = document.createElement('div')
    context.root.$el.appendChild(div)

    return div
  }

  const setDynamicModalContainer = (parent) => {
    context.root = parent
    const element = createDivInBody()
    new Vue({
      parent,
      render: (h) => h(ＭodalContainer),
    }).$mount(element)
  }

  const show = (args) => {
    return new Promise((resolve) => {
      subscription.$emit('show', {
        component: args?.component,
        componentAttrs: args?.componentAttrs,
        overlay: args?.overlay || {
          background: constants.DEFAULT_MODAL_OVERLAY.BACKGROUND,
          transitionName: constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME,
        },
        modal: args?.modal || {
          transitionName: constants.DEFAULT_MODAL.TRANSITION_NAME,
        },
      })
      subscription.$on('closed', (params) => {
        resolve(params)
      })
    })
  }

  const showDefaultModal = (args) => {
    return new Promise((resolve) => {
      subscription.$emit('show', {
        component: DefaultModal,
        componentAttrs: args?.componentAttrs || {
          width: constants.DEFAULT_MODAL.WIDTH,
          maxWidth: constants.DEFAULT_MODAL.MAX_WIDTH,
          height: constants.DEFAULT_MODAL.HEIGHT,
          maxHeight: constants.DEFAULT_MODAL.MAX_HEIGHT,
          themeColor: constants.DEFAULT_MODAL.THEME_COLOR,
          content: constants.DEFAULT_MODAL.content,
          showCancelButton: true,
          cancelButtonText: constants.CANCEL_BUTTON_TEXT,
          submitButtonText: constants.SUBMIT_BUTTON_TEXT,
        },
        overlay: args?.overlay || {
          background: constants.DEFAULT_MODAL_OVERLAY.BACKGROUND,
          transitionName: constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME,
        },
        modal: args?.modal || {
          transitionName: constants.DEFAULT_MODAL.TRANSITION_NAME,
        },
      })

      subscription.$on('closed', (params) => {
        resolve(params)
      })
    })
  }

  return {
    context,
    subscription,
    setDynamicModalContainer,
    show,
    showDefaultModal,
  }
}

export default PluginCore

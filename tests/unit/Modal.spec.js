import { initModal } from './utils'
import Vue from 'vue/dist/vue.js'
import flushPromises from 'flush-promises'
import constants from '../../src/constants'
import { enableAutoDestroy } from '@vue/test-utils'

enableAutoDestroy(afterEach)

describe('$mtModal.showDefaultModal', () => {
  it('Show default modal', async () => {
    const { wrapper } = await initModal()

    wrapper.vm.$mtModal.showDefaultModal()
    await flushPromises()
    expect(wrapper.find('.mt-modal-overlay').exists()).toBe(true)
  })

  it('Overlay default props is work', async () => {
    const { wrapper } = await initModal()
    wrapper.vm.$mtModal.showDefaultModal()
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(
      constants.DEFAULT_MODAL_OVERLAY.BACKGROUND
    )
    expect(modalContainer.overlay.transitionName).toBe(
      constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME
    )
  })

  it('Overlay transitionName props is work', async () => {
    const { wrapper } = await initModal()
    const transitionName = 'testTransitionName'
    wrapper.vm.$mtModal.showDefaultModal({
      overlay: {
        transitionName,
      },
    })
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(
      constants.DEFAULT_MODAL_OVERLAY.BACKGROUND
    )
    expect(modalContainer.overlay.transitionName).toBe(transitionName)
  })

  it('Overlay background props is work', async () => {
    const { wrapper } = await initModal()
    const background = 'rgba(0,0,0,.2421)'
    wrapper.vm.$mtModal.showDefaultModal({
      overlay: {
        background,
      },
    })
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(background)
    expect(modalContainer.overlay.transitionName).toBe(
      constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME
    )
  })

  it('Title props is work', async () => {
    const { wrapper } = await initModal()
    const title = 'something title'
    wrapper.vm.$mtModal.showDefaultModal({
      componentAttrs: {
        title,
      },
    })
    await flushPromises()
    expect(wrapper.find('.mt-modal-default-modal__header').text()).toBe(title)
  })

  it('Content props is work', async () => {
    const { wrapper } = await initModal()
    const content = 'test'
    wrapper.vm.$mtModal.showDefaultModal({
      componentAttrs: {
        content: content,
      },
    })
    await flushPromises()
    expect(wrapper.find('.mt-modal-default-modal__content').text()).toBe(
      content
    )
  })

  it('showCancelButton props is work', async () => {
    const { wrapper } = await initModal()
    const showCancelButton = false
    wrapper.vm.$mtModal.showDefaultModal({
      componentAttrs: {
        showCancelButton,
      },
    })
    await flushPromises()
    expect(
      wrapper.find('.mt-modal-default-modal__button--cancel').exists()
    ).toBe(showCancelButton)
  })

  it('cancelButtonText props is work', async () => {
    const { wrapper } = await initModal()
    const cancelButtonText = 'I am cancel button text'
    wrapper.vm.$mtModal.showDefaultModal({
      componentAttrs: {
        cancelButtonText,
      },
    })
    await flushPromises()
    expect(wrapper.find('.mt-modal-default-modal__button--cancel').text()).toBe(
      cancelButtonText
    )
  })

  it('submitButtonText props is work', async () => {
    const { wrapper } = await initModal()
    const submitButtonText = 'I am submit button text'
    wrapper.vm.$mtModal.showDefaultModal({
      componentAttrs: {
        submitButtonText,
      },
    })
    await flushPromises()
    expect(wrapper.find('.mt-modal-default-modal__button--submit').text()).toBe(
      submitButtonText
    )
  })

  it('Default props (style) is work', async () => {
    const { wrapper } = await initModal()

    const styleString = `
      width: ${constants.DEFAULT_MODAL.WIDTH};
      max-width: ${constants.DEFAULT_MODAL.MAX_WIDTH};
      height: ${constants.DEFAULT_MODAL.HEIGHT};
      max-height: ${constants.DEFAULT_MODAL.MAX_HEIGHT};
      --mt-primary: ${constants.DEFAULT_MODAL.THEME_COLOR};
    `
      .replace(/\r\n|\n/g, '')
      .replace(/\s+/g, '')

    wrapper.vm.$mtModal.showDefaultModal()
    await flushPromises()
    const defaultModal = wrapper.find('.mt-modal-default-modal')
    const style = defaultModal.attributes().style.replace(/\s+/g, '')
    expect(style).toBe(styleString)
  })
})

describe('$mtModal.show', () => {
  it('Render overlay correctly', async () => {
    const { wrapper } = await initModal()
    wrapper.vm.$mtModal.show()
    await flushPromises()
    expect(wrapper.find('.mt-modal-overlay').exists()).toBe(true)
  })

  it('Render custom component correctly', async () => {
    const { wrapper } = await initModal()
    const className = 'unit-test-modal'
    const component = Vue.component(className, {
      template: `<div class="${className}">123</div>`,
    })

    wrapper.vm.$mtModal.show({
      component,
    })
    await flushPromises()
    expect(wrapper.find(`.${className}`).exists()).toBe(true)
  })

  it('Overlay default props is work', async () => {
    const { wrapper } = await initModal()
    const component = Vue.component('test', {
      template: `<div>123</div>`,
    })
    wrapper.vm.$mtModal.show({ component })
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(
      constants.DEFAULT_MODAL_OVERLAY.BACKGROUND
    )
    expect(modalContainer.overlay.transitionName).toBe(
      constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME
    )
  })

  it('Overlay transitionName props is work', async () => {
    const { wrapper } = await initModal()
    const component = Vue.component('test', {
      template: `<div>123</div>`,
    })
    const transitionName = 'testTransitionName'
    wrapper.vm.$mtModal.show({
      component,
      overlay: {
        transitionName,
      },
    })
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(
      constants.DEFAULT_MODAL_OVERLAY.BACKGROUND
    )
    expect(modalContainer.overlay.transitionName).toBe(transitionName)
  })

  it('Overlay background props is work', async () => {
    const { wrapper } = await initModal()
    const component = Vue.component('test', {
      template: `<div>123</div>`,
    })
    const background = 'rgba(0,0,0,.2421)'
    wrapper.vm.$mtModal.show({
      component,
      overlay: {
        background,
      },
    })
    const modalContainer = wrapper.vm.$mtModal.context.root?.__modalContainer
    expect(modalContainer.overlay.background).toBe(background)
    expect(modalContainer.overlay.transitionName).toBe(
      constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME
    )
  })

  it('Receive custom value', async (done) => {
    const { wrapper } = await initModal()
    const className = 'unit-test-modal'
    const component = Vue.component(className, {
      template: `<div class="${className}">123</div>`,
    })

    const result = 'result'
    wrapper.vm.$mtModal
      .show({
        component,
      })
      .then((_result) => {
        expect(_result).toEqual(result)
        done()
      })

    wrapper.vm.$mtModal.subscription.$emit('closed', result)
  })
})

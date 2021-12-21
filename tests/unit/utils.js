import { createLocalVue, mount } from '@vue/test-utils'
import Plugin from '@/Plugin'

export function initModal(
  component = {
    template: `<div>        
  </div>
  `,
  }
) {
  return new Promise((resolve) => {
    const localVue = createLocalVue()
    localVue.use(Plugin)
    const wrapper = mount(component, {
      localVue,
    })
    resolve({ wrapper, localVue, $mtModal: localVue.prototype.$mtModal })
  })
}

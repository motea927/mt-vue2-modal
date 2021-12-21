import { createLocalVue } from '@vue/test-utils'
import Plugin from '@/Plugin'

describe('Modal plugin', () => {
  const localVue = createLocalVue()
  localVue.use(Plugin)

  it('Add a $mtModal method to the Vue prototype', () => {
    expect(localVue.prototype).toHaveProperty('$mtModal')
  })
})

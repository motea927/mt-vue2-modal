---
sidebarDepth: 2
---

# Getting Started

This section will help you to use mt-vue2-modal.

- **Step. 1:** Installation.

```bash
# yarn
yarn add mt-vue2-modal

# npm
npm install --save mt-vue2-modal
```

- **Step. 2:** Global Register plugin

```js
// import MtVue2Modal & Vue.use
import MtVue2Modal from 'mt-vue2-modal'
Vue.use(MtVue2Modal)
```

- **Step. 3:** Use `showDefaultModal` or `show`

```vue
<template>
  <div id="app">
    <button @click="onClickShow">showModal</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
  methods: {
    async onClickShow() {
      const isSubmit = await this.$mtModal.showDefaultModal()
      if (!isSubmit) return
      console.log('You can do anything after click modal submit')
    },
  },
}
</script>
```

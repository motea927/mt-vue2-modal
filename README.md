# MT Vue2 Modal

A promise based, highly customize modal component

## Why use

Suppose your application has many different modal components, if you use [dynamic-component](https://vuejs.org/v2/guide/components-dynamic-async.html), you will find that your business logic is around all of components, that will hard to read and hard maintainable, so use promise based modal component can improve code readability and management.

## Getting Started

### Installation

```bash
# yarn
yarn add mt-vue2-modal

# npm
npm install --save mt-vue2-modal
```

### Global Register plugin

```js
// import MtVue2Modal & Vue.use
import MtVue2Modal from 'mt-vue2-modal'
Vue.use(MtVue2Modal)
```

### Usage

#### Default Modal `showDefaultModal`

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

#### Custom Modal `show`

```vue
<!-- App.vue -->
<template>
  <div id="app">
    <button @click="onClickShow">showModal</button>
  </div>
</template>

<script>
import CustomComponent from './components/CustomComponent.vue'

export default {
  name: 'App',
  components: {},
  mounted() {},
  methods: {
    async onClickShow() {
      const customReturnValue = await this.$mtModal.show({
        component: CustomComponent,
        componentAttrs: {
          customAttrs: 'This is content text',
        },
        overlay: {
          background: 'rgba(0, 0, 0, .8)',
          transitionName: 'mt-modal-overlay-fade',
        },
        modal: {
          transitionName: 'mt-modal-overlay-slide-fade',
        },
      })

      console.log(customReturnValue)
    },
  },
}
</script>
```

```vue
<!-- CustomComponent.vue -->
<template>
  <div class="custom-component">
    {{ customAttrs }}
    <!-- use emit('closed') to close modal and return value-->
    <button @click="$emit('closed', 'custom return value')">close</button>
  </div>
</template>

<script>
export default {
  props: {
    customAttrs: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.custom-component {
  background: white;
  width: 60vw;
  max-width: 600px;
  padding: 20px;
}
</style>
```

## API methods

### `$mtModal.showDefaultModal(options)`

This is default modal method, we recommend to use custom modal to customize your need.

The API methods accepts these options:

`componentAttrs`: Set default modal style (width, height, color, etc.) and content
| Attribute | Type | Default | Description |
| :-------- | :----: | :-----: | :------------------------------- |
| width | String | 80vw | Set default modal style width |
| maxWidth | String | 600px | Set default modal style maxWidth |
| height | String | 60vh | Set default modal style height |
| maxHeight | String | 300px | Set default modal style maxHeight |
| themeColor | String | #ffdf5e | Set default modal theme color |
| title | String | title | Set default modal title |
| content | String | Lorem | Default modal content |
| showCancelButton | Boolean | true | show cancel button |
| cancelButtonText | String | cancel | cancel button text |
| submitButtonText | String | submit | button text |

`overlay`: Set default modal overlay (background, transition)
| Attribute | Type | Default | Description |
| :-------- | :----: | :-----: | :------------------------------- |
| background | String | rgba(0, 0, 0, .8) | Set default modal style background |
| transitionName | String | mt-modal-overlay-fade | Set default modal transition name|

`modal`: Set default modal body
| Attribute | Type | Default | Description |
| :-------- | :----: | :-----: | :------------------------------- |
| transitionName | String | mt-modal-overlay-slide-fade | Set default modal body transition name |

```js
await this.$mtModal.showDefaultModal({
  componentAttrs: {
    width: '80vw',
    maxWidth: '600px',
    height: '60vh',
    maxHeight: '300px',
    themeColor: '#ffdf5e',
  },
  overlay: {
    background: 'rgba(0, 0, 0, .8)',
    transitionName: 'mt-modal-overlay-fade',
  },
  modal: {
    transitionName: 'mt-modal-overlay-slide-fade',
  },
})
```

### `$mtModal.show(options)`

This is custom modal method, use custom component and props to customize modal.

The API methods accepts these options:
| Attribute | Type | Default | Description |
| :-------- | :----: | :-----: | :------------------------------- |
| component(required) | Vue component | null | Pass custom component |
| componentAttrs | Object | {} | Custom Props |
| overlay | Object | { background: 'rgba(0, 0, 0, .8)', transitionName: 'mt-modal-overlay-fade' } | Custom Overlay
| modal | Object | { transitionName: 'mt-modal-overlay-slide-fade' } | Custom modal transition

## Online Demo

We use `codesandbox.io` to show you how to use mt-vue2-modal

- [`showDefaultModal`](https://codesandbox.io/s/mt-vue2-modal-show-default-modal-050lu): Use default modal to show simple text
- [`show`](https://codesandbox.io/s/mt-vue2-modal-show-3lcxu): Use custom component to show highly customize content and logic

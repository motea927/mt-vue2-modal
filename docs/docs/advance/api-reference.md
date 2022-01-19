---
sidebarDepth: 2
---

# API Reference

## `$mtModal.showDefaultModal(options)`

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

example:

```js
await this.$mtModal.showDefaultModal({
  componentAttrs: {
    width: '80vw',
    maxWidth: '600px',
    height: '60vh',
    maxHeight: '300px',
    themeColor: '#ffdf5e',
    content: 'content',
    showCancelButton: true,
    cancelButtonText: 'cancel',
    submitButtonText: 'submit',
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

## `$mtModal.show(options)`

This is custom modal method, use custom component and props to customize modal.

The API methods accepts these options:
| Attribute | Type | Default | Description |
| :-------- | :----: | :-----: | :------------------------------- |
| component(required) | Vue component | null | Pass custom component |
| componentAttrs | Object | {} | Custom Props |
| overlay | Object | `{ background: 'rgba(0, 0, 0, .8)', transitionName: 'mt-modal-overlay-fade' }` | Custom Overlay |
| modal | Object | `{ transitionName: 'mt-modal-overlay-slide-fade' }` | Custom modal transition

example:

```vue
<script>
import customModal from './customModal.vue'

export default {
  async created() {
    const value = await this.$mtModal.show({
      component: customModal,
      componentAttrs: {
        text: 'something',
      },
      overlay: {
        background: 'rgba(0, 0, 0, .8)',
        transitionName: 'mt-modal-overlay-fade',
      },
      modal: {
        transitionName: 'mt-modal-overlay-slide-fade',
      },
    })

    console.log(value)
  },
}
</script>
```

customModal.vue:

```vue
<template>
  <button @click="$emit('closed', 'return value')">click</button>
</template>
```

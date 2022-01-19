---
sidebarDepth: 2
---

# mt-vue2-modal

mt-vue2-modal is a promise based, highly customize modal component for vue2.

## Motivation

Suppose your application has many different modal components, if you use [dynamic-component](https://vuejs.org/v2/guide/components-dynamic-async.html), you will find that your business logic is around all of components, that will hard to read and hard maintainable, so use promise based modal component can improve code readability and management.

### dynamic-component

If you use [dynamic-component](https://vuejs.org/v2/guide/components-dynamic-async.html), your code will like below.

Suppose your logic in onClickButton, when you do this.updateCurrentModal, your logic will end and jump to `SelectModal`

```vue
<template>
  <button @click="onClickButton">do something</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ..mapActions('Modal', ['updateCurrentModal']),
    onClickButton() {
      // do something, validation, etc.
      // Maybe you need others code to pass some parameters to vuex for modal before show SelectModal
      this.updateCurrentModal('SelectModal')
    },
  },
}
</script>
```

This is all modal entry.

```vue
<!-- Modal Entry -->
<template>
  <div>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SelectModal from './SelectModal'
// Import others modal
// ...

export default {
  components: {
    SelectModal,
    // others modal
  },
  computed: {
    ...mapState('Modal', ['currentTabComponent']),
  },
}
</script>
```

Your business logic will continue on here

```vue
<!-- SelectModal -->
<template>
  <button v-for="i in 10" @click="onClickSelectItem">
    {{ i }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('Modal', ['updateCurrentModal']),
    onClickSelectItem() {
      // Do something, validation, etc.
      this.updateCurrentModal('')
      // Your business logic will continue on here
    },
  },
}
</script>
```

Above example is one modal, if your have much modal components, that will hard to read and hard maintainable

### Use mt-vue2-modal

Let us show you use mt-vue2-modal to make the code clean and easy to read.

```vue
<template>
  <button @click="onClickButton">do something</button>
</template>

<script>
import { mapActions } from 'vuex'

import SelectModal from './SelectModal'

export default {
  methods: {
    ..mapActions('Modal', ['updateCurrentModal']),
    async onClickButton() {
      // Do something, validation, etc.
      const selectIndex = await this.$mtModal.show({
        component: SelectModal,
      })
      if (!selectIndex) return

      // Continue your business logic
    },
  },
}
</script>
```

```vue
<!-- SelectModal -->
<template>
  <button v-for="i in 10" @click="onClickSelectItem(i)">
    {{ i }}
  </button>
</template>

<script>
export default {
  methods: {
    onClickSelectItem(selectIndex) {
      // Do something, validation, etc.
      this.$emit('closed', selectIndex)
    },
  },
}
</script>
```

We can see that business logic on onClickButton.

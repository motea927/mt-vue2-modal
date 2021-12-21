<template>
  <div class="test-modal">
    {{ text }}
    <button @click="$emit('closed', 'gg')">close</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.test-modal {
  width: 50%;
  height: 50%;
  background: #fff;
}
</style>

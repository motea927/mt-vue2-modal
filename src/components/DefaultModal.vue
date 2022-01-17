<template>
  <div
    class="mt-modal-default-modal"
    :style="{
      width,
      maxWidth,
      height,
      maxHeight,
      '--mt-primary': themeColor,
    }"
  >
    <header class="mt-modal-default-modal__header">title</header>
    <button
      @click="$emit('closed')"
      class="mt-modal-default-modal__close-button"
    >
      ×
    </button>
    <div class="mt-modal-default-modal__content">
      {{ content }}
    </div>
    <footer class="mt-modal-default-modal__footer">
      <button
        v-if="showCancelButton"
        @click="$emit('closed')"
        class="mt-modal-default-modal__button mt-modal-default-modal__button--cancel"
      >
        {{ cancelButtonText }}
      </button>
      <button
        @click="$emit('closed', true)"
        class="mt-modal-default-modal__button mt-modal-default-modal__button--submit"
      >
        {{ submitButtonText }}
      </button>
    </footer>
  </div>
</template>

<script>
import constants from '@/constants'

export default {
  props: {
    width: {
      type: String,
      default: constants.DEFAULT_MODAL.WIDTH,
    },
    maxWidth: {
      type: String,
      default: constants.DEFAULT_MODAL.MAX_WIDTH,
    },
    height: { type: String, default: constants.DEFAULT_MODAL.HEIGHT },
    maxHeight: {
      type: String,
      default: constants.DEFAULT_MODAL.MAX_HEIGHT,
    },
    themeColor: {
      type: String,
      default: constants.DEFAULT_MODAL.THEME_COLOR,
    },
    content: {
      type: String,
      default: constants.DEFAULT_MODAL.CONTENT,
    },
    showCancelButton: {
      type: Boolean,
      default: true,
    },
    cancelButtonText: {
      type: String,
      default: constants.DEFAULT_MODAL.CANCEL_BUTTON_TEXT,
    },
    submitButtonText: {
      type: String,
      default: constants.DEFAULT_MODAL.SUBMIT_BUTTON_TEXT,
    },
  },
}
</script>

<style lang="scss">
.mt-modal-default-modal {
  background-color: white;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;

  &__header {
    background: var(--mt-primary);
  }

  &__header,
  &__footer {
    padding: 4px;
    font-size: 28px;
    flex-shrink: 0;
  }

  &__button {
    border: none;
    background: none;
    padding: 8px;
    border: none;
    margin: 16px;
  }

  &__button,
  &__close-button {
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s linear;
  }

  &__button:hover,
  &__close-button:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &__button--submit {
    background: var(--mt-primary);
  }

  &__button--cancel {
    background: #eee;
  }

  &__close-button {
    border: none;
    position: absolute;
    right: 4px;
    top: 4px;
  }

  &__content {
    margin: auto;
    overflow-y: auto;
    padding: 16px;
  }
}
</style>

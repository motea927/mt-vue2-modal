<template>
  <transition :name="overlay.transitionName">
    <div
      v-if="showOverlay"
      class="mt-modal-overlay"
      :style="{ background: overlay.background }"
    >
      <transition :name="modal.transitionName" mode="out-in">
        <component
          :is="component"
          v-bind="componentAttrs"
          @closed="closed"
        ></component>
      </transition>
    </div>
  </transition>
</template>

<script>
import constants from '@/constants'

export default {
  data: () => {
    return {
      showOverlay: false,
      overlay: {
        background: constants.DEFAULT_MODAL_OVERLAY.BACKGROUND,
        transitionName: constants.DEFAULT_MODAL_OVERLAY.TRANSITION_NAME,
      },
      modal: {
        transitionName: constants.DEFAULT_MODAL.TRANSITION_NAME,
      },
      component: null,
      componentAttrs: {},
    }
  },
  created() {
    /**
     * Register ModalContainer so that it was availiable inside the plugin
     */
    this.$root.__modalContainer = this
  },
  mounted() {
    this.$mtModal.subscription.$on('show', async (args) => {
      this.overlay = { ...this.overlay, ...args.overlay }
      this.modal = { ...this.modal, ...args.modal }
      this.showOverlay = true
      await this.$nextTick()
      this.component = args.component
      this.componentAttrs = args.componentAttrs
      window.document.body.style.overflowY = 'hidden'
    })
  },
  methods: {
    async closed(params) {
      this.component = null
      await this.$nextTick()
      this.showOverlay = false
      this.$mtModal.subscription.$emit('closed', params)
      window.document.body.style.overflowY = 'auto'
    },
  },
}
</script>

<style lang="scss">
.mt-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-fade-enter-active,
  &-fade-leave-active {
    transition: opacity 0.5s;
  }
  &-fade-enter, &-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  &-slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  &-slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-slide-fade-enter, &-slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>

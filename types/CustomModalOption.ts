import Vue, { ComponentOptions, AsyncComponent } from 'vue'

export default interface CustomModalOption {
  component: typeof Vue | ComponentOptions<Vue> | AsyncComponent
  componentAttrs?: object
  overlay?: {
    background?: string
    transitionName?: string
  }
  modal?: {
    transitionName?: string
  }
}

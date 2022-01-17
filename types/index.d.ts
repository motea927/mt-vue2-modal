import Vue, { PluginObject } from 'vue'
import DefaultModalOption from './DefaultModalOption'
import CustomModalOption from './CustomModalOption'

export declare interface ModalOptions {}

declare const modalPlugin: PluginObject<ModalOptions>

declare interface Modal {
  showDefaultModal(option: DefaultModalOption): Promise<any>
  show(option: CustomModalOption): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $mtModal: Modal
  }
}

export default modalPlugin

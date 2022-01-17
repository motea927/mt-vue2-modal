declare interface ComponentAttrs {
  width?: string
  maxWidth?: string
  height?: string
  maxHeight?: string
  themeColor?: string
  content?: string
  showCancelButton?: boolean
  cancelButtonText?: string
  submitButtonText?: string
}

declare interface Overlay {
  background?: string
  transitionName?: string
}

declare interface Modal {
  transitionName: string
}

export default interface DefaultModalOption {
  componentAttrs?: ComponentAttrs
  overlay?: Overlay
  modal?: Modal
}

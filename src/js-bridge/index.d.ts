interface WxSahre {
  scene?: number
  title?: string
  description?: string
  thumbBase64?: string
  url?: string
}
interface jsBridge {
  getBaseInfo()
  dia(mobile: string)
  wxShare(params: WxSahre)
}
declare const jsBridge: jsBridge
export default jsBridge

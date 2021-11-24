const BROWSER = {
  iOS: navigator.userAgent.match(/Mac OS/),
  Android: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
}

//Android 安卓没有走第三方库
function createCallback(fnName, resolve) {
  window[fnName] = function (res) {
    const jsonRes = JSON.parse(res)
    resolve(jsonRes.data)
  }
  return fnName
}

//IOS
// iOS(1.1w+ Star): https://github.com/marcuswestin/WebViewJavascriptBridge
// Android(6k+ Star): https://github.com/lzyzsd/JsBridge
// 如果app的同学使用了上面说的库，安卓和iOS会在WebView中的window下注入一个WebViewJavascriptBridge的对象，iOS有可能是注入WVJBCallbacks的数组，也有可能需要通过iframe来注入
// 这个函数是客户端库中js调用的兼容库，是官方提供的
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  const WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

function getBaseInfo() {
  return new Promise((resolve) => {
    if (BROWSER.Android) {
      skioBridge.nativeAppInfo(createCallback('skio_appInfo', resolve))
    } else {
      setupWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler('nativeAppInfo', (res) => {
          const jsonRes = JSON.parse(res)
          resolve(jsonRes.data)
        })
      })
    }
  })
}

function dial(mobile) {
  if (BROWSER.Android) {
    skioBridge.nativeDial(mobile)
  } else {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('nativeDial', { phoneNumber: mobile })
    })
  }
}

function wxShare(params) {
  const { scene, title, description, thumbBase64, url } = params
  return new Promise((resolve) => {
    if (BROWSER.Android) {
      skioBridge.nativeShareUrlByWechat(
        scene,
        title,
        description,
        thumbBase64,
        url,
        createCallback('skio_wxShare', resolve)
      )
    } else {
      setupWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler(
          'nativeShareUrlByWechat',
          {
            scene: scene,
            title: title,
            description: description,
            thumbBase64: thumbBase64,
            url: url,
          },
          (res) => {
            const jsonRes = JSON.parse(res)
            resolve(jsonRes.data)
          }
        )
      })
    }
  })
}

export default {
  getBaseInfo,
  dial,
  wxShare
}

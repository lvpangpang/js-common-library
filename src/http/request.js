import { isFun } from '../data-type'

function handleParams(params) {
  const list = []
  Object.keys(params || {}).forEach((key) => {
    const val = params[key]
    if (val === '' || val === null || val === undefined) {
      return
    }
    list.push(`${key}=${encodeURIComponent(val)}`)
  })
  return list.join('&')
}

function request(http) {
  http.interceptors.request.use(
    (config) => {
      const glocalConfig = http.prototype.glocalConfig || {}
      const { headers } = glocalConfig
      const resultConfig = { ...glocalConfig, ...config }
      resultConfig.headers = headers // 注意这里，直接赋值headers
      const { method, transformRequest } = resultConfig

      if (method === 'get') {
        resultConfig.paramsSerializer = function (params) {
          return handleParams(params)
        }
      }

      if (isFun(transformRequest)) {
        resultConfig.transformRequest = function (data) {
          return transformRequest(data)
        }
      }

      return resultConfig
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export default request

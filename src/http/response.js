import { isFun } from '../data-type'

function response(http) {
  http.interceptors.response.use(
    (res) => {
      const { data, config } = res
      const { transformResult } = config
      let result = data
      if (isFun(transformResult)) {
        result = transformResult(data)
      }
      return result
    },
    (err) => {
      const { config } = err
      const { error } = config || {}
      const message = err.message
      if (isFun(error)) {
        error(err)
      } else {
        console.error(message)
      }
      return Promise.reject(err)
    }
  )
}

export default response

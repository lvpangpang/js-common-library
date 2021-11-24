# Http

## 用例

```javascript
import React, { useEffect } from 'react'
import { http } from 'js-common-library'
http.defaults.timeout = 300;
http.setConfig({
  baseURL: 'https://qa01web-gateway.lingxichuxing.com',
  headers: {
    contextId: 'pms',
    'skio-token':
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJib3NzX2F1dGhfaXNzdWVyIiwiY29udGV4dElkIjoicG1zIiwiZXhwIjoxNjM0MTM4ODQxLCJ1c2VySWQiOjY1fQ.upPeT0OknNQe2L1Hi136lHwSfgFtMSRwWQMhPKlY5',
  },
  transformResult(result) {
    const { code, data, msg } = result || {}
    // 正常业务数据
    if (code === 200) {
      return data
    }
    // 非正常业务情况提示错误msg
    // alert(msg)
    // 暴露出错误信息，有些特殊业务场景需要判断不同的错误码做对应的处理
    return Promise.reject(result)
  },
  error(e) {
    console.log(e.message)
    console.log('错误：' + e)
  },
})

export default () => {
  useEffect(() => {
    http
      .get('/saas/v1/basic/dataTypes', {
        // baseURL: 'https://www.baidu.com',
        params: {
          name: '吕肥肥',
          age: 18,
        },
      })
      .then((data) => {
        console.log('业务方接受到的数据：', data)
      })
      .catch((err) => {
        console.log('业务方接受到的错误', err)
      })
    http
      .post(
        '/saas/v1/basic/dataTypes',
        {
          name: '吕肥肥',
          age: 18,
        },
        {
          exId: '123',
        }
      )
      .then((data) => {
        console.log('业务方接受到的数据：', data)
      })
      .catch((err) => {
        console.log('业务方接受到的错误', err)
      })
  }, [])
  return (
    <div>
      <p>http配置实例</p>
      <p>请查看源代码以及控制台输出</p>
    </div>
  )
}
```

<!-- ```jsx
import axios from 'axios'
import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    axios
      .get('https://qa01web-gateway.lingxichuxing.com/saas/v1/basic/dataTypes', {
        params: {
          name: '',
          age: 9,
        },
      })
      .then((data) => {
        console.log('业务方接受到的数据：', data.data)
        const result = data.data
        const { code, msg } = result
        if (code === 200) {
          return result.data
        }
        // alert(msg)
        return Promise.reject(result)
      })
      .catch((err) => {
        console.log('业务方接受到的错误', err)
      })
  }, [])
  return <div>http</div>
}
``` -->

<!-- ```jsx
import axios from 'axios'
import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    function ajax() {
      return new Promise((resolve, reject) => {
        axios
        .get('https://qa01web-gateway.lingxichuxing.com/saas/v1/basic/dataTypes', {
          params: {
            name: '',
            age: 9,
          },
        })
        .then((data) => {
          console.log('数据1：', data.data)
          const result = data.data
          const { code, msg } = result
          if (code !== 200) {
            return resolve(result)
          }
          // alert(msg)
          return Promise.reject(result) // 这样会进入错误1 Promise.reject()方法返回一个带有拒绝原因的Promise对象。
          return reject(result) // 这样会进入业务代码的错误处理
        })
        .catch((err) => {
          console.log('错误1', err)
        })
      })
    }
    ajax().then((data) => {
      console.log('正确', data)
    }).catch((err) => {
      console.log('错误', err)
    })
  }, [])
  return <div>ajax</div>
}
``` -->

<!-- ```jsx
import axios from 'axios'
import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    function ajax() {
      return new Promise((resolve, reject) => {
        resolve(1)
        console.log('我是resolve后面的吕肥肥')
        reject(2)
        console.log('我是reject后面')
      })
    }
    ajax().then((data) => {
      console.log('正确', data)
    }).catch((err) => {
      console.log('错误', err)
    })
  }, [])
  return <div>promise</div>
}
``` -->

# Data-Type

## 用例

```javascript
import React from 'react'
import { isObj, isEmptyObj, isNum, isStr, isBool, isArr, isFun, isPromise } from 'js-common-library'

export default () => {
  return <div>
    <p>{isObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>
    <p>{isEmptyObj({ name: 'btc' }) ? '验证成功' : '验证失败'}</p>
    <p>{isStr('btc') ? '验证成功' : '验证失败'}</p>
    <p>{isBool(true) ? '验证成功' : '验证失败'}</p>
    <p>{isArr([1, 2, 3]) ? '验证成功' : '验证失败'}</p>
    <p>{isFun(function () {}) ? '验证成功' : '验证失败'}</p>
    <p>{isPromise(Promise.resolve()) ? '验证成功' : '验证失败'}</p>
  </div>
}
```

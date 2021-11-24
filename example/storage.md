# Storage

## 用例

```javascript
import React from 'react'
import { setStorage, getStorage, removeStorage, clearStorage } from 'js-common-library'

export default () => {
  return (
    <div>
      输出见控制台
      <p>{setStorage('name', '吕肥肥')}</p>
      <p>{setStorage('info', { name: '吕肥肥', age: 8, sex: '男' })}</p>
      <p>{setStorage('arr', [1,2,3])}</p>
      <p>{console.log(getStorage('name'))}</p>
      <p>{console.log(getStorage('info'))}</p>
      <p>{console.log(getStorage('arr'))}</p>
      <p>{console.log(removeStorage('arr'))}</p>
      <p>{console.log(clearStorage())}</p>
    </div>
  )
}
```

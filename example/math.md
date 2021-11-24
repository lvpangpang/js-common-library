# Math

## 用例

```javascript
import React from 'react'
import { getRandomInt, getRandomNum, getRandomStr } from 'js-common-library'

export default () => {
  return (
    <div>
      <p>{console.log(getRandomInt(1, 100))}</p>
      <p>{console.log(getRandomNum(1, 100))}</p>
      <p>{console.log(getRandomStr())}</p>
    </div>
  )
}
```

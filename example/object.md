# Object

## 用例

```javascript
import React from 'react'
import { omitValues } from 'js-common-library'

export default () => {
  console.log(
    omitValues({
      name: '吕肥肥',
      age: undefined,
      sex: '',
      you: null,
    })
  )
  return <div>object</div>
}
```

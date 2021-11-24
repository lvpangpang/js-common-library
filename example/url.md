# Url

## 用例

```javascript
import React from 'react'
import { getQueryToObj, getQueryByName, getUrlLast } from 'js-common-library'

export default () => {
  return (
    <div>
      <p>{console.log(getQueryToObj())}</p>
      <p>{console.log(getQueryByName('name'))}</p>
      <p>{console.log(getUrlLast())}</p>
    </div>
  )
}
```

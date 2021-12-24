# Object

过滤对象（数组）中的指定值（默认指定值为 null， '', undefined）

## API

| 方法       | 说明                                                            | 参数   |
| ---------- | --------------------------------------------------------------- | ------ |
| omitValues | 过滤对象（数组）中的指定值（默认指定值为 null， '', undefined） | Object |

## DEMOS

```js
import React from "react";
import { omitValues } from "js-common-library";

export default () => {
  console.log(
    omitValues({
      name: "吕肥肥",
      age: undefined,
      sex: "",
      you: null,
    })
  );
  console.log(omitValues([null, "", "吕肥肥"]));
  return <div>object</div>;
};
```

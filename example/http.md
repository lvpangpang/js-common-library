# Http

基于 axios 二次封装的请求，提供 setConfig 函数全局配置

## API

| 方法      | 说明                |
| --------- | ------------------- |
| setConfig | 设置 axios 全局配置, 具体参考axios配置 |
| setConfig.transformResult | 请求返回结果的全局处理函数 |
| setConfig.error | 请求返回错误的全局处理函数 |

其他方法请参考 axios 官网

## DEMOS

```js
import React, { useEffect } from "react";
import { http } from "js-common-library";

http.setConfig({
  timeout: 500,
  baseURL: "https://qa01web-gateway.lingxichuxing.com",
  headers: {
    sourceId: "abc",
    Token: "123",
  },
  transformResult(result) {
    const { code, data, msg } = result.data || {};
    if (code === 200) {
      return data;
    }
    return Promise.reject(result);
  },
  error(e) {
    console.log("错误：" + e);
  },
});

export default () => {
  useEffect(() => {
    // get请求实例
    http
      .get("/saas/v1/basic/dataTypes", {
        headers: {
          name: 123,
        },
        params: {
          name: "吕肥肥",
          age: '',
          text: null,
        },
        timeout: 1000, // 请求单独配置超时时间
      })
      .then((data) => {
        console.log("业务方接受到的数据：", data);
      })
      .catch((err) => {
        console.log("业务方接受到的错误", err);
      });

    // post请求实例
    http
      .post(
        "/saas/v1/basic/dataTypes",
        {
          name: "吕肥肥",
          age: 18,
        },
        {
          headers: {
            abc: 22,
          },
          exId: "123",
          timeout: 2000, // 请求单独配置超时时间
        }
      )
      .then((data) => {
        console.log("业务方接受到的数据：", data);
      })
      .catch((err) => {
        console.log("业务方接受到的错误", err);
      });
  }, []);
  return (
    <div>
      <p>http配置实例</p>
    </div>
  );
};
```

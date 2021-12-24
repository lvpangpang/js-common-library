// 去掉get请求中的null, '', undefined
function handleParams(params) {
  const list = [];
  Object.keys(params || {}).forEach((key) => {
    const val = params[key];
    if (val === "" || val === null || val === undefined) {
      return;
    }
    list.push(`${key}=${encodeURIComponent(val)}`);
  });
  return list.join("&");
}

function request(http) {
  http.interceptors.request.use(
    (config) => {
      // console.log(config); // 单个请求的配置
      const glocalConfig = http.prototype.glocalConfig || {};
      const glocalHeaders = glocalConfig.headers || {};
      const { headers } = config;
      const resultConfig = { ...glocalConfig, ...config }; // 单个请求的配置覆盖全局的请求配置
      resultConfig.headers = { ...headers, ...glocalHeaders }; // 全局配置的header覆盖单个请求的headers(这个比较特殊)
      resultConfig.paramsSerializer = handleParams; // get请求参数格式化
      return resultConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default request;

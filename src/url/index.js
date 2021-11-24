/**
 * url转成url对象
 */
export function getQueryToObj() {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  const result = {}
  if(!query) {
    return {}
  }
  for (var i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    result[pair[0]] = decodeURIComponent(pair[1])
  }
  return result
}

/**
 * 获取url中某个参数值
 * name: 参数名
 */
export function getQueryByName(name) {
  return getQueryToObj()[name]
}

/**
 * 获取url中最后一个路径
 */
export function getUrlLast() {
  const href = window.location.pathname
  const arr = href.split('/')
  return arr[arr.length - 1]
}

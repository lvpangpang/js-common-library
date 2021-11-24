export function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isEmptyObj(obj) {
  for (var x in obj) {
    return false
  }
  return true
}

export function isNum(num) {
  return typeof num === 'number'
}

export function isStr(str) {
  return typeof str === 'string'
}

export function isBool(obj) {
  return typeof obj === 'boolean'
}

export function isArr(obj) {
  return Array.isArray(obj)
}

export function isFun(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export function isPromise(obj) {
  return (isObj(obj) || isFun(obj)) && isFun(obj.then)
}

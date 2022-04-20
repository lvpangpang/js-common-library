export function isObj(obj:any): boolean {
  return typeof obj === 'object' && obj !== null && !isArr(obj)
}

export function isEmptyObj(obj: any): boolean {
  for (var x in obj) {
    return false;
  }
  return true;
}

export function isNum(num:any): boolean {
  return typeof num === "number";
}

export function isStr(str:any): boolean {
  return typeof str === "string";
}

export function isBool(obj: any): boolean {
  return typeof obj === "boolean";
}

export function isArr(obj: any): boolean {
  return Array.isArray(obj);
}

export function isFun(obj: any): boolean {
  return Object.prototype.toString.call(obj) === "[object Function]";
}

export function isPromise(obj: any): boolean {
  return (isObj(obj) || isFun(obj)) && isFun(obj.then);
}

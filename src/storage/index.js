import { isStr } from '../data-type'
export function setStorage(name, value, type = 'localStorage') {
  if (!isStr(name)) {
    return
  }
  const storage = window[type]
  try {
    value = isStr(value) ? value : JSON.stringify(value)
    storage.setItem(name, value)
  } catch (e) {
    return e
  }
}

export function getStorage(name, type = 'localStorage') {
  if (!isStr(name)) {
    return undefined
  }
  const storage = window[type]
  try {
    let data = storage.getItem(name)
    return JSON.parse(data)
  } catch (e) {
    return storage.getItem(name) || null
  }
}

export function removeStorage(name, type = 'localStorage') {
  if (!isStr(name)) {
    return undefined
  }
  const storage = window[type]
  storage.removeItem(name)
}

export function clearStorage(type = 'localStorage') {
  const storage = window[type]
  storage.clear()
}

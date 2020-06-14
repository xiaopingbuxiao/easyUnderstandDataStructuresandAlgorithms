import { defaultToString } from '../utils'
import { ValuePair } from './models/value-pair'

/**
 * 字典表的实现
 * 由于js的对象中 只能 使用字符串作为key 因此需要一个函数将传入key变成字符串，
 * 如果传入的是一个对象作为key，则需要对对象定义一个tostring方法，否则回变成[object Object]
 * 
 */

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn      //
    this.table = Object.create(null)
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove(key) {
    if (this.table[key]) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  keyValues() {
    // const valuePairs = []
    // for (const k in this.table) {
    //   if (this.hasKey(k)) {
    //     valuePairs.push(this.table[k])
    //   }
    // }
    // return valuePairs
    return Object.values(this.table)
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value) // 如果回调函数返回了false 则中断遍历
      if (result == false) {
        break
      }
    }
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.table = Object.create(null)
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    console.log(valuePairs)
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString
  }
}







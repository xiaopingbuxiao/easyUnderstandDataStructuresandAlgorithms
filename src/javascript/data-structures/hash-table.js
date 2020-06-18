






/**
 * 散列算法的作用是尽可能快地在数据结构中找到一个值。散列函数的作用是给定一个键值，然后 返回值在表中的地址。
 * 
 * JavaScript 语言内部就是使用散列表来表示每个对象。此时，对象的每个 属性和方法(成员)被存储为 key 对象类型，每个 key 指向对应的对象成员。
 */

/**
 *  重要 ！！！！！ 重要！！！！！ 要！！！！！！
 * 
 * HashTable 和 Dictionary 类很相似。不同之处在于在 Dictionary 类中，我 们将 valuePair 保存在 table 的 key 属性中(在它被转化为字符串之后)，
 * 而 在 HashTable 类中，我们由 key(hash)生成一个数，并将 valuePair 保存 在 hash 位置(或属性)。
 * 
 */




import { defaultToString } from "../utils";
import { ValuePair } from "./models/value-pair";

export class HashTable {

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = Object.create(null)
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) { //计算字符串的ASCII码之和
      hash += tableKey.charCodeAt(i)
    }
    // 为了得到比较小的数值，我们会使用 hash 值 和一个任意数做除法的余数 这可以规避操作数超过数值变量最大表示范围的 风险。 
    return hash % 37  // 此时的处理会存在一个致命的问题  就是最多只能存储37个  因为取余的操作 会导致出现及时字符串不同 但最终的hash相同
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  getTable() {
    return this.table
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return Object.keys(this.table).length
  }
  clear() {
    this.table = Object.create(null)
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }

}







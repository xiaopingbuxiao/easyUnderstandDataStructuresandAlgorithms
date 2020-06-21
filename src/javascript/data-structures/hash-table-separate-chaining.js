import { defaultToString } from '../utils'
import { LinkedList } from './linked-list'
import valuePair, { ValuePair } from './models/value-pair'
import { HighlightSpanKind } from 'typescript'

/**
 * 使用链表来解决hashtable中的冲突问题，相同的hash 为一个链表的存储结构
 * 
 * 
 * 分离链接 的方式
 * 
 */


export class HashTableSeparateChaining {

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = Object.create(null)
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {   // 改为使用链表来进行存储，避免冲突
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        this.table[position] = new LinkedList()

      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode(key)
    const linkeList = this.table[position]
    if (linkeList != null && !linkeList.isEmpty()) {
      let current = linkeList.getHead()
      while (current != null) {
        if (current.ele.key === key) {
          return current.ele.value
        }
        current = current.next
      }
      return undefined
    }
  }

  remove(key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.ele.key === key) {
          linkedList.remove(current.ele)

          if (linkedList.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    let count = 0;
    Object.values(this.table).forEach(linkedList => {
      count += linkedList.size();
    });
    return count;
  }

  clear() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }

}






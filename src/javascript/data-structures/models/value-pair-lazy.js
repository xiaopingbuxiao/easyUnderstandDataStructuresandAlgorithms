import { ValuePair } from './value-pair'


/**
 * hash-table 的一种 惰性删除的方式 来处理冲突
 */

export class ValuePairLazy extends ValuePair {
  constructor(key, value, isDeleted = false) {
    super(key, value)
    this.key = key
    this.value = value
    this.isDeleted = isDeleted
  }
}




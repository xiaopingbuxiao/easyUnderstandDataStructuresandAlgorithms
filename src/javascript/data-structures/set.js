




export class Set {
  constructor() {
    this.items = Object.create(null)
  }
  add(ele) {
    if (!this.has(ele)) {
      this.items[ele] = ele
      return true
    }
    return false
  }
  delete(ele) {
    if (this.has(ele)) {
      delete this.items[ele]
      return true
    }
    return false
  }
  has(ele) {
    return Object.prototype.hasOwnProperty.call(this.items, ele)
  }
  values() {
    return Object.values(this.items)
  }
  size() {
    return Object.keys(this.items).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.items = Object.create(null)
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const values = this.values()
    return values.join(',')
  }
  union(otherSet) { // 并集
    const unisonSet = new Set()
    this.values().forEach(value => unisonSet.add(value));
    otherSet.values().forEach(value => unisonSet.add(value))
    return unisonSet
  }
  intersection(otherSet) { // 交集
    /* const intersectionSet = new Set()
    const values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet */

    // 优化之后  只拿最少的来进行迭代
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggetSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggetSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggetSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
  difference(otherSet) { // 差集
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }


}




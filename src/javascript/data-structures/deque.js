
/**
 * 双端队列
 */

export class Deque {
  constructor() {
    this.count = 0  // 代表下一个应该是第几个
    this.items = Object.create(null)
    this.lowestCount = 0 // 当前的第一个元素
  }
  addFront(ele) {
    if (this.isEmpty()) {
      this.addBack(ele)
    } else if (this.lowestCount > 0) { // 如果大于 0 证明测试已经有元素从双端队列的头部被移除  直接放在前面即可
      this.lowestCount--
      this.items[this.lowestCount] = ele
    } else {  // 此时证明开始位置为 0 将所有的向后移动 保证新增的在第一个位置 
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[0] = ele
    }
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  addBack(ele) {
    this.items[this.count] = ele
    this.count++
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = Object.create(null)
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count - this.lowestCount
  }
}








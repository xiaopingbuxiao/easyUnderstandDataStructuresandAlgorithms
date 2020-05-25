
/**
 * 队列
 */
export class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0 //用来追踪第一个元素
    this.items = Object.create(null) // 同stack一样使用对象是为了性能问题
  }
  enqueue(ele) {
    this.items[this.count] = ele
    this.count++
  }
  dequeue() { // 先进先出
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() { // 获取队形的第一项
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.items = Object.create(null)
    this.count = 0
    this.lowestCount = 0
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
}


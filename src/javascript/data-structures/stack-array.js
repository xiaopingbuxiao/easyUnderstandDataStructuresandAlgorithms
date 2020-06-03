
/**
 * 使用数组时，大部分的方法时间复杂度都是 O(n)
 * 因此如果数组中的元素很多的时候，所需的时间就会很长
 * 并且数组是一个有序集合，因此为了保持数据的排列有序，它会占用更多的内存空间
 */

export class Stack {
  constructor() {
    this.items = []
  }
  push(ele) {
    this.items.push(ele)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  clear() {
    this.items = []
  }
  toArray() {
    return this.items
  }
  toString() {
    return this.items.toString()
  }
}


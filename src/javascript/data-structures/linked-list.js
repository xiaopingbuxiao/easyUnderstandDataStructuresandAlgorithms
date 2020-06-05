/**
 * 要存储多个元素，数组(或列表)可能是最常用的数据结构。
 * 正如本书之前提到的，每种语 言都实现了数组。这种数据结构非常方便，
 * 提供了一个便利的[]语法来访问其元素。然而，这种 数据结构有一个缺点:
 * (在大多数语言中)数组的大小是固定的，从数组的起点或中间插入或移 除项的成本很高，因为需要移动元素。
 * (尽管我们已经学过，JavaScript 有来自 Array 类的方法 可以帮我们做这些事，但背后的情况同样如此。)
 */

/**
 * 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
 * 每个 元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。
 *  
 */
import { defaultEquals } from '../utils'
import { Node } from './models/linked-list-models'

export class LinkedList {
  constructor(equalsFn = defaultEquals) { // 使用LinkedList 类时 如果没有传入 比较相等的方法 就使用严格相等
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  push(ele) {
    const node = new Node(ele)
    let current;
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) { //从head开始 一直去找到链表的最后一个元素
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.ele
    }
  }
  insert(ele, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(ele)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
  indexOf(ele) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(current.ele, ele)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  remove(ele) {
    const index = this.indexOf(ele)
    return this.removeAt(index)
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  clear() {
    this.head = undefined;
    this.count = 0;
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.ele}`
    let current = this.head.next
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.ele}`
      current = current.next
    }
    return objString
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }
}












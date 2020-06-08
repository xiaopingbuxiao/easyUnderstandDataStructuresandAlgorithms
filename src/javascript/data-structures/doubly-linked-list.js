import { LinkedList } from './linked-list'
import { DoublyNode } from './models/linked-list-models'
import { defaultEquals } from '../utils'



export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined // 链表的最后一个元素的引用
  }
  push(ele) {
    const node = new DoublyNode(ele)

    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
  insert(ele, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(ele)
      let current = this.head

      if (index === 0) {
        if (this.head == null) { // 此时 双向链表为 null 还没有 元素
          this.head = node
          this.tail = node
        } else {  // 此时双向链表中已经有元素了
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) { // 证明是在最后一个位置
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        current.prev = node
        previous.next = node
        node.prev = previous
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = this.head.next
        if (this.count === 1) {  // 如果只有一个元素 移除之后一个元素也没了  
          this.tail = undefined
        } else {      // 不只是一个元素
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) { // 正好移除的是最后一个元素
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.ele
    }
    return undefined
  }
  indexOf(ele) {
    let current = this.head
    let index = 0
    while (current != null) {
      if (this.equalsFn(current.ele, ele)) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.ele}`
    let current = this.head.next
    while (current != null) {
      objString = `${objString},${current.ele}`
      current = current.next
    }
    return objString
  }

  inverseToString() {
    if (this.tail == null) {
      return ''
    }
    let objString = `${this.tail.ele}`
    let previous = this.tail.prev
    while (previous != null) {
      objString = `${objString},${previous.ele}`
      previous = previous.prev
    }
    return objString
  }
}









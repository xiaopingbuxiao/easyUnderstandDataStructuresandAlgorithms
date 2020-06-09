import { defaultEquals } from '../utils'
import { LinkedList } from './linked-list'
import { Node } from './models/linked-list-models'

/**
 * 循环链表  可以理解为是一个圆  此处时单向链表的循环链表  也可以创建双向链表的的循环链表
 * 
 * 
 * 
 * 
 * 
 * 最重要最重要 最重要的一点，一定要按照链表的顺序来写代码
 */




export class CircularLinkedList extends LinkedList {

  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  push(ele) {
    const node = new Node(ele)
    let current;
    if (this.head == null) {
      this.head = node
    } else {
      current = this.getElementAt(this.size() - 1)
      current.next = node
    }
    node.next = this.head
    this.count++
  }
  insert(ele, index) {
    if (index >=0 && index <= this.count) {
      const node = new Node(ele)
      let current = this.head
      if (index === 0) {  // 在最开始第0个位置插入 
        if (this.head == null) { // 如果不存在
          this.head = node
          node.next = this.head
        } else {  // 如果存在
          node.next = current  // 放在 head的前面
          current = this.getElementAt(this.size()) // 获取最后一个
          this.head = node  // 现在的开头变为了node
          current.next = this.head // 最后一个的下一个指向新的head
        }
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
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) { // 如果只有一个元素
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1) // 获取最后一个元素
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.ele
    }
    return undefined
  }
}








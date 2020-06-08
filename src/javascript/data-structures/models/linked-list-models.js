


export class Node {
  constructor(ele, next) {
    this.ele = ele
    this.next = next
  }
}
/** 
 * 双向链表使用
 */
export class DoublyNode extends Node {
  constructor(el, next, prev) {
    super(el, next)
    this.prev = prev
  }
}






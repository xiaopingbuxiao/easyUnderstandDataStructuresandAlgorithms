import { Compare, defaultCompare, defaultEquals } from '../utils'
import { LinkedList } from './linked-list'


export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.equalsFn = equalsFn
    this.compareFn = compareFn
  }
  push(ele) {
    if (this.isEmpty()) {
      super.push(ele)
    } else {
      const index = this.getIndexNextSortedElement(ele)
      super.insert(ele, index)
    }
  }
  insert(ele, index = 0) {
    if (this.isEmpty()) {
      return super.insert(ele, index === 0 ? index : 0)
    }
    const pos = this.getIndexNextSortedElement(ele)
    return super.insert(ele, pos)
  }
  getIndexNextSortedElement(ele) { // 找到比当前元素小的位置
    let current = this.head
    let i = 0;

    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(ele, current.ele)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}













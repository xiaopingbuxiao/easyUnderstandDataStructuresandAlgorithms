/**
 * 回文检查器
 * 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam 或 racecar。
 * 使用双端队列来解决的方法如下
 */
import { Deque } from '../javascript/deque'



export function palindromeChecker(aString) {
  if (aString === undefined || aString === null ||
    (aString !== null && aString.length === 0)) { // 是否合法 如果不合法  直接放回false
    return false
  }
  const deque = new Deque()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('') // 移除所有空格
  let isEqual = true

  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}











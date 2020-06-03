
import { expect } from 'chai'
import { Stack } from '../src/javascript/data-structures/stack.js'





describe('stack test', () => {
  console.log('不实用数组来模拟')
  let stack;
  beforeEach(() => {
    stack = new Stack()
  })
  const a = 1
  console.log(a)
  it('start mepry', () => {
    expect(stack.size()).to.equal(0)
    expect(stack.isEmpty()).to.be.true
  });
  it('push el', () => {
    stack.push(1)
    expect(stack.isEmpty()).is.not.true
    expect(stack.size()).to.equal(1)

    stack.push(2)
    expect(stack.size()).to.equal(2)

    stack.push(3)
    expect(stack.size()).to.equal(3)
  });
  it('pop ele', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).to.equal(2)
    expect(stack.pop()).to.equal(1)
  });
  it('implements LIFO logic', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).to.equal(2)
    expect(stack.pop()).to.equal(1)
  });
  it('允许查看堆栈中的顶部元素而不弹出它', () => {
    expect(stack.peek()).to.equal(undefined)
    stack.push(1)
    expect(stack.peek()).to.equal(1)
    stack.push(2)
    expect(stack.peek()).to.equal(2)
    stack.pop()
    expect(stack.peek()).to.equal(1)
  });
  it('正确的返回size', () => {
    stack.push(1)
    expect(stack.size()).to.equal(1)
    stack.push(2)
    expect(stack.size()).to.equal(2)
    stack.pop()
    expect(stack.size()).to.equal(1)
    stack.clear()
    expect(stack.size()).to.equal(0)
  });
  it('isEmpty test', () => {
    expect(stack.isEmpty()).to.be.true
    stack.push(1)
    expect(stack.isEmpty()).to.be.false
    stack.pop()
    expect(stack.isEmpty()).to.be.true
  });

  it('清空栈', () => {
    stack.push(1)
    stack.clear()
    expect(stack.isEmpty()).to.be.true

  });
 
  it('返回字符串基本类型', () => {
    class MyObj {
      constructor(el1, el2) {
        this.el1 = el1
        this.el2 = el2
      }
      toString() {
        return `${this.el1}|${this.el2}`
      }
    }
    expect(stack.toString()).to.equal('')
    stack.push(new MyObj(1, 2))
    expect(stack.toString()).to.equal('1|2')

    stack.push(new MyObj(3, 4))
    expect(stack.toString()).to.equal('1|2,3|4')

  });


})









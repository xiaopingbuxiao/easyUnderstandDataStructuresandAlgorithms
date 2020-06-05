import { expect } from 'chai'
import { LinkedList } from '../src/javascript/data-structures/linked-list'
import { defaultEquals } from '../src/javascript/utils'
import MyObj from './my-obj'



describe('链表 LinkedList 的测试', () => {

  let list;
  let min;
  let max;

  function pushesEle() {
    for (let i = min; i <= max; i++) {
      list.push(i)
    }
  }

  function verifyList() {
    let current = list.getHead()
    for (let i = min; i <= max && current; i++) {
      expect(current.ele).to.not.be.an('undefined')
      expect(current.ele).to.equal(i)

      if (i < max) {
        expect(current.next).to.not.be.an('undefined')
        if (current.next) {
          expect(current.next.ele).to.equal(i + 1)
        }
      } else {
        expect(current.next).to.be.an('undefined')
      }
      current = current.next
    }
  }



  beforeEach(() => {
    list = new LinkedList(defaultEquals)
    min = 1;
    max = 3
  })

  it('starts empty', () => {
    expect(list.size()).to.equal(0)
    expect(list.isEmpty()).to.be.true
    expect(list.getHead()).to.equal(undefined)
  });

  it('pushes ele', () => {
    pushesEle()
    verifyList()
  });

  it('returns ele at specific index: invalid position', () => {
    expect(list.getElementAt(2)).to.be.an('undefined')
  });

  it('returns ele at specific index', () => {
    let node;
    pushesEle()
    for (let i = min; i <= max; i++) {
      node = list.getElementAt(i - 1)
      expect(node).to.not.be.an('undefined')
      if (node) {
        expect(node.ele).to.be.equal(i)
      }
    }
  });

  it('inserts ele first position empty list', () => {
    const ele = 1
    max = ele
    expect(list.insert(ele, 0)).to.be.true
    verifyList()
  });
  it('inserts ele invaild position not empty list', () => {
    const ele = 1
    expect(list.insert(ele, 0)).to.be.true
    expect(list.insert(ele, 2)).to.be.false
  });

  it('inserts ele in the middle of list', () => {
    expect(list.insert(3, 0)).to.be.true
    expect(list.insert(1, 0)).to.be.true
    expect(list.insert(2, 1)).to.be.true
    verifyList()
  });

  it('inserts ele at the end of list', () => {
    max = 5;
    for (let i = min; i <= max; i++) {
      expect(list.insert(i, i - 1)).to.equal(true)
    }
    verifyList()
  });
  it('returns index of ele ', () => {
    let index;
    pushesEle()

    for (let i = min; i <= max; i++) {
      index = list.indexOf(i)
      expect(index).to.equal(i - 1)
    }
    expect(list.indexOf(4)).to.equal(-1)
  });

  it('remove valid ele', () => {
    let ele;
    pushesEle()

    for (let i = min; i <= max; i++) {
      ele = list.remove(i)
      expect(ele).to.not.be.an('undefined')
      expect(ele).to.equal(i)
    }

  });

  it('remove invalid ele', () => {
    let ele;
    pushesEle()

    for (let i = max + 1; i < max + 3; i++) {
      ele = list.remove(i)
      expect(ele).to.be.an('undefined')
    }
  });

  it('removes ele invaild position empty list', () => {
    let ele;
    for(let i=min;i<=max;i++){
      ele = list.removeAt(i-1)
      expect(ele).to.be.an('undefined');
    }
  });

  it('removes ele invalid position not empty list', () => {
    let ele;

    pushesEle()

    for (let i = max + 2; i <= max + 4; i++) {
      ele = list.removeAt(i);
      expect(ele).to.be.an('undefined');
    }
  });


  it('removes first ele list single ele', () => {
    const value = 1;
    list.push(value);

    const ele = list.removeAt(0);
    expect(ele).to.not.be.an('undefined');
    expect(ele).to.equal(value);

    expect(list.getHead()).to.be.an('undefined');
    expect(list.isEmpty()).to.equal(true);
  });

  it('removes first ele list multiple elements', () => {
    pushesEle()
    const ele = list.removeAt(0);
    expect(ele).to.not.be.an('undefined');
    expect(ele).to.equal(min);

    min = 2;
    verifyList();
  });

  it('removes ele from middle of list', () => {
    pushesEle(); // 1, 2, 3

    const ele = list.removeAt(1); // ele 2
    expect(ele).to.not.be.an('undefined');
    expect(ele).to.equal(2);

    // list needs to be [1, 3]
    let current = list.getHead();

    // ele 1
    expect(current).to.not.be.an('undefined');
    if (current) {
      expect(current.ele).to.not.be.an('undefined');
      expect(current.ele).to.equal(1);
      expect(current.next).to.not.be.an('undefined');
      if (current.next) {
        expect(current.next.ele).to.equal(3);
        current = current.next;
      }
    }

    // ele 3
    expect(current).to.not.be.an('undefined');
    if (current) {
      expect(current.ele).to.not.be.an('undefined');
      expect(current.ele).to.equal(3);
      expect(current.next).to.be.an('undefined');
    }
  });

  it('removes ele from end of list', () => {
    let ele;

    pushesEle();

    const maxIndex = max;
    for (let i = maxIndex; i >= min; i--) {
      ele = list.removeAt(i - 1);
      expect(ele).to.not.be.an('undefined');
      expect(ele).to.equal(i);
      max--;
      verifyList();
    }
  });

  it('returns the head of the list', () => {
    expect(list.getHead()).to.be.an('undefined');

    list.push(1);
    expect(list.getHead()).to.not.be.an('undefined');
  });

  it('returns the correct size', () => {
    expect(list.size()).to.equal(0);

    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.size()).to.equal(i);
    }

    const size = max;
    for (let i = min; i <= max; i++) {
      list.remove(i);
      expect(list.size()).to.equal(size - i);
    }

    expect(list.size()).to.equal(0);
  });

  it('returns if it is empty', () => {
    expect(list.isEmpty()).to.equal(true);
    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.isEmpty()).to.equal(false);
    }

    for (let i = min; i < max; i++) {
      list.remove(i);
      expect(list.isEmpty()).to.equal(false);
    }
    list.remove(max);
    expect(list.isEmpty()).to.equal(true);

    pushesEle();
    expect(list.isEmpty()).to.equal(false);

    list.clear();
    expect(list.isEmpty()).to.equal(true);
  });

  it('clears the list', () => {
    expect(list.size()).to.equal(0);
    list.clear();
    expect(list.size()).to.equal(0);
    pushesEle();
    expect(list.size()).to.greaterThan(0);
    list.clear();
    expect(list.size()).to.equal(0);
  });

  it('returns toString primitive types', () => {
    expect(list.toString()).to.equal('');

    list.push(1);
    expect(list.toString()).to.equal('1');

    list.push(2);
    expect(list.toString()).to.equal('1,2');

    list.clear();
    expect(list.toString()).to.equal('');
  });

  it('returns toString primitive types: string', () => {
    const ds = new LinkedList();
    ds.push('el1');
    expect(ds.toString()).to.equal('el1');

    ds.push('el2');
    expect(ds.toString()).to.equal('el1,el2');
  });

  it('returns toString objects', () => {
    const ds = new LinkedList();
    expect(ds.toString()).to.equal('');

    ds.push(new MyObj(1, 2));
    expect(ds.toString()).to.equal('1|2');

    ds.push(new MyObj(3, 4));
    expect(ds.toString()).to.equal('1|2,3|4');
  });

});














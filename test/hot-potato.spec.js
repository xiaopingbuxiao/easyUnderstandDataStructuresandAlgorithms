import { expect } from 'chai'
import { hotPotato } from '../src/javascript/other/hot-potato'


describe('循环队列来实现击鼓传花', () => {
  it('hot potato game', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    expect(hotPotato(names, 6).winner).to.equal('Ingrid');
    expect(hotPotato(names, 7).winner).to.equal('John');
    expect(hotPotato(names, 8).winner).to.equal('Jack');
    expect(hotPotato(names, 9).winner).to.equal('Ingrid');
    expect(hotPotato(names, 10).winner).to.equal('Carl');
  });
});













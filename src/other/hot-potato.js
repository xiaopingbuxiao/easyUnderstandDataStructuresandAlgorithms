
import { Queue } from '../javascript/queue'




/**
 * 击鼓传花游戏  将初始的所有的元素按照顺序放在队列中
 * 之后将前 n 个人的元素向后移动，移动完成之后的第一个就是被淘汰的人
 * 将被淘汰的人按照顺序放在 elimitatedList 中  最后剩下的人就是顺利者
 */
export function hotPotato(eleList, num) {

  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < eleList.length; i++) {
    queue.enqueue(eleList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }

}








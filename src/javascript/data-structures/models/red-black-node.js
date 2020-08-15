import { Node } from './node'



export const Color = {
  RED: 0,
  BLACK: 1
}


export class RedBlackNode extends Node {

  constructor(key) {
    super(key)
    this.color = Color.RED
    this.parent = null
  }
  isRed() {
    return this.color === Color.RED
  }
}


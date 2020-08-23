import { Dictionary } from './dictionary'



export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Dictionary()
  }
  /* 添加顶点 */
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }
  /* 添加节点的顶点，接收两个顶点 并将两个顶点直接建立链接 */
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }
  /* 返回顶点的列表 */
  getVertices() {
    return this.vertices
  }
  /* 返回邻接表 */
  getAdjList() {
    return this.adjList
  }
  /* 输出图 */
  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]}->`
      const neighbors = this.adjList.get(this.vertices[i]) // 获取相邻的顶点
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]}`
      }
      s += '\n'
    }
    return s
  }
}




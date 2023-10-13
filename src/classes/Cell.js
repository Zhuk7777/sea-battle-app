export class CellType {
  constructor(x, y, mark) {
    this.x = x
    this.y = y
    this.mark = mark
    this.id = Math.random()
  }
}
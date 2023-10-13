export class Mark {
  constructor(cell) {
    this.cell = cell
    this.cell.mark = this
    this.color = null
    this.id = Math.random()
    this.name = ''
  }
}
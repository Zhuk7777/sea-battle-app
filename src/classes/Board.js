import { CellType } from "./Cell"
import { Cancel } from "./marks/Cancel"
import { Damage } from "./marks/Damage"
import { Miss } from "./marks/Miss"
import { Ship } from "./marks/Ship"
import { robotShip } from "./marks/robotShip"

export class BoardType {
  cells = []

  initCells () {
    for (let i = 0; i < 10; i++) {
      const row = []
      for (let j = 0; j < 10; j++) {
        row.push(new CellType(this, j, i, null))
      }

      this.cells.push(row)
    }
  }

  getCopyBoard() {
    const newBoard = new BoardType()
    newBoard.cells = this.cells
    return newBoard
  }

  setCells(cells) {
    this.cells = cells
  }

  getCells(x,y) {
    return this.cells[y][x]
  }

  addShip(x,y) {
    new Ship(this.getCells(x,y))
  }

  addRobotShip(x,y) {
    new robotShip(this.getCells(x,y))
  }

  addMiss(x,y) {
    new Miss(this.getCells(x,y))
  }

  addDamage(x,y) {
    new Damage(this.getCells(x,y))
  }

  сancel(x,y){
    new Cancel(this.getCells(x,y))
  }
}
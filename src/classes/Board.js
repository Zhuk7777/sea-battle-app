import { CellType } from "./Cell"

export class BoardType {
  cells = []

  initCells () {
    for (let i = 0; i < 10; i++) {
      const row = []
      for (let j = 0; j < 10; j++) {
        row.push(new CellType(j, i, null))
      }

      this.cells.push(row)
    }
  }
}
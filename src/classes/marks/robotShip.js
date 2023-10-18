import { Mark } from "./Mark";

export class robotShip extends Mark {
  constructor(cell) {
    super(cell)
    this.name = 'robotShip'
    this.color = ''
  }
}
import { Mark } from "./Mark";

export class Ship extends Mark {
  constructor(cell) {
    super(cell)
    this.name = 'ship'
    this.color = 'green'
  }
}
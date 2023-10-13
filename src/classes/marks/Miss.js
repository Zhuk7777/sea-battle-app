import { Mark } from "./Mark";

export class Miss extends Mark {
  constructor(cell) {
    super(cell)
    this.name = 'miss'
    this.color = 'grey'
  }
}
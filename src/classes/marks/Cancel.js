import { Mark } from "./Mark";

export class Cancel extends Mark {
  constructor(cell) {
    super(cell)
    this.name = ''
    this.color = ''
  }
}
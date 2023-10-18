import { BoardType } from "../classes/Board";
import { addShip } from "./addShip";
import { areShipsRunOut } from "./areShipsRunOut";
import { canAddShip } from "./canAddShip";

export const randomPlacementShips = () => {
  const isMyBoard = false
  const board = new BoardType()
  board.initCells()
  //Позция в массиве соответствует количеству палуб, а значение количеству кораблей
  //с таким количеством палуб
  let shipsCount = [0,4,3,2,1]
  const directions = ['up','right','down','left']
  
  let selectDirection
  let selectShip = 4
  let x,y

  while(!areShipsRunOut(shipsCount[4], shipsCount[3], shipsCount[2], shipsCount[1]))
  {
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    selectDirection = directions[Math.floor(Math.random() * 4)]

    if(canAddShip(board, x, y, selectShip, selectDirection, isMyBoard))
      {
        addShip(board, x, y, selectShip, selectDirection, isMyBoard)
        shipsCount[selectShip]--

        if(shipsCount[selectShip] === 0)
          selectShip--
      }
  }

  return board
}
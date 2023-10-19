import { createFieldAroundSingleDeck } from "./createFieldAroundSingleDeck"

export const createFieldAroundDestroyedShip = (board,x,y) => {
  let currentX = x
  let currentY = y

  let verticalDirection = false
  let horizontalDirection = false

  if((y > 0 && board.getCells(x,y-1)?.mark?.name === 'damage') || (y < 9 && board.getCells(x,y+1)?.mark?.name === 'damage'))
    verticalDirection = true

  if((x > 0 && board.getCells(x-1,y)?.mark?.name === 'damage') || (x < 9 && board.getCells(x+1,y)?.mark?.name === 'damage'))
    horizontalDirection = true

  //однопалубный корабль
  if(!horizontalDirection && !verticalDirection)
  {
    createFieldAroundSingleDeck(board,x,y)
  }

  if(horizontalDirection)
  {
    //левое направление
    while(currentX > -1 && board.getCells(currentX,y)?.mark?.name === 'damage')
    {
      createFieldAroundSingleDeck(board,currentX,y)
      currentX--
    }
    currentX = x

    //правое направление
    while(currentX < 10 && board.getCells(currentX,y)?.mark?.name === 'damage')
    {
      createFieldAroundSingleDeck(board,currentX,y)
      currentX++
    }
    currentX = x
  }

  if(verticalDirection)
  {
    //верхнее направление
    while(currentY > -1 && board.getCells(x,currentY)?.mark?.name === 'damage')
    {
      createFieldAroundSingleDeck(board,x,currentY)
      currentY--
    }
    currentY = y

    //нижнее направление
    while(currentY < 10 && board.getCells(x,currentY)?.mark?.name === 'damage')
    {
      createFieldAroundSingleDeck(board,x,currentY)
      currentY++
    }
    currentY = y
  }

}
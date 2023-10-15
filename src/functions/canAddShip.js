import { testEnterDeck } from "./testEnterDeck"

export const canAddShip = (board, x, y, typeOfShip, shipDirection) => {
  let canPlace = true

  switch (shipDirection){
    case 'up':
      for (let i = 0; i < typeOfShip; i++) {
        if(y < 0 || !testEnterDeck(board,x,y))
          canPlace = false
        y--
      }
      break

    case 'right':
      for (let i = 0; i < typeOfShip; i++) {
        if(x > 9 || !testEnterDeck(board,x,y))
          canPlace = false
        x++
      }
      break

    case 'down':
      for (let i = 0; i < typeOfShip; i++) {
        if(y > 9 || !testEnterDeck(board,x,y))
          canPlace = false
        y++
      }
      break
    
    case 'left':
      for (let i = 0; i < typeOfShip; i++) {
        if(x < 0 || !testEnterDeck(board,x,y))
          canPlace = false
        x--
      }
      break
  }

  return canPlace
}
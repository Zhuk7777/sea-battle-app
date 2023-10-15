export const addShip = (board, x, y, typeOfShip, shipDirection) => {
  
  switch (shipDirection){
    case 'up':
      for (let i = 0; i < typeOfShip; i++) {
        board.addShip(x,y)
        y--
      }
      break
  
    case 'right':
      for (let i = 0; i < typeOfShip; i++) {
        board.addShip(x,y)
        x++
      }
      break
  
    case 'down':
      for (let i = 0; i < typeOfShip; i++) {
        board.addShip(x,y)
        y++
      }
      break
      
    case 'left':
      for (let i = 0; i < typeOfShip; i++) {
        board.addShip(x,y)
        x--
      }
      break
  }
}
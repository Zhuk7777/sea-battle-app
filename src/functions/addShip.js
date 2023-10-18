export const addShip = (board, x, y, typeOfShip, shipDirection, isMyBoard) => {
  
  switch (shipDirection){
    case 'up':
      for (let i = 0; i < typeOfShip; i++) {
        if(isMyBoard)
          board.addShip(x,y)
        else
          board.addRobotShip(x,y)
        y--
      }
      break
  
    case 'right':
      for (let i = 0; i < typeOfShip; i++) {
        if(isMyBoard)
          board.addShip(x,y)
        else
          board.addRobotShip(x,y)
        x++
      }
      break
  
    case 'down':
      for (let i = 0; i < typeOfShip; i++) {
        if(isMyBoard)
          board.addShip(x,y)
        else
          board.addRobotShip(x,y)
        y++
      }
      break
      
    case 'left':
      for (let i = 0; i < typeOfShip; i++) {
        if(isMyBoard)
          board.addShip(x,y)
        else
          board.addRobotShip(x,y)
        x--
      }
      break
  }
}
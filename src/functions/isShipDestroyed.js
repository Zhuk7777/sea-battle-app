export const isShipDestroyed = (board,x,y,isMyBoard) => {

  let ship = ''
  if(isMyBoard)
    ship = 'ship'
  else
    ship = 'robotShip'

  let leftDirection = true
  let rightDirection = true
  let upDirection = true
  let downDirection = true

  let currentX = x
  let currentY = y

  //проверяем левое направление
  while(currentX > 0 && board.getCells(currentX,y)?.mark?.name === 'damage')
    currentX--
  if(currentX > 0 && board.getCells(currentX,y)?.mark?.name === ship)
    leftDirection = false
  currentX = x

  //проверяем правое направление
  while(currentX < 9 && board.getCells(currentX,y)?.mark?.name === 'damage')
    currentX++
  if(currentX < 9 && board.getCells(currentX,y)?.mark?.name === ship)
    rightDirection = false
  currentX = x

  //проверяем верхнее направление
  while(currentY > 0 && board.getCells(x,currentY)?.mark?.name === 'damage')
    currentY--
  if(currentY > 0 && board.getCells(x,currentY)?.mark?.name === ship)
    upDirection = false
  currentY = y

  //проверяем нижнее направление
  while(currentY < 9 && board.getCells(x,currentY)?.mark?.name === 'damage')
    currentY++
  if(currentY < 9 && board.getCells(x,currentY)?.mark?.name === ship)
    downDirection = false
  currentY = y

  return leftDirection && rightDirection && upDirection && downDirection

}
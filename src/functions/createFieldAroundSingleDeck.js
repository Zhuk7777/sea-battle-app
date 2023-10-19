export const createFieldAroundSingleDeck = (board,x,y) => {
  //Создаем набор значений из 9 координат
  //|?|?|?|
  //|?|x|?|
  //|?|?|?|
  const XX = []
  const YY = []

  //верхяя левая точка
  XX.push(x-1)
  YY.push(y-1)

  //верхняя центральная точка
   XX.push(x)
   YY.push(y-1)

  //верхяя правая точка
  XX.push(x+1)
  YY.push(y-1)

  //левая точка
  XX.push(x-1)
  YY.push(y)

  //точка x,y
  XX.push(x)
  YY.push(y)

  //правая точка
  XX.push(x+1)
  YY.push(y)

  //левая нижняя точка
  XX.push(x-1)
  YY.push(y+1)

  //средняя нижняя точка
  XX.push(x)
  YY.push(y+1)

  //правая нижняя точка
  XX.push(x+1)
  YY.push(y+1)

  for (let i = 0; i < 9; i++) {
    if((XX[i] > -1) && (YY[i] > -1) && (XX[i] < 10) && (YY[i] < 10))
      {
        if(board.getCells(XX[i],YY[i])?.mark?.name !== 'damage')
          board.addMiss(XX[i],YY[i])
      }
  }

}
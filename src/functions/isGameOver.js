export const isGameOver = (board) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(board.getCells(j,i)?.mark?.name === "robotShip" || board.getCells(j,i)?.mark?.name === "ship")
        return false
    }
  }
  return true
}
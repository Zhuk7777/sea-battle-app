export const areShipsReady = (countOfFour_deckShips, countOfThree_deckShips, 
  countOfDouble_deckShips, countOfSingle_deckShips) => {
    if(countOfFour_deckShips === 0 && countOfThree_deckShips === 0 
    && countOfDouble_deckShips === 0 && countOfSingle_deckShips === 0)
      return true
    else
      return false
}
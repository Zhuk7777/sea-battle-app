export const checkCountShip = (typeOfShip, countOfFour_deckShips, countOfThree_deckShips, 
  countOfDouble_deckShips, countOfSingle_deckShips) => {
  let canPlace = true

  switch(typeOfShip) {
    case '1':
      if(countOfSingle_deckShips === 0)
        canPlace = false
      break
    
    case '2':
      if(countOfDouble_deckShips === 0)
        canPlace = false
      break

    case '3':
      if(countOfThree_deckShips === 0)
        canPlace = false
      break

    case '4':
      if(countOfFour_deckShips === 0)
        canPlace = false
      break
  }

  return canPlace
}
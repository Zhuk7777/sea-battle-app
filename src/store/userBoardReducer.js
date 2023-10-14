//import { BoardType } from "../classes/Board"

/*const emptyBoard = () => {
  const newBoard = new BoardType()
  newBoard.initCells()
  return newBoard.getCells(1,2)
}*/

const defaultState = {
  countOfFour_deckShips: 1,
  countOfThree_deckShips: 2,
  countOfDouble_deckShips: 3,
  countOfSingle_deckShips: 4,
  board: null,
}

const REDUCE_COUNT_SINGLE_DECKED_SHIPS = "REDUCE_COUNT_SINGLE_DECKED_SHIPS"
const REDUCE_COUNT_DOUBLE_DECKED_SHIPS = "REDUCE_COUNT_DOUBLE_DECKED_SHIPS"
const REDUCE_COUNT_THREE_DECKED_SHIPS = "REDUCE_COUNT_THREE_DECKED_SHIPS"
const REDUCE_COUNT_FOUR_DECKED_SHIPS = "REDUCE_COUNT_FOUR_DECKED_SHIPS"
const UPDATE_BOARD = "UPDATE_BOARD"
const REMOVE = "REMOVE"


export const userBoardReducer = (state = defaultState, action) => {
  switch (action.type){
      case REDUCE_COUNT_SINGLE_DECKED_SHIPS:
          return  {...state, countOfSingle_deckShips: state.countOfSingle_deckShips - 1}

      case REDUCE_COUNT_DOUBLE_DECKED_SHIPS:
          return {...state, countOfDouble_deckShips: state.countOfDouble_deckShips - 1}

      case REDUCE_COUNT_THREE_DECKED_SHIPS:
          return {...state, countOfThree_deckShips: state.countOfThree_deckShips - 1}

      case REDUCE_COUNT_FOUR_DECKED_SHIPS:
          return {...state, countOfFour_deckShips: state.countOfFour_deckShips - 1}

      case UPDATE_BOARD: 
          return {...state, board: action.payload}

      case REMOVE:
          return {...state, board: null, countOfSingle_deckShips: 4, countOfDouble_deckShips: 3, countOfThree_deckShips: 2, countOfFour_deckShips: 1}

      default:
          return state
  }
}

export const reduceCountSingleDeckedShipsAction = () => ({type: REDUCE_COUNT_SINGLE_DECKED_SHIPS})
export const reduceCountDoubleDeckedShipsAction = () => ({type: REDUCE_COUNT_DOUBLE_DECKED_SHIPS})
export const reduceCountThreeDeckedShipsAction = () => ({type :REDUCE_COUNT_THREE_DECKED_SHIPS})
export const reduceCountFourDeckedShipsAction = () => ({type: REDUCE_COUNT_FOUR_DECKED_SHIPS})
export const updateBoardAction = (payload) => ({type: UPDATE_BOARD, payload})
export const removeBoardAction = () => ({type: REMOVE})
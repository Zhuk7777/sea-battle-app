import { BoardType } from "../classes/Board"

const emptyBoard = () => {
  const newBoard = new BoardType()
  newBoard.initCells()
  return newBoard
}

const defaultState = {
  countOfFour_deckShips: 1,
  countOfThree_deckShips: 2,
  countOfDouble_deckShips: 3,
  countOfSingle_deckShips: 4,
  board: emptyBoard(),
}

const REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_USER = "REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_USER"
const REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_USER = "REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_USER"
const REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_USER = "REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_USER"
const REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_USER = "REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_USER"
const UPDATE_USER_BOARD = "UPDATE_USER_BOARD"
const REMOVE_USER_BOARD = "REMOVE_USER_BOARD"


export const userBoardReducer = (state = defaultState, action) => {
  switch (action.type){
      case REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_USER:
          return  {...state, countOfSingle_deckShips: state.countOfSingle_deckShips - 1}

      case REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_USER:
          return {...state, countOfDouble_deckShips: state.countOfDouble_deckShips - 1}

      case REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_USER:
          return {...state, countOfThree_deckShips: state.countOfThree_deckShips - 1}

      case REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_USER:
          return {...state, countOfFour_deckShips: state.countOfFour_deckShips - 1}

      case UPDATE_USER_BOARD: 
          return {...state, board: action.payload}

      case REMOVE_USER_BOARD:
          return {...state, board: emptyBoard(), countOfSingle_deckShips: 4, countOfDouble_deckShips: 3, countOfThree_deckShips: 2, countOfFour_deckShips: 1}

      default:
          return state
  }
}

export const reduceUserCountSingleDeckedShipsAction = () => ({type: REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_USER})
export const reduceUserCountDoubleDeckedShipsAction = () => ({type: REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_USER})
export const reduceUserCountThreeDeckedShipsAction = () => ({type :REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_USER})
export const reduceUserCountFourDeckedShipsAction = () => ({type: REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_USER})
export const updateUserBoardAction = (payload) => ({type: UPDATE_USER_BOARD, payload})
export const removeUserBoardAction = () => ({type: REMOVE_USER_BOARD})
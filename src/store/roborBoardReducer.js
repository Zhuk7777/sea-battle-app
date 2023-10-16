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

const REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_ROBOT = "REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_ROBOT"
const REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_ROBOT = "REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_ROBOT"
const REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_ROBOT = "REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_ROBOT"
const REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_ROBOT = "REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_ROBOT"
const UPDATE_ROBOT_BOARD = "UPDATE_ROBOT_BOARD"
const REMOVE_ROBOT_BOARD = "REMOVE_ROBOT_BOARD"


export const robotBoardReducer = (state = defaultState, action) => {
  switch (action.type){
      case REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_ROBOT:
          return  {...state, countOfSingle_deckShips: state.countOfSingle_deckShips - 1}

      case REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_ROBOT:
          return {...state, countOfDouble_deckShips: state.countOfDouble_deckShips - 1}

      case REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_ROBOT:
          return {...state, countOfThree_deckShips: state.countOfThree_deckShips - 1}

      case REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_ROBOT:
          return {...state, countOfFour_deckShips: state.countOfFour_deckShips - 1}

      case UPDATE_ROBOT_BOARD: 
          return {...state, board: action.payload}

      case REMOVE_ROBOT_BOARD:
          return {...state, board: emptyBoard(), countOfSingle_deckShips: 4, countOfDouble_deckShips: 3, countOfThree_deckShips: 2, countOfFour_deckShips: 1}

      default:
          return state
  }
}

export const reduceRobotCountSingleDeckedShipsAction = () => ({type: REDUCE_COUNT_SINGLE_DECKED_SHIPS_AT_THE_ROBOT})
export const reduceRobotCountDoubleDeckedShipsAction = () => ({type: REDUCE_COUNT_DOUBLE_DECKED_SHIPS_AT_THE_ROBOT})
export const reduceRobotCountThreeDeckedShipsAction = () => ({type :REDUCE_COUNT_THREE_DECKED_SHIPS_AT_THE_ROBOT})
export const reduceRobotCountFourDeckedShipsAction = () => ({type: REDUCE_COUNT_FOUR_DECKED_SHIPS_AT_THE_ROBOT})
export const updateRobotBoardAction = (payload) => ({type: UPDATE_ROBOT_BOARD, payload})
export const removeRobotBoardAction = () => ({type: REMOVE_ROBOT_BOARD})
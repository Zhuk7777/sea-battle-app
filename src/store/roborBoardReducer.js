import { BoardType } from "../classes/Board"

const emptyBoard = () => {
  const newBoard = new BoardType()
  newBoard.initCells()
  return newBoard
}

const defaultState = {
  board: emptyBoard(),
}

const UPDATE_ROBOT_BOARD = "UPDATE_ROBOT_BOARD"
const REMOVE_ROBOT_BOARD = "REMOVE_ROBOT_BOARD"


export const robotBoardReducer = (state = defaultState, action) => {
  switch (action.type){

      case UPDATE_ROBOT_BOARD: 
          return {...state, board: action.payload}

      case REMOVE_ROBOT_BOARD:
          return {...state, board: emptyBoard(), countOfSingle_deckShips: 4, countOfDouble_deckShips: 3, countOfThree_deckShips: 2, countOfFour_deckShips: 1}

      default:
          return state
  }
}

export const updateRobotBoardAction = (payload) => ({type: UPDATE_ROBOT_BOARD, payload})
export const removeRobotBoardAction = () => ({type: REMOVE_ROBOT_BOARD})
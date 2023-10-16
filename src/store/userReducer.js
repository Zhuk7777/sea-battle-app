const defaultState = {
  name: "",
  gameMode: 2,
  victories: 0,
  losses: 0,
  countGames: 0,
}

const ADD_USER = "ADD_USER"
const UPDATE_USER = "UPDATE_USER"
const REMOVE_USER = "REMOVE_USER"
const INCREASE_VICTORIES = "INCREASE_VICTORIES"
const INCREASE_LOSSES = "INCREASE_LOSSES"
const INCREASE_GAMES = "INCREASE_GAMES"

export const userReducer = (state = defaultState, action) => {
  switch (action.type){
      case ADD_USER:
          return  {...state, name: action.payload.name, gameMode: action.payload.gameMode}
      case REMOVE_USER:
          return {...state, name: "", gameMode: 2, victories: 0, losses: 0, countGames: 0}
      case UPDATE_USER:
          return {...state, victories: state.victories + action.payload.victories, losses: state.losses + action.payload.losses, countGames: state.countGames + action.payload.countGames}
      case INCREASE_VICTORIES:
          return {...state, victories: state.victories + 1}
      case INCREASE_LOSSES:
          return {...state,  losses: state.losses + 1}
      case INCREASE_GAMES:
          return {...state, countGames: state.countGames + 1}
      default:
          return state
  }
}

export const addUserlAction = (payload) => ({type: ADD_USER, payload})
export const removeUserAction = () => ({type: REMOVE_USER})
export const updateUserInfoAction = (payload) => ({type: UPDATE_USER, payload})
export const increaseVictoriesAction = () => ({type: INCREASE_VICTORIES})
export const increaseLossesAction = () => ({type: INCREASE_LOSSES})
export const increaseGamesAction = () => ({type: INCREASE_GAMES})
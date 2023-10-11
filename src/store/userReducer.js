const defaultState = {
  name: "",
  gameMode: 2,
  victories: 0,
  losses: 0,
  countGames: 0,
}

const ADD = "ADD"
const UPDATE = "UPDATE"
const REMOVE = "REMOVE"

export const userReducer = (state = defaultState, action) => {
  switch (action.type){
      case ADD:
          return  {...state, name: action.payload.name, gameMode: action.payload.gameMode}
      case REMOVE:
          return {...state, name: "", gameMode: 2, victories: 0, losses: 0, countGames: 0}
      case UPDATE:
          return {...state, victories: state.victories + action.payload.victories, losses: state.losses + action.payload.losses, countGames: state.countGames + action.payload.countGames}
      default:
          return state
  }
}

export const addUserlAction = (payload) => ({type: ADD, payload})
export const removeUserAction = () => ({type: REMOVE})
export const updateUserInfoAction = (payload) => ({type: UPDATE, payload})
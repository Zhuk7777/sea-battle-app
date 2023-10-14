import {createStore, combineReducers} from "redux"
import { userReducer } from "./userReducer"
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userBoardReducer } from "./userBoardReducer"

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers ({
  user: userReducer,
  userBoard: userBoardReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
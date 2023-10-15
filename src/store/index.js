import {createStore, combineReducers} from "redux"
import { userReducer } from "./userReducer"
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userBoardReducer } from "./userBoardReducer"
import { createTransform } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {parse, stringify} from "flatted"

const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
)
 

const persistConfig = {
  key: 'root',
  storage,
  transforms: [transformCircular],
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers ({
  user: userReducer,
  userBoard: userBoardReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
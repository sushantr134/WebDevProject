import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

const rootReducer = combineReducers({
  //store_reducer_name : reducer_name
})

const configureStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

export default configureStore

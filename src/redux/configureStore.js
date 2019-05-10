import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import fetchMovieSearchHandler from "./actions/fetchSearchMovie/reducer-fetch-movie"

const rootReducer = combineReducers({
  //store_reducer_name : reducer_name
  movieSearchStore: fetchMovieSearchHandler,
})

const configureStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk, logger))

export default configureStore

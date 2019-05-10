import { FETCH_SEARCH_MOVIES, SELECTED_SEARCH_MOVIE } from "../../actions-types"
import axios from "axios"

export const fetchMovieBySearch = searchText => {
  return dispatch => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${searchText.trim()}&apikey=${
          process.env.GATSBY__MOVIE_API_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: FETCH_SEARCH_MOVIES,
          payload: res.data,
        })
      })
  }
}

export const fetchMovieById = imdbId => {
  return dispatch => {
    axios
      .get(
        `http://www.omdbapi.com/?i=${imdbId.trim()}&apikey=${
          process.env.GATSBY__MOVIE_API_KEY
        }`
      )
      .then(res =>
        dispatch({
          type: SELECTED_SEARCH_MOVIE,
          payload: res,
        })
      )
  }
}

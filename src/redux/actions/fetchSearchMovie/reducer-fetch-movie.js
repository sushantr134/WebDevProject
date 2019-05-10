import { FETCH_SEARCH_MOVIES, SELECTED_SEARCH_MOVIE } from "../../actions-types"

const initialState = {}

const fetchMovieSearchHandler = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_MOVIES:
      if (action.payload.Response === "True") {
        return {
          ...state,
          searchMovieResult: action.payload,
        }
      } else {
        return {
          ...state,
          searchMovieResult: null,
        }
      }
    case SELECTED_SEARCH_MOVIE:
      return {
        ...state,
        individualSearchMovieResult: action.payload,
      }
    default:
      return state
  }
}

export default fetchMovieSearchHandler

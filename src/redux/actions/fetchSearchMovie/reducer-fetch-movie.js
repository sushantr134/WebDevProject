import { FETCH_SEARCH_MOVIES } from "../../actions-types"

const initialState = {}

const fetchMovieSearchHandler = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_MOVIES:
      return {
        ...state,
        searchMovieResult: action.payload,
      }
  }
}

import { FETCH_SEARCH_MOVIES } from "../../actions-types"

export const fetchMovieBySearch = searchText => {
  return {
    type: FETCH_SEARCH_MOVIES,
    payload: searchText,
  }
}

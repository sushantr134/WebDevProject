import * as React from "react"
import { connect } from "react-redux"
import {
  fetchMovieBySearch,
  fetchMovieById,
} from "../../redux/actions/fetchSearchMovie/action-fetch-movie"
import SearchWindowMovies from "../SearchWindow/SearchWindow"
import MoviesListWrapper from "./MoviesList"

class MainAppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  moviesStateHandler = stateObj => {
    this.setState(prev => {
      return {
        ...prev,
        moviesData: stateObj,
      }
    })
  }

  render() {
    return (
      <>
        {typeof this.state.moviesData != undefined &&
        this.state.moviesData != null ? (
          <>
            <MoviesListWrapper
              moviesData={this.state.moviesData}
              fetchIndividualMovie={this.props.fetchIndividualMovie}
              searchMoviesStore={this.props.searchMoviesStore}
            />
            <SearchWindowMovies
              dataHandler={this.moviesStateHandler}
              searchMoviesStore={this.props.searchMoviesStore}
              fetchMoviesSearch={this.props.fetchMoviesSearch}
              showIcon={false}
            />
          </>
        ) : (
          <SearchWindowMovies
            dataHandler={this.moviesStateHandler}
            searchMoviesStore={this.props.searchMoviesStore}
            fetchMoviesSearch={this.props.fetchMoviesSearch}
            showIcon={true}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchMoviesStore: state.movieSearchStore,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesSearch: searchText => dispatch(fetchMovieBySearch(searchText)),
    fetchIndividualMovie: movieId => dispatch(fetchMovieById(movieId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAppContainer)

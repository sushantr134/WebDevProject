import * as React from "react"
import { connect } from "react-redux"
import { fetchMovieById } from "../../redux/actions/fetchSearchMovie/action-fetch-movie"
import { Rate, Skeleton } from "antd"

import styles from "./Movies.module.scss"
import notFoundLogo from "../../images/notfound.svg"

const MovieDetailsContainer = props => {
  return (
    <section>
      <h1>{props.data.Title}</h1>
      <div>
        <div>
          <img
            src={props.data.Poster != "N/A" ? props.data.Poster : notFoundLogo}
            alt={props.data.Title}
          />
        </div>
        <div>
          <div className={styles.detailsMovie} data-details={"upper"}>
            <h5>{props.data.Title}</h5>
            <span>
              {props.data.Runtime}&nbsp;&nbsp;-&nbsp;&nbsp;{props.data.Genre}
            </span>
          </div>
          <div className={styles.detailsMovie} data-details={"middle"}>
            <Rate allowHalf value={(Number(props.data.imdbRating) / 10) * 5} />
            <span className={styles.metascore}>{props.data.Metascore}</span>
          </div>
          <div className={styles.detailsMovie} data-details={"lower"}>
            {props.data.Plot}
            <ul>
              <li>
                <span>Directors :</span>
                <span>{props.data.Director}</span>
              </li>
              <li>
                <span>Stars :</span>
                <span>{props.data.Actors}</span>
              </li>
              <li>
                <span>Awards :</span>
                <span>{props.data.Awards}</span>
              </li>
              <li>
                <span>Released on :</span>
                <span>{props.data.Released}</span>
              </li>
              <li>
                <span>BoxOffice :</span>
                <span>{props.data.BoxOffice}</span>
              </li>
              <li>
                <span>Language :</span>
                <span>{props.data.Language}</span>
              </li>
              <li>
                <span>Production :</span>
                <span>{props.data.Production}</span>
              </li>
              <li>
                <span>Website :</span>
                <span>
                  <a href={props.data.Website} target="_blank">
                    {props.data.Website}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

class RenderMoviePage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.movieData = null
  }
  componentWillMount() {
    this.props.fetchIndividualMovie(this.props.movieId)
  }

  render() {
    return (
      <>
        {this.props.searchMoviesStore.individualSearchMovieResult != null ? (
          <MovieDetailsContainer
            data={this.props.searchMoviesStore.individualSearchMovieResult}
          />
        ) : (
          <Skeleton active />
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
    fetchIndividualMovie: id => dispatch(fetchMovieById(id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderMoviePage)

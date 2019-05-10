import React from "react"
import { Input, Skeleton } from "antd"
// import debounce from "lodash/debounce"
import "./styles/antStyles.css"

import styles from "./styles/windowPanel.module.scss"
import logo from "../../images/bee.png"

const Search = Input.Search

export default class SearchWindowMovies extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
    }
  }

  componentDidUpdate() {
    if (this.props.searchMoviesStore.searchMovieResult != null) {
      this.setState({ isFetching: false })
      this.props.dataHandler(
        this.props.searchMoviesStore.searchMovieResult.Search
      )
    }
  }

  fetchMovies = searchValue => {
    this.setState({ isFetching: true })
    this.props.fetchMoviesSearch(searchValue)
  }
  render() {
    return (
      <>
        {this.props.searchMoviesStore.searchMovieResult === null &&
          this.setState({ isFetching: false })}
        {this.state.isFetching ? (
          <Skeleton active />
        ) : (
          <section
            className={`${
              this.props.showIcon ? styles.searchSection : styles.searchSection2
            }`}
          >
            {this.props.showIcon && (
              <div className={styles.container} data-container="one">
                <img src={logo} alt={"Moobees"} />
              </div>
            )}
            <div className={styles.container} data-container="two">
              <Search
                placeholder="Search movies here..."
                onSearch={value => this.fetchMovies(value)}
                style={{ width: "100%" }}
                enterButton
              />
            </div>
          </section>
        )}
      </>
    )
  }
}

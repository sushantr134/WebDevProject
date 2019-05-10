import React from "react"
import styles from "./Movies.module.scss"
import notFoundLogo from "../../images/notfound.svg"
import { Link } from "gatsby"

const MoviesListWrapper = ({ moviesData, fetchIndividualMovie }) => {
  return (
    <section className={styles.moviesListSection}>
      {moviesData.map((moviesObj, i) => {
        return (
          <div key={i} className={styles.moviesListCardItem}>
            <img
              src={moviesObj.Poster != "N/A" ? moviesObj.Poster : notFoundLogo}
              alt={moviesObj.Title}
              title={moviesObj.Title}
            />
            <h2>{moviesObj.Title}</h2>
            <Link
              to={`movie/`}
              state={{
                movieId: moviesObj.imdbID,
              }}
            >
              <span className={styles.btnMoviesListCard}>View details</span>
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default MoviesListWrapper

import React from "react"
import styles from "./Movies.module.scss"
import notFoundLogo from "../../images/notfound.svg"
import { Link } from "gatsby"

const MoviesListWrapper = ({ moviesData }) => {
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
            <Link to={`movie/`} state={{ movieId: moviesObj.imdbID }}>
              <button className={styles.btnMoviesListCard}>View details</button>
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default MoviesListWrapper

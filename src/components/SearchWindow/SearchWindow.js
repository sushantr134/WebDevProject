import React from "react"
import { Input } from "antd"
// import debounce from "lodash/debounce"

import styles from "./styles/windowPanel.module.scss"
import logo from "../../images/bee.png"

const Search = Input.Search

export default class SearchWindowMovies extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className={styles.searchSection}>
        <div className={styles.container} data-container="one">
          <img src={logo} alt={"Moobees"} />
        </div>
        <div className={styles.container} data-container="two">
          <Search
            placeholder="Search movies here..."
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
            enterButton
          />
        </div>
      </section>
    )
  }
}

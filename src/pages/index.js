import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchWindowMovies from "../components/SearchWindow/SearchWindow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SearchWindowMovies />
  </Layout>
)

export default IndexPage

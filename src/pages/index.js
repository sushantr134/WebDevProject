import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainAppContainer from "../components/Wrapper/Container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainAppContainer />
  </Layout>
)

export default IndexPage

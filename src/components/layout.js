import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { Provider } from "react-redux"
import configureStore from "../redux/configureStore"

const Store = configureStore()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            apiKey
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} />
        {alert(data.site.siteMetadata.apiKey)} */}
        <Provider store={Store}>
          <main>{children}</main>
          <footer />
        </Provider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

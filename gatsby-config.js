require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Movie Search Tool`,
    description: ``,
    author: `@sushantr134`,
    apiKey: process.env.GATSBY__MOVIE_API_KEY,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Quicksand", "PT Sans", "sans-serif"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-import",
      options: {
        libraryName: "antd",
        style: "css", // or 'css'
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Movies-Search-Tool v1.0`,
        short_name: `Movbees`,
        start_url: `/`,
        background_color: `#f7af11`,
        theme_color: `#f7af11`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `17th Street Review`,
    description: `A new literary magazine.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
          options: {
          // The top level query type, can be anything you want!
          typeName: "GCMS",
          // The field you'll query against, can also be anything you want.
          fieldName: "gcms",
          // Your API endpoint, available from the dashboard and settings window.
          url: "https://api-us-east-1.graphcms.com/v2/ckf00vhe27ppl01z5cohgdazz/master",
      },
    },
    `gatsby-plugin-styled-components`
  ],
}

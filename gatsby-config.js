module.exports = {
  siteMetadata: {
    title: `WUALIB`,
    description: `Site dédié au Workshop Interventionnel d’Algologie ULB`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
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
        name: `WUALIB`,
        short_name: `WUALIB`,
        start_url: `/`,
        background_color: `#DE5C36`,
        theme_color: `#DE5C36`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};

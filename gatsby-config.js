const path = require('path');
module.exports = {
  siteMetadata: {
    title: `KBA Cardiology`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,

    // Add typescript stack into webpack
    'gatsby-plugin-sharp',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tsconfig-paths`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
  pathPrefix: `/kba-site-project`,
};

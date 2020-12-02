const path = require('path');
module.exports = {
  siteMetadata: {
    title: `KBA Cardiology`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tsconfig-paths`,
  ],
  pathPrefix: `/kba-site-project`,
};

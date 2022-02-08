module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: ['Article'],
        inlineImages: {
          typesToParse: {
            Article: ['body'],
            ComponentBlockBody: ['text'],
          },
        },
        // Only include specific locale.
        locale: 'en', // default to all
        // Include drafts in build.
        preview: true, // defaults to false
        // Use application token.
        token: 'e96e28453a7243a832c620a1004dd06e206af84ab3b50239933b138250a1966cbb09fe7f184997c13926d13c0323526ef922b015ac7afcfc0500747b73e4107d97ced88acdd55df5cc3435fd929349eb02335a1715b32503508598cd9213a57d28ffdf5b0a6f1fdc0cb5a57d6a5b502a7c29329a302e1ab30ba3fce0aaf4e8d9',
        // Add additional headers.
        headers: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

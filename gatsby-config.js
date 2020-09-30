module.exports = {
  siteMetadata: {
    title: `perifaCode`,
    description: `A comunidade da periferia que fala de tecnologia. Somos um grupo de apoio para pessoas de origem periférica 
      que estão envolvidas em algum nível com o mercado de tecnologia`,
    author: `Comunidade PerifaCode`,
    profile: `perifacode`,
    social: {
      facebook: `https://facebook.com/`,
      linkedin: `https://linkedin.com/company/`,
      twitter: `https://twitter.com/`,
      github: `https://github.com/`,
      instagram: `https://instagram.com/`,

    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-M6D67G8`,
        includeInDevelopment: false,
      },
    },
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
  ],
}
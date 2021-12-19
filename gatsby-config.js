module.exports = {
  siteMetadata: {
    title: "TULLTULLOCH INT.",
    description: "A site for Tulltulloch International",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/favicon.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "shop_items",
        path: `${__dirname}/static/_shop/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      modulePath: `${__dirname}/src/cms/cms.js`,
      options: {
        enableIdentityWidget: true,
      },
    },
  ],
};

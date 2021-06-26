module.exports = {
  siteMetadata: {
    title: "new witch blog",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options:{
              name: `blog`,
              path: `${__dirname}/content/blog`,
          },
      },
  ],
};
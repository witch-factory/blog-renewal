module.exports = {
  siteMetadata: {
    title: "Witch Work renewal",
    author:{
      name:`김성현(a.k.a. 마녀)`,
      comment: `멋진 사람들이 내는 빛을 따라가다 보니 여기까지 왔고, 앞으로도 그렇게 살고 싶습니다. 당신과도 함께할 수 있어 영광입니다.`,
    },
    description: `고수들의 그림자를 따라가는 중`,
    siteUrl: `https://www.witch.work`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins:[],
        extensions:[`.md`, `.mdx`],
      },
    },
  ],
};
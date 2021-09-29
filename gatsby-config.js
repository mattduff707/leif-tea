module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "leif-tea",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "https://leiftea.myshopify.com/",
        accessToken: "771f13d9d7c6f8e41555a17fc3fab9f0",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

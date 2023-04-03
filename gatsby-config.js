module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `2022f.pennapps`,
    siteUrl: `http://2022f.pennapps.com/`,
    favicon: `/static/favicon.ico`
  },
  plugins: ["gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
  ]
};
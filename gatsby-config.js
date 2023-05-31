module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `2023f.pennapps`,
    siteUrl: `http://2023f.pennapps.com/`,
    favicon: `/static/favicon_io/favicon.ico`
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
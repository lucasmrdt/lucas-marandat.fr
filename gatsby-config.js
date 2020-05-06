module.exports = {
  siteMetadata: {
    title: 'Lucas Marandat',
    name: 'Narative',
    siteUrl: 'https://novela.narative.co',
    description: 'This is my description that will be used in the meta tags and important for search results',
    hero: {
      heading: 'Lucas Marandat|blog.',
      maxWidth: 652,
    },
    social: [{
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/lucasmrdt/',
      },
      {
        name: 'github',
        url: 'https://github.com/lucasmrdt',
      },
      {
        name: 'hackerrank',
        url: 'https://www.hackerrank.com/lucas_mrdt',
      }
    ],
  },
  plugins: [{
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Novela by Narative',
        short_name: 'Novela',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {},
    },
  ],
};
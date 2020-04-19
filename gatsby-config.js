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
        name: 'twitter',
        url: 'https://twitter.com/narative',
      },
      {
        name: 'github',
        url: 'https://github.com/narative',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/narative.co',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/narative/',
      },
      {
        name: 'dribbble',
        url: 'https://dribbble.com/narativestudio',
      },
    ],
  },
  plugins: [{
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["M PLUS Rounded 1c"],
          urls: ["/fonts/fonts.css"],
        },
      },
    }
  ],
};
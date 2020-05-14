const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://lucas-marandat.fr',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;


module.exports = {
  siteMetadata: {
    title: 'Lucas Marandat',
    name: 'Lucas Marandat Blog',
    siteUrl,
    description: 'Follow my projects and see how I made them!',
    hero: {
      heading: 'Lucas Marandat',
      maxWidth: 652,
    },
    social: [{
        name: 'email',
        url: 'mailto:contact@lucas-marandat.fr'
      }, {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/lucasmrdt/',
      },
      {
        name: 'github',
        url: 'https://github.com/lucasmrdt',
      },
      {
        name: 'replit',
        url: 'https://repl.it/@lucasmrdt',
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
        name: 'Lucas Marandat',
        short_name: 'Lucas',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#fafafa',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96109572-2"
      },
    }, {
      resolve: 'gatsby-plugin-sitemap'
    }, {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{
              userAgent: '*'
            }]
          },
          'branch-deploy': {
            policy: [{
              userAgent: '*',
              disallow: ['/']
            }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{
              userAgent: '*',
              disallow: ['/']
            }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-offline'
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-autolink-headers',
        }],
      },
    }
  ],
};
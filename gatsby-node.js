const path = require('path');

exports.onCreateWebpackConfig = ({
  actions,
  rules,
  getConfig,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'node_modules/@narative/gatsby-theme-novela/src'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  });
};
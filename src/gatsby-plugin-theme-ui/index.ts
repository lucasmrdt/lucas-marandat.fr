import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  fonts: {
    ...novelaTheme.fonts,
    rounded: "'M PLUS Rounded 1c', sans-serif",
  },
};

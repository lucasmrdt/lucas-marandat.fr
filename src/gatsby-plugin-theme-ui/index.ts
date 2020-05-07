import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    code: '#e5e5e5',
    modes: {
      ...novelaTheme.colors.modes,
      dark: {
        ...novelaTheme.colors.modes.dark,
        code: '#2a2c34',
      },
    },
  },
  fonts: {
    ...novelaTheme.fonts,
    rounded: "'M PLUS Rounded 1c', sans-serif",
  },
};

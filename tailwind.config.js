const theme = require('./theme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Martel Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: theme.palette.primary,
        subhead: theme.palette.subhead,
        info: theme.palette.info,
        darkInfo: theme.palette.darkInfo,
        success: theme.palette.success,
        darkSuccess: theme.palette.darkSuccess,
        warning: theme.palette.warning,
        darkWarning: theme.palette.darkWarning,
        light: theme.palette.light,
        dark: theme.palette.dark,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

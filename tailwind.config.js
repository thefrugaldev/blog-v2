module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#DB3EB1',
      subhead: '#41b6e6',
      info: '#b085f4',
      success: '#00cc88',
      warning: '#f9d800',
      dark: '#0e2430',
      light: '#fefefe',
    },
    fontFamily: {
      sans: ['Martel Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

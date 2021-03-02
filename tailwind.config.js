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
    fontFamily: {
      sans: ['Martel Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        // LIGHT MODE
        primary: '#EC092F',
        subhead: '#FFEC41',
        info: '#7932EC',
        success: '#00B87A',
        warning: '#EC9D09',
        dark: '#0E2430',
        light: '#FEFEFE',
      },
      // colors: {
      //   // DARK MODE
      //   primary: '#F8425F',
      //   subhead: '#FFEC41',
      //   info: '#B085F4',
      //   success: '#00CC88',
      //   warning: '#F8B53A',
      //   dark: '#0E2430',
      //   light: '#FEFEFE',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

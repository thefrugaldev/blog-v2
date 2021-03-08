// TODO: Convert to TypeScript

const palette = {
  primary: '#F8425F',
  subhead: '#FFEC41',
  info: '#7932EC',
  darkInfo: '#B085F4',
  success: '#00B87A',
  darkSuccess: '#00CC88',
  warning: '#EC9D09',
  darkWarning: '#F8B53A',
  light: '#FEFEFE',
  dark: '#0E2430',
};

const getDarkMode = () => {
  return localStorage.getItem('darkMode') === 'true' || false;
};

const setDarkMode = (isDarkMode) => {
  localStorage.setItem('darkMode', isDarkMode);
};

module.exports = {
  lightTheme: {
    body: palette.light,
    text: palette.dark,
    head: palette.dark,
    subhead: palette.dark,
  },

  darkTheme: {
    body: palette.dark,
    text: palette.light,
    heading: palette.primary,
    subhead: palette.subhead,
  },

  palette,
  getDarkMode,
  setDarkMode,
};

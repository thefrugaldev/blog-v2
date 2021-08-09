import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  // useSystemColorMode: true,
  initialColorMode: "dark",
};

const colorPalette = {
  // primary: "#F8425F",
  // subhead: "#FFEC41",
  // info: "#7932EC",
  // darkInfo: "#B085F4",
  // success: "#00B87A",
  // darkSuccess: "#00CC88",
  // warning: "#EC9D09",
  // darkWarning: "#F8B53A",
  darkMode: {
    bg: "#001628",
    link: "#6DECAF",
    linkHover: "#59DEC9",
    codeBg: "#2F2F2F",
    code: "#EEE",
  },
  lightMode: {
    bg: "#FEFEFE",
    link: "#5379b5", // TODO: poor contrast
    linkHover: "#001628",
    codeBg: "#FAFAFA",
    code: "#90A4AE", // TODO: poor contrast
  },
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Montserrat,sans-serif",
    heading: "Montserrat,sans-serif",
  },
  colors: {
    brand: colorPalette,
  },
  styles: {
    "*, *::after, *::before": {
      boxSizing: "border-box",
    },
    global: (props) => ({
      ":not(pre) > code": {
        bg: mode(
          colorPalette.lightMode.codeBg,
          colorPalette.darkMode.codeBg
        )(props),
        color: mode(
          colorPalette.lightMode.code,
          colorPalette.darkMode.code
        )(props),
        px: 1.5,
      },
      body: {
        color: mode(colorPalette.darkMode.bg, colorPalette.lightMode.bg)(props),
        bg: mode(colorPalette.lightMode.bg, colorPalette.darkMode.bg)(props),
        height: "100vh",
        lineHeight: "1.75",
      },
      "h1, h2, h3, h4, h5, h6": {
        fontWeight: 700,
      },
      h1: {
        fontSize: "4xl",
      },
      h2: {
        fontSize: "2xl",
      },
      "h3, h4, h5, h6": {
        fontSize: "xl",
      },
      a: {
        color: mode(
          colorPalette.lightMode.link,
          colorPalette.darkMode.link
        )(props),
        "&:hover": {
          color: mode(
            colorPalette.lightMode.linkHover,
            colorPalette.darkMode.linkHover
          )(props),
        },
      },
    }),
  },
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode(
          colorPalette.lightMode.link,
          colorPalette.darkMode.link
        )(props),
        "&:hover": {
          color: mode(
            colorPalette.lightMode.linkHover,
            colorPalette.darkMode.linkHover
          )(props),
          textDecoration: "none",
        },
      }),
    },
    Heading: {
      sizes: {
        xl: {
          lineHeight: "1.75",
        },
      },
    },
  },
});

export default theme;

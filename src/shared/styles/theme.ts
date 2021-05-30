import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { prismLightTheme, prismDarkTheme } from "./prism";

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
  light: "#FEFEFE",
  dark: "#0E2430",
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Martel Sans, sans-serif",
  },
  styles: {
    "*, *::after, *::before": {
      boxSizing: "border-box",
    },
    global: (props) => ({
      body: {
        color: mode(colorPalette.dark, colorPalette.light)(props),
        bg: mode(colorPalette.light, colorPalette.dark)(props),
        height: "100vh",
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
    }),
  },
});

export default theme;

import "@fontsource/martel-sans";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { FC } from "react";
import theme from "../shared/styles/theme";

// import DarkModeToggle from "../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <DarkModeToggle /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;

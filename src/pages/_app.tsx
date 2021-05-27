import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { FC } from "react";
import "../shared/styles/global.css";
import DarkModeToggle from "../shared/components/layout/components/dark-mode-toggle/dark-mode-toggle";
// import DarkModeProvider from "../lib/state/dark-mode";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // <DarkModeProvider>
    <ChakraProvider>
      {/* <DarkModeToggle /> */}
      <Component {...pageProps} />
    </ChakraProvider>
    // </DarkModeProvider>
  );
};

export default App;

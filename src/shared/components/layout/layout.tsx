import React, { FC } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { css, Global } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "@shared/styles/prism";
import { Box, Container } from "@chakra-ui/layout";

const Layout: FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme}
        `}
      />
      <Container maxW="container.lg">
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

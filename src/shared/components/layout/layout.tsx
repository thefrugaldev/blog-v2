import React, { FC } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/header/header";
import { css, Global } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "../../styles/prism";
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
      </Container>
    </>
  );
};

export default Layout;

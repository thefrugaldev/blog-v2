import React, { FC } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/header/header";
import { css, Global } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "../../styles/prism";

const Layout: FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme}
        `}
      />
      <div>
        <div className="max-w-screen-lg m-auto h-screen">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;

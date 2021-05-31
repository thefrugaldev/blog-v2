import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";
import HeaderItem from "./header-item";

const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between">
        <Box>
          <HeaderItem name="Home Page" route={"/"} />
          <HeaderItem name="Blog" route={"/blog"} />
          <HeaderItem name="Uses" route={"/uses"} />
          <HeaderItem name="Projects" route={"/projects"} />
          <HeaderItem name="About" route={"/about"} />
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;

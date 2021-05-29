import { Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import HeaderItem from "./header-item";

const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <header>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      <Flex>
        <HeaderItem name="Home Page" route={"/"} />
        <HeaderItem name="Blog" route={"/blog"} />
        <HeaderItem name="Uses" route={"/uses"} />
        <HeaderItem name="Projects" route={"/projects"} />
        <HeaderItem name="About" route={"/about"} />
      </Flex>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import { Box, Flex, Image, Link as ChakraLink, Stack } from "@chakra-ui/react";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";
import HeaderItem from "./components/header-item/header-item";

const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between" alignItems="center" my="6">
        <Stack direction="row" alignItems="center" spacing="12">
          <Link href="/">
            <ChakraLink>
              <Image
                src="/logo.png"
                boxSize="35px"
                opacity={0.65}
                _hover={{ opacity: 1 }}
              />
            </ChakraLink>
          </Link>
          <HeaderItem name="Blog" route={"/blog"} />
          <HeaderItem name="My Setup" route={"/setup"} />
          {/* <HeaderItem name="Projects" route={"/projects"} /> */}
          <HeaderItem name="About" route={"/about"} />
        </Stack>
        <Box>
          <DarkModeToggle />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;

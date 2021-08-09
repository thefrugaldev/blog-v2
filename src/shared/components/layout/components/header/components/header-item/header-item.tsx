import Link from "next/link";
import { Link as ChakraLink, Text, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

interface HeaderItemProps {
  name: string;
  route: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ name, route }) => {
  const { colorMode } = useColorMode();
  const linkTextColor =
    colorMode === "light" ? "brand.darkMode.bg" : "brand.lightMode.bg";

  1;
  return (
    <Link href={`${route}`}>
      <ChakraLink color={linkTextColor}>
        <Text as="span" fontWeight="bold">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
};

export default HeaderItem;

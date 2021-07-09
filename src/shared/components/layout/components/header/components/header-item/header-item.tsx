import Link from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

interface HeaderItemProps {
  name: string;
  route: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ name, route }) => {
  const { colorMode } = useColorMode();
  const linkTextColor = colorMode === "light" ? "brand.dark" : "brand.light";

  1;
  return (
    <Link href={`${route}`}>
      <ChakraLink color={linkTextColor}>
        <span>{name}</span>
      </ChakraLink>
    </Link>
  );
};

export default HeaderItem;

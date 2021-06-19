import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import React, { FC } from "react";

interface HeaderItemProps {
  name: string;
  route: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ name, route }) => {
  return (
    <Link href={`${route}`}>
      <ChakraLink _hover={{ textDecor: "none" }}>
        <span>{name}</span>
      </ChakraLink>
    </Link>
  );
};

export default HeaderItem;

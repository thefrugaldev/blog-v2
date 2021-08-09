import React, { FC } from "react";
import {
  ListIcon,
  ListItem as ChakraListItem,
  useColorMode,
} from "@chakra-ui/react";
import { GoDash } from "react-icons/go";
import { colorPalette } from "@shared/styles/theme";

const ListItem: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const listItemColor =
    colorMode === "dark"
      ? colorPalette.darkMode.link
      : colorPalette.lightMode.link;

  return (
    <ChakraListItem>
      <ListIcon as={GoDash} color={listItemColor} />
      {children}
    </ChakraListItem>
  );
};

export default ListItem;

import React, { FC } from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { GiBedLamp } from "react-icons/gi";

const DarkModeToggle: FC = () => {
  const colorModeValue = useColorModeValue("dark", "light");
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      as={GiBedLamp}
      size="sm"
      fontSize="lg"
      aria-label={`Switch to ${colorModeValue} mode`}
      color="current"
      onClick={toggleColorMode}
      bg="transparent"
    />
  );
};

export default DarkModeToggle;

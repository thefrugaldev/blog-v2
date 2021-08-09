import React, { FC } from "react";
import { Box, Container, Text, useColorMode } from "@chakra-ui/react";

interface BlockQuoteProps {
  emojiPrefix?: string;
  heading: string;
}

const BlockQuote: FC<BlockQuoteProps> = ({
  children,
  emojiPrefix,
  heading,
}) => {
  const { colorMode } = useColorMode();
  const bgColor =
    colorMode === "dark"
      ? "brand.darkMode.blockQuoteBg"
      : "brand.lightMode.blockQuoteBg";

  return (
    <Box mt="2">
      <h2>{heading}</h2>
      <Box
        bg={bgColor}
        as="blockquote"
        borderRadius="lg"
        padding="10"
        pos="relative"
      >
        <Text
          as="span"
          pos="absolute"
          left="-7"
          backgroundColor={
            colorMode === "dark" ? "brand.darkMode.bg" : "brand.lightMode.bg"
          }
          padding="1"
          borderRadius="full"
          width="50px"
          height="50px"
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
        >
          {emojiPrefix}
        </Text>
        {children}
      </Box>
    </Box>
  );
};

export default BlockQuote;

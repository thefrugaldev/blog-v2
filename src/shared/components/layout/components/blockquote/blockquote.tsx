import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

interface BlockQuoteProps {
  emojiPrefix?: string;
}

const BlockQuote: FC<BlockQuoteProps> = ({ children, emojiPrefix }) => {
  return (
    <Container as="blockquote">
      {emojiPrefix}
      {children}
    </Container>
  );
};

export default BlockQuote;

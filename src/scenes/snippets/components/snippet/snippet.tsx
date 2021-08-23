import { Box, Code, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface SnippetProps {
  heading: string;
}

const Snippet: FC<SnippetProps> = ({ children, heading }) => {
  return (
    <>
      <Heading as="h2" size="lg">
        {heading}
      </Heading>
      <Code>{children}</Code>
    </>
  );
};

export default Snippet;

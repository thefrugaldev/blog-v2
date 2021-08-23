import React from "react";
import Layout from "@shared/components/layout";
import { Box, Heading, Text } from "@chakra-ui/react";
import sharedStyles from "@shared/styles/shared";
import Snippet from "@scenes/snippets/components/snippet/snippet";

const Snippets = () => {
  return (
    <Layout>
      <Box mt={sharedStyles.marginTopGap}>
        <Heading as="h1" size="2xl">
          Quick Snippets
        </Heading>
      </Box>
      <Text>
        Below are a few handy code snippets that I often find myself coming back
        to for quick reference.
      </Text>
      <Snippet heading={"Find a process listening on a certain port"}>
        sudo lsof -i :3000
      </Snippet>
    </Layout>
  );
};

export default Snippets;

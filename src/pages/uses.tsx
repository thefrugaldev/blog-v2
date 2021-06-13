import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import React, { FC } from "react";
import ExternalLink from "../shared/components/external-link";
import Layout from "../shared/components/layout";

const UsesPage: FC = () => {
  return (
    <Layout>
      <Heading as="h1">Current Setup</Heading>
      <Box>
        <Heading as="h2" fontSize="2xl">
          Integrated Development Environment
        </Heading>
        <Text>
          For daily development purposes, my go-to IDE is{" "}
          <ExternalLink
            route={"https://code.visualstudio.com/download"}
            linkText={"Visual Studio Code"}
          />
          . The reason I default to VSCode is the huge library of extensions it
          offers. Some of the extensions I leverage are:
        </Text>
        <UnorderedList>
          <ListItem>
            Prettier - Code formatter (allows you to auto format your code on
            save)
          </ListItem>
          <ListItem>1984 - Theme</ListItem>
          <ListItem>Auto Rename Tag</ListItem>
          <ListItem>Auto Import</ListItem>
          <ListItem>Apollo GraphQL</ListItem>
          <ListItem>Error Lens</ListItem>
          <ListItem>ESLint</ListItem>
          <ListItem>Material Icon Theme</ListItem>
          <ListItem>Reactjs Code Snippets</ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default UsesPage;

import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import React, { FC } from "react";
import ExternalLink from "@shared/components/external-link";
import Layout from "@shared/components/layout";
import VsCodeExtensions from "@scenes/setup/components/vscode-extensions/vscode-extensions";

const UsesPage: FC = () => {
  // TODO: include link to my dotfiles?

  return (
    <Layout>
      <Box>
        <VsCodeExtensions />
      </Box>
      <Box>
        <Heading as="h2" fontSize="2xl">
          GitHub Commit Emojis Reference Guide
        </Heading>
        <Text>
          I like to incorporate emojis into my commit messages, and I figured
          this would be a good place to codify those messages:
        </Text>
        <UnorderedList>
          <ListItem>⚡ - :zap: - Used for the initial commit only</ListItem>
          <ListItem>🔨 - :hammer: - Used for major updates</ListItem>
          <ListItem>🔧 - :wrench: - Used for minor updates</ListItem>
          <ListItem>🚿 - :shower: - Used for cleaning up code</ListItem>
          <ListItem>🐛 - :bug: - Used for fixing bugs</ListItem>
          <ListItem>🎨 - :art: - Used for styling changes</ListItem>
          <ListItem>
            🚫 - :no-entry-sign: - Used for vulnerability fixes/dependency
            updates
          </ListItem>
          <ListItem>
            📚 - :books: - Used for READMEs or text-based updates
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default UsesPage;

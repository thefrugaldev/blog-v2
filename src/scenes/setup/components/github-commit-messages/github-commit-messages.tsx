import React, { FC } from "react";
import { Heading, List, Text } from "@chakra-ui/react";
import ListItem from "@shared/components/layout/components/list-item/list-item";

const GithubCommitMessages: FC = () => {
  return (
    <>
      <Heading as="h2" fontSize="2xl">
        GitHub Commit Emojis Reference Guide
      </Heading>
      <Text>
        I love to incorporate emojis into my commit messages, and I figured this
        would be a good place to codify them so I can refer back when I
        inevitably forget 😆.
      </Text>
      <List>
        <ListItem>⚡ (zap) - Used for the initial commit only</ListItem>
        <ListItem>🔨 (hammer) - Used for major updates</ListItem>
        <ListItem>🔧 (wrench) - Used for minor updates</ListItem>
        <ListItem>🚿 (shower) - Used for cleaning up code</ListItem>
        <ListItem>🐛 (bug) - Used for fixing bugs</ListItem>
        <ListItem>🎨 (art) - Used for styling changes</ListItem>
        <ListItem>
          🚫 (no-entry-sign) - Used for vulnerability fixes/dependency updates
        </ListItem>
        <ListItem>📚 (books) - Used for READMEs or text-based updates</ListItem>
      </List>
    </>
  );
};

export default GithubCommitMessages;

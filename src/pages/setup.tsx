import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import React, { FC } from "react";
import Layout from "@shared/components/layout";
import VsCodeExtensions from "@scenes/setup/components/vscode-extensions/vscode-extensions";
import GithubCommitMessages from "@scenes/setup/components/github-commit-messages/github-commit-messages";
import sharedStyles from "@shared/styles/shared";

const UsesPage: FC = () => {
  // TODO: Include link to my dotfiles?
  // TODO: Break out into separate pages?

  return (
    <Layout>
      <Box mt={sharedStyles.marginTopGap}>
        <VsCodeExtensions />
      </Box>
      <Box mt={10}>
        <GithubCommitMessages />
      </Box>
    </Layout>
  );
};

export default UsesPage;

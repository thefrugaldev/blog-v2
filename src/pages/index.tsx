import React, { FC } from "react";
import {
  Center,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "@shared/components/layout";
import ExternalLink from "@shared/components/external-link";
import SiteConfig from "../config";
import sharedStyles from "@shared/styles/shared";

const HomePage: FC = () => {
  return (
    <Layout>
      <VStack mt={sharedStyles.marginTopGap}>
        <Heading as="h1" size="2xl">
          The Frugal Dev
        </Heading>
        <Container maxW="container.md" mt={10}>
          <Text mt={`1.5rem`}>
            Welcome! My name is{" "}
            <Link href="/about">
              <a itemProp="url">Clayton</a>
            </Link>
            . I'm a software developer based out of Louisville, KY. I'm
            constantly striving to learn new and exciting technologies, and
            figured a{" "}
            <Link href="/blog">
              <a itemProp="url">blog</a>
            </Link>{" "}
            was a good way to capture that journey and maybe help others in the
            process. Feel free to explore the site and reach out to me on{" "}
            <ExternalLink
              route={`https://www.github.com/${SiteConfig.social.github}`}
              linkText="GitHub"
              includeIcon={false}
            />{" "}
            or{" "}
            <ExternalLink
              route={`https://twitter.com/${SiteConfig.social.twitter}`}
              linkText="Twitter"
              includeIcon={false}
            />{" "}
            if you want to learn more!
          </Text>
        </Container>
      </VStack>
    </Layout>
  );
};

export default HomePage;

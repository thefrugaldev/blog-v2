import React, { FC } from "react";
import { Center, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../shared/components/layout";
import ExternalLink from "../shared/components/external-link";
import SiteConfig from "../config";

const HomePage: FC = () => {
  return (
    <Layout>
      <Center>
        <Heading mb={`1.5rem`}>The Frugal Dev</Heading>
      </Center>
      <Divider />
      <Text mt={`1.5rem`}>
        Welcome! My name is{" "}
        <Link href="/about">
          <a itemProp="url">Clayton</a>
        </Link>
        . I'm a software developer based out of Louisville, KY. I'm constantly
        striving to learn new and exciting technologies, and figured a{" "}
        <Link href="/blog">
          <a itemProp="url">blog</a>
        </Link>{" "}
        was a good way to capture that journey and maybe help others in the
        process. Feel free to explore the site and reach out to me on{" "}
        <ExternalLink
          route={`https://www.github.com/${SiteConfig.social.github}`}
          linkText="GitHub"
          includeIcon={false}
        />
        ,{" "}
        <ExternalLink
          route={`https://twitter.com/${SiteConfig.social.twitter}`}
          linkText="Twitter"
          includeIcon={false}
        />
        , or{" "}
        <ExternalLink
          route={`https://www.linkedin.com/in/${SiteConfig.social.linkedIn}`}
          linkText="LinkedIn"
          includeIcon={false}
        />{" "}
        if you want to learn more!
      </Text>
    </Layout>
  );
};

export default HomePage;

import React, { FC } from "react";
import { Image } from "@chakra-ui/image";
import Layout from "../shared/components/layout";
import { Heading, Text, VStack } from "@chakra-ui/layout";

const AboutPage: FC = () => {
  return (
    <Layout>
      <VStack>
        <Image
          borderRadius="full"
          boxSize="250px"
          objectFit="cover"
          objectPosition="center center"
          src="/profile.jpeg"
          alt="Clayton Orman"
        />
        <Heading as="h1" size="2xl">
          Clayton Orman
        </Heading>
        <Text>
          I'm a developer with over 10 years of professional experience. I
          primarily dabble in the .Net and JavaScript realm, but always enjoy
          learning new things (which is why I made this blog 😄). Other hobbies
          include personal finance, bourbon, and sports (I'm a huge Georgia
          Bulldogs 🐶 fan). Feel free to reach out to me on Twitter, Github, or
          LinkedIn.
        </Text>
      </VStack>
    </Layout>
  );
};

export default AboutPage;

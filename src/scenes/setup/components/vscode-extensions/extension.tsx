import { ListItem, Text } from "@chakra-ui/react";
import ExternalLink from "@shared/components/external-link";
import React, { FC } from "react";

interface ExtensionProps {
  name: string;
  link: string;
}

const Extension: FC<ExtensionProps> = ({ children, name, link }) => {
  return (
    <>
      <Text as="strong">
        <ExternalLink linkText={name} route={link} />
      </Text>
      <Text pl="5">{children}</Text>
    </>
  );
};

export default Extension;

import React, { FC } from "react";
import { Link } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { BiLinkExternal } from "react-icons/bi";

interface ExternalLinkProps {
  linkText: string;
  route: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({ linkText, route }) => {
  return (
    <Link href={`{route}`} isExternal>
      {linkText} <Icon as={BiLinkExternal} />
    </Link>
  );
};

export default ExternalLink;

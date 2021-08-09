import React, { FC } from "react";
import { Link } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { BiLinkExternal } from "react-icons/bi";

interface ExternalLinkProps {
  linkText: string;
  route: string;
  includeIcon?: boolean;
}

const ExternalLink: FC<ExternalLinkProps> = ({
  linkText,
  route,
  includeIcon = true,
}) => {
  return (
    <Link href={`${route}`} isExternal>
      {linkText}
      {includeIcon && (
        <>
          {" "}
          <Icon as={BiLinkExternal} />
        </>
      )}
    </Link>
  );
};

export default ExternalLink;

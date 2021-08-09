import React from "react";
import { BlogImage } from "@scenes/blog";
import BlockQuote from "@shared/components/layout/components/blockquote/blockquote";
import { UnorderedList } from "@chakra-ui/react";
import ListItem from "@shared/components/layout/components/list-item/list-item";

const mdxComponents = (slug: string) => ({
  h1: ({ children }) => <h1>{children}</h1>,
  img: ({ src, alt }) => {
    return (
      <BlogImage
        alt={alt}
        src={require(`../../../content/blog/${slug}/${src}`).default}
      />
    );
  },
  blockquote: ({ children }) => (
    <BlockQuote children={children} heading={"Quick Note"} emojiPrefix={"📝"} />
  ),
  ul: ({ children }) => (
    <UnorderedList listStyleType="none">{children}</UnorderedList>
  ),
  li: ({ children }) => <ListItem>{children}</ListItem>,
});

export default mdxComponents;

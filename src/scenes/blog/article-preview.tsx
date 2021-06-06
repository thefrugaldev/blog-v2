import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import React, { FC } from "react";
import { Post } from "../../interfaces/post";

const ArticlePreview: FC<{ post: Post }> = ({ post }) => {
  const title = post.frontmatter.title || post.slug;

  return (
    <Box as="article" pb={10} itemScope itemType="http://schema.org/Article">
      <header>
        <h2>
          <Link href={`/blog/${post.slug}`}>
            <a itemProp="url">
              <span itemProp="headline">{title}</span>
            </a>
          </Link>
        </h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </Box>
  );
};

export default ArticlePreview;

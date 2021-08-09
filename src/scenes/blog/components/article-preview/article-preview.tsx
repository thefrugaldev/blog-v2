import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import React, { FC } from "react";
import { Post } from "@shared/interfaces/post";

const ArticlePreview: FC<{ post: Post }> = ({ post }) => {
  const title = post.frontmatter.title || post.slug;

  return (
    <Box as="article" pb={10} itemScope itemType="http://schema.org/Article">
      <Link href={`/blog/${post.slug}`}>
        <a itemProp="url">
          <Image
            src={post.frontmatter.cover}
            w={"100%"}
            h={250}
            objectFit="cover"
            itemProp="image"
            mb={2}
            borderRadius="md"
          />
        </a>
      </Link>
      <header>
        <h2>
          <Link href={`/blog/${post.slug}`}>
            <a itemProp="url">
              <span itemProp="headline">{title}</span>
            </a>
          </Link>
        </h2>
        <small>
          <strong>{post.frontmatter.date}</strong>
        </small>
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

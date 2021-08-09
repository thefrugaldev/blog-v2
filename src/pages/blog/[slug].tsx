import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import hydrate from "next-mdx-remote/hydrate";

import { getPostBySlug, getAllPosts } from "@shared/lib/blog";
import markdownToHtml from "@shared/lib/markdown";
import Layout from "@shared/components/layout";
import SEO from "@shared/components/seo/seo";
import { Post } from "@shared/interfaces/post";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import BlockQuote from "@shared/components/layout/components/blockquote/blockquote";

const components = (slug: string) => ({
  h1: ({ children }) => <h1>{children}</h1>,
  img: ({ src, alt }) => {
    return (
      <img
        alt={alt}
        src={require(`../../../content/blog/${slug}/${src}`).default}
      />
    );
  },
  blockquote: ({ children }) => (
    <BlockQuote children={children} heading={"Quick Note"} emojiPrefix={"📝"} />
  ),
});

const BlogPostPage: FC<Post> = ({ source, frontmatter, slug, excerpt }) => {
  const content = hydrate(source, {
    components: components(slug),
  });

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        image={frontmatter.cover}
      />
      <Box as="article">
        <Image src={frontmatter.cover} h={300} w={"100%"} objectFit="cover" />
        <Box as="header">
          <Heading as="h1">{frontmatter.title}</Heading>
          <Text>{frontmatter.date}</Text>
        </Box>
        <section>{content}</section>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);
  const images = components(params.slug as string);
  const source = await markdownToHtml(post.content || "", images);

  return {
    props: {
      ...post,
      source,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogPostPage;

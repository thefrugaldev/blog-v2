import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import hydrate from "next-mdx-remote/hydrate";

import { getPostBySlug, getAllPosts } from "../../lib/blog";
import markdownToHtml from "../../lib/markdown";
import Layout from "../../shared/components/layout";
import SEO from "../../shared/components/seo/seo";
import { Post } from "../../interfaces/post";
import { Image } from "@chakra-ui/image";

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
      <article>
        <Image src={frontmatter.cover} h={300} w={"100%"} objectFit="cover" />
        <header>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </header>
        <section>{content}</section>
        <hr />
        <footer>Bio component</footer>
      </article>
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

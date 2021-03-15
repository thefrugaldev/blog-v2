import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import { getPostBySlug, getAllPosts } from '../../lib/blog';
import markdownToHtml from '../../lib/markdown';
import Layout from '../../shared/components/layout';
import SEO from '../../shared/components/seo/seo';
import { Post } from '../../interfaces/post';

const BlogPostPage: FC<Post> = ({ frontmatter, source, excerpt }) => {
  const content = hydrate(source);

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
        image={''}
      />
      <article>
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
  const source = await markdownToHtml(post.content || '');

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

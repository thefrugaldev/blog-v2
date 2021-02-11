import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import remark from 'remark';
import html from 'remark-html';
import { getPostBySlug, getAllPosts } from '../../lib/blog';
import markdownToHtml from '../../lib/markdown';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      ...post,
      content,
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

const BlogPostPage: FC = () => {
  return <div></div>;
};

export default BlogPostPage;

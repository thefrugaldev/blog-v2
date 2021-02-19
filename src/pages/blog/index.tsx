import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../shared/components/layout';
import { getAllPosts } from '../../lib/blog';
import { Post } from '../../interfaces/post';
import ArticlePreview from '../../scenes/blog/article-preview';

const BlogPage: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Here are a list of my blog posts</h1>
      {posts.map((post) => {
        return <ArticlePreview key={post.slug} post={post} />;
      })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;

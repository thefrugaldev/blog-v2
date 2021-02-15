import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getAllPosts } from '../../lib/blog';
import markdownToHtml from '../../lib/markdown';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);
  console.log(`post: `, post);
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

const BlogPostPage: FC<{
  content: any;
  frontmatter: any;
  slug: string;
  excerpt: any;
}> = ({ content, frontmatter, slug, excerpt }) => {
  console.log(content);

  return (
    <Layout>
      <h1>Test Page</h1>
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
        <section dangerouslySetInnerHTML={{ __html: content }}></section>
        <hr />
        <footer>Bio component</footer>
      </article>
    </Layout>
  );
};

export default BlogPostPage;

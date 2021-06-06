import React, { FC } from "react";
import { GetStaticProps } from "next";
import Layout from "../../shared/components/layout";
import { getAllPostsByDate } from "../../lib/blog";
import { Post } from "../../interfaces/post";
import ArticlePreview from "../../scenes/blog/article-preview";
import { Grid, GridItem } from "@chakra-ui/layout";

const BlogPage: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Here are a list of my blog posts</h1>
      <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={4} mt={20}>
        {posts.map((post) => {
          return (
            <GridItem colSpan={1} key={post.slug}>
              <ArticlePreview key={post.slug} post={post} />
            </GridItem>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsByDate();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;

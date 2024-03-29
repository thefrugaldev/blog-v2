import React, { FC } from "react";
import { GetStaticProps } from "next";
import Layout from "@shared/components/layout";
import { getAllPostsByDate } from "@shared/lib/blog";
import { Post } from "@shared/interfaces/post";
import { ArticlePreview } from "@scenes/blog";
import { Grid, GridItem } from "@chakra-ui/layout";
import sharedStyles from "@shared/styles/shared";

const BlogPage: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <Grid
        templateColumns="repeat(2, minmax(0, 1fr))"
        gap={4}
        mt={sharedStyles.marginTopGap}
      >
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

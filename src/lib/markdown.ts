import rehypePrism from '@mapbox/rehype-prism';
import renderToString from 'next-mdx-remote/render-to-string';

const markdownToHtml = async (markdown: any) => {
  const mdxSource = await renderToString(markdown, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
    // scope: frontmatter
  });

  return mdxSource;
};

export default markdownToHtml;

import rehypePrism from '@mapbox/rehype-prism';
import renderToString from 'next-mdx-remote/render-to-string';
import remark from 'remark';
import html from 'remark-html';

// const markdownToHtml = async (markdown: any) => {
//   const result = await remark().use(html).process(markdown);

//   return result.toString();
// };

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

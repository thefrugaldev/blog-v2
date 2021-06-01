import rehypePrism from "@mapbox/rehype-prism";
import renderToString from "next-mdx-remote/render-to-string";
import remarkPrism from "remark-prism";

const markdownToHtml = async (markdown: any) => {
  const mdxSource = await renderToString(markdown, {
    mdxOptions: {
      remarkPlugins: [[remarkPrism, { plugins: ["line-numbers"] }]],
    },
    // scope: frontmatter
  });

  return mdxSource;
};

export default markdownToHtml;

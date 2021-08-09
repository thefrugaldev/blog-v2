import renderToString from "next-mdx-remote/render-to-string";
import remarkPrism from "remark-prism";

const markdownToHtml = async (markdown: any, components: any) => {
  const mdxSource = await renderToString(markdown, {
    components,
    mdxOptions: {
      remarkPlugins: [[remarkPrism, { plugins: ["line-numbers"] }]],
    },
  });

  return mdxSource;
};

export default markdownToHtml;

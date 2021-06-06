import { MdxRemote } from "next-mdx-remote/types";

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
  source: MdxRemote.Source;
  excerpt: string;
}

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  cover: string;
}

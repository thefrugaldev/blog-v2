export interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  excerpt: string;
}

interface Frontmatter {
  title: string;
  date: string;
  description: string;
}

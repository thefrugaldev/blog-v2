import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';
import fs from 'fs';
import { join, basename } from 'path';

const postsDirectory = join(process.cwd(), 'content', 'blog');

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, realSlug, `index.md`);
  // const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const date = format(parseISO(data.date), 'MMMM dd, yyyy');

  return { slug: realSlug, frontmatter: { ...data, date }, content };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);

  console.log(slugs);
  const posts = slugs
    .filter((slug) => !slug.toUpperCase().includes('DRAFT_'))
    .map((slug) => getPostBySlug(slug));

  return posts;
}

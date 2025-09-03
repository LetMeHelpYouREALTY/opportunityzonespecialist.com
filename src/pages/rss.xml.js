import rss from '@astrojs/rss';
import { parse } from 'date-fns';

export async function GET(context) {
  const posts = import.meta.glob('./blog/posts/*.mdx', { eager: true });
  
  const postEntries = Object.entries(posts).map(([path, post]) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    pubDate: parse(post.frontmatter.publishDate, 'MMMM d, yyyy', new Date()),
    link: path.replace('./blog/posts/', '/blog/posts/').replace('.mdx', '/'),
  }));

  return rss({
    title: 'OZ Market Insights | Opportunity Zone Specialist',
    description: 'Stay informed with the latest opportunity zone investment insights, market analysis, and regulatory updates.',
    site: context.site,
    items: postEntries,
    customData: `<language>en-us</language>`,
  });
}

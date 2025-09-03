import rss from '@astrojs/rss';
import { parse } from 'date-fns';

const posts = await Astro.glob('./blog/posts/*.mdx');

export async function GET(context) {
  return rss({
    title: 'OZ Market Insights | Opportunity Zone Specialist',
    description: 'Stay informed with the latest opportunity zone investment insights, market analysis, and regulatory updates.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: parse(post.frontmatter.publishDate, 'MMMM d, yyyy', new Date()),
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}

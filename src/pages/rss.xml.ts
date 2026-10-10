import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  if (!context.site) {
    throw new Error('Astro site URL is not configured')
  }
  return rss({
    title: 'kiiatto blog',
    description: 'rss time',
    site: context.site,
    items: blog.map((post: CollectionEntry<'blog'>) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-nz</language>`
  });
}

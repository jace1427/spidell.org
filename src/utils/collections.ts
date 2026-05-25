import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getFeaturedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getPublishedProjects();
  return projects.filter((project) => project.data.featured);
}

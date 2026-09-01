import type { MetadataRoute } from 'next';
import { projects } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: '/', changeFrequency: 'monthly', priority: 1 },
    ...projects.map((project) => ({
      url: `/work/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
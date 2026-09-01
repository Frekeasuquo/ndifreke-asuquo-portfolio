import type { Project } from "../data/portfolio";

export function findProjectBySlug(
  projects: readonly Project[],
  slug: string,
): Project | undefined {
  if (!slug || typeof slug !== 'string') return undefined;
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '');
  return projects.find((project) => project.slug === cleanSlug);
}



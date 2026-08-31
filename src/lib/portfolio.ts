import type { Project } from "../data/portfolio";

export function findProjectBySlug(
  projects: readonly Project[],
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

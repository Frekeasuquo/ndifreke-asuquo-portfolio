import { Reveal } from "@/components/Reveal";
import { projects, siteConfig } from "@/data/portfolio";
import { findProjectBySlug } from "@/lib/portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const project = findProjectBySlug(projects, slug);
    return project
        ? { title: `${project.title} - ${siteConfig.name}` }
        : { title: "Project - Ndifreke Asuquo" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = findProjectBySlug(projects, slug);
    if (!project) notFound();

    return (
        <main className="project-detail-page">
            <div className="container project-detail">
                <Link className="back-link" href="/#work">
                ← Back to selected work
                </Link>
                <Reveal>
                <p className="section-label">$ cat ./work/{project.slug}/README.md</p>
                <h1>{project.title}</h1>
                <p className="project-detail-role">{project.role}</p>
                <p className="project-detail-description">
                    {project.longDescription}
                </p>
                </Reveal>
                <div className="project-detail-grid">
                <Reveal>
                    <section aria-labelledby="highlights-title">
                    <h2 id="highlights-title">Engineering highlights</h2>
                    <ul className="detail-list">
                        {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </section>
                </Reveal>
                <Reveal>
                    <section aria-labelledby="stack-title">
                    <h2 id="stack-title">Technology</h2>
                    <ul className="chip-list">
                        {project.technologies.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <a
                        className="button button-primary detail-cta"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open live project <span aria-hidden="true">→</span>
                    </a>
                    </section>
                </Reveal>
                </div>
            </div>
        </main>
    );
}

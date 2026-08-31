import Link from 'next/link';
import type { Project } from '../data/portfolio';
import { Reveal } from './Reveal';

export function ProjectCard({ project } : { project: Project }) {
    return (
        <Reveal>
            <article className='project'>
                <div className="project-header">
                    <div>
                        <h3>{project.title}</h3>
                        <p className="project-role">{project.role}</p>
                    </div>
                    <span className="live-badge">
                        <span className="status-dot animate-pulse" aria-hidden="true" />
                        Live
                    </span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-actions">
                    <Link className="text-link" href={`/work/${project.slug}`}>
                        Case study <span aria-hidden="true">→</span>
                    </Link>
                    <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                        Live demo <span aria-hidden="true">→</span>
                    </a>
                </div>
            </article>
        </Reveal>
    )
}
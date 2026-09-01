import Link from 'next/link';
import { Header } from "./Header";
import { Terminal } from "./Terminal";
import { experience, projects, siteConfig, skills } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ExperinceTimeline } from './ExperienceTimeline';


export function PortfolioPage() {

    return <>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="grid-background" aria-hidden="true" />
            <Header/>
            <main id="main-content">
                <section id="top" className="hero section" aria-labelledby="hero-title">
                    <div className="container">
                        <Terminal/>
                        <p className="eyebrow">Based in the Isle of Man</p>
                        <h1 id="hero-title">I build systems that<br />don't fall over<span>.</span></h1>
                        <p className="hero-copy">Full-stack engineer with 5+ years turning ambiguous requirements into reliable products — React, Next.js and Node.js on top, SQL and MongoDB underneath, deployed and monitored on AWS. Currently exploring AI-assisted and agentic development.</p>
                        <div className="actions">
                            <Link className="button button-primary" href="#work">
                                View selected work <span aria-hidden="true">→</span>
                            </Link>
                                <a className="button button-secondary" href={siteConfig.cv}>Download CV</a>
                            <Link className="button button-secondary" href="#contact">Get in touch </Link>
                        </div>
                    </div>
                </section>
                <section id='about' className='section section-border' aria-labelledby='about-title' >
                    <div className='container about-grid'>
                        <Reveal>
                            <p className='section-label'>$ cat about.freke</p>
                            <h2 id='about-title' className='section-title'>About</h2>
                            <div className="body-copy">
                                <p>I'm a full-stack engineer with experience across customer-facing interfaces, backend services, databases, cloud infrastructure and production delivery.</p><p>I care about systems holding up under real usage — writing tests I can rely on, documenting important decisions, and treating measurable outcomes such as latency, reliability and maintainability as first-class engineering goals.</p><p>I'm currently deepening my experience in AI-assisted and agentic development. I learn quickly, evaluate new tooling critically, and adapt my approach to what the product actually needs.</p>
                            </div>
                        </Reveal>
                        <div className="stack" aria-label='Technical skills'>
                            {Object.entries(skills).map(([group, items]) => 
                                <div className='stack-group' key={group}>
                                    <h3>{group}</h3>
                                    <ul className='chip-list'> {items.map((item) => <li key={item}>{item}</li>)}</ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section id='work' className='section section-border' aria-labelledby='work-title'>
                    <div className="container">
                        <SectionHeading command="$ ls ./selected-work" title="Things I've shipped"/>
                        <p className='section-label'>$ cat works.freke</p>
                        <div className="project-list">
                            { projects.map((project) => <ProjectCard key={project.title} project={project}/> )}
                        </div>
                        <Reveal>
                            <div className='more-work'>
                                <span>More builds, experiments and in-progress work live on GitHub.</span>
                                <a className='button button-secondary' href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                                    View Github <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>
                <section id='experience' className='section section-border' aria-labelledby='experience-title'>
                    <div className="container">
                        <SectionHeading id='experience-title' command='$ tail -f experience.log' title="Where I've worked"/>
                        <p className='section-label'>$ cat experiences.freke</p>
                        <ExperinceTimeline items={experience} />
                    </div>
                </section>
                <section id='contact' className='section section-border' aria-labelledby='contact-title'>
                    <div className="container">
                        <Reveal>
                            <div className="contact-card">
                                <p className="section-label">$ mail --compose</p>
                                <h2 id="contact-title">Let's build something reliable.</h2><p>Open to full-stack, backend-leaning and AI/agentic engineering roles. I enjoy solving the difficult production problems as much as building the visible features.</p>
                                <div className="actions actions-center">
                                    <a className="button button-primary" href={`mailto:${siteConfig.email}`}>Email me <span aria-hidden="true">→</span></a>
                                    <a className="button button-secondary" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <a className="button button-secondary" href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                                <div className="contact-meta">
                                    <span>{siteConfig.email}</span>
                                    <span>{siteConfig.location}</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
        <footer className="site-footer"><div className="container footer-content"><span>© 2026 {siteConfig.name}</span><span>Built to be read, not just looked at.</span></div></footer>
    </>
}
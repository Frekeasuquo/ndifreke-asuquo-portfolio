import Link from 'next/link';
import { siteConfig } from '@/data/portfolio';


export function Header() {
    return (
        <header className="site-header">
            <nav className="container navigation" aria-label="Primary navigation">
                <Link className='brand' href="#top" aria-label={`${siteConfig.name} home`}>
                    <span className='status-dot' aria-hidden="true"/>
                    <span>freke.dev</span>
                </Link>

                <div className="navigation-links">
                    <Link href="#work">Work</Link>
                    <Link href="#about">About</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div className="navigation-actions">
                    <span className="availability">
                        <span className="status-dot animate-pulse" aria-hidden="true" />Open to work</span>
                    <div className="social-links" aria-label="Social links">
                        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-4 h-4"
                            >
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
                            </svg>
                        </a>
                        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-4 h-4"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
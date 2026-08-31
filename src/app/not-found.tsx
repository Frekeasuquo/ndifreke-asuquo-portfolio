
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="not-found">
            <div className="container">
                <p className="section-label">$ exit 404</p>
                <h1>That route doesn't exist.</h1>
                <p>The page you requested could not be found.</p>
                <Link className="button button-primary" href="/">Return home <span aria-hidden="true">→</span></Link>
            </div>
        </main>
    );
}

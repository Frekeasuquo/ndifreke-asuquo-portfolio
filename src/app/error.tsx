'use client';

import { useEffect } from 'react';

export default function GlobalError({ reset }: { reset: () => void }) {

    useEffect(() => { console.error('Portfolio application error boundary rendered.'); }, []);

    return (
        <main className="not-found">
            <div className="container">
                <p className="section-label">$ system --recover</p>
                <h1>Something went wrong.</h1>
                <p>Please try again. If the issue persists, use the contact details on the homepage.</p>
                <button className="button button-primary" type="button" onClick={() => reset()}>Try again</button>
            </div>
        </main>
    );
}

'use client';

import { terminalLines } from "@/data/portfolio";
import { useEffect, useState } from "react";


export function Terminal() {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            setVisibleCount(terminalLines.length);
            return;
        }

        const timers = terminalLines.map((_, index) => window.setTimeout(() => setVisibleCount(index + 1), index * 220));
        return () => timers.forEach(window.clearTimeout);
    }, []);

    return (
        <div className="terminal" aria-label="Developer status" aria-live="polite">
            {terminalLines.slice(0, visibleCount).map(([prompt, output]) => (
                <div className="terminal-line is-visible" key={prompt}>
                    <span className="terminal-prompt">{prompt}</span>
                    <span className={output.startsWith('✓') ? 'terminal-ok' : ''}> {output}</span>
                    <span className={output.startsWith('✓') ? 'terminal-cursor' : ''}></span>
                </div>
            ))}
        </div>
    )
}
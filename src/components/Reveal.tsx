'use client';

import { useEffect, useRef } from "react";


export function Reveal ({children, className = '', as: Tag = 'div'}: { children: React.ReactNode; className?: string; as?: 'div' | 'li' }){
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion || !('IntersectionObserver' in window)) {
            element.classList.add('is-visible');
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry?.isIntersecting) return; 
            element.classList.add('is-visible');
            observer.disconnect();
        }, {threshold: 0.12 });

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return <Tag ref={ref as React.Ref<any>} className={`reveal ${className}`}>{children}</Tag>;
}
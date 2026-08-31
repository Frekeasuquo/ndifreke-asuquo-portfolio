
export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    longDescription: string;
    technologies: readonly string[];
    url: string;
    highlights: readonly string[];
}

export type Experience = {
    period: string;
    datetime: string;
    title: string;
    company: string;
    achievements: readonly string[];
};

export const siteConfig = {
    name: 'Ndifreke Asuquo',
    role: 'Full-Stack Engineer',
    location: 'Isle of Man, UK',
    email: 'asuquondifreke06@gmail.com',
    github: 'https://github.com/Frekeasuquo',
    linkedin: 'https://linkedin.com/in/ndifreke-asuquo',
    cv: '/Ndifreke_Asuquo_CV.pdf',
};

export const terminalLines = [
    ['$ whoami', 'Ndifreke_asuquo — full-stack engineer'],
    ['$ uptime --experience', '5+ years shipping production web systems'],
    ['$ status', '✓ available for new opportunities'],
] as const;

export const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Redux', 'TailwindCSS', 'SASS'],
    'Backend & Data': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs', 'Firebase'],
    'Cloud & DevOps': ['AWS', 'Oracle Cloud', 'Docker', 'GitHub Actions', 'CI/CD'],
    'Testing & Tooling': ['Jest', 'Postman', 'TDD', 'React Testing Library', 'AI-assisted development'],
} as const;

export const projects: readonly Project[] = [
    {
        slug: 'oapp',
        title: 'OAPP — Marketplace & Ordering Platform',
        role: 'Solo build · architecture, backend & deployment',
        description: 'A full-stack ordering platform with secure checkout, Stripe payment intents and webhooks, and production deployment on AWS using S3 and CloudFront.',
        longDescription: 'OAPP is a production-oriented marketplace and ordering platform. The build covers the user-facing experience, backend services, payment lifecycle, asynchronous webhook handling and cloud delivery layer.',
        technologies: ['Node.js', 'MongoDB', 'Stripe API', 'AWS S3 / CloudFront'],
        url: 'https://arami.vercel.app/',
        highlights: [
        'Designed the application architecture across frontend, backend and data layers.',
        'Integrated Stripe payment intents and webhook-driven order state transitions.',
        'Used S3 and CloudFront to support scalable asset delivery.',
        ],
    },
    {
        slug: 'urhealth',
        title: 'URHealth — Appointment & Care Management',
        role: 'Solo build · full-stack & third-party integration',
        description: 'A healthcare scheduling dashboard for appointments and patient records, with Firebase serverless functions, Twilio notifications and role-based access controls.',
        longDescription: 'URHealth focuses on healthcare workflow management, combining scheduling, patient-facing information and operational notifications into a responsive dashboard experience.',
        technologies: ['Next.js', 'Firebase', 'Twilio API', 'Appwrite'],
        url: 'https://checkhealth.vercel.app/',
        highlights: [
        'Built responsive dashboard workflows with Next.js.',
        'Integrated Twilio for notification workflows and Firebase for backend capabilities.',
        'Implemented role-aware access patterns for sensitive application workflows.',
        ],
    },
];

export const experience: readonly Experience[] = [
    {
        period: 'Feb 2022 — Sep 2025',
        datetime: '2022-02/2025-09',
        title: 'Full-Stack Developer',
        company: 'GOMYCODE — Lagos / London (hybrid-remote)',
        achievements: [
        'Migrated core platform architecture to Next.js, improving traffic and SEO visibility by 30%.',
        'Built a full-stack e-commerce engine with Stripe webhooks and production reliability of 99.9% uptime.',
        'Established CI/CD and Git standards using GitHub Actions and delivered internal workshops on Git, AWS and Firebase.',
        ],    
    },
    {
        period: 'Sep 2019 — Oct 2021',
        datetime: '2019-09/2021-10',
        title: 'Frontend Developer',
        company: 'I & T Software Solution — Lagos',
        achievements: [
        'Reduced initial page-load latency by 30% through bundle and rendering optimisation.',
        'Built and maintained REST API endpoints in Node.js and MongoDB used across the product.',
        'Worked with DBAs and designers to resolve data and UI conflicts before release.',
        ],
    },
    {
        period: 'Jun 2018 — Jun 2019',
        datetime: '2018-06/2019-06',
        title: 'Technical Customer Support',
        company: 'Effadex Investment — Lagos',
        achievements: [
        'Translated user-reported issues into technical specifications for engineering teams.',
        'Maintained a 95%+ first-contact resolution rate across live product incidents.',
        ],
    },
];
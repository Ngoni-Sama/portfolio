import React from 'react'

// Project screenshots live in public/assets/projects/<id>/ and were pulled from each
// project's own repo (docs/screenshots, public, assets). Projects without real screenshots
// yet fall back to placeholder.jpg — run/deploy them and drop images into their folder.
const PLACEHOLDER = '/assets/projects/placeholder.jpg'

// Build a gallery of image paths for a project id, e.g. gallery('job-assistant', ['png','png']).
const gallery = (id, exts) => exts.map((ext, i) => `/assets/projects/${id}/${String(i + 1).padStart(2, '0')}.${ext}`)

const getProjects = () => {
  return [
    {
        id: 'loc8',
        title: 'Loc8 Marketplace',
        image: '/assets/projects/loc8/01.png',
        images: gallery('loc8', ['png','png','png']),
        link: '/projects/loc8',
        tech: 'Next.js',
        techMore: 'Next.js | Cloudflare',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A service marketplace for Zimbabwe that connects customers with local service providers. Built on Next.js 15 with a Cloudflare D1 (SQLite) database via Drizzle ORM, authentication through Auth.js, and Stripe for payments (Paynow integration planned).',
        techStack: [
            'Next.js 15', 'Cloudflare D1', 'Drizzle ORM', 'Auth.js', 'Stripe', 'Tailwind CSS'
        ]
    },
    {
        id: 'pos-system',
        title: 'Retail POS System',
        image: '/assets/projects/pos-system/01.png',
        images: gallery('pos-system', ['png','png','png','png','png']),
        link: '/projects/pos-system',
        tech: 'Cloudflare',
        techMore: 'Cloudflare Workers | Pages',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A cloud-native point-of-sale system for retailers built on Cloudflare Workers and Pages. It delivers a full sales vertical slice with a first-run register bootstrap and stubbed ZIMRA fiscalisation for Zimbabwe tax compliance.',
        techStack: [
            'Cloudflare Workers', 'Cloudflare Pages', 'D1', 'TypeScript', 'ZIMRA'
        ]
    },
    {
        id: 'school-portal',
        title: 'School Management Portal',
        image: '/assets/projects/school-portal/01.png',
        images: gallery('school-portal', ['png','png','png','png','png','png','png']),
        link: '/projects/school-portal',
        tech: 'Next.js',
        techMore: 'Next.js | Prisma',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A multi-tenant school management portal with role-based access control for administrators, teachers, students and guardians. Built with Next.js 16, Prisma 7 and Auth.js v5 on a Neon Postgres database. Covers dashboards, students, attendance, fees, library and leaderboards.',
        techStack: [
            'Next.js 16', 'Prisma 7', 'Auth.js v5', 'Neon Postgres', 'Tailwind CSS'
        ]
    },
    {
        id: 'warthog-portal',
        title: 'Warthog Academy Portal',
        image: '/assets/projects/warthog-portal/01.png',
        images: gallery('warthog-portal', ['png','png','png','png','png']),
        link: '/projects/warthog-portal',
        tech: 'Next.js',
        techMore: 'Next.js | MariaDB',
        liveDemo: '#', // TODO: add live URL (portal.warthogacademy.co.zw pending)
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A self-hosted school management system for Warthog Academy, adapted from my multi-tenant school portal and re-platformed from Neon Postgres onto a local MariaDB instance for on-premise hosting.',
        techStack: [
            'Next.js', 'Prisma', 'MariaDB', 'Auth.js', 'Tailwind CSS'
        ]
    },
    {
        id: 'warthog-site',
        title: 'Warthog Academy Website',
        image: '/assets/projects/warthog-site/01.jpg',
        images: gallery('warthog-site', ['jpg','jpg','jpg','png','jpg','jpg']),
        link: '/projects/warthog-site',
        tech: 'Web',
        techMore: 'HTML | CSS | JS',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: 'https://github.com/Ngoni-Sama/warthogacademy',
        desc: 'A glassmorphism marketing website for Warthog Academy showcasing the school, its programmes and admissions. Static, fast and fully responsive.',
        techStack: [
            'HTML5', 'CSS3', 'JavaScript', 'Glassmorphism'
        ]
    },
    {
        id: 'swapsphere',
        title: 'SwapSphere',
        image: '/assets/projects/swapsphere/01.png',
        images: gallery('swapsphere', ['png','png']),
        link: '/projects/swapsphere',
        tech: 'React Native',
        techMore: 'Expo | Node.js',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: 'https://github.com/Ngoni-Sama/Peer2Peer', // private repo
        desc: 'A peer-to-peer intercity debt-swap mobile app that lets users offset money transfers across cities without physically moving cash. Built with Expo / React Native and a Node/Express API backed by Prisma and Neon Postgres.',
        techStack: [
            'React Native', 'Expo', 'Node.js', 'Express', 'Prisma', 'Neon Postgres'
        ]
    },
    {
        id: 'job-assistant',
        title: 'Job Assistant',
        image: '/assets/projects/job-assistant/01.png',
        images: gallery('job-assistant', ['png','png','png','png','png']),
        link: '/projects/job-assistant',
        tech: 'AI / Next.js',
        techMore: 'Next.js | Cloudflare Worker',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: 'https://github.com/Ngoni-Sama/job-assistant',
        desc: 'An AI-powered job-matching platform that pairs candidates with roles through a swipe-to-match flow, nearby jobs and a built-in CV builder. Structured as a monorepo combining a Cloudflare Worker API with a Next.js 16 front end.',
        techStack: [
            'Next.js 16', 'Cloudflare Workers', 'AI', 'TypeScript'
        ]
    },
    {
        id: 'samaritanlink',
        title: 'SamaritanLink (MA360)',
        image: '/assets/projects/samaritanlink/01.png',
        images: gallery('samaritanlink', ['png','png','png']),
        link: '/projects/samaritanlink',
        tech: 'Next.js',
        techMore: 'Next.js | Vercel',
        liveDemo: 'https://ma360-samaritanlink.vercel.app',
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A digital-health MVP connecting patients with care and community health support, built with Next.js as a proof-of-concept and deployed on Vercel.',
        techStack: [
            'Next.js', 'React', 'Tailwind CSS', 'Vercel'
        ]
    },
    {
        id: 'talentcard',
        title: 'TalentCard',
        image: '/assets/projects/talentcard/01.png',
        images: gallery('talentcard', ['png','png','png','png']),
        link: '/projects/talentcard',
        tech: 'Laravel',
        techMore: 'Laravel 12 | PHP',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'An AI job-matching platform rebuilt greenfield on Laravel 12, featuring OAuth social login via Laravel Socialite and a test-driven codebase.',
        techStack: [
            'Laravel 12', 'PHP', 'MySQL', 'Socialite'
        ]
    },
    {
        id: 'caselaw-rag',
        title: 'Labour Caselaw RAG',
        image: '/assets/projects/caselaw-rag/01.png',
        images: gallery('caselaw-rag', ['png','png','png']),
        link: '/projects/caselaw-rag',
        tech: 'AI / RAG',
        techMore: 'Cloudflare AutoRAG',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A retrieval-augmented AI assistant over a Labour-law case corpus using Cloudflare AutoRAG vector search, returning answers with source-card citations.',
        techStack: [
            'Cloudflare AutoRAG', 'Vector Search', 'RAG', 'Workers'
        ]
    },
    {
        id: 'meeting-notes-bot',
        title: 'Meeting Notes Bot',
        image: '/assets/projects/meeting-notes-bot/01.png',
        images: gallery('meeting-notes-bot', ['png','png']),
        link: '/projects/meeting-notes-bot',
        tech: 'AI',
        techMore: 'Vexa | Cloudflare Worker',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A meeting-notes bot that automatically joins Microsoft Teams and Google Meet calls, transcribes them with Vexa, and DMs concise summaries to attendees via a Cloudflare Worker.',
        techStack: [
            'Vexa', 'Cloudflare Workers', 'Transcription', 'AI'
        ]
    },
    {
        id: 'mattermost-mcp',
        title: 'Mattermost MCP Chat',
        image: '/assets/projects/mattermost-mcp/01.png',
        images: gallery('mattermost-mcp', ['png']),
        link: '/projects/mattermost-mcp',
        tech: 'AI / MCP',
        techMore: 'MCP | Mattermost',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A Model Context Protocol (MCP) integration that wires an AI assistant into Mattermost, spanning an MCP client and an auto-deployed MCP server.',
        techStack: [
            'MCP', 'Mattermost', 'Node.js', 'TypeScript'
        ]
    },
    {
        id: 'blog-publisher',
        title: 'Multi-Blog Publisher',
        image: PLACEHOLDER,
        images: [PLACEHOLDER],
        link: '/projects/blog-publisher',
        tech: 'Cloudflare',
        techMore: 'Cloudflare Worker | Ghost',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A Cloudflare Worker that automatically publishes content to seven Ghost blogs from a central configuration, with a glassmorphism admin dashboard and configuration stored in Cloudflare KV.',
        techStack: [
            'Cloudflare Workers', 'Cloudflare KV', 'Ghost API', 'JavaScript'
        ]
    },
    {
        id: 'canchem-jobs',
        title: 'CanChem Jobs Portal',
        image: '/assets/projects/canchem-jobs/01.png',
        images: gallery('canchem-jobs', ['png','png']),
        link: '/projects/canchem-jobs',
        tech: 'Node.js',
        techMore: 'Node.js',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A careers portal for CanChem with an admin area for posting jobs and an email pipeline over Microsoft 365 SMTP. Node-based and hosted on Nivacity.',
        techStack: [
            'Node.js', 'M365 SMTP', 'JavaScript'
        ]
    },
    {
        id: 'pastpapers',
        title: 'Past Papers Downloader',
        image: '/assets/projects/pastpapers/01.png',
        images: gallery('pastpapers', ['png']),
        link: '/projects/pastpapers',
        tech: 'Python',
        techMore: 'Python',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A resumable Python tool that bulk-downloads Cambridge past exam papers from a flat store, built to handle large multi-subject runs without re-fetching completed work.',
        techStack: [
            'Python', 'Requests', 'CLI'
        ]
    }
  ]
}

export default getProjects

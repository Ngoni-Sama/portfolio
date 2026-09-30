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
        liveDemo: 'https://loc8.ma360-ngoni.workers.dev/',
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
        liveDemo: 'https://pos-system-zimra.vercel.app/',
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
        liveDemo: 'https://sms-lz204c1me-ngoni-samas-projects.vercel.app/',
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
        liveDemo: 'https://www.warthogacademy.co.zw',
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
        liveDemo: 'https://peer2peer-web.vercel.app',
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
        liveDemo: 'https://job-assistant-frontend-tau.vercel.app/',
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
        liveDemo: 'https://v1.talentcard.co.za',
        gitHubLink: '#', // TODO: add repo URL
        desc: 'An AI job-matching platform rebuilt greenfield on Laravel 12. Full v1 feature parity plus new capabilities across five milestones: applications, availability, notifications and messaging; company entities with employer vetting; monetization (subscription plans, quota, a reveal-credit ledger and multi-gateway payments — Stripe, PayPal, Razorpay, FlutterWave and offline, with 15% VAT); background checks with verified badges; and a full admin panel. Test-driven, with 162 passing tests.',
        techStack: [
            'Laravel 12', 'PHP', 'MySQL', 'Socialite', 'Stripe', 'PayPal'
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
        liveDemo: 'https://dash.paraat.ai/dashboard/chat?agent=21',
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A retrieval-augmented AI assistant over a Labour-law case corpus using Cloudflare AutoRAG vector search, returning answers with source-card citations. Runs as an agent on the Paraat AI dashboard.',
        techStack: [
            'Cloudflare AutoRAG', 'Vector Search', 'RAG', 'Workers'
        ]
    },
    {
        id: 'paraat',
        title: 'Paraat AI Dashboard',
        image: '/assets/projects/paraat/01.png',
        images: gallery('paraat', ['png','png']),
        link: '/projects/paraat',
        tech: 'AI / RAG',
        techMore: 'Cloudflare | RAG agents',
        liveDemo: 'https://dash.paraat.ai',
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A multi-agent AI dashboard that serves domain-specific retrieval-augmented assistants behind a single chat UI — including the Labour CaseLaw agent and a School Online G12 curriculum & past-papers agent — built on Cloudflare.',
        techStack: [
            'Cloudflare', 'RAG', 'Workers AI', 'Next.js'
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
        image: '/assets/projects/blog-publisher/01.png',
        images: gallery('blog-publisher', ['png','png','png']),
        link: '/projects/blog-publisher',
        tech: 'Cloudflare',
        techMore: 'Cloudflare Worker | Ghost',
        liveDemo: 'https://dynamic-blog-worker.elula.workers.dev/admin', // login-gated admin
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
        liveDemo: 'https://canchem.co.zw',
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
    },
    {
        id: 'folio',
        title: 'Folio E-Book Reader',
        image: '/assets/projects/folio/01.png',
        images: gallery('folio', ['png','png']),
        link: '/projects/folio',
        tech: 'React',
        techMore: 'React | Vite | Turborepo',
        liveDemo: '#', // TODO: add live URL (Cloudflare Pages)
        gitHubLink: '#', // TODO: add repo URL
        desc: 'A DeepSeek-inspired, tile-based reader for public-domain books. A pnpm + Turborepo monorepo with a framework-agnostic core (Project Gutenberg / gutendex and Open Library adapters, parallel search with dedupe, CFI progress and Markdown-notes helpers) and a React 18 + Vite web app: a deduped tile-grid search, an EPUB reader with themes, font sizing, highlights and note export, plus Library and History — all persisted in IndexedDB.',
        techStack: [
            'React 18', 'Vite', 'Turborepo', 'Zustand', 'TanStack Query', 'epub.js', 'Cloudflare Pages'
        ]
    },
    {
        id: 'coconut-lounge',
        title: 'Coconut Lounge Menu',
        image: '/assets/projects/coconut-lounge/02.png',
        images: gallery('coconut-lounge', ['png','png','png']),
        link: '/projects/coconut-lounge',
        tech: 'React Native',
        techMore: 'Expo | React Native',
        liveDemo: '#', // TODO: add live URL
        gitHubLink: '#', // TODO: add repo URL
        desc: 'An offline Android kiosk menu app for the Coconut Lounge restaurant, running on 40 tablets in device-owner kiosk mode. Built with Expo SDK 57 and a custom Reanimated 3D page-turn (finger-follow, spring-back and flick), a glassmorphism UI, a data-driven responsive menu that reflows between portrait and landscape, and offline code-book activation with lockout backoff.',
        techStack: [
            'Expo SDK 57', 'React Native', 'Reanimated 4', 'TypeScript', 'expo-secure-store'
        ]
    }
  ]
}

export default getProjects

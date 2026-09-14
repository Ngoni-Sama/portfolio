import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ngoni Maphosa | Resume</title>
        <meta
          name='description'
          content='Full-stack engineer building web, mobile and AI-powered products end to end.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ngoni Maphosa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ngonidzashe-maphosa-737078138/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Ngoni-Sama'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Full-Stack Engineer <span className='px-1'>|</span> AI Integrations{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Full-Stack Engineer</p>
            <p className='py-2'>AI Integrations</p>
          </div>
        </div>
        <p>
          Full-stack engineer who designs, builds and ships production products
          across web, mobile and AI. Comfortable owning a project end to end —
          from Next.js and React Native front ends to Cloudflare Workers, Node.js,
          Laravel and Python back ends, with SQL and serverless databases. Recent
          work spans marketplaces, retail POS, school management platforms, a P2P
          fintech app and AI systems (RAG, MCP integrations, transcription bots).
          Pragmatic, delivery-focused, and equally at home working solo or
          alongside a small team.
        </p>

        {/* Languages and Technologies */}
        <div className=' py-4'>
          <h5 className=' mt-8 text-slate-500 font-bold text-xl'>LANGUAGES AND TECHNOLOGIES</h5>
          <p className='py-2'>

            <span className='font-bold text-slate-600'>Proficient: </span>
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span> React
            <span className='px-2'>|</span>Next.js
            <span className='px-2'>|</span>React Native / Expo
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span>Node.js
            <span className='px-2'>|</span>Express
            <span className='px-2'>|</span>Cloudflare Workers
            <span className='px-2'>|</span>Prisma
            <span className='px-2'>|</span>Drizzle
            <span className='px-2'>|</span>PostgreSQL
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span> HTML5
            <span className='px-2'>|</span> CSS3
          </p>
          <p className=''>
            <span className='font-bold text-slate-600'>Also works with: </span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Laravel / PHP
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>MariaDB / MySQL
            <span className='px-2'>|</span>Stripe
            <span className='px-2'>|</span>LLMs / RAG
            <span className='px-2'>|</span>MCP
          </p>
        </div>

        {/* Skills */}
        <div className=' py-4'>
          <h5 className=' mt-8 text-slate-500 font-bold text-xl'>SKILLS</h5>
          <p className='py-2'>Full-Stack Web Development
            <span className='px-2'>|</span>Mobile Development
            <span className='px-2'>|</span>AI / LLM Integration
            <span className='px-2'>|</span>System Design
            <span className='px-2'>|</span>Database Design & Migrations
            <span className='px-2'>|</span>API Design
            <span className='px-2'>|</span>Serverless & Edge (Cloudflare)
            <span className='px-2'>|</span>Payments Integration
            <span className='px-2'>|</span>Authentication & RBAC
            <span className='px-2'>|</span>Shipping MVPs
          </p>
        </div>

        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Professional Experience
        </h5>
        {/* TODO: replace placeholder dates below with your real employment history. */}
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Full-Stack Engineer &mdash; AI &amp; Product Tooling
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Software Engineer (TODO: dates)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Built AI-powered internal tooling including a Mattermost MCP chat integration,
              a meeting-notes bot that auto-joins Teams/Meet calls and transcribes them with Vexa,
              and a Labour-law RAG assistant on Cloudflare AutoRAG.
            </li>
            <li>
              Delivered client web platforms end to end — a CanChem careers portal (Node.js, M365 SMTP),
              a multi-blog publisher on Cloudflare Workers/KV feeding seven Ghost sites, and a
              greenfield Laravel 12 rebuild of the TalentCard job-matching platform.
            </li>
            <li>
              Owned architecture, database design and deployments across Cloudflare, Vercel and
              self-hosted (Nivacity) environments.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Independent / Freelance Full-Stack Engineer
            </span>
            <span className='px-2'>|</span>Zimbabwe &amp; Remote
          </p>
          <p className='py-1 italic'>Founder / Engineer (TODO: dates)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Built Loc8, a Zimbabwe service marketplace on Next.js 15 + Cloudflare D1/Drizzle with Auth.js and Stripe.</li>
            <li>Shipped a cloud-native retail POS on Cloudflare Workers/Pages with stubbed ZIMRA fiscalisation.</li>
            <li>Developed a multi-tenant school management portal (Next.js 16, Prisma 7, Auth.js v5, Neon Postgres) with role-based access control, and adapted it for on-prem MariaDB hosting for Warthog Academy.</li>
            <li>Built SwapSphere, a P2P intercity debt-swap mobile app (Expo/React Native + Node/Express + Prisma/Neon).</li>
            <li>Created Job Assistant, an AI job-matching monorepo (Cloudflare Worker + Next.js 16) with swipe-to-match and a CV builder, and SamaritanLink, a digital-health MVP on Next.js/Vercel.</li>
          </ul>
        </div>


        {/* Personal Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}

      </div>
    </>
  );
};

export default resume;

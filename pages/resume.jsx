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
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Elula Online
            </span>
            <span className='px-2'>|</span>South Africa (Remote)
          </p>
          <p className='py-1 italic'>Senior Backend Developer &amp; Technical Coordinator (2024 &ndash; Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Architected and maintain a multi-tenant Laravel/PHP SaaS backend with company-level access
              control, Auth0 SSO, PostgreSQL and subscription billing — serving multiple concurrent
              enterprise clients from a single codebase.
            </li>
            <li>
              Built an AI document search &amp; retrieval service on Cloudflare AutoRAG (vector search) and
              Workers AI (Llama-3.1-8B) returning structured, source-cited summaries — productised as the
              Labour CaseLaw agent on the Paraat AI dashboard.
            </li>
            <li>
              Engineered Model Context Protocol (MCP) agent backends (multi-turn persistence, structured
              responses, PII-redacted logging, retry/backoff) and custom MCP servers deployed to Northflank
              with CI/CD, plus a Cloudflare Email Routing pipeline and a meeting-notes transcription bot.
            </li>
            <li>
              Led OWASP ZAP security remediation (SecurityHeaders middleware, secure cookies) to an A grade,
              and coordinated a 7-person distributed team via ERPNext and Mattermost.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Lessly.io
            </span>
            <span className='px-2'>|</span>Australia (Remote)
          </p>
          <p className='py-1 italic'>Software Engineer &mdash; Independent Contractor (Oct 2024 &ndash; Jan 2025)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Built a full-stack event management platform — a FastAPI backend (RESTful CRUD, Supabase,
              validation) with a React + TypeScript + Tailwind frontend using Redux Toolkit.
            </li>
            <li>
              Used GPT-4 mini / GPT-3.5 to accelerate development from design ideas to working code, and
              wrote unit tests across backend endpoints and frontend components.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Pocket-Labs Technologies
            </span>
            <span className='px-2'>|</span>Bulawayo, ZW
          </p>
          <p className='py-1 italic'>Mobile &amp; AI Apps Developer &mdash; Independent Contractor (2023 &ndash; Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Build AI-driven mobile apps with ML models and Firebase real-time/cloud services for
              personalized, predictive experiences.
            </li>
            <li>
              Shipped products including Loc8 (Cloudflare D1/Drizzle marketplace), a cloud-native retail POS
              (ZIMRA-ready), a multi-tenant school portal (Next.js/Prisma/Neon, MariaDB build for Warthog
              Academy), SwapSphere (Expo P2P fintech) and Job Assistant (AI job-matching).
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CanChem Hygiene Services
            </span>
            <span className='px-2'>|</span>Harare, ZW
          </p>
          <p className='py-1 italic'>IT Consultant (2022 &ndash; Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Set up and configured the Sage Evolution accounting system (installation, GL/AR/AP/inventory
              imports, SQL) with client training, go-live support and network setup.
            </li>
            <li>
              Built the CanChem careers portal (Node.js, Microsoft 365 SMTP) with an admin area for posting jobs.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ZimHope Investments
            </span>
            <span className='px-2'>|</span>Harare, ZW
          </p>
          <p className='py-1 italic'>Junior Developer, C++ &amp; JavaScript (Jan &ndash; Aug 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed C++ and JavaScript solutions with automated stock updates and predictive analytics.
            </li>
            <li>
              Contributed to a system architecture redesign to improve application performance and scalability.
            </li>
          </ul>
        </div>

        {/* Education */}
        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Education
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            BSc (Hons) Computer Science
            </span>
            <span className='px-2'>|</span>National University of Science &amp; Technology (NUST)
          </p>
          <p className='py-1 italic'>2018 &ndash; 2022</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Coursework: Data Structures, Algorithms, Computer Architecture, Operating Systems and
              Software Engineering; strong proficiency in C, C++, Java and Python.
            </li>
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

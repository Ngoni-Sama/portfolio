import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ngoni Maphosa | Full-Stack Engineer</title>
        <meta name="description" content="I’m a full-stack engineer building web, mobile and AI-powered products end to end — from Next.js front ends to Cloudflare and Node back ends." />

        <meta property="og:title" content="Ngoni Maphosa | Full-Stack Engineer" />
        <meta property="og:type" content="website" />
        {/* TODO: add a real OG image (e.g. /assets/og-image.png) and set og:url to your deployed domain */}
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://ngonimaphosa.vercel.app" />

        <meta property="og:description" content="I’m a full-stack engineer building web, mobile and AI-powered products end to end — from Next.js front ends to Cloudflare and Node back ends." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ngoni Maphosa"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className=' px-4 md:px-12'>
        <Main />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

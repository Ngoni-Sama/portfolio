import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Title from './Title';

const About = () => {
  // const one = "I specialize in developing responsive web apps using technologies such as React, Next JS, JavaScript, Java and Tailwind. I use Node JS and Express to connect to the backend or use Next JS's inbuilt API routing service. I’m proficient in using databases such as SQL and non-relational databases such as MongoDB and Firebase along with other mobile-friendly databases such as SQLite."
  // const two = "I started programming back in 2013 developing single-page web apps using JavaScript, JQuery, PHP,  MySQL, HTML, CSS and AJAX. I then transitioned into developing Android apps using JAVA. I built quite a number of apps as a freelancer and helped college students with their projects."
  // const three = "I was once a part-time tutor at a private Senior School teaching programming fundamentals in JAVA and C#."
  

  const one = "I'm a full-stack engineer who ships web, mobile and AI-powered products end to end — building responsive front ends with React, Next.js and Tailwind CSS."
  const two = "On the back end I work across Cloudflare Workers, Node.js/Express, Laravel and Python, and I integrate LLMs, RAG and automation into real-world workflows."
  const three = "I'm comfortable across SQL and serverless databases — Postgres (Neon), Cloudflare D1, MariaDB, MySQL and Firebase — with Prisma and Drizzle as my go-to ORMs."

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <Title title="About" sub="Who Am I" />
          <p className='py-2 text-gray-600'>
            {one}
          </p>
          <p className='py-2 text-gray-600'>
            {two}
          </p>
          <p className='py-2 text-gray-600'>
            {three}
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

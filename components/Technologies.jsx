import Image from 'next/image';
import React from 'react';
import Title from './Title';

const Technologies = () => {
  const data = [
    {
      name: 'Python',
      icon: '/assets/skills/python-logo.png',
    },
    {
      name: 'React',
      icon: '/assets/skills/react.png'
    },
    {
      name: 'Django',
      icon: '/assets/skills/django.png',
    },
    {
      name: 'Figma',
      icon: '/assets/skills/figma-logo.png',
    },
    {
      name: 'Git',
      icon: '/assets/skills/git.png',
    },
    {
      name: 'React Native',
      icon: '/assets/skills/react.png',
    },
    {
      name: 'Expo',
      icon: '/assets/skills/expo-logo.png',
    },
    {
      name: 'SQL',
      icon: '/assets/skills/sql-logo.png',
    },
    {
      name: 'SQLite',
      icon: '/assets/skills/sqlite.png',
    },
    {
      name: 'JavaScript',
      icon: '/assets/skills/javascript.png',
    },
    {
      name: 'Java',
      icon: '/assets/skills/java1.jpg'
    },
    {
      name: 'Next JS',
      icon: '/assets/skills/nextjs.png'
    },
    {
      name: 'Node JS',
      icon: '/assets/skills/node.png'
    },
    {
      name: 'MongoDB',
      icon: '/assets/skills/mongo.png'
    },
    {
      name: 'Tailwind CSS',
      icon: '/assets/skills/tailwind.png'
    },
    {
      name: 'Firebase',
      icon: '/assets/skills/firebase.png'
    },
    {
      name: 'Github',
      icon: '/assets/skills/github1.png'
    },
    {
      name: 'Android',
      icon: '/assets/skills/android1.png'
    },
    {
      name: 'HTML5',
      icon: '/assets/skills/html.png'
    },
    {
      name: 'CSS3',
      icon: '/assets/skills/css.png'
    },
    // {
    //   name: 'SQL',
    //   icon: '/assets/skills/sql.png'
    // },
  ]
  return (
    <div id='technologies' className='w-full lg:h-screen p-2 mt-12'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <Title title='Languages and Technologies' sub='What I Can Do' />
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
          {
            data?.map(({name,icon}, index) => (
              <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image className=' object-contain h-12 w-12 md:h-20 md:w-20' src={icon} width={400} height={400} alt='/' />
                  </div>
                  <div className='flex flex-col text-sm md:text-base items-center justify-center'>
                    <h3>{name}</h3>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Technologies;

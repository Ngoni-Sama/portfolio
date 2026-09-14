import Image from 'next/image';
import React from 'react';
import Title from './Title';

const Skills
 = () => {
  const data = [
    "Project Management", 
    "Product Designing", 
    "Figma Wire Frames",
    "Designing Algorithms",
    "System Designing", 
    "Project Structuring", 
    "Managing Developers", 
    "Assigning Responsibilities", 
  ]
  return (
    <div id='skills' className='w-full lg:h-screen p-2 mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <Title title='Skills' sub='My Skills' />
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            data?.map((name, index) => (
              <div key={index} className=' py-12 px-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <h3 className=' text-slate-600'>{name}</h3>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Skills
;

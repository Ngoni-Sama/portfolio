import Link from 'next/link'
import React from 'react'
import EditableImage from './EditableImage'

const ProjectItem = ({ id, title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#7e22ce] to-[#be185d]'>
      <EditableImage
        id={`thumb:${id}`}
        src={backgroundImg}
        alt={title}
        className='w-full'
        imgClassName='h-auto w-full object-cover rounded-xl group-hover:opacity-10'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem

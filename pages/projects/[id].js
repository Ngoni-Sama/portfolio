import getProjects from '@/data/projects'
import Link from 'next/link'
import React, { useState, useEffect, useCallback } from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import EditableImage from '@/components/EditableImage'
import { withBase } from '@/components/basePath'

const Projects = ({ project }) => {
  const { id, title, image, images, techMore, liveDemo, gitHubLink, desc, techStack } = project[0]

  // Gallery images: use the project's images array, falling back to the single hero image.
  const gallery = (images && images.length ? images : [image]).filter(Boolean)
  const hasGallery = gallery.length > 1

  // Lightbox state: null when closed, otherwise the index of the open image.
  const [lightbox, setLightbox] = useState(null)
  const isOpen = lightbox !== null

  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(
    (e) => { e && e.stopPropagation(); setLightbox((i) => (i + 1) % gallery.length) },
    [gallery.length]
  )
  const prev = useCallback(
    (e) => { e && e.stopPropagation(); setLightbox((i) => (i - 1 + gallery.length) % gallery.length) },
    [gallery.length]
  )

  // Resolve a gallery image, honoring any per-image override saved by the
  // "edit images" feature so the lightbox matches the thumbnails.
  const resolvedSrc = (i) => {
    if (typeof window !== 'undefined') {
      try {
        const v = localStorage.getItem(`portfolio:img:gallery:${id}:${i}`)
        if (v) return v
      } catch (_) {}
    }
    return withBase(gallery[i])
  }

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, next, prev])

  return (
    <div className='w-full'>
      <div className=' w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 pointer-events-none' />
        <EditableImage id={`hero:${id}`} src={image} alt={title} fill />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{techMore}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className=' text-slate-600 text-lg mt-8'>Project</p>
          <h2 className=' text-slate-600'>Overview</h2>
          <p className=' mt-8 text-slate-600 text-lg'>{desc}</p>
          <div className='mt-12'>
            <a href={gitHubLink} target='_blank' rel='noreferrer'>
              <button className=' bg-red-500 px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
            <a href={liveDemo} target='_blank' rel='noreferrer'>
              <button className='px-8 py-2 mt-4'>Demo</button>
            </a>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2 px-4'>
            <p className=' text-slate-600 text-lg font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {
                techStack?.map((item, index) => (
                  <p key={index} className='text-gray-600 text-lg gap-4 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> {item}
                  </p>
                ))
              }
            </div>
          </div>
        </div>

        {/* Play-Store-style screenshot gallery */}
        {hasGallery && (
          <div className='col-span-5'>
            <h2 className='text-slate-600 pb-4'>Screenshots</h2>
            <div className='flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory'>
              {gallery.map((src, index) => (
                <EditableImage
                  key={index}
                  id={`gallery:${id}:${index}`}
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                  onClick={() => setLightbox(index)}
                  className='snap-start shrink-0 rounded-xl overflow-hidden shadow-lg shadow-gray-400 bg-gray-100 hover:scale-[1.02] ease-in duration-200 cursor-pointer'
                  imgClassName='h-[360px] w-auto max-w-none object-contain block'
                />
              ))}
            </div>
          </div>
        )}

        <Link href='/#projects' className='col-span-5'>
          <p className='underline uppercase text-lg font-semibold text-slate-600 cursor-pointer'>Back</p>
        </Link>
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4'
          onClick={close}
        >
          <button
            onClick={close}
            className='absolute top-5 right-5 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 ease-in duration-200'
            aria-label='Close'
          >
            <AiOutlineClose size={24} />
          </button>

          {hasGallery && (
            <button
              onClick={prev}
              className='absolute left-3 md:left-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 ease-in duration-200'
              aria-label='Previous'
            >
              <AiOutlineLeft size={28} />
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedSrc(lightbox)}
            alt={`${title} screenshot ${lightbox + 1}`}
            className='max-h-[88vh] max-w-[92vw] object-contain rounded-lg'
            onClick={(e) => e.stopPropagation()}
          />

          {hasGallery && (
            <button
              onClick={next}
              className='absolute right-3 md:right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 ease-in duration-200'
              aria-label='Next'
            >
              <AiOutlineRight size={28} />
            </button>
          )}

          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm'>
            {lightbox + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = getProjects().map(item => ({
    params: {
      id: item.id
    }
  }))

  return {
      paths,
      fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const project = getProjects().filter(item => item.id === id)

  return {
    props: {
      project
    }
  }
}

export default Projects

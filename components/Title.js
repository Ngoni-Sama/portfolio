import React from 'react'

const Title = ({ title, sub }) => {
  return (
    <div>
        <p className='uppercase text-xl tracking-widest text-purple-700'>
            {title}
        </p>
        <h2 className='py-4 text-slate-600'>{sub}</h2>
    </div>
  )
}

export default Title
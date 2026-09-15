import React from 'react'
import { useEdit } from './EditContext'

// Floating button that turns "edit images" mode on/off site-wide.
const EditToggle = () => {
  const { editing, toggle } = useEdit()
  return (
    <button
      type='button'
      onClick={toggle}
      title='Replace any image (saved in this browser)'
      className={`fixed bottom-5 right-5 z-[150] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition ease-in duration-200 ${
        editing
          ? 'bg-purple-700 text-white hover:bg-purple-800'
          : 'bg-white text-gray-800 hover:scale-105 shadow-gray-400'
      }`}
    >
      {editing ? '✓ Done editing' : '✎ Edit images'}
    </button>
  )
}

export default EditToggle

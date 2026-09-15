import React from 'react'
import { useEdit } from './EditContext'

// Floating button that turns edit mode on/off site-wide (PIN-gated).
const EditToggle = () => {
  const { editing, requestToggle } = useEdit()
  return (
    <button
      type='button'
      onClick={requestToggle}
      title='Edit images and text (PIN required)'
      className={`no-print fixed bottom-5 right-5 z-[150] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition ease-in duration-200 ${
        editing
          ? 'bg-purple-700 text-white hover:bg-purple-800'
          : 'bg-white text-gray-800 hover:scale-105 shadow-gray-400'
      }`}
    >
      {editing ? '✓ Done editing' : '✎ Edit'}
    </button>
  )
}

export default EditToggle

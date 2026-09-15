import React, { useEffect, useRef, useState } from 'react'
import { useEdit } from './EditContext'

const BOX_COUNT = 8 // shown as 8 boxes; the real PIN is shorter

const PinModal = () => {
  const { promptOpen, submitPin, closePrompt } = useEdit()
  const [digits, setDigits] = useState(Array(BOX_COUNT).fill(''))
  const [error, setError] = useState(false)
  const refs = useRef([])

  useEffect(() => {
    if (promptOpen) {
      setDigits(Array(BOX_COUNT).fill(''))
      setError(false)
      setTimeout(() => refs.current[0] && refs.current[0].focus(), 50)
    }
  }, [promptOpen])

  if (!promptOpen) return null

  const setAt = (i, v) => {
    const next = [...digits]
    next[i] = v
    setDigits(next)
  }

  const onChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, '').slice(-1)
    setAt(i, v)
    setError(false)
    if (v && i < BOX_COUNT - 1) refs.current[i + 1] && refs.current[i + 1].focus()
  }

  const onKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      refs.current[i - 1] && refs.current[i - 1].focus()
    } else if (e.key === 'Enter') {
      submit()
    }
  }

  const submit = () => {
    const ok = submitPin(digits.join(''))
    if (!ok) {
      setError(true)
      setDigits(Array(BOX_COUNT).fill(''))
      refs.current[0] && refs.current[0].focus()
    }
  }

  return (
    <div
      className='fixed inset-0 z-[300] bg-black/60 flex items-center justify-center p-4'
      onClick={closePrompt}
    >
      <div
        className='bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-lg font-bold text-gray-800'>Enter PIN</h3>
        <p className='text-sm text-gray-500 mt-1 mb-5'>Enter your PIN to edit this site.</p>
        <div className='flex justify-between gap-1.5 sm:gap-2'>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              type='password'
              inputMode='numeric'
              maxLength={1}
              value={d}
              onChange={(e) => onChange(i, e)}
              onKeyDown={(e) => onKeyDown(i, e)}
              className={`w-9 h-12 sm:w-10 sm:h-14 text-center text-xl rounded-lg border-2 outline-none focus:border-purple-500 ${
                error ? 'border-red-400' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
        {error && <p className='text-red-500 text-sm mt-3'>Incorrect PIN. Try again.</p>}
        <div className='flex gap-3 mt-6'>
          <button
            onClick={submit}
            className='flex-1 py-2.5 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 ease-in duration-200'
          >
            Unlock
          </button>
          <button
            onClick={closePrompt}
            className='px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 ease-in duration-200'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default PinModal

import React, { useEffect, useRef, useState } from 'react'
import { useEdit } from './EditContext'
import { withBase } from './basePath'

const KEY = (id) => `portfolio:img:${id}`

// Downscale + JPEG-compress an uploaded file so it fits comfortably in
// localStorage (which is ~5MB per origin) and loads fast.
function fileToCompressedDataURL(file, maxDim = 1400, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new window.Image()
    img.onload = () => {
      let { width, height } = img
      const scale = Math.min(1, maxDim / Math.max(width, height))
      width = Math.max(1, Math.round(width * scale))
      height = Math.max(1, Math.round(height * scale))
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(img, 0, 0, width, height)
      URL.revokeObjectURL(url)
      resolve(canvas.toDataURL('image/jpeg', quality))
    }
    img.onerror = (e) => {
      URL.revokeObjectURL(url)
      reject(e)
    }
    img.src = url
  })
}

/**
 * An <img> that the site owner can replace in "edit images" mode.
 * @param id        stable key used for the localStorage override
 * @param src       default image path (relative to /public)
 * @param fill      absolutely fill the parent (for hero backgrounds)
 * @param onClick   called when NOT editing (e.g. open a lightbox)
 */
const EditableImage = ({ id, src, alt = '', className = '', imgClassName = '', fill = false, onClick }) => {
  const { editing } = useEdit()
  const [override, setOverride] = useState(null)
  const [busy, setBusy] = useState(false)
  const inputRef = useRef(null)

  // Load any saved override after mount (keeps SSR/first render deterministic).
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY(id))
      if (v) setOverride(v)
    } catch (_) {}
  }, [id])

  const shown = override || withBase(src)

  async function onPick(e) {
    const file = e.target.files && e.target.files[0]
    e.target.value = '' // allow re-picking the same file later
    if (!file) return
    setBusy(true)
    try {
      const dataUrl = await fileToCompressedDataURL(file)
      localStorage.setItem(KEY(id), dataUrl)
      setOverride(dataUrl)
    } catch (err) {
      const quota = err && (err.name === 'QuotaExceededError' || /quota/i.test(String(err)))
      alert(quota
        ? 'That image is too large to save in this browser. Try a smaller one.'
        : 'Sorry, that image could not be loaded.')
    } finally {
      setBusy(false)
    }
  }

  function reset(e) {
    e.stopPropagation()
    try { localStorage.removeItem(KEY(id)) } catch (_) {}
    setOverride(null)
  }

  const wrapperCls = `${fill ? 'absolute inset-0' : 'relative'} ${editing ? 'ring-2 ring-purple-500 ring-offset-2' : ''} ${className}`
  const imgCls = fill ? `w-full h-full object-cover ${imgClassName}` : imgClassName

  return (
    <div
      className={wrapperCls}
      onClick={editing ? undefined : onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={shown} alt={alt} className={imgCls} />

      {editing && (
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/45 rounded-[inherit]'>
          <button
            type='button'
            onClick={(e) => { e.stopPropagation(); inputRef.current && inputRef.current.click() }}
            className='px-3 py-1.5 rounded-full bg-white/95 text-gray-800 text-xs font-semibold shadow hover:bg-white'
          >
            {busy ? 'Loading…' : override ? 'Replace photo' : 'Change photo'}
          </button>
          {override && (
            <button
              type='button'
              onClick={reset}
              className='px-3 py-1 rounded-full bg-black/50 text-white text-[11px] hover:bg-black/70'
            >
              Reset
            </button>
          )}
          <input ref={inputRef} type='file' accept='image/*' onChange={onPick} className='hidden' />
        </div>
      )}
    </div>
  )
}

export default EditableImage

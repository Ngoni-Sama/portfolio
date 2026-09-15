import React, { useEffect, useRef, useState } from 'react'
import { useEdit } from './EditContext'

const KEY = (id) => `portfolio:doc:${id}`

/**
 * A block of document text that the owner can edit in place (PIN-gated edit mode).
 * The edited HTML is saved to localStorage per id, so it persists in this browser.
 * On first load with no override it renders `children` (the default content).
 *
 * @param id   stable key for the localStorage override
 * @param as   element tag to render (default 'div')
 */
const EditableText = ({ id, as = 'div', className = '', children }) => {
  const { editing } = useEdit()
  const [override, setOverride] = useState(null)
  const ref = useRef(null)
  const Tag = as

  // Load saved override after mount (deterministic SSR/first render).
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY(id))
      if (v != null) setOverride(v)
    } catch (_) {}
  }, [id])

  // When an override exists, inject it into the node so editing continues from it.
  useEffect(() => {
    if (override != null && ref.current && ref.current.innerHTML !== override) {
      ref.current.innerHTML = override
    }
  }, [override])

  const save = () => {
    if (!ref.current) return
    const html = ref.current.innerHTML
    try { localStorage.setItem(KEY(id), html) } catch (_) {}
    setOverride(html)
  }

  return (
    <Tag
      ref={ref}
      className={`${className} ${editing ? 'outline-dashed outline-1 outline-purple-400 rounded px-1 -mx-1 focus:outline focus:outline-2 focus:outline-purple-500' : ''}`}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={editing ? save : undefined}
    >
      {/* Only render children when there's no saved override; otherwise the
          effect above injects the saved HTML (avoids clobbering edits). */}
      {override == null ? children : null}
    </Tag>
  )
}

export default EditableText

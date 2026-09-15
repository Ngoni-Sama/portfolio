import { createContext, useContext, useState, useCallback } from 'react'

// Global "edit mode". Turning it on requires a PIN (see PinModal). Once unlocked
// for the session, images and document text become editable; overrides are stored
// per-item in localStorage, so they persist in the current browser only.
//
// NOTE: this is a light deterrent for casual visitors, NOT real security — the
// check runs client-side. Edits are local to the browser anyway.
const EditContext = createContext({
  editing: false,
  unlocked: false,
  promptOpen: false,
  requestToggle: () => {},
  submitPin: () => false,
  closePrompt: () => {},
})

export const useEdit = () => useContext(EditContext)

// PIN is 051298. Stored base64-encoded so the literal digits aren't sitting in
// the bundle as plaintext. (atob('MDUxMjk4') === '051298')
const PIN_ENCODED = 'MDUxMjk4'
const expectedPin = () => {
  try { return atob(PIN_ENCODED) } catch (_) { return '' }
}

export const EditProvider = ({ children }) => {
  const [editing, setEditing] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [promptOpen, setPromptOpen] = useState(false)

  const requestToggle = useCallback(() => {
    if (editing) { setEditing(false); return }
    if (unlocked) { setEditing(true); return }
    setPromptOpen(true)
  }, [editing, unlocked])

  const submitPin = useCallback((pin) => {
    if (pin === expectedPin()) {
      setUnlocked(true)
      setEditing(true)
      setPromptOpen(false)
      return true
    }
    return false
  }, [])

  const closePrompt = useCallback(() => setPromptOpen(false), [])

  return (
    <EditContext.Provider value={{ editing, unlocked, promptOpen, requestToggle, submitPin, closePrompt }}>
      {children}
    </EditContext.Provider>
  )
}

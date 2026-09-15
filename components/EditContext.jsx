import { createContext, useContext, useState } from 'react'

// Global "edit images" mode. When on, every EditableImage shows a
// "Change photo" overlay. Overrides are stored per-image in localStorage, so
// they persist in the current browser only (fine for a statically-hosted site).
const EditContext = createContext({ editing: false, toggle: () => {} })

export const useEdit = () => useContext(EditContext)

export const EditProvider = ({ children }) => {
  const [editing, setEditing] = useState(false)
  return (
    <EditContext.Provider value={{ editing, toggle: () => setEditing((e) => !e) }}>
      {children}
    </EditContext.Provider>
  )
}

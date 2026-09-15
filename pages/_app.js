import '@/styles/globals.css'
import { EditProvider } from '@/components/EditContext'
import EditToggle from '@/components/EditToggle'

export default function App({ Component, pageProps }) {
  return (
    <EditProvider>
      <Component {...pageProps} />
      <EditToggle />
    </EditProvider>
  )
}

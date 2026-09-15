import '@/styles/globals.css'
import { EditProvider } from '@/components/EditContext'
import EditToggle from '@/components/EditToggle'
import PinModal from '@/components/PinModal'

export default function App({ Component, pageProps }) {
  return (
    <EditProvider>
      <Component {...pageProps} />
      <EditToggle />
      <PinModal />
    </EditProvider>
  )
}

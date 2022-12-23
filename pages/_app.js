import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from '../context/auth-context'
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

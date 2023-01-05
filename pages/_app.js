import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from '../context';
export default function App({ Component, pageProps: {
  session, ...pageProps
} }) {
  return (
      <UserProvider>
    <SessionProvider session={session} >
      <Component {...pageProps} />
      
    </SessionProvider>
      </UserProvider>
  )
}

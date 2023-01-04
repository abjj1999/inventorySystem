import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'

export default function Home() {
  // const { data: session } = useSession()
  // console.log(session)
  return (
    <div>

      <button onClick={() => signIn()}>Sign in</button>

    </div>
  )
}

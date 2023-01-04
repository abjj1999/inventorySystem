import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
const main = () => {

    const { data: session, status } = useSession()
  console.log(session)
  if(status === 'authenticated'){
    return (
      <div>
        welcome {session.user.email} <br />
        <p>account dashboard</p> <br />
        <button onClick={() => signOut()}>Logout</button>
      </div>
    )
  }else {
    return (
      <div>
        <p>you not sign in</p>
      </div>
    )
  }
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if(!session){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {session}
    }
}

export default main

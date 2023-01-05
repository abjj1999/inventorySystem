import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import Protect from '../../components/Protect'
import axios from 'axios'
const main = () => {

  const { data: session, status } = useSession()
  React.useEffect(() => {
    const getUser = async () => {
      const user = await axios.post(`/api/user`, {email: session.user.email})
      console.log(user.data)

    }
    getUser()
  }, [session])
  if(status === 'authenticated'){
    return (
      <Protect>

      <div>
        welcome {session.user.email} <br />
        <p>account dashboard</p> <br />
        <button onClick={() => signOut()}>Logout</button>
      </div>
      </Protect>
    )
  }else {
    return (
      <Protect>

      <div>
        <p>you not sign in</p>
      </div>

      </Protect>
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
    // console.log(session.user.email)
    

    return {
        props: {session}
    }
}

export default main

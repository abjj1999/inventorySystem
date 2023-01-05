import React, {useContext} from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import Protect from '../../components/Protect'
import Navbar from '../../components/Navbar'
// import axios from 'axios'
import { UserContext } from '../../context';
import Sidebar from '../../components/Sidebar';
import Layout from '../../components/Layout';
const main = () => {

  const { data: session, status } = useSession()
  const [state] = useContext(UserContext);
  if(status === 'authenticated'){
    
    return (
      <Layout>
        
      

        welcome {session.user.email} <br />
        <p>account dashboard</p> <br />
        <button onClick={() => signOut()}>Logout</button>
        
      
      </Layout>
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

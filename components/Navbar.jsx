import React, {useContext} from 'react'
import { useSession, signOut } from 'next-auth/react'
import { UserContext } from '../context'

const Navbar = () => {
  const { data: session, status } = useSession()
  const [state, setState] = useContext(UserContext)
  console.log("state form nav", state.user.data.email)
  const handleLogout =  () => {
    setState({user: null})
    signOut()
  }
  return (
    <div className='h-100 d-flex justify-content-between align-items-center bg-light p-2 mb-'>
      <div className='text-dark text-center'>
      </div>
      <div className='d-flex text-dark align-items-center justify-content-center gap-3'>
        <div className='mt-1'>

        {!state.user.data.name? <h5>Hi, {state.user.data.email}</h5> : <h5>Hi, {state.user.data.name}</h5>}
        </div>
        <button onClick={() => handleLogout()} className='btn btn-danger'>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Navbar

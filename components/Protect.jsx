import React, {Children, useEffect, useState, useContext} from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import axios from 'axios';
import { UserContext } from '../context';
const Protect = ({children}) => {
    const { data: session, status } = useSession()
    const [isAuth, setIsAuth] = useState(false)
    const [state, setState] = useContext(UserContext);
    useEffect(() => {
        if(status === 'authenticated'){
            setIsAuth(true)
            const userInfo = async () => {
              const user = await axios.post(`/api/user`, {email: session.user.email})
              // console.log("suer data in protected", user.data)
              setState({user: user.data})
            }
            userInfo()
        }else {
            setIsAuth(false)
        }
    }, [session])
  return !isAuth && !state ? <div>you not sign in</div> : <div>
    {children}
  </div>
}

export default Protect

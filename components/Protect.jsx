import React, {Children, useEffect, useState} from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

const Protect = ({children}) => {
    const { data: session, status } = useSession()
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if(status === 'authenticated'){
            setIsAuth(true)

        }else {
            setIsAuth(false)
        }
    }, [session])
  return !isAuth ? <div>you not sign in</div> : <div>
    {children}
  </div>
}

export default Protect

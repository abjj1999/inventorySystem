import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const userContext = createContext()

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: '',
  })

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem('auth')))
  }, [])

  return (
    <userContext.Provider value={[state, setState]}>
      {children}
    </userContext.Provider>
  )
}

export { UserProvider, userContext }

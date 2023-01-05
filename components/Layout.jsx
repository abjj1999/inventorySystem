import React from 'react'
import Navbar from './Navbar'
import Protect from './Protect'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <Protect>
        
      <div className='d-flex main-layout'>
        <div className="sideb m-2">
          <Sidebar />
        </div>
        <div className="   text-white w-100 ">
          <div className='navbar-container'>

        <Navbar />
          </div>
        <div className='mt-3 main bg-dark '>

        {children}
        </div>
        </div>
      </div>
      </Protect>
  )
}

export default Layout

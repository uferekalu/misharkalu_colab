import React from 'react'
import Header from '../header/Header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className='container'>{children}</div>
    </div>
  )
}

export default Layout
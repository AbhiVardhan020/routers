import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div className='home'>
      <Header />
      <div className='home1'>
        <Navigation />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

import React from 'react'
import Header from './components/HeaderSection/Header/Header'
import Footer from './components/FooterSection/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Layout

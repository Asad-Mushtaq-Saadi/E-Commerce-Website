import React from 'react'
import Header from './components/HeaderSection/Header/Header'
import Footer from './components/FooterSection/Footer/Footer'
import { Outlet } from 'react-router-dom'
import WishlistCard from './components/WishlistSection/WishlistCard'

const Layout = () => {
  return (
    <div>
        <Header />

        {/* <Outlet /> */}
        <WishlistCard />

        <Footer />
    </div>
  )
}

export default Layout

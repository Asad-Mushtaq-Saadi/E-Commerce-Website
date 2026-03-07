import React from 'react'
import Header from './components/HeaderSection/Header/Header'
import Footer from './components/FooterSection/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ProductPageImageSection from './components/ProductPageSection/ProductPageImageSection'

const Layout = () => {
  return (
    <div>
        <Header />

        <Outlet />
        {/* <ProductPageImageSection /> */}

        <Footer />
    </div>
  )
}

export default Layout

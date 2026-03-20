import React from 'react'
import Header from './components/HeaderSection/Header/Header'
import Footer from './components/FooterSection/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ProductPageImageSection from './components/ProductPageSection/ProductPageImageSection'
import ProductPage from './pages/ProductPage'
import CheckoutSection from './components/CheckoutSection/CheckoutSection'
import ProductListingSection from './components/ProductListingSection/ProductListingSection'

const Layout = () => {
  return (
    <div>
        <Header />

        {/* <Outlet /> */}
        {/* <ProductPage /> */}
{/* <CheckoutSection/> */}
<ProductListingSection />

        <Footer />
    </div>
  )
}

export default Layout

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { PagesProvider } from './context/PagesContext.jsx'
import { LogoProvider } from './context/LogoContext.jsx'
import { ContactDetailsContextProvider } from './context/ContactDetailsContext.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'


import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'

const App = () => {
  return (
    
    <div>
      <BrowserRouter >
      <ContactDetailsContextProvider>
        <LogoProvider>
          <PagesProvider>
            <CategoriesProvider>

              <Routes>
                <Route path='/' element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path='about-us' element={<AboutUs />} />
                  <Route path='contact-us' element={<ContactUs />} />
                  <Route path='privacy-policy' element={<PrivacyPolicy />} />
                  <Route path='terms-&-conditions' element={<TermsAndConditions />} />
                  <Route path='wishlist' element={<Wishlist />} />
                  <Route path='login' element={<Login />} />
                  <Route path='register' element={<Register />} />
                  <Route path='forget-password' element={<ForgetPassword />} />
                </Route> 
              </Routes>

            </CategoriesProvider>
          </PagesProvider>
        </LogoProvider>
      </ContactDetailsContextProvider>

                </BrowserRouter>
    </div>
  )
}

export default App

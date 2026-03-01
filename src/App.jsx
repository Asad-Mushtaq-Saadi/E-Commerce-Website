import Header from './components/HeaderSection/Header/Header.jsx'
import Footer from './components/FooterSection/Footer/Footer.jsx'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { PagesProvider } from './context/PagesContext.jsx'
import { LogoProvider } from './context/LogoContext.jsx'
import { ContactDetailsContextProvider } from './context/ContactDetailsContext.jsx'
import Home from './pages/Home.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'

const App = () => {
  return (
    <div>
      <ContactDetailsContextProvider>
        <LogoProvider>
          <PagesProvider>
            <CategoriesProvider>

              <Header />
              {/* <Home /> */}
              {/* <Login /> */}
              <Register />
              <Footer />

            </CategoriesProvider>
          </PagesProvider>
        </LogoProvider>
      </ContactDetailsContextProvider>

    </div>
  )
}

export default App

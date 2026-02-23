import Header from './components/HeaderSection/Header/Header.jsx'
import Footer from './components/FooterSection/Footer/Footer.jsx'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { PagesProvider } from './context/PagesContext.jsx'
import { LogoProvider } from './context/LogoContext.jsx'

const App = () => {
  return (
    <div>
      <LogoProvider>
        <PagesProvider>
          <CategoriesProvider>
            <Header />
            <Footer />
          </CategoriesProvider>
        </PagesProvider>
      </LogoProvider>

    </div>
  )
}

export default App

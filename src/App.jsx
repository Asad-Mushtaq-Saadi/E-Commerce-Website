import Header from './components/HeaderSection/Header/Header.jsx'
import Footer from './components/FooterSection/Footer/Footer.jsx'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { PagesProvider } from './context/PagesContext.jsx'
import { LogoProvider } from './context/LogoContext.jsx'
import { ContactDetailsContextProvider } from './context/ContactDetailsContext.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import WhyChoosesUs from './components/WhyChoosesUsSection/WhyChoosesUs/WhyChoosesUs.jsx'
import Reviews from './components/ReviewsSection/Reviews/Reviews.jsx'
import ReviewCard from './components/ReviewsSection/ReviewCard/ReviewCard.jsx'
import ReviewCardsList from './components/ReviewsSection/ReviewCardsList/ReviewCardsList.jsx'
import EmailSignupSection from './components/EmailSignupSection/EmailSignupSection.jsx'
import ProductCard from './components/Building Blocks/ProductCard/ProductCard.jsx'
import ProductsCollection from './components/ProductsList/ProductsList.jsx'

const App = () => {
  return (
    <div>
      <ContactDetailsContextProvider>
        <LogoProvider>
          <PagesProvider>
            <CategoriesProvider>

              <Header />
              <HeroSection />
              <ProductsCollection />
              <WhyChoosesUs />
              <Reviews />
              <EmailSignupSection />
              <Footer />
            
             {/* <ProductCard /> */}
            </CategoriesProvider>
          </PagesProvider>
        </LogoProvider>
      </ContactDetailsContextProvider>

    </div>
  )
}

export default App

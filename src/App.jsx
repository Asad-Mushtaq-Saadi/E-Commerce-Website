import Header from './components/HeaderSection/Header/Header.jsx'
import Footer from './components/FooterSection/Footer/Footer.jsx'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { PagesProvider } from './context/PagesContext.jsx'
import { LogoProvider } from './context/LogoContext.jsx'
import { ContactDetailsContextProvider } from './context/ContactDetailsContext.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import SectionHeading from './components/Building Blocks/SectionHeadings/SmallHeading.jsx'
import ChoosesUsCard from './components/WhyChoosesUsSection/ChoosesUsCard/ChoosesUsCard.jsx'
import WhyChoosesUs from './components/WhyChoosesUsSection/WhyChoosesUs/WhyChoosesUs.jsx'
import Reviews from './components/ReviewsSection/Reviews/Reviews.jsx'

const App = () => {
  return (
    <div>
      <ContactDetailsContextProvider>
        <LogoProvider>
          <PagesProvider>
            <CategoriesProvider>
              <Header />
              <HeroSection />
              <WhyChoosesUs />
              <Reviews />
              <Footer />
            </CategoriesProvider>
          </PagesProvider>
        </LogoProvider>
      </ContactDetailsContextProvider>

    </div>
  )
}

export default App

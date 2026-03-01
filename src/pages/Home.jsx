import React from 'react'
import Hero from '../components/HeroSection/HeroSection'
import ProductsList from '../components/ProductsList/ProductsList'
import WhyChoosesUs from '../components/WhyChoosesUsSection/WhyChoosesUs/WhyChoosesUs'
import Reviews from '../components/ReviewsSection/Reviews/Reviews'
import EmailSignupSection from '../components/EmailSignupSection/EmailSignupSection'

const Home = () => {
    return (
        <div>

            <Hero />
            <ProductsList />
            <WhyChoosesUs />
            <Reviews />
            <EmailSignupSection />

        </div>
    )
}

export default Home

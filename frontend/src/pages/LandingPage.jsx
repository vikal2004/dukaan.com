import React from "react"
import Navbar from "../components/landingpage/Navbar"
import HeroSection from "../components/landingpage/HeroSection"
import StoreListing from "../components/landingpage/StoreListing"
import FeaturedProducts from "../components/landingpage/FeatureProducts"
import HowItWorks from "../components/landingpage/HowItWork"
import Footer from "../components/landingpage/Footer"

const LandingPage = () => {
  return (
    <div>
        <Navbar   />
        <HeroSection />
        <StoreListing />
        <FeaturedProducts />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default LandingPage
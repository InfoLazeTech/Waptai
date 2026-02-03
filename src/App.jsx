import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Pages/Home/Footer'

import HeroSection from './Pages/Home/HeroSection'
import FeaturesSection from './Pages/Home/FeaturesSection'
import Programs from './Pages/Home/Programs'
import About from './Pages/Home/About'
import AboutPage from './Pages/About/AboutPage'
import ContactUs from './Pages/Contact/ContactUs'
import Commitee from './Pages/Home/Commitee'
import Clients from './Pages/Home/Clients'
import YouTubeVideo from './Pages/Home/YoutubeVideo'
import Facility from './Pages/Facilities/Facility'
// import Exhibitors from './Pages/Home/Exhibitors'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <YouTubeVideo/> 
                <Programs />
                <About />
                <Clients/>
                 <FeaturesSection />
              </>
            }
          />

          {/* Individual Pages (optional) */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/committee" element={<Commitee />} />
          <Route path="/facilities" element={<Facility />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

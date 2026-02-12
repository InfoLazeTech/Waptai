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
import Exhibition from './Pages/Activities/Exhibition'
import IapmoSection from './Pages/Activities/IapmoSection'
import Seminar from './Pages/Activities/Seminar'
import Convention from './Pages/Activities/Convention'
import LegalAssistance from './Pages/Activities/LegalAssistance'
import Celebration from './Pages/Activities/Celebration'
import Expo from './Pages/Activities/Expo'
import Seo from './Component/Seo'
import ScrollToTop from './Component/ScrollToTop'
import Articals from './Pages/Home/Articals'
import Event from './Pages/Event/Event'

// import Exhibitors from './Pages/Home/Exhibitors'

const App = () => {
  return (
    <div className="min-h-screen bg-white">

      <Seo />
      <Header />
      <ScrollToTop />

      <main>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <YouTubeVideo />
                <Articals />
                <About />
                <Programs />
                <FeaturesSection />
                 <Clients />
              </>
            }
          />

          {/* Individual Pages (optional) */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/committee" element={<Commitee />} />
          <Route path="/event" element={<Event />} />
          <Route path="/facilities" element={<Facility />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/IAPMO" element={<IapmoSection />} />
          <Route path="/Seminar" element={<Seminar />} />
          <Route path="/Convention" element={<Convention />} />
          <Route path="/Legal-Assistance" element={<LegalAssistance />} />
          <Route path="/Celebration" element={<Celebration />} />
          <Route path="/expo-2026" element={<Expo />} />


        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

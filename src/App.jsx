import React from 'react'
import Header from './Component/Header'
import HeroSection from './Pages/Home/HeroSection'
import FeaturesSection from './Pages/Home/FeaturesSection'
import Programs from './Pages/Home/Programs'
import About from './Pages/Home/About'
import Footer from './Pages/Home/Footer'
// import Exhibitors from './Pages/Home/Exhibitors'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <Programs />
        <About />
        {/* <Exhibitors /> */}
        <Footer />
      </main>
    </div>
  )
}

export default App

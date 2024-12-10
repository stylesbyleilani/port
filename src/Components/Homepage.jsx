import React from 'react'
import Navbar from './Navbar'
import Hero from './HeroSection'
import Services from './Services'
import More from './More'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
    <div>
              <Navbar/>
       <Hero/>
       <Services/>
      <More/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage
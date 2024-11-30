"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'
import Testimonial from '@/components/Testimonial'
import React from 'react'


const Home = () => {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Testimonial/>
   <Contact/>
   <Footer/>
   <ScrollToTop/>
    </div>
  )
}

export default Home
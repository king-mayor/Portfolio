"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'
import Testimonial from '@/components/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React,{useEffect} from 'react'


const Home = () => {
  useEffect(()=>{
    AOS.init();
    }, [])
    
  return (
    <div className="overflow-x-hidden">
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
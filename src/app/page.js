"use client"
// import About from '@/components/About'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'
// import Hero from '@/components/Hero'
// import Navbar from '@/components/Navbar'
// import Projects from '@/components/Projects'
// import ScrollToTop from '@/components/ScrollToTop'
// import Testimonial from '@/components/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React,{useEffect, lazy} from 'react'
    const Hero = lazy(() => import('@/components/Hero'));
    const Contact = lazy(() => import('@/components/Contact'));
    const Footer = lazy(() => import('@/components/Footer'));
    const Navbar = lazy(() => import('@/components/Navbar'));
    const Projects = lazy(() => import('@/components/Projects'));
    const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
    const Testimonial = lazy(() => import('@/components/Testimonial'));
    const About = lazy(() => import('@/components/About'));

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
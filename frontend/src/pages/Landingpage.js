import React from 'react'
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import About from '../pages/Landing/About'
import Hero from '../pages/Landing/Hero'
import Impact from '../pages/Landing/Impact'
import Rating from '../pages/Landing/Rating'
import Start from '../pages/Landing/Start'
import Scroll from '../pages/Landing/Scroll'
import Qutoes from '../pages/Landing/Quotes'
import "./Landing.css"
export default function Landingpage() {
  return (
    <div className='body'>
    <Navbar></Navbar>  
    <div className='hero-section ' style={{paddingTop: "124px"}}>
       <Hero></Hero>
    </div>
    </div>
  )
}

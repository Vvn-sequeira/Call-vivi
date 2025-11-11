import React from 'react'
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import About from '../pages/Landing/About'
import Hero from '../pages/Landing/Hero'
import Impact from '../pages/Landing/Impact'
import Start from '../pages/Landing/Start'
import Scroll from '../pages/Landing/Scroll'
import Qutoes from '../pages/Landing/Quotes'
import Swiperr from './Landing/Gallary/Swiperr';
import ThreeCard from './Landing/ThreeCards/ThreeCard';
import AfterThreeCard from './AfterThreeCard';
import Filters from './Landing/Filters/Filters';
import Rating from './Landing/Rating/Rating';
import AI from './Landing/AI/AI';
import Quotes from './Landing/quotes/Quotes';
import LogoScrolling from './Landing/Logo-scrolling/LogoScrolling';
import "./Landing.css"
export default function Landingpage() {
  return (
    <div className='body'>
    <Navbar></Navbar>  
    <div className='hero-section ' style={{paddingTop: "124px"}}>
       <Hero></Hero>
    </div>
     <div className='Swiper-section'>
       <Swiperr></Swiperr>
     </div>
     <div className='threecard-section'>
      <ThreeCard></ThreeCard>
     </div>
     <div className='afterThreeCards-section'>
      <AfterThreeCard></AfterThreeCard>
     </div>
     <div className='filter-section'>
      <Filters></Filters>
     </div>
     <div className='AI-section'>
      <AI></AI>
     </div>
     <div className='LogoScrolling-section'>
      <LogoScrolling></LogoScrolling>
     </div>
     <div className='rating-section'>
      <Rating></Rating>
     </div>
     <div className='Quotes-section'>
       <Quotes></Quotes>
     </div>
    </div>
  )
}

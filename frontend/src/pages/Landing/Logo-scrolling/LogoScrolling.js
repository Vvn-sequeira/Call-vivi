import React from 'react'
import "./LogoScrolling.css"
export default function LogoScrolling() {
  return (
    <div>
        <div className='heading'>
            <h2>Trusted by millions. Built for you.</h2>
        </div>
        <div className='logo'>
            <div className='Logo-slider'> 
                <div className='logo-slider-img'>
                    <img src='/img/Scroll-logo/co.png' alt="logo"></img>
                    <img src='/img/Scroll-logo/exm.png' alt="logo"></img>
                    <img src='/img/Scroll-logo/mf.png' alt="logo"></img>
                    <img src='/img/Scroll-logo/nt.png' alt="logo"></img>
                    <img src='/img/Scroll-logo/wm.png' alt="logo"></img>
                    <img src='/img/Scroll-logo/wn.png' alt="logo"></img> 
                </div>
            </div>
        </div>
    </div>
  )
}

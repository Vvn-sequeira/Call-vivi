import React from 'react'
import "./Swiper.css"

export default function SwiperCard({imgURl}) {
  return (
    <div className='SwiperCard' >
        <img className='SwiperImg' src={imgURl} alt='ITs an Img ' ></img>
     </div>
  )
}

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCard from './SwiperCard';
import { Navigation, Pagination } from 'swiper/modules';
export default function Swiperr() {

const IMGURLS = ['img//cards/clips.png' , 'img//cards/AIC.png' , 'img//cards/contact-center.png' , 'img//cards/docs.png' , 'img//cards/meetings.png' , 'img//cards/phone.png' , 'img//cards/teamchat.png' , 'img//cards/virtual-agent.png' , 'img//cards/webinar.png' , 'img//cards/whiteboard.png']  

  return (
<Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  spaceBetween={0}
  slidesPerView={6}
   breakpoints={{
    0: {
      slidesPerView: 1, 
    },
    708: {
      slidesPerView: 2,
    },
    1021: {
      slidesPerView: 3, 
    },
    1385: {
      slidesPerView: 4, 
    },
    1692: {
      slidesPerView: 5, 
    },
  }}

>
  {IMGURLS.map((URL)=>(
    <SwiperSlide> <SwiperCard imgURl={URL}></SwiperCard> </SwiperSlide>
  ))}
</Swiper>
  )
}

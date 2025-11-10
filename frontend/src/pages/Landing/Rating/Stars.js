import React from 'react'

export default function Stars({rating,star,reviews,img}) {
  return (
       <div className='star-main-container'>

        <div className='rate-container'>
         {rating}
        </div>
        <div className='star-container'>
            <img src={star}></img>
        </div>
        <div className='reviews'>
            {reviews} 
        </div>
        <div className='img'>
            <img src={img}></img>
        </div>

    </div>
  )
}

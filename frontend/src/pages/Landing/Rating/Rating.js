import React from 'react'
import "./Rating.css"
import Stars from './Stars'
export default function Rating() {
  return (
    <div className='rating-main-container'>
        <div className='row rating-row '>
            <div className='col-lg-4 col-md-6 col-sm-12 rate-box'>
                <Stars rating="4.5/5" star="/img/rating/star.png" reviews="out of 7.9k+ reviews" img="/img/rating/gartner.png"></Stars>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 rate-box'>
                <Stars rating="4.5/5" star="/img/rating/star.png" reviews="out of 54.9k+ reviews" img="/img/rating/g2.png"></Stars>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 rate-box'>
                <Stars rating="8.3/10" star="/img/rating/star.png" reviews="out of 5.8k+ reviews" img="/img/rating/trustradius.png"></Stars>
            </div>
        </div>
    </div>
  )
}

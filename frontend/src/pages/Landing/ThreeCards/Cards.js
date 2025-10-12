import React from 'react'
import "./ThreeCards.css"
export default function Cards({URL , P , Button }) {
  return (
    <div className='ThreeCardss'>
          <div className='ThreeCardss-img'>
            <img src={URL}></img>
          </div>
          <div className='ThreeCardss-content'>
            <p className='ThreeCardss-text'>{P}</p>
            <button className='btn btn-primary ThreeCardss-btn'>{Button}</button>
          </div>
    </div>
  )
}

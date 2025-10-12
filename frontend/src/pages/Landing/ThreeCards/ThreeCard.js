import React from 'react'
import "./ThreeCards.css"
import Cards from './Cards'
export default function ThreeCard({}) {
    
  return (
<div className="container threeCardContainer">
  <div className="row">
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <Cards
        URL={'img/gartner.png'}
        P={"A Leader in the Gartner® Magic Quadrant™ for UCaaS, Worldwide 2025. 6th year in a row!"}
        Button={"Read the report"}
      />
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <Cards
        URL={'/img/gartner.png'}
        P={"Zoom recognized in the 2025 Gartner® Magic Quadrant™ for CCaaS"}
        Button={"Explore the report"}
      />
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <Cards
        URL={'/img/forrest.png'}
        P={"Zoom named a leader in The Forrester Wave™: UCaaS 2025"}
        Button={"Read Forrester report"}
      />
    </div>
  </div>
</div>
  )
}

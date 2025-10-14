import React from 'react'
import "./AI.css"
import TopText from './TopText'
import IMGnContent from './IMGnContent'
export default function AI() {
  return (
    <div>
         <div className='TopTextcontainer'>
            <TopText></TopText>
         </div>
         <div>
          <IMGnContent></IMGnContent>
         </div>
    </div>
  )
}

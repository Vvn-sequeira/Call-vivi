import React from 'react'
import "./AI.css"
export default function TopText() {
  return (
    <div className='Container-TopText'>
        <div className='TopText'>
            <img src='/img/AI.svg'></img>
            <h4 className='pt-3 TopText-sec-heading '>Introducing</h4>
            <h3 className='TopText-heading'>Zoom AI Companion 3.0* </h3>
            <p className='TopText-para'>AI Companion does more than save you time. It captures context, uncovers insights, and helps you deliver better work — from stronger customer conversations to faster, more-informed decisions.</p>
            <button className='btn btn-primary'>Learn more </button>
        </div>
    </div>
  )
}

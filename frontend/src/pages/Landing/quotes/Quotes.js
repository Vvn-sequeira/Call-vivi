import React from 'react'
import "./Quotes.css"
import FirstQuote from './FirstQuote'
import SecondQuotes from './SecondQuotes'

export default function Quotes() {
  return (
    <div className='quoteContainer'>
        <FirstQuote></FirstQuote>
        <SecondQuotes></SecondQuotes>
    </div>
  )
}

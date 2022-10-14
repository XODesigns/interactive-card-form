import React from 'react'
import Thanks from './images/icon-complete.svg'

function Success() {
  return (
    <div className="form">
    <div className='inner-data'>
    <img className='complete' src={Thanks} alt="Complete"/>
    <h1 className='thanks'>Thank You</h1>
    <p className='thanks-message'>We've added your card details</p>
    <button type="submit">Continue</button>
    </div>
    </div>
  )
}

export default Success
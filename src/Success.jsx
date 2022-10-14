import React from 'react'
import Thanks from './images/icon-complete.svg'

function Success() {

const handleForm = () =>{
  
}

  return (
    <form className="form">
    <div className='inner-data'>
    <img className='complete' src={Thanks} alt="Complete"/>
    <h1 className='thanks'>Thank You</h1>
    <p className='thanks-message'>We've added your card details</p>
    <button type="submit" onClick={handleForm}>Continue</button>
    </div>
    </form>
  )
}

export default Success
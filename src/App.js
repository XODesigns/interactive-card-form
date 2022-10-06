import {useState} from 'react'



function App() {
const [name, setName]=useState('e.g. Jane Appleseed')


  return (
    <div className='container'>
    <div className='inner-container'>
    <div className='cards'>

    <div className='card-one'>
    <p className='card-number'>0000 0000 0000 0000</p>
    <p className='card-holder'>Jane Appleseed</p>
    <p className='exp-date'>00/00</p>
    </div>

    <div className='card-two'>
    
    </div>
    </div>
    <div className='form'>

    <label>Cardholder name</label>
    <input type="text" placeholder={name}></input>

    <label>Card number</label>
    <input type="number" placeholder='e.g. 1234 5678 9123 0000' value={name}></input>

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/yy)</label>

    <div className='date-input'>
    <input type="number" placeholder='MM'></input>
    <input type="number" placeholder='YY'></input>
    </div>
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input type="number" placeholder='e.g. 123'></input>
    </div>
   
    </div>
  

    <button>confirm</button>

    </div>
    </div>
    </div>
  )
}

export default App
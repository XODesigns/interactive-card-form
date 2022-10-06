import {useState} from 'react'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'



function App() {
const [name, setName]= useState("")
const [cardNumber, setCardNumber] = useState("")

function handleName(event){
  const newValue = event.target.value
setName(newValue)
}

function handleNumber(event){
  const newValue = event.target.value
setCardNumber(newValue)
}


  return (
    <div className='container'>
    <div className='inner-container'>
    <div className='cards'>

    <div className='card-one'>
    <img src={Front} alt="card front"/>
    <p className='card-number'>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
    <p className='card-holder'>{name ? name : "Jane Appleseed"}</p>
    <p className='exp-date'>00/00</p>
    </div>

    <div className='card-two'>
    <img src={Back} alt="card back"/>
    </div>
    </div>
    <div className='form'>

    <label>Cardholder name</label>
    <input type="text" placeholder='e.g. Jane Appleseed' value={name} onChange={handleName} />

    <label>Card number</label>
    <input type="number" placeholder='e.g. 1234 5678 9123 0000' value={cardNumber} onChange={handleNumber} ></input>

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
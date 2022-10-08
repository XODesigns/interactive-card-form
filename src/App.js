import {useState} from 'react'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'



function App() {
const [name, setName]= useState("")
const [cardNumber, setCardNumber] = useState("")
const [month, setMonth] = useState("MM")
const [year, setYear] = useState("YY")
const [cvc, setCvc] = useState("")

function handleName(event){
  const newValue = event.target.value
setName(newValue)
}

function handleNumber(event){
  const newValue = event.target.value
  .replace(/\s|[^a-z0-9]+/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") ?? "";
setCardNumber(newValue)
}

function handleMonth(event){

const min = 1
const max = 12

const newMonth = Math.max(min, Math.min(max, Number(event.target.value)))

// // const limit = 2
// .replace(/\s|[^0-9]+/g, "")
//         .match(/.{1,2}/g)
//         ?.join(" ") ?? "";
setMonth(newMonth)
}

function handleYear(event){
const newYear = event.target.value
    const limit = 2;

setYear(newYear.slice(0, limit))
}

function handleCvc(event){
const newCvc = event.target.value
  const limit = 3;

setCvc(newCvc.slice(0, limit))
}

//Dynamic number split, so the numbers can be updated correctly.
const numberPlaceholder = "0000 0000 0000 0000"
// const numberArr = []
// numberArr.push(newNumber)
// console.log(newNumber)

  return (
    <div className='container'>
    <div className='inner-container'>
    <div className='cards'>

    <div className='card-one'>

    <img src={Front} alt="card front"/>

    <div className='card-one-container'>
    
    <div className='circles'>
    <div className='circle-one'></div>
    <div className='circle-two'></div>
    </div>

    <p className='card-number'>{cardNumber ? cardNumber : numberPlaceholder}</p>
    
    <div  className='name-date'>
    <p className='card-holder'>{name ? name : "Jane Appleseed"}</p>
    <p className='exp-date'>{month} / {year}</p>
    </div>

    </div>
    
    </div>

    <div className='card-two'>
    <img src={Back} alt="card back"/>
    <p className='card-cvc'>{cvc ? cvc : "000"}</p>
    </div>

    </div>

    <div className='form'>

    <label>Cardholder name</label>
    <input type="text" placeholder='e.g. Jane Appleseed' value={name} onChange={handleName} />

    <label>Card number</label>
    <input type="tel" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={cardNumber} onChange={handleNumber} ></input>

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <input type="number" onChange={handleMonth} placeholder='MM' value={month}></input>
    <input type="number" onChange={handleYear} placeholder='YY' value={year} ></input>
    </div>
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input type="number" onChange={handleCvc}  placeholder='e.g. 123' value={cvc}></input>
    </div>
   
    </div>
  

    <button>confirm</button>

    </div>
    </div>
    </div>
  )
}

export default App

import {useEffect, useState} from 'react'
// import {useForm} from 'react-hook-form'
import { formik, Form, Field, useFormik, useFormikContext } from 'formik'
// import * as Yup from 'yup'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'



function App() {
const [name, setName]= useState("")
const [cardNumber, setCardNumber] = useState("")
const [month, setMonth] = useState("MM")
const [year, setYear] = useState("YY")
const [cvc, setCvc] = useState("")
// const {register, handleSubmit, setValue} = useForm()
// const onSubmit = data => console.log(data);


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

setMonth(newMonth)
}

function handleYear(event){

const min = 1
const max = 99

const newYear = Math.max(min, Math.min(max, Number(event.target.value)))
setYear(newYear)

}


function handleCvc(event){
  const min = 1
  const max = 999
  
  const newCvc= Math.max(min, Math.min(max, Number(event.target.value)))
  setCvc(newCvc)

}

//Dynamic number split, so the numbers can be updated correctly.
const numberPlaceholder = "0000 0000 0000 0000"


// const FormObserver = () => {
//   const { values } = useFormikContext();
//   useEffect(() => {
//     console.log("FormObserver::values", values);
//   }, [values]);
//   return null;
// };



const formik = useFormik({
  initialValues: {
    holderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc:''
  },

  validate() {
    const errors = {};

    if(formik.touched.holderName && !formik.values.holderName){
      errors.holderName = "Name Required"
    } else if (!/^[A-Za-z]*$/.test(formik.values.holderName)){
      errors.holderName = "Cardholder name should contain only letters"
    }
    if(formik.touched.cardNumber && !formik.values.cardNumber){
      errors.cardNumber = "Card Number Required"
    } else if (!/^[0-9]*$/.test(formik.values.cardNumber)){
      errors.cardNumber = "Wrong format, numbers only"
    }
    if(formik.touched.expMonth && !formik.values.expMonth){
      errors.expMonth = "Can't be blank"
    }
    if(formik.touched.expYear && !formik.values.expYear){
      errors.expYear = "Can't be blank"
    }
    if(formik.touched.cvc && !formik.values.cvc){
      errors.cvc = "Can't be blank"
  }
  return errors
},

onSubmit(values) {
  // alert(JSON.stringify(values, null, 2))
}

})



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

    <p className='card-number'>{formik.values.cardNumber ? formik.values.cardNumber : numberPlaceholder}</p>
    
    <div className='name-date'>
    <p className='card-holder'>{formik.values.holderName ? formik.values.holderName : "Jane Appleseed"}</p>
    <p className='exp-date'>{formik.values.expMonth ? formik.values.expMonth : "00" } / {formik.values.expYear ? formik.values.expYear : "00"}</p>
    </div>

    </div>
    
    </div>

    <div className='card-two'>
    <img src={Back} alt="card back"/>
    <p className='card-cvc'>{formik.values.cvc ? formik.values.cvc : "000"}</p>
    </div>

    </div>
   
    <form onSubmit ={formik.handleSubmit} className='form'>


    <label>Cardholder name</label>
    <input type="text" name="holderName" placeholder='e.g. Jane Appleseed'  onChange={formik.handleChange} value={formik.values.holderName}  />
    {formik.errors.holderName ? (<div className='error-message'>{formik.errors.holderName}</div>) : null }
    <label>Card number</label>
    <input type="tel" name="cardNumber" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={formik.values.cardNumber} onChange={formik.handleChange} />
    {formik.errors.cardNumber ? (<div className='error-message'>{formik.errors.cardNumber}</div>) : null}
    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <input type="number"  name="expMonth" onChange={formik.handleChange} placeholder='MM' value={formik.values.expMonth} />
    <input type="number" name="expYear" onChange={formik.handleChange} placeholder='YY' value={formik.values.expYear} />
    </div>
    {formik.errors.expMonth ? (<div className='error-message'>{formik.errors.expMonth}</div>) : (<div className='error-message'>{formik.errors.expYear}</div>) }
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input type="number" name="cvc" onChange={formik.handleChange}  placeholder='e.g. 123' value={formik.values.cvc} />
    {formik.errors.cvc ? (<div className='error-message'>{formik.errors.cvc}</div>) : null}
    </div>
   
    </div>
  

    <button type='submit'>confirm</button>

    </form>

    </div>
    </div>

  )
}

export default App

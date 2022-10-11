import {useRef, useState, useEffect} from 'react'
import { Formik, Form, Field, useFormikContext, useFormik} from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'




function App() {
const [name, setName]= useState("")
const [cardNumber, setCardNumber] = useState("")
const [month, setMonth] = useState("MM")
const [year, setYear] = useState("YY")
const [cvc, setCvc] = useState("")



const formik = useFormik({
  initialValues: {
    holderName: '',
    cardNumber: '',
    month:'',
    year: '',
    cvc:'',
  },
//   validationSchema={CreditCardSchema}


CreditCardSchema: Yup.object().shape({
  holderName: Yup.string()
  .required('Name is required'),
  cardNumber: Yup.string()
  .required('Card number required')
  .phone('Wrong format, numbers only'),
  month: Yup.string()
  .required(`Can't be blank`),
  year: Yup.string()
  .required(`Can't be blank`),
  cvc: Yup.string()
  .required(`Can't be blank`)
}),
//    validateOnChange={false},
// validateOnBlur={false},
  onSubmit(values) {
    console.log(values)
  }
})


const numberPlaceholder = "0000 0000 0000 0000"


// const FormObserver  = () => {
//   const { values } = useFormikContext();
//   useEffect(() => {
//     console.log("FormObserver::values", values);
//   }, [values]);
//   return null;
// };

// console.log(FormObserver)

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
    
    <div  className='name-date'>
    <p className='card-holder'>{formik.values.holderName ? formik.values.holderName  : "Jane Appleseed"}</p>
    <p className='exp-date'>{formik.values.month ? formik.values.month : "00" } / {formik.values.year ? formik.values.year : "00" }</p>
    </div>

    </div>
    
    </div>

    <div className='card-two'>
    <img src={Back} alt="card back"/>
    <p className='card-cvc'>{formik.values.cvc  ? formik.values.cvc  : "000"}</p>
    </div>

    </div>

 



   
    <form className='form' onSubmit={formik.handleSubmit}>

    <label>Cardholder name</label>
    <input className={formik.errors.holderName ? "error" : "name"} name="holderName" type="text" placeholder='e.g. Jane Appleseed' value={formik.values.holderName} onChange={formik.handleChange}  />
    {formik.errors.holderName && formik.touched.holderName ? (<div className='error-message'>{formik.errors.holderName}</div>) : null }

    <label>Card number</label>

    <input className={formik.errors.cardNumber ? "error" :"name"} name="cardNumber" type="tel" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={formik.values.cardNumber} onChange={formik.handleChange} />
    {formik.errors.cardNumber && formik.touched.cardNumber ? (<div className='error-message'>{formik.errors.cardNumber}</div>) : null }

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <input className={formik.errors.month ? "error" :"name"} name="month" type="number" onChange={formik.handleChange} placeholder='MM' value={formik.values.month} />
    <input className={formik.errors.year ? "error" :"name"} name="year" type="number" onChange={formik.handleChange} placeholder='YY' value={formik.values.year} />
    </div>
    {formik.errors.month || formik.errors.year  ? (<div className='error-message'>{formik.errors.month}</div>) : null }
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input className={formik.errors.cvc ? "error" :"name"} type="number" onChange={formik.handleChange} placeholder='e.g. 123' value={formik.values.cvc} />
    {formik.errors.cvc  ? (<div className='error-message'>{formik.errors.cvc}</div>) : null }
    </div>
    
    </div>
  

    <button type='submit'>confirm</button>

    </form>


    </div>
    </div>

  )
}

export default App

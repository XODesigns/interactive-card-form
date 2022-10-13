import {useRef, useState, useEffect} from 'react'
import { Formik, Form, Field, useFormikContext, useFormik} from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'




function App() {


const {values,
  handleSubmit,
  touched,
  errors,
  handleChange,
} = useFormik({
  initialValues: {
    holderName: '',
    cardNumber: '',
    month:'',
    year: '',
    cvc:'',
  },

creditCardSchema: Yup.object().shape({
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

  onSubmit(values) {
    console.log(values)
  }
})



const numberPlaceholder = "0000 0000 0000 0000"



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

    <p className='card-number'>{values.cardNumber ? values.cardNumber : numberPlaceholder}</p>
    
    <div  className='name-date'>
    <p className='card-holder'>{values.holderName ? values.holderName  : "Jane Appleseed"}</p>
    <p className='exp-date'>{values.month ? values.month : "00" } / {values.year ? values.year : "00" }</p>
    </div>

    </div>
    
    </div>

    <div className='card-two'>
    <img src={Back} alt="card back"/>
    <p className='card-cvc'>{values.cvc  ? values.cvc  : "000"}</p>
    </div>

    </div>

 



   
    <form className='form' onSubmit={handleSubmit} noValidate>

    <label>Cardholder name</label>
    <input className={touched.holderName && !errors.holderName ? "error" : "name"} name="holderName" type="text" placeholder='e.g. Jane Appleseed' value={values.holderName} onChange={handleChange} />
 {!errors.holderName && touched.holderName ? (<div className='error-message'>{errors.holderName}</div>) : null }

    <label>Card number</label>

    <input className={errors.cardNumber ? "error" :"name"} name="cardNumber" type="tel" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={values.cardNumber} onChange={handleChange} />
    {errors.cardNumber && touched.cardNumber ? (<div className='error-message'>{errors.cardNumber}</div>) : null }

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <input className={errors.month ? "error" :"name"} name="month" type="number" onChange={handleChange} placeholder='MM' value={values.month} />
    <input className={errors.year ? "error" :"name"} name="year" type="number" onChange={handleChange} placeholder='YY' value={values.year} />
    </div>
    {errors.month || errors.year  ? (<div className='error-message'>{errors.month}</div>) : null }
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input className={errors.cvc ? "error" :"name"} type="number" onChange={handleChange} placeholder='e.g. 123' value={values.cvc} />
    {errors.cvc  ? (<div className='error-message'>{errors.cvc}</div>) : null }
    </div>
    
    </div>
  

    <button type='submit'>confirm</button>

    </form>


    </div>
    </div>

  )
}

export default App

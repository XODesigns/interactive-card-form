import {useRef, useState, useEffect} from 'react'
import { Formik, Form, Field, useFormikContext, useFormik} from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'
import Thanks from './images/icon-complete.svg'

// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };


function App() {

  const creditCardSchema = Yup.object().shape({
    holderName: Yup.string()
    .matches(/^[A-Za-z]*$/, 'Name should contain only letters')
    .required('Name is required'),
    cardNumber: Yup.string()
    .required('Card number required')
    .matches(/^[0-9]*$/, 'Wrong format, numbers only'),
    month: Yup.number()
    .min(1)
    .max(12)
    .required(`Can't be blank`),
    year: Yup.number()
    .positive()
    .required(`Can't be blank`),
    cvc: Yup.number()
    .positive()
    .required(`Can't be blank`)
  })

const {values,
  handleSubmit,
  touched,
  errors,
  handleChange,
  isSubmitting,
    handleBlur,
} = useFormik({
  initialValues: {
    holderName: '',
    cardNumber: '',
    month:'',
    year: '',
    cvc:'',
  },

validationSchema: creditCardSchema,

// onSubmit,
onSubmit(){}
})

console.log(errors)

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

 

    {!isSubmitting ? (

   
    <form className='form' onSubmit={handleSubmit}>

    <label>Cardholder name</label>
    <input className={touched.holderName && errors.holderName ? "error" : "name"} name="holderName" type="text" placeholder='e.g. Jane Appleseed' value={values.holderName} onChange={handleChange} onBlur={handleBlur} />
 {errors.holderName && touched.holderName && <div className='error-message'>{errors.holderName}</div>}

    <label>Card number</label>

    <input className={errors.cardNumber && touched.cardNumber ? "error" :"name"} name="cardNumber" type="tel" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={values.cardNumber} onChange={handleChange} />
    {errors.cardNumber && touched.cardNumber ? (<div className='error-message'>{errors.cardNumber}</div>) : null }

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <input className={errors.month && touched.month ? "error" :"name"} name="month" type="tel" minLength={2} maxLength={2} onChange={handleChange} placeholder='MM' value={values.month} />
    <input className={errors.year && touched.year ? "error" :"name"} name="year"  type="tel" minLength={2} maxLength={2} onChange={handleChange} placeholder='YY' value={values.year} />
    </div>
    {(errors.month && touched.month) || (errors.year && touched.year) ? (<div className='error-message'>{errors.month}</div>) : null }
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <input className={errors.cvc && touched.cvc ? "error" :"name"} name="cvc" type="tel" minLength={3} maxLength={3} onChange={handleChange} placeholder='e.g. 123' value={values.cvc} />
    {errors.cvc && touched.cvc && (<div className='error-message'>{errors.cvc}</div>)}
    </div>
    
    </div>
  

    <button type='submit' >confirm</button>

    </form>
    ) : (<div className="form">
    <div className='inner-data'>
    <img className='complete' src={Thanks} alt="Complete"/>
    <h1 className='thanks'>Thank You</h1>
    <p className='thanks-message'>We've added your card details</p>
    <button type="submit">Continue</button>
    </div>
    </div>)}

    </div>
    </div>

  )
}

export default App

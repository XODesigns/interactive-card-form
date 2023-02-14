import {useRef, useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import Front from './images/bg-card-front.png'
import Back from './images/bg-card-back.png'
import Form from './Components/Form'
import Thanks from './images/icon-complete.svg'
// import Success from './Success'

// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };


function App() {

  const creditCardSchema = Yup.object().shape({
    holderName: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Name should contain only letters')
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

const handleForm = () =>{
  
}

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

   <Form  handleSubmit={handleSubmit} errors={errors} touched={touched} handleBlur={handleBlur} values={values} handleChange={handleChange} />
   
    ) : ( <form className="form">
    <div className='inner-data'>
    <img className='complete' src={Thanks} alt="Complete"/>
    <h1 className='thanks'>Thank You</h1>
    <p className='thanks-message'>We've added your card details</p>
    <button type="submit" onClick={handleForm} >Continue</button>
    </div>
    </form>)}

    </div>
    </div>

  )
}

export default App

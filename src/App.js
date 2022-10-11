import {useRef, useState, useEffect} from 'react'
// import {useForm} from 'react-hook-form'
import { Formik, Form, Field, useFormikContext} from 'formik'
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
const ref = useRef(null)


const CreditCardSchema = Yup.object().shape({
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
})



// function handleName(event){
//   const newValue = event.target.value
// setName(newValue)
// }

// function handleNumber(event){
//   const newValue = event.target.value
//   .replace(/\s|[^a-z0-9]+/g, "")
//         .match(/.{1,4}/g)
//         ?.join(" ") ?? "";
// setCardNumber(newValue)
// }

// function handleMonth(event){

// const min = 1
// const max = 12

// const newMonth = Math.max(min, Math.min(max, Number(event.target.value)))

// // const limit = 2
// // .replace(/\s|[^0-9]+/g, "")
// //         .match(/.{1,2}/g)
// //         ?.join(" ") ?? "";
// setMonth(newMonth)
// }

// function handleYear(event){
// // const newYear = event.target.value
// //     const limit = 2;

// // setYear(newYear.slice(0, limit))
// const min = 1
// const max = 99

// const newYear = Math.max(min, Math.min(max, Number(event.target.value)))
// setYear(newYear)

// }


// function handleCvc(event){
//   const min = 1
//   const max = 999
  
//   const newCvc= Math.max(min, Math.min(max, Number(event.target.value)))
//   setCvc(newCvc)

// // const newCvc = event.target.value
// //   const limit = 3;

// // setCvc(newCvc.slice(0, limit))
// }

//Dynamic number split, so the numbers can be updated correctly.
const numberPlaceholder = "0000 0000 0000 0000"
// const numberArr = []
// numberArr.push(newNumber)
// console.log(newNumber)

const FormObserver  = () => {
  const { values } = useFormikContext();
  useEffect(() => {
    console.log("FormObserver::values", values);
  }, [values]);
  return null;
};



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

    <Formik 
    innerRef={ref}
    initialValues={{
      holderName: '',
      cardNumber: '',
      month:'',
      year: '',
      cvc:'',
    }}
    validationSchema={CreditCardSchema}
     validateOnChange={false}
  validateOnBlur={false}
    onSubmit={() => {}}
    >

    {({ errors, touched, handleChange, values, handleSubmit}) => (

   
    <Form className='form' onSubmit={handleSubmit}>
    <FormObserver />

    <label>Cardholder name</label>
    <Field className={errors.holderName ? "error" : "name"} name="holderName" type="text" placeholder='e.g. Jane Appleseed' value={values.holderName} onChange={handleChange}  />
    {errors.holderName && touched.holderName ? (<div className='error-message'>{errors.holderName}</div>) : null }

    <label>Card number</label>

    <Field className={errors.cardNumber ? "error" :"name"} name="cardNumber" type="tel" maxLength="19" placeholder='e.g. 1234 5678 9123 0000' value={values.cardNumber} onChange={handleChange} />
    {errors.cardNumber && touched.cardNumber ? (<div className='error-message'>{errors.cardNumber}</div>) : null }

    <div className='details'>

    <div className='date'>
    <label>Exp. date (MM/YY)</label>

    <div className='date-input'>
    {/* <input type="tel" onChange={handleMonth} maxLength="2" placeholder='MM'></input> */}
     <Field className={errors.month ? "error" :"name"} name="month" type="number" onChange={handleChange} placeholder='MM' value={month} />
    <Field className={errors.year ? "error" :"name"} name="year" type="number" onChange={handleChange} placeholder='YY' value={year} />
    </div>
    {errors.month || errors.year  ? (<div className='error-message'>{errors.month}</div>) : null }
  
    </div>
    
    <div className='cvc'>
    <label>Cvc</label>
    <Field className={errors.cvc ? "error" :"name"} type="number" onChange={handleChange} placeholder='e.g. 123' value={cvc} />
    {errors.cvc  ? (<div className='error-message'>{errors.cvc}</div>) : null }
    </div>
    
    </div>
  

    <button type='submit'>confirm</button>

    </Form>
    )}
    </Formik>

    </div>
    </div>

  )
}

export default App

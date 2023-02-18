import React from 'react'

function Form({handleSubmit, errors, touched, handleChange, values, handleBlur}) {


  return (
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
    <input className={errors.cvc && touched.cvc ? "error" :"name cvc-input"} name="cvc" type="tel" minLength={3} maxLength={3} onChange={handleChange} placeholder='e.g. 123' value={values.cvc} />
    {errors.cvc && touched.cvc && (<div className='error-message'>{errors.cvc}</div>)}
    </div>
    
    </div>
  

    <button type='submit' >confirm</button>

    </form>
  )
}

export default Form
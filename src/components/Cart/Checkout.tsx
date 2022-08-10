import React, { useRef, useState } from 'react'

import classes from './Checkout.module.css'
import { UserData } from './types'

const isEmpty = (value: string) => value.trim().length === 0
const isFiveChars = (value: string) => value.trim().length === 5

type Props = {
  onConfirm: (userData: UserData) => void
  onCancel: (e: React.MouseEvent) => void
}

const Checkout = ({ onConfirm, onCancel }: Props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })
  const nameInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>
  const streetInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>
  const postalInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>
  const cityInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>

  const confirmHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    })

    const formValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid

    if (!formValid) {
      return
    }

    // submit cart data
    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    })
  }

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please entered a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please entered a valid street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please entered a valid postal code (5 characters long)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please entered a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout

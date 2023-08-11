import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import React from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formValidity, setFromValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const nameInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityisValid = !isEmpty(enteredCity);
    const enteredStreetisValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFromValidity({
      name: enteredNameIsValid,
      street: enteredStreetisValid,
      city: enteredCityisValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid = enteredNameIsValid && enteredCityisValid && enteredStreetisValid && enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameInvalidClass = `${classes.control} ${formValidity.name ? "" : classes.invalid}`;
  const cityInvalidClass = `${classes.control} ${formValidity.city ? "" : classes.invalid}`;
  const streetInvalidClass = `${classes.control} ${formValidity.street ? "" : classes.invalid}`;
  const postalCodeInvalidClass = `${classes.control} ${formValidity.postalCode ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInvalidClass}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formValidity.name && <p>Please enter valid value.</p>}
      </div>
      <div className={streetInvalidClass}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formValidity.street && <p>Please enter valid value.</p>}
      </div>
      <div className={postalCodeInvalidClass}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formValidity.postalCode && <p>Please enter valid value of 6 characters.</p>}
      </div>
      <div className={cityInvalidClass}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formValidity.city && <p>Please enter valid value.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

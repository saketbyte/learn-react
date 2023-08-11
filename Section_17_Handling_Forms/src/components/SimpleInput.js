import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const nameInputRef = useRef(); //alternative to access input.

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  const emptyValidater = (val) => {
    if (val.trim() === "") {
      setEnteredNameIsValid(false);

      return;
    }
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    emptyValidater(enteredName);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    emptyValidater(enteredName);

    setEnteredNameIsValid(true);
    console.log(enteredName);
    // console.log(nameInputRef.current.value); //alternative to access input
    // nameInputRef.current.value = "";  <<-- Do not use this to manipulate the DOM.
  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input onBlur={nameInputBlurHandler} type="text" id="name" onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className="error-text">Please dont leave it empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

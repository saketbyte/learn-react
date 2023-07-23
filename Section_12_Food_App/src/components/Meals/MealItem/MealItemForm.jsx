import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

// useState causes re-render, useRef does not.

// The common between them is, both useState and useRef can remember their data after re-renders. So if your variable is something that decides a view layer render, go with useState. Else use useRef

// https://blog.logrocket.com/usestate-vs-useref/#:~:text=Our%20goal%20is%20to%20define%20a%20ref%20called

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          default: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
  );
};

export default MealItemForm;

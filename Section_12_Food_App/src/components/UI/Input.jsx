import classes from "./Input.module.css";
import React from "react";

// Wrapping the component in forward Ref
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
      {/* in above line we can skip adding id because the spread operator does that. */}
    </div>
  );
});
export default Input;

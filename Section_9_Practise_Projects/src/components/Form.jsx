import classes from "./Form.module.css";

import { useState } from "react";

const Form = (props) => {
  const [currSaving, setCurrSaving] = useState(0);
  const [yearlySaving, setyearlySaving] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "current-savings") setCurrSaving(value);
    else if (identifier === "yearly-saving") setyearlySaving(value);
    else if (identifier === "rate-of-interest") setRate(value);
    else if (identifier === "duration") setDuration(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      "current-savings": currSaving,
      "yearly-contribution": yearlySaving,
      "expected-return": rate,
      duration: duration,
    };

    resetChangeHandler();

    props.onCalculate(investmentData);
    // console.log(investmentData);
  };

  const resetChangeHandler = () => {
    setCurrSaving(0);
    setDuration(0);
    setRate(0);
    setyearlySaving(0);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler("current-savings", event.target.value)} type="number" id="current-savings" value={currSaving} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => inputChangeHandler("yearly-saving", event.target.value)} type="number" id="yearly-contribution" value={yearlySaving} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input onChange={(event) => inputChangeHandler("rate-of-interest", event.target.value)} type="number" id="expected-return" value={rate} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler("duration", event.target.value)} type="number" id="duration" value={duration} />
        </p>
      </div>

      <div>
        <p className="actions">
          <button onClick={resetChangeHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </div>
    </form>
  );
};

export default Form;

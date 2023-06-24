import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [myError, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // alert("Please give valid input");
      setError({ title: "Empty mandatory field.", message: "Input cannot be empty!" });
      return;
    }
    if (Number(enteredAge) < 1) {
      // alert("");
      setError({ title: "Invalid age.", message: "Age less than 1 not valid." });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    // console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorClickHandler = () => {
    setError(null);
  };

  return (
    <div>
      {myError && <ErrorModal removeModal={errorClickHandler} title={myError.title} message={myError.message} />}
      <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredUsername} id="username" type="text" onChange={usernameChangeHandler} />

          <label htmlFor="age">Age (years)</label>
          <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

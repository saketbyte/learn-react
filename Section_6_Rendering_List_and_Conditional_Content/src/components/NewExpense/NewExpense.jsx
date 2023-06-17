import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // OnSaveExpenseData is called in ExpenseForm file

  //  This function is simple, it is just adding an id or key variable to the data accepted in the ExpenseForm.jsx and then passes it to the file where onAddExpense function is passed ie in root component in this case.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      {/* Here we only made the framework of this function, we never called the funtion. In case of in-built components which detect submission, or button change etc the back end of above line that is to call the function as well, is implemented on its own.
      But since it is manually being implemented here, we will do the backend manually as well. */}
    </div>
  );
};

export default NewExpense;

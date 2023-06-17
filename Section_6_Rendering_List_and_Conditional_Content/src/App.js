import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Initial Dummy Data stored in the variable called DUMMY EXPENSES
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// Root component Function
const App = () => {
  // React State first use
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Handles any new expense which are added to the DUMMY_EXPENSES LIST
  // To find the source of this, search onAddExpense
  const addExpenseHandler = (dataArrived) => {
    setExpenses((prevData) => {
      return [dataArrived, ...prevData];
    });
    // console.log("data Arrived in App.js");
  };

  return (
    <div>
      {/* The first component for adding new expense as our form */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/* The second component for showing 1. Chart and 2. List */}
      <Expenses items={expenses} />
      {/* Passing the list of expenses for rendering. */}
    </div>
  );
};

export default App;

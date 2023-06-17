import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

//  Here in the below function, when we use the map function, we need to add a key in that custom element or list element, otherwise it does not render , and throws the error - Each child in a list should have a unique key prop.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here is from Expenses ${newYear}`);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter showYearHandler={addFilterByYear} />
      {props.items.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

export default Expenses;

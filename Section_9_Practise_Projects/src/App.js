import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import { useState } from "react";

const App = () => {
  const yearlyData = [];
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  if (userInput) {
    // per-year results

    console.log(userInput);

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <Form onCalculate={calculateHandler}></Form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!userInput && <p style={{ textAlign: "center" }}>No investment data received.</p>}
      {userInput && <Table data={yearlyData} initialInvestment={userInput["current-savings"]} />}
    </div>
  );
};

export default App;

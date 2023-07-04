import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let callIndex = -1;
const stateValues = [];

const useState = (initialValue) => {
  callIndex++;

  const currentCallIndex = Number(callIndex);
  console.log("here", currentCallIndex);
  console.log("thhhere", callIndex);

  if (stateValues[currentCallIndex] === undefined) stateValues[currentCallIndex] = initialValue;

  const setValue = (newValue) => {
    stateValues[currentCallIndex] = newValue;
    renderApp();
  };

  return [stateValues[currentCallIndex], setValue];
};

const App = () => {
  const [countA, setCountA] = useState(1);
  const [countB, setCountB] = useState(-1);

  return (
    <div>
      <div>
        <h1>Count A: {countA}</h1>
        <button onClick={() => setCountA(countA - 1)}>Subtract</button>
        <button onClick={() => setCountA(countA + 1)}>Add</button>
      </div>
      <div>
        <h1>Count B: {countB}</h1>
        <button onClick={() => setCountB(countB - 1)}>Subtract</button>
        <button onClick={() => setCountB(countB + 1)}>Add</button>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  callIndex = -1;
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
renderApp();

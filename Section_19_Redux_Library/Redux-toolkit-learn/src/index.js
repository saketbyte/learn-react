import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // remember this.
import store from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // this wants a value as prop for the redux store that we create.
  <Provider store={store}>
    <App />
  </Provider>
);

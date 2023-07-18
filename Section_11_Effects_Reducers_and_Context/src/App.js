import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  // We have lifted this state because we use this state everywhere in the app.
  // 1. We sent it to the MainHeader component which then sends it to navigation component which then sends it to the NAV and then to the ul list. So this PROP DRILLING causes issue in any large app, that is solved by Context API. behind the scenes component wide state storage.
  // 2. Buttons use log in or log out handlers which update the state based on click.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // To access the data which was stored in cache with the name isLoggedIn.
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); // Runs only when the dependencies change.

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // to store something in cache for the time being.
    localStorage.setItem("isLoggedIn", "1"); // a token and an identifier string.
    setIsLoggedIn(true); // state update to re-render
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false); // runs when log out changes the state variable.
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

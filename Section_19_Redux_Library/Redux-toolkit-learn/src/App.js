import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import store from "./store";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
// import { logActions } from "../store/index.js";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment store={store}>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;

import { Provider } from "react-redux";
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
    <Provider store={store}>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}

      <Counter />
    </Provider>
  );
}

export default App;

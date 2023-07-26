import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // useState to manage rendering of cart.
  const [cartIsShown, setCartIsShown] = useState(false);
  // The following two functions toggle the state of useState.
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  // JSX returned while wrapped inside the Provider component.
  // Note that you will see that no prop is being explicitly passed to the CartProvider component. However, React behind the scenes, passes a prop called Children to it.
  //  See about it in the CartProvider.js file
  return (
    <CartProvider>
      {/* Conditional rendering of Cart based on state value which is changed by these functions when the button inthe cart component is pressed. */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;

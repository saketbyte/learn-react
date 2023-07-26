import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  // acquiring the context
  const cartCtx = useContext(CartContext);

  // total amount upto 2 decimal places
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // stores boolean value if the cart is empty or not, later used to conditionally render the order button.
  const hasItems = cartCtx.items.length > 0;

  // a function definition local to this file to call removeItem function defined in cart-context file
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Extending the items array by adding this item alongside it's quantity as one by default.
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* This <CartItem component is not rendered as is in the DOM directly from the file, instead the JSX is stored in a variable called cartItems first, and then that variable is rendered hence we do not see this item in the component tree. */},
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // I dont understand the bind function implementation here.
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

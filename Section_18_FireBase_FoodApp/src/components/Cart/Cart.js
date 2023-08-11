import { useContext, useState } from "react";
import React from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSumbit, setDidSubmit] = useState(false);

  const totalAmount = `$${Number(cartCtx.totalAmount).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = (userData) => {
    // we get the cart data from the cartctx object.

    const dataHandler = async () => {
      setIsSubmitting(true);
      const response = await fetch("https://project-one-e65ae-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json", {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      });
      const responseData = await response.json();
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.cartCleaner();
      console.log(responseData);
    };
    dataHandler();
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const isSubmittingModalContent = <p>Ordering data, and getting the chef on work...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p> Chef has started cooking your order!</p>;
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSumbit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSumbit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;

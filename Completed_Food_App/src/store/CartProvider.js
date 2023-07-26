import { useReducer } from "react";

import CartContext from "./cart-context";

// The initial value with which the CartState Hook object is initialised with.
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Later this will look like this:
// const cartContext = {
//   items: cartState.items,
//   totalAmount: cartState.totalAmount,
//   amount: existingCartItem.amount + action.item.amount,
//   addItem: addItemToCartHandler,
//   removeItem: removeItemFromCartHandler,
// };

const cartReducer = (state, action) => {
  //  If the user clicks on add to cart button
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; // simple math
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); //  finding the index of an item which if exists in array returns the index else returns null.
    const existingCartItem = state.items[existingCartItemIndex]; // picking up the item if it already exists
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, // increasing the quantity of the item by the amount entered by user.
      };
      updatedItems = [...state.items]; // copying old array in new array
      updatedItems[existingCartItemIndex] = updatedItem; // adding new item at specified index
    } else {
      updatedItems = state.items.concat(action.item); // if it does not exist just copy things in a new array with newly added item.
    }
    //  Return new state.
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // If the user presses a button to remove an item.

  if (action.type === "REMOVE") {
    // Finding the index at which the item to be removed is present.
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex]; // picking the item to be removed (pointing at it).
    const updatedTotalAmount = state.totalAmount - existingItem.price; // reduce the total amount
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id); // remove the item by a filter that adds anything but the given id.
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; // reduce the item count(amount here) by 1 in such case.
      updatedItems = [...state.items]; //copy in new array
      updatedItems[existingCartItemIndex] = updatedItem; // add the item's new data(changed price and quantity) at the right index to replace previous data.
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

/* 
In the example of the Context API in React provided earlier, the CartProvider component receives a single JS object as {children}. This prop.children is a special prop in React and represents the child elements nested inside the AppContextProvider component.

The children prop is passed automatically by React and represents the child components that are wrapped within the CartProvider. The children prop allows you to create a wrapper component around other components while preserving their hierarchy.

*/
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;

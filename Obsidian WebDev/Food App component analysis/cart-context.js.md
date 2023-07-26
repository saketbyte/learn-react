---
tag: foodapp
---
1. **Component Name**: Not Applicable
2. **Crucial Concepts in the file**:
	This is a context file which creates a context, that is supposed to contain the information regarding the data or state or functions which are required across the component wide functionality.

* The context creation process is as follows
	1. Make a cart-context.js file and define the structure of context that you wanna use everywhere as a JS object as an argument of createContext function of react.

		```
		import React from 'react';
		const CartContext = React.createContext({
		  items: [],
		  totalAmount: 0,
		  amount: 0,
		  addItem: (item) => {},
		  removeItem: (id) => {}
		});
		export default CartContext;
		```

	 2. Then in the CartProvider File, define all the functions and all the hooks, data, state that you mentioned in above JS object of context which you have to provide to other components.
	    ```
	    CartProvider.jsx
	    

	    // This props that the CartProvider is receiving is not explicitly given in the app.js file. It is done behind the scenes by 
	    react on its own.
	    
	    const CartProvider = (props) => {
	    
		// defining all the other functions here
	    const addItemToCartHandler = (item) => {...}
	    const removeItemFromCartHandler = (id) => {...}
	    
		const cartContext = {
			items: cartState.items, // define it above
			totalAmount: cartState.totalAmount,
			addItem: addItemToCartHandler,
			removeItem: removeItemFromCartHandler,
		  };
		    
		return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
		}
		```
	3. Now use that context object that you created in cart-context.js file by importing
			a. cart-context.js
			b. useContextHook

		```
		import { useContext } from 'react';
				import CartContext from '../../store/cart-context';
				
				const cartCtx = useContext(CartContext);
				.....
				{cartCtx.items.map((item) => (
		        <CartItem
		          key={item.id}
		          name={item.name}
		          amount={item.amount}
		          price={item.price}
		          onRemove={cartItemRemoveHandler.bind(null, item.id)}
		          onAdd={cartItemAddHandler.bind(null, item)}
		        />))}
		```

	

	



	



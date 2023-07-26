---
tag: foodapp
---
1. **Component Name**: App.js
   
2. **Component Purpose**: 
   1. Renders all other components.
   2. Manges Food Cart show/hide interactivity
      
3. **Props being passed to it:** None

4. **States created in it:** 
	a. useState: [CartIsShown, setCartIsShown]

5. **Functions and their usage**: 
   1. showCartHandler: Sets the CartIsShown state to true to conditionally render the cart.
   2. hideCartHandler:  Sets the CartIsShown state to false to conditionally hide the cart.
   The above two functions are passed as props to the <Cart/> Component via onClose, onOpen names which I guess would be used in Modal as well.

6. **Child Components**:
   * [[CartProvider]]
   
7. **Crucial Concepts in the file**:
	* CartProvider component of context wraps the entire app.js file ie wraps everything being rendered through this file which is cart, header and meals component, so that it can allow us to use the data mentioned in the context in them.
	* The process is explained in **[cart-context.md note](obsidian://open?vault=Obsidian%20WebDev&file=Food%20App%20component%20analysis%2Fcart-context.js)**
	




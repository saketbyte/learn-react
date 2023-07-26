---
tag: foodapp
---
1. **Component Name**: CartProvider 
2. **Component Purpose**: 
   1. Provides function definition for cart add or remove items and JS object structure of context of cart ***to be used everywhere through context*** with the help of useReducer hook.
   2. Inbuilt method to track changes in state, this component is the one which wraps around all other elements which require state changes in context state management.

3. **Props being passed to it:**
	* *HIDDEN PROP: {children}*
4. **States created in it:**
	* `const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);`
5. **Functions and their usage**:
	1. cartReducer(state,action) => {... return updatedCartState}
	   The default and required reducer function by the useReduce hook. It basically is invoked by a dispatch function which receives the latest state and a string or other format KEY which calls upon specific reduction from the reducer function like ADD or REMOVE here.
	
	2. addItemToCartHandler(item) => {calls dispatch function with type ADD}
	3. removeItemFromCartHandler(id) => {calls dispatch function with type REMOVE}

6. **Child Components**:
   * [[Header]]
   * [[Meals]]
   * [[Cart]]
   
   
7. **Crucial Concepts in the file**:
	1. In the example of the Context API in React provided earlier, the CartProvider component receives a single JS object as {children}. This prop.children is a special prop in React and represents the child elements nested inside the AppContextProvider component. The children prop is passed automatically by React and represents the child components that are wrapped within the CartProvider. The children prop allows you to create a wrapper component around other components while preserving their hierarchy.
	


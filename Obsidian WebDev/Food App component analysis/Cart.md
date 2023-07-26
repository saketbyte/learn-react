---
tag: foodapp
---
1. **Component Name**: Cart

2. **Component Purpose**: Renders Cart modal and provides JSX code for the items added in the cart through a variable instead of direct render.

3. **Props being passed to it:**
   1. ***onClose = hideCartHandler*** -> The close function is being passed from the App.js file to the Cart.js file which then passes it to Modal and Overlay to close the cart if clicked anywhere else or on close button.  [Prop drilling]
4. **States created in it:**
   ```
   const cartCtx = useContext(CartContext); 
   ```

5. **Functions and their usage**:
   1. cartItemRemoveHandler
   2. cartItemAddHandler

6. **Child Components**:
   * [[Modal]]
   
7. **Crucial Concepts in the file**:
	1. The CartItem component is rendered here but not directly. This component shows one item of the cart in the pop up of cart.
	   This <CartItem/> component is not rendered as is in the DOM directly from the file, instead the JSX is stored in a variable called cartItems first, and then that variable is rendered hence we do not see this item in the component tree.
	2. **MODAL and Backdrop --> PORTALS**
	   Here the JSX code returned by this is the Modal component mainly. I will describe these concepts in the Modal.js file itself.
	3. **Bind Function**
	   [Difference between call/apply and bind method.](https://youtu.be/75W8UPQ5l7k)
	   call -> used to invoke a function directly and attach the reference of this variable to something else. The first arg is the reference object to which it should attach to, and the others are comma separated values as mentioned in the function argument.
	   apply -> It is same but difference is the method of passing arguments. In call the arguments are passed as comma separated values while here it takes an array.
	   bind -> This method returns a function and not executes it, the function returned can be used later.
	   ![[Pasted image 20230726102212.png]]
	   
	   


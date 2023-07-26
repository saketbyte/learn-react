---
tag: foodapp
---
1. **Component Name**: HeaderCartButton

2. **Component Purpose**: Renders a Button which contains icon, YourCart, number of items pushed in cart.

3. **Props being passed to it:** (manual) onClick = onShowCart function, coming from App.js via Header.js [Prop Drilled through +1 extra component] 

4. **States created in it:**
   ```
   // Used for animation effect 
   const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
	// used to access items to calculate total items. 
   const cartCtx = useContext(CartContext);
   ```

5. **Functions and their usage**:
   None, only some animation code in useEffect's argument anonymous function.

6. **Child Components**:
   * [[CartIcon]]

7. **Crucial Concepts in the file**:



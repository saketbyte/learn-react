1. **Component Name**: MealItemForm

2. **Component Purpose**: Provides the add more dishes button in the menu.

3. **Props being passed to it:** item id and a function called addToCardHandler from MealItem file which uses context to refer it here.
   This also uses useState to render warning if absurd quantity added.

4. **States created in it:** `const [amountIsValid, setAmountIsValid] = useState(true);`
  `const amountInputRef = useRef();`

5. **Functions and their usage**:


6. **Child Components**:
   
   
7. **Crucial Concepts in the file**: 
	1. **UseRef Hook** 
	   ###### Does Not Cause Re-renders

		If we tried to count how many times our application renders using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
		To avoid this, we can use the `useRef` Hook.
		This hook is used here to access the input element in DOM and then based on that it checks of the value of ordered quantity is between 1 and 5 or not.
		The hook is  attached to the ref of Input element.
		



---
tag: foodapp
---
1. **Component Name**: MealItem

2. **Component Purpose**: Render each meal item with add MealItemForm on the right hand side which has an input and add button.

3. **Props being passed to it:** key, id, name, description, price which are used to render the information in the Menu created.

4. **States created in it:** cartCtx hook

5. **Functions and their usage**: 
   addToCartHandler: This function is passed to the MealItemForm to add items to cart. It does so by storing the reference to the addItem function created in the context. 


6. **Child Components**:
    [[MealItemForm]]
   
7. **Crucial Concepts in the file**:

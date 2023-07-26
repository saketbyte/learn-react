---
tag: foodapp
---
1. **Component Name**: AvailableMeals

2. **Component Purpose**: 
	1. Stores our dummy data for now. 
	2. Wraps a card inside which also wraps MealItem component by storing a list of MealItem(in a variable like it was done with CartItems.) which also wraps MealItemForm.
   

3. **Props being passed to it:** None

4. **States created in it:** None

5. **Functions and their usage**: None


6. **Child Components**: 
   * [[Card]]
   
7. **Crucial Concepts in the file**: Nothing much see for yourself.


```
const DUMMY_MEALS = [... some data of JS objects ...]

const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map((meal) => (

    <MealItem

      key={meal.id}

      id={meal.id}

      name={meal.name}

      description={meal.description}

      price={meal.price}

    />

  ));

  

  return (

    <section className={classes.meals}>

      <Card>

        <ul>{mealsList}</ul>

      </Card>

    </section>

  );

};
```

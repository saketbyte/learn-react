---
tag: foodapp
---
1. **Component Name**: Card

2. **Component Purpose**: Wrapper element

3. **Props being passed to it:** 

4. **States created in it:**

5. **Functions and their usage**:


6. **Child Components**:
   [[MealItem]]
   
7. **Crucial Concepts in the file**: 
   **What is a children prop? How is it passed without explicitly mentioning in the brackets<> ?**
		**Children are Props**
		It is very clear from the examples that we have discussed in our previous section that react children is nothing but a default prop of react. We can also access the children by using props.children in a react application.
	1. App.jsx file
	
```
import React from "react";
import "./styles.css";
import Card from "./Card.jsx";

export default function App() {
  return (
    <div className="App">
      <Card>
        This is the content for the react children which can be accessed from
        the Card component (Card.jsx)
      </Card>
    </div>
  );
}

```

 2. Card.jsx file

```
import React from "react";
import "./styles.css";

export default function Card({ children }) {
//     here, we are extracting the children prop and using it in our component. All the content present in the <Card></Card> which is called from App.js is present inside the children prop
  return (
    <div className="paragraph">
      <p>{children}</p>
    </div>
  );
}

```


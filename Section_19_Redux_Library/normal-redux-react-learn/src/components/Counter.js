// import { Component } from "react";
// import { Connect } from "react-redux";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  // data extraction function passed to useSelector to retrieve specific value.
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showToggle); // we need this toggle for our conditional rendering, rest is handled by redux.
  // a listener is set automatically, so we do not need to add subscribe.
  const incrementHandler = () => {
    dispatch({ type: "increment", value: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement", value: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>{toggle && <button onClick={incrementHandler}>Increment</button>}</div>

      <div>{toggle && <button onClick={decrementHandler}>Decrement</button>}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// // this is like this: [counter()]() the counter() is one function call and then this call also makes a call because counter() itself is a high order function.

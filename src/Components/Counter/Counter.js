import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../Service/Actions/counterAction";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleReset = () => {
    dispatch(resetAction());
  };
  return (
    <div>
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

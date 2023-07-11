import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div className="text-center">
      <h3>Counter value: {count}</h3>
      <button type="button" className="btn btn-primary" style={{ margin: "0.25rem 0.125rem" }} onClick={increaseCount}>
        Increase
      </button>
      <button type="button" className="btn btn-danger" style={{ margin: "0.25rem 0.125rem" }} onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;

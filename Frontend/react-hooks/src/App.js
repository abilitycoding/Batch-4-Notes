import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  useEffect(() => {
    document.title = "Count: " + count + " " + count1;
  }, [count, count1]);

  return (
    <div className="Counter">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement1}>Increment 1</button>
      <p>Count: {count}</p>
      <p>Count: {count1}</p>
    </div>
  );
}

export default Counter;

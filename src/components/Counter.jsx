import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          if (counter == 0) return;
          decrement();
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;

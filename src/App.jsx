import { useState } from "react";

function App2() {
  // let count = 0;

  const [count, setCount] = useState(0);

  return (
    <>
      {/*  */}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          // count = count + 1;
          // console.log(count);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default App2;
